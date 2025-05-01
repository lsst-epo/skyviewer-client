/**
 * parses the `properties` file in a HIPS map to a dictionary-like shape.
 * Extracted from the {@link https://github.com/cds-astro/aladin-lite/blob/master/src/js/HiPSDefinition.js|`HiPSDefinition`} module in `aladin-lite`
 */
export const parseHIPSProperties = (properties?: string | null) => {
  if (!properties) {
    return;
  }

  const propertiesDict: Record<string, string> = {};

  // remove CR characters
  properties = properties.replace(/[\r]/g, "");
  // split on LF
  const lines = properties.split("\n");

  for (let k = 0; k < lines.length; k++) {
    const l = lines[k].trim();
    // ignore comments lines
    if (l.slice(0, 1) === "#") {
      continue;
    }
    const idx = l.indexOf("=");
    if (idx < 0) {
      continue;
    }
    const key = l.slice(0, idx).trim();
    const value = l.slice(idx + 1).trim();

    propertiesDict[key] = value;
  }

  return propertiesDict;
};
