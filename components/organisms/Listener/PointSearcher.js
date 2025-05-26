import testPoints from "./ngvs_test_fakestars.json";

class PointSearcher {
  constructor(p) {
    this.p = p; // Store p5 instance
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
    // Make variables for Ra/Dec and Zoom and have them equal the Ra/Dec at the time of an update. Make a method that updates the points and have it check the Ra/Dec and Zoom and update the points accordingly if there's been a change/enough of a change.
    // Put the update method in a useEffect and not in the draw loop.

    // Initialize the tree with points from parameters, maybe we do this is the setup loop instead here.
    // this.updatePoints();
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
      gR: point.gR,
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
    this.radius_neighbours = radius;

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

    // Update the previous nearest neighbours
    this.previousNearestNeighbourIDs = currentNearestNeighbourIDs;

    // Update the nearest point
    if (this.nearestNeighbours.length > 0) {
      this.nearestPoint = this.nearestNeighbours[0];
    } else {
      this.nearestPoint = undefined;
    }
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
