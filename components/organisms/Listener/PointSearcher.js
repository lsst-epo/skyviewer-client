import parameters from "./parameters";
import { linearMap, mapValueToHue, raDecDistance } from "./utilities";
import { env } from "@/env";

const apiToken = env.NEXT_PUBLIC_ASTRO_OBJECTS_API_TOKEN;

class PointSearcher {
  constructor(p, aladin) {
    this.p = p; // Store p5 instance
    this.aladin = aladin; // Store Aladin instance
    this.tree = null;
    this.ready = false; // Add ready flag
    this.radius_subset = 0.1; // Radius in degrees for finding the subset of points
    this.radius_neighbours = this.radius_subset / 2; // Radius for finding the nearest neighbours
    this.k_neighbours = 50; // Number of nearest neighbours to find in subset

    this.subsetPoints = []; // Subset of points within the radius
    this.subsetTree = null; // KDTree for the subset
    this.nearestNeighbours = []; // Array to store the nearest neighbours
    this.nearestPoint = undefined; // Object to store the nearest neighbour
    this.previousNearestNeighbourIDs = []; // Store IDs of previous nearest neighbours
    this.newNearestNeighbours = []; // Store new nearest neighbours

    // Animation properties
    this.animations = []; // Array to store active animations
    this.animationSpeed = 2; // Speed of animation expansion
    this.animationFadeSpeed = 10; // Speed of animation fade out
    this.maxAnimationSize = 100; // Maximum size of animation circles

    // Initialize the tree with points from parameters
    this.initialize();
  }

  async initialize() {
    await this.getPoints();
    this.ready = true;
  }

  shouldUpdatePoints() {
    // Make a center point for the first time
    if (!this.centerPoint) {
      this.centerPoint = parameters.currentRaDec;
      return;
    }
    // Calculate distance from center of our current point set
    const distanceFromCenter = raDecDistance(
      parameters.currentRaDec[0],
      parameters.currentRaDec[1],
      this.centerPoint[0],
      this.centerPoint[1]
    );

    // If we're approaching the edge of our query radius (within 20% of the radius)
    const radiusThreshold = parameters.queryRadius * 0.8;
    if (distanceFromCenter > radiusThreshold) {
      this.centerPoint = parameters.currentRaDec;
      this.getPoints();
    }
  }

  async getPoints() {
    parameters.queryRadius = parameters.queryFOVFactor * parameters.fovRadius;
    parameters.queryMag = linearMap(
      parameters.fovRadius,
      parameters.fovLimits.max,
      parameters.fovLimits.min,
      parameters.querygmagMin,
      parameters.querygmagMax,
      false
    );
    try {
      const query = `
        query GetRangeOfAstroObjects {
          getRangeOfAstroObjects(ra: ${parameters.currentRaDec[0]}, dec: ${parameters.currentRaDec[1]}, radius: ${parameters.queryRadius}, mag: ${parameters.queryMag}) {
            RAdeg
            DECdeg
            id
            gmag
            g_r
            flag
          }
        }
      `;

      const response = await fetch(
        "https://us-central1-skyviewer.cloudfunctions.net/astro-object-api",
        {
          method: "POST",
          headers: {
            Authorization: apiToken,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      const data = result.data.getRangeOfAstroObjects;

      // Handle case where no data is returned
      if (!data) {
        this.tree = new KDTree([]);
        return;
      }

      const formattedPoints = data.map((point) => ({
        point: [point.RAdeg, point.DECdeg],
        id: point.id,
        gmag: point.gmag,
        gRColor: point.g_r,
        flag: point.flag,
      }));
      this.tree = new KDTree(formattedPoints);
    } catch (error) {
      console.error("Error fetching points:", error);
      throw error; // Re-throw the error to handle it at a higher level
    }
  }

  async makeSubset(targetPoint, radius = this.radius_subset) {
    if (!this.ready) {
      await this.initialize();
    }
    this.radius_subset = radius;
    this.subsetPoints = this.tree.range(targetPoint, radius);
    this.subsetTree = new KDTree(this.subsetPoints);
  }

  async findNeighbours(targetPoint, radius = this.radius_neighbours) {
    if (!this.ready) {
      await this.initialize();
    }
    this.radius_neighbours = radius;

    // Check if subsetTree exists, if not create it
    if (!this.subsetTree) {
      await this.makeSubset(targetPoint, radius);
    }

    // If still no subsetTree after trying to create it, return empty results
    if (!this.subsetTree) {
      this.nearestNeighbours = [];
      this.newNearestNeighbours = [];
      this.previousNearestNeighbourIDs = [];
      this.nearestPoint = undefined;
      return;
    }

    // Find nearest neighbours using the KDTree
    this.nearestNeighbours = this.subsetTree.kNearest(
      targetPoint,
      this.k_neighbours,
      radius
    );

    // Get the IDs of the current nearest neighbours
    const currentNearestNeighbourIDs = this.nearestNeighbours.map(
      (point) => point.id
    );

    // Find new nearest neighbours (present in current but not in previous)
    this.newNearestNeighbours = this.nearestNeighbours.filter(
      (neighbour) => !this.previousNearestNeighbourIDs.includes(neighbour.id)
    );
    // Add animations for new nearest neighbours
    if (this.newNearestNeighbours && this.newNearestNeighbours.length > 0) {
      for (const neighbour of this.newNearestNeighbours) {
        this.addAnimation(neighbour);
      }
    }

    // Update the previous nearest neighbours
    this.previousNearestNeighbourIDs = currentNearestNeighbourIDs;

    // Update the nearest point
    if (this.nearestNeighbours.length > 0) {
      this.nearestPoint = this.nearestNeighbours[0];
    } else {
      this.nearestPoint = undefined;
    }
  }

  // Add a new animation for a point
  addAnimation(neighbour) {
    // Calculate color based on magnitude and color index
    const magnitude = neighbour.gmag;
    const colorIndex = neighbour.gRColor;

    // Map magnitude to brightness (brighter stars = higher brightness)
    const brightness = 75;

    // Map color index to hue (bluer = lower hue, redder = higher hue)
    const hue = mapValueToHue(
      colorIndex,
      parameters.minGRColour,
      parameters.maxGRColour
    );

    this.animations.push({
      x: neighbour.point[0],
      y: neighbour.point[1],
      size: 0, // Initial size
      opacity: 255, // Initial opacity
      hue: hue,
      brightness: brightness,
      saturation: 0,
    });
  }

  // Update and draw all active animations
  updateAndDrawAnimations() {
    this.p.noFill();
    for (let i = this.animations.length - 1; i >= 0; i--) {
      const anim = this.animations[i];

      // Convert RA/Dec to canvas coordinates
      const canvasCoords = this.aladin.world2pix(anim.x, anim.y);

      // Draw the circle with HSB color
      this.p.colorMode(this.p.HSB);
      this.p.stroke(anim.hue, anim.saturation, anim.brightness, anim.opacity);
      this.p.ellipse(canvasCoords[0], canvasCoords[1], anim.size);

      // Update the animation state
      anim.size += this.animationSpeed; // Increase size
      anim.opacity -= this.animationFadeSpeed; // Decrease opacity

      // Remove the animation if it's complete
      if (anim.opacity <= 0 || anim.size >= this.maxAnimationSize) {
        this.animations.splice(i, 1); // Remove this animation
      }
    }
    // DELETE BELOW //////////////////////
    // Draw nearest neighbours
    this.p.colorMode(this.p.RGB); // Ensure RGB mode for these points
    this.p.fill(255, 0, 0); // Red color for nearest neighbours
    this.p.noStroke(); // No outline for these ellipses
    for (const neighbour of this.nearestNeighbours) {
      if (neighbour && neighbour.point) {
        const canvasCoords = this.aladin.world2pix(
          neighbour.point[0],
          neighbour.point[1]
        );
        if (canvasCoords) {
          // Ensure coordinates are valid
          this.p.ellipse(canvasCoords[0], canvasCoords[1], 5, 5); // Draw a 5x5 ellipse
        }
      }
    }

    // Draw subset points in blue
    this.p.fill(0, 0, 255); // Blue color for subset points
    for (const point of this.subsetPoints) {
      if (point && point.point) {
        const canvasCoords = this.aladin.world2pix(
          point.point[0],
          point.point[1]
        );
        if (canvasCoords) {
          // Ensure coordinates are valid
          this.p.ellipse(canvasCoords[0], canvasCoords[1], 3, 3); // Draw a slightly smaller 3x3 ellipse
        }
      }
    }

    // Draw nearest neighbours count
    this.p.fill(255); // White text
    this.p.textSize(16);
    this.p.text(`Nearest Neighbours: ${this.nearestNeighbours.length}`, 20, 30);
    this.p.text(
      `New Nearest Neighbours: ${this.newNearestNeighbours.length}`,
      20,
      50
    );
    this.p.text(`Subset Points: ${this.subsetPoints.length}`, 20, 70);
    // DELETE ABOVE //////////////////////
    // Reset color mode to RGB
    this.p.colorMode(this.p.RGB);
  }

  updateFOVAndSubset() {
    // Calculate FOV radius from the current FOV
    const fovRadius = Math.sqrt(
      Math.pow(parameters.fov[0] / 2, 2) + Math.pow(parameters.fov[1] / 2, 2)
    );

    // Update the parameters FOV radius
    parameters.fovRadius = fovRadius;

    // Use current RA/Dec from parameters and update the subset
    this.makeSubset(
      [parameters.currentRaDec[0], parameters.currentRaDec[1]],
      fovRadius
    );
  }

  calculateTargetRadius() {
    // Convert the target radius point from pixels to world coordinates
    const eastPoint = this.aladin.pix2world(
      this.p.width / 2 + parameters.targetRadiusPX,
      this.p.height / 2
    );

    // Calculate the angular distance between current position and target radius point
    return raDecDistance(
      parameters.currentRaDec[0],
      parameters.currentRaDec[1],
      eastPoint[0],
      eastPoint[1]
    );
  }

  updateNeighbors() {
    const targetRadius = this.calculateTargetRadius();
    this.findNeighbours(
      [parameters.currentRaDec[0], parameters.currentRaDec[1]],
      targetRadius
    );
  }
}

class Node {
  constructor(point, axis, id, gmag, gRColor, flag) {
    this.point = point;
    this.left = null;
    this.right = null;
    this.axis = axis;
    this.id = id;
    this.gmag = gmag;
    this.gRColor = gRColor;
    this.flag = flag;
  }
}

class KDTree {
  constructor(points) {
    this.root = this.buildTree(points);
    this.length = points.length;
  }

  buildTree(points) {
    if (points.length === 0) {
      return null;
    }

    const k = points[0].point.length;
    const depth = 0;
    const stack = [{ points, depth }];
    let root = null;

    while (stack.length > 0) {
      const { points, depth } = stack.pop();
      const axis = depth % k;

      if (points.length === 0) {
        continue;
      }

      points.sort((a, b) => a.point[axis] - b.point[axis]);
      const median = Math.floor(points.length / 2);

      const node = new Node(
        points[median].point,
        axis,
        points[median].id,
        points[median].gmag,
        points[median].gRColor,
        points[median].flag
      );

      if (root === null) {
        root = node;
      } else {
        let current = root;
        while (true) {
          if (
            points[median].point[current.axis] < current.point[current.axis]
          ) {
            if (current.left === null) {
              current.left = node;
              break;
            } else {
              current = current.left;
            }
          } else {
            if (current.right === null) {
              current.right = node;
              break;
            } else {
              current = current.right;
            }
          }
        }
      }

      stack.push({ points: points.slice(0, median), depth: depth + 1 });
      stack.push({ points: points.slice(median + 1), depth: depth + 1 });
    }

    return root;
  }

  kNearest(point, k, radius) {
    const bestNodes = [];
    const stack = [{ node: this.root, depth: 0 }];

    while (stack.length > 0) {
      const { node, depth } = stack.pop();
      if (node === null) {
        continue;
      }

      const axis = node.axis;
      const dist = this.distance(point, node.point);

      if (dist <= radius) {
        if (bestNodes.length < k) {
          bestNodes.push({
            point: node.point,
            dist,
            id: node.id,
            gmag: node.gmag,
            gRColor: node.gRColor,
            flag: node.flag,
          });
          bestNodes.sort((a, b) => a.dist - b.dist);
        } else if (dist < bestNodes[bestNodes.length - 1].dist) {
          bestNodes[bestNodes.length - 1] = {
            point: node.point,
            dist,
            id: node.id,
            gmag: node.gmag,
            gRColor: node.gRColor,
            flag: node.flag,
          };
          bestNodes.sort((a, b) => a.dist - b.dist);
        }
      }

      const diff = point[axis] - node.point[axis];
      const closeBranch = diff < 0 ? node.left : node.right;
      const awayBranch = diff < 0 ? node.right : node.left;

      stack.push({ node: closeBranch, depth: depth + 1 });
      if (Math.abs(diff) < radius || bestNodes.length < k) {
        stack.push({ node: awayBranch, depth: depth + 1 });
      }
    }

    return bestNodes;
  }

  distance(point1, point2) {
    // Calculate angular distance between two points in degrees
    const ra1 = (point1[0] * Math.PI) / 180;
    const dec1 = (point1[1] * Math.PI) / 180;
    const ra2 = (point2[0] * Math.PI) / 180;
    const dec2 = (point2[1] * Math.PI) / 180;

    const dRA = ra2 - ra1;
    const dDec = dec2 - dec1;

    const a =
      Math.sin(dDec / 2) * Math.sin(dDec / 2) +
      Math.cos(dec1) * Math.cos(dec2) * Math.sin(dRA / 2) * Math.sin(dRA / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return (c * 180) / Math.PI; // Convert to degrees
  }

  range(targetPoint, radius) {
    const pointsInRange = [];
    const stack = [{ node: this.root, depth: 0 }];

    while (stack.length > 0) {
      const { node, depth } = stack.pop();
      if (node === null) {
        continue;
      }

      const axis = node.axis;
      const dist = this.distance(targetPoint, node.point);

      if (dist <= radius) {
        pointsInRange.push({
          point: node.point,
          id: node.id,
          gmag: node.gmag,
          gRColor: node.gRColor,
          flag: node.flag,
        });
      }

      const diff = targetPoint[axis] - node.point[axis];
      const closeBranch = diff < 0 ? node.left : node.right;
      const awayBranch = diff < 0 ? node.right : node.left;

      stack.push({ node: closeBranch, depth: depth + 1 });
      if (Math.abs(diff) < radius) {
        stack.push({ node: awayBranch, depth: depth + 1 });
      }
    }

    return pointsInRange;
  }
}

export default PointSearcher;
