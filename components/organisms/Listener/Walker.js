import parameters from "./parameters.js";

class Walker {
  constructor(p, aladin) {
    this.p = p;
    this.aladin = aladin;
    this.cardinalSums = [0, 0, 0, 0];
    this.cardinalSumsCount = [0, 0, 0, 0];
    this.directionX = 1;
    this.directionY = 1;
  }

  walk() {
    const [ra, dec] = this.aladin.getRaDec();
    const [pixelX, pixelY] = this.aladin.world2pix(ra, dec);
    const angle = this.p.map(
      this.p.noise(parameters.noiseOffset),
      0,
      1,
      -this.p.PI,
      this.p.PI
    );
    const dx = this.directionX * parameters.walkSpeed * this.p.cos(angle);
    const dy = this.directionY * parameters.walkSpeed * this.p.sin(angle);
    const newworldX = pixelX + dx;
    const newworldY = pixelY + dy;
    const [newRa, newDec] = this.aladin.pix2world(newworldX, newworldY);
    this.aladin.gotoRaDec(newRa, newDec);
    parameters.noiseOffset += parameters.noiseScale;
  }

  cardinalSumCounter() {
    for (let i = 0; i < this.cardinalSums.length; i++) {
      if (this.cardinalSums[i] === 0) {
        this.cardinalSumsCount[i]++;
      } else {
        // TODO: Change this so it adds 1 if it's negative and goes to 0 if it's positive
        this.cardinalSumsCount[i] = Math.min(this.cardinalSumsCount[i], 0);
      }
    }
  }

  boundaryCheck() {
    // Check if all values are over 20
    // TODO: Should we be checking to see if this.cardinalSums is 0 instead?
    const checkAll = this.cardinalSumsCount.every(
      (value) => value >= parameters.boundarySetps
    );
    if (checkAll) {
      // TODO: Move back to somewhere on the canvas (use the return to initial view from explorer or store the last useable value?)
    }

    for (let i = 0; i < this.cardinalSumsCount.length; i++) {
      if (this.cardinalSumsCount[i] >= parameters.boundarySetps) {
        if (i % 2 === 0) {
          this.directionY *= -1;
          this.cardinalSumsCount[i] = -1 * parameters.boundarySetps;
        } else {
          this.directionX *= -1;
          this.cardinalSumsCount[i] = -1 * parameters.boundarySetps;
        }
      }
    }
  }
}

export default Walker;
