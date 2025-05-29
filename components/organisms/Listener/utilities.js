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

export function controlledWalk(p, aladin) {
  // TODO: Can we use the image width and height instead of these two methods?
  const [ra, dec] = aladin.getRaDec();
  const [pixelX, pixelY] = aladin.world2pix(ra, dec);
  const targetPoint = [0, 0];
  let dx = 0;
  let dy = 0;

  if (p.keyIsDown(p.LEFT_ARROW)) dx -= 1;
  if (p.keyIsDown(p.RIGHT_ARROW)) dx += 1;
  if (p.keyIsDown(p.UP_ARROW)) dy -= 1;
  if (p.keyIsDown(p.DOWN_ARROW)) dy += 1;

  // Normalize diagonal movement
  if (dx !== 0 && dy !== 0) {
    dx /= Math.SQRT2;
    dy /= Math.SQRT2;
  }
  // Update the target point
  targetPoint[0] +=
    dx * parameters.directionX * parameters.keyboardSpeed + pixelX;
  targetPoint[1] +=
    dy * parameters.directionY * parameters.keyboardSpeed + pixelY;

  // Convert the target point to RA and Dec
  const [newRa, newDec] = aladin.pix2world(targetPoint[0], targetPoint[1]);
  // Move to the new RA and Dec
  aladin.gotoRaDec(newRa, newDec);
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

export function linearMap(value, inMin, inMax, outMin, outMax, clamp = false) {
  const map = ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  return clamp ? Math.max(outMin, Math.min(outMax, map)) : map;
}

export function areArrowsPressed(p) {
  return (
    p.keyIsDown(p.LEFT_ARROW) ||
    p.keyIsDown(p.RIGHT_ARROW) ||
    p.keyIsDown(p.UP_ARROW) ||
    p.keyIsDown(p.DOWN_ARROW)
  );
}

export function loadAudio(name, url) {
  parameters.audioContext =
    parameters.audioContext ||
    new (window.AudioContext || window.webkitAudioContext)();
  fetch(url)
    .then((response) => response.arrayBuffer())
    .then((data) => parameters.audioContext.decodeAudioData(data))
    .then((buffer) => {
      parameters.audioBuffers[name] = buffer; // Store the buffer with a key
    })
    .catch((error) => console.error(`Error loading audio (${name}):`, error));
}

export function raDecDistance(ra1, dec1, ra2, dec2) {
  // Convert degrees to radians
  const ra1Rad = ra1 * (Math.PI / 180);
  const dec1Rad = dec1 * (Math.PI / 180);
  const ra2Rad = ra2 * (Math.PI / 180);
  const dec2Rad = dec2 * (Math.PI / 180);

  // Apply the spherical law of cosines
  const deltaRa = ra2Rad - ra1Rad;
  const cosD =
    Math.sin(dec1Rad) * Math.sin(dec2Rad) +
    Math.cos(dec1Rad) * Math.cos(dec2Rad) * Math.cos(deltaRa);

  // acos can sometimes be outside [-1, 1] due to floating point errors
  const d = Math.acos(Math.max(-1, Math.min(1, cosD)));

  // Convert back to degrees
  return d * (180 / Math.PI);
}

export function mapValueToHue(value, minValue, maxValue, hueCutoff = 300) {
  let norm = (value - minValue) / (maxValue - minValue);
  norm = Math.max(0, Math.min(1, norm)); // Clamp to [0, 1]
  const hue = Math.round(((((hueCutoff + norm) * 360) % 360) * 255) / 360);

  return hue;
}
