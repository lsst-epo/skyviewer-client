import parameters from "./parameters.js";

export function shiftStarTint(rgbValues) {
  const currentBrightness = Math.max(
    (rgbValues[0] + rgbValues[1] + rgbValues[2]) / 3,
    1
  );
  if (currentBrightness < parameters.minBrightness) {
    parameters.brightness_scaleFactor = Math.min(
      parameters.minBrightness / currentBrightness,
      2
    );
  }
  const r = Math.min(
    rgbValues[0] *
      parameters.brightness_scaleFactor *
      parameters.brightness_boost,
    255
  );
  const g = Math.min(
    rgbValues[1] *
      parameters.brightness_scaleFactor *
      parameters.brightness_boost,
    255
  );
  const b = Math.min(
    rgbValues[2] *
      parameters.brightness_scaleFactor *
      parameters.brightness_boost,
    255
  );
  return [r, g, b];
}

export function automaticWalk(p, aladin) {
  const [ra, dec] = aladin.getRaDec();
  const [pixelX, pixelY] = aladin.world2pix(ra, dec);
  const angle = p.map(p.noise(parameters.noiseOffset), 0, 1, -p.PI, p.PI);
  const dx = parameters.speed * p.cos(angle);
  const dy = parameters.speed * p.sin(angle);
  const newworldX = pixelX + dx;
  const newworldY = pixelY + dy;
  const [newRa, newDec] = aladin.pix2world(newworldX, newworldY);
  aladin.gotoRaDec(newRa, newDec);
  // aladin.animateToRaDec(newRa, newDec, 0.1);
  parameters.noiseOffset += parameters.noiseScale;
}

export function rgbToHue(r, g, b) {
  // Normalize RGB values to the range 0–1
  r /= 255;
  g /= 255;
  b /= 255;

  // Find the maximum and minimum values
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;

  let hue = 0;

  // Calculate Hue based on the max channel
  if (delta === 0) {
    hue = 0; // Grayscale
  } else if (max === r) {
    hue = 60 * (((g - b) / delta) % 6);
  } else if (max === g) {
    hue = 60 * ((b - r) / delta + 2);
  } else if (max === b) {
    hue = 60 * ((r - g) / delta + 4);
  }

  // Ensure Hue is in the range 0–360
  if (hue < 0) {
    hue += 360;
  }

  return hue;
}

export function mapHueToRange(hue, offset) {
  // Add the offset and wrap the hue to the range [0, 360)
  const shiftedHue = (hue - offset + 360) % 360;

  // Normalize the shifted hue to the range [0, 1]
  return shiftedHue / 360;
}

export function linearMap(value, inMin, inMax, outMin, outMax) {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
