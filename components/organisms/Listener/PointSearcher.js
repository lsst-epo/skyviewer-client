import testPoints from "./ngvs_test_fakestars_modified.json";

class PointSearcher {
  constructor(p, aladin) {
    this.p = p; // Store p5 instance
    this.aladin = aladin; // Store Aladin instance
    this.tree = null;
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
    this.getPoints();
  }

  updatePoints() {
    // this.getPoints();
  }

  getPoints() {
    // Use the test points from the JSON file
    const formattedPoints = testPoints.map((point) => ({
      point: [point.RAdeg, point.DEdeg],
      id: point.id,
      gmag: point.gmag,
      gR: point.g_r,
      flag: point.flag,
    }));
    this.tree = new KDTree(formattedPoints);
  }

  makeSubset(targetPoint, radius = this.radius_subset) {
    this.radius_subset = radius;
    this.subsetPoints = this.tree.range(targetPoint, radius);
    this.subsetTree = new KDTree(this.subsetPoints);
  }

  findNeighbours(targetPoint, radius = this.radius_neighbours) {
    this.radius_neighbours = radius; // TODO: This equals this.radius_subset?

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
    if (this.previousNearestNeighbourIDs.length === 0) {
      this.newNearestNeighbours = [];
    } else {
      this.newNearestNeighbours = this.nearestNeighbours.filter(
        (neighbour) => !this.previousNearestNeighbourIDs.includes(neighbour.id)
      );
    }

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
    const colorIndex = neighbour.gR;

    // Map magnitude to brightness (brighter stars = higher brightness)
    const brightness = this.p.map(magnitude, 15, 20, 255, 50);

    // Map color index to hue (bluer = lower hue, redder = higher hue)
    const hue = this.p.map(colorIndex, -0.5, 1.5, 200, 0);

    this.animations.push({
      x: neighbour.point[0],
      y: neighbour.point[1],
      size: 0, // Initial size
      opacity: 255, // Initial opacity
      hue: hue,
      brightness: brightness,
      saturation: 100,
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
    // Reset color mode to RGB
    this.p.colorMode(this.p.RGB);
  }

  // Find points within magnitude range
  findPointsByMagnitude(minMag, maxMag) {
    return this.subsetPoints.filter(
      (point) => point.gmag >= minMag && point.gmag <= maxMag
    );
  }

  // Find points within color range
  findPointsByColor(minColor, maxColor) {
    return this.subsetPoints.filter(
      (point) => point.gR >= minColor && point.gR <= maxColor
    );
  }

  // Find points by flag
  findPointsByFlag(flag) {
    return this.subsetPoints.filter((point) => point.flag === flag);
  }

  // Example of a method that uses p5
  drawPoints(points, color = { r: 255, g: 255, b: 255 }) {
    this.p.noStroke();
    this.p.fill(color.r, color.g, color.b);
    for (const point of points) {
      this.p.ellipse(point.point[0], point.point[1], 5, 5);
    }
  }
}

class Node {
  constructor(point, axis, id, gmag, gR, flag) {
    this.point = point;
    this.left = null;
    this.right = null;
    this.axis = axis;
    this.id = id;
    this.gmag = gmag;
    this.gR = gR;
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
        points[median].gR,
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
            gR: node.gR,
            flag: node.flag,
          });
          bestNodes.sort((a, b) => a.dist - b.dist);
        } else if (dist < bestNodes[bestNodes.length - 1].dist) {
          bestNodes[bestNodes.length - 1] = {
            point: node.point,
            dist,
            id: node.id,
            gmag: node.gmag,
            gR: node.gR,
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
          gR: node.gR,
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
