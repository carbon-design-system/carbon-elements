/**
 * Copyright IBM Corp. 2018, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Convert
// Default, Use with em() and rem() functions
export const baseFontSize = 16;

/**
 * Convert a given px unit to a rem unit
 * @param {number} px
 * @returns {string}
 */
export function rem(px) {
  return `${px / baseFontSize}rem`;
}

/**
 * Convert a given px unit to a em unit
 * @param {number} px
 * @returns {string}
 */
export function em(px) {
  return `${px / baseFontSize}em`;
}

/**
 * Convert a given px unit to its string representation
 * @param {number} px
 * @returns {string}
 */
export function px(value) {
  return `${value}px`;
}
