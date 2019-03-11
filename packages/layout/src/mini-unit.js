/**
 * Copyright IBM Corp. 2018, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Mini-unit
export const miniUnit = 8;

export function miniUnits(count) {
  return rem(miniUnit * count);
}
