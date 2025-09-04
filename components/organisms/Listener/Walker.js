import parameters from "./parameters.js";

class Walker {
  constructor(p, aladin) {
    this.p = p;
    this.aladin = aladin;
    this.cardinalSums = [0, 0, 0, 0];
    this.cardinalSumsCount = [0, 0, 0, 0];
    this.voidCounter = 0;
    this.directionX = 1;
    this.directionY = 1;
    this.resettingPosition = false;
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
    if (!this.resettingPosition) {
      // Store the latest time every cardinal direction was non-black
      if (this.cardinalSums.every((sum) => sum !== 0)) {
        parameters.lastGoodPosition = this.aladin.getRaDec();
      }
      // Update void count if all cardinal sums are black
      if (this.cardinalSums.every((sum) => sum === 0)) {
        // Set inTheVoid to true if we're in the void
        parameters.inTheVoid = true;
        this.voidCounter++;
      } else {
        // Set inTheVoid to false if we're not in the void
        parameters.inTheVoid = false;
        // Reset the void counter since we're not in the void
        this.voidCounter = 0;
        // Check cardinal directions and update sums, we only need to check this if we're not in the void
        for (let i = 0; i < this.cardinalSums.length; i++) {
          if (this.cardinalSums[i] === 0) {
            this.cardinalSumsCount[i]++;
          } else {
            this.cardinalSumsCount[i] = Math.min(this.cardinalSumsCount[i], 0);
          }
        }
      }
    }
  }

  boundaryCheck() {
    // Go to last good position if stuck in the void for too long
    if (this.voidCounter >= parameters.voidSteps) {
      this.resettingPosition = true;
      // Reset the void counter
      this.voidCounter = 0;
      // Reset the cardinal sums count
      this.cardinalSumsCount = [0, 0, 0, 0];
      // Check to see if we have a last good position
      if (
        parameters.lastGoodPosition[0] !== 0 &&
        parameters.lastGoodPosition[1] !== 0
      ) {
        this.aladin.animateToRaDec(
          parameters.lastGoodPosition[0],
          parameters.lastGoodPosition[1],
          0.5,
          () => {
            this.resettingPosition = false;
          }
        );
        // Go to starting position if we don't have a last good position
      } else {
        this.aladin.animateToRaDec(
          parameters.startingPosition[0],
          parameters.startingPosition[1],
          0.5,
          () => {
            this.resettingPosition = false;
          }
        );
      }
    }
    if (!this.resettingPosition) {
      for (let i = 0; i < this.cardinalSumsCount.length; i++) {
        if (this.cardinalSumsCount[i] >= parameters.boundarySteps) {
          if (i % 2 === 0) {
            this.directionY *= -1;
            this.cardinalSumsCount[i] = -1 * parameters.boundarySteps;
          } else {
            this.directionX *= -1;
            this.cardinalSumsCount[i] = -1 * parameters.boundarySteps;
          }
        }
      }
    }
  }
}

export default Walker;
