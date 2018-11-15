// Default, Use with em() and rem() functions
export const baseFontSize = 16;

// Convert a given px unit to a rem unit
// @param {string} px
// @return {string}
export function rem(px) {
  return `${px / baseFontSize}rem`;
}

// Convert a given px unit to a em unit
// @param {string} px
// @return {string}
export function em(px) {
  return `${px / baseFontSize}em`;
}
