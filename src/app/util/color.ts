export function hexToRgb(hex: string, options = { normalize: true }): { r: number; g: number; b: number } {
  const hexValue = hex.replace("#", "");
  const r = parseInt(hexValue.substring(0, 2), 16);
  const g = parseInt(hexValue.substring(2, 4), 16);
  const b = parseInt(hexValue.substring(4, 6), 16);

  if (options.normalize) {
    return normalizeRgb({ r, g, b });
  }

  return { r, g, b };
}

export function normalizeRgb(rgb: { r: number; g: number; b: number }): { r: number; g: number; b: number } {
  return {
    r: rgb.r / 255,
    g: rgb.g / 255,
    b: rgb.b / 255,
  };
}
