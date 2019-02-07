/**
 * Copyright IBM Corp. 2018, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @jest-environment node
 */

'use strict';

describe('icons CommonJS', () => {
  it('should build an entrypoint that is require-able', () => {
    expect(() => {
      require('../../packages/icons');
    }).not.toThrow();
  });
});
