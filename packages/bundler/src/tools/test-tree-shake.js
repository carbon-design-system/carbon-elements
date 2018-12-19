/**
 * Copyright IBM Corp. 2018, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const { rollup } = require('rollup');
const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const { terser } = require('rollup-plugin-terser');
const virtual = require('rollup-plugin-virtual');

const entry = '__entry_module__';

let emptyOutputCache;

async function getEmptyOutput() {
  if (!emptyOutputCache) {
    const emptyBundle = await rollup({
      input: entry,
      plugins: [
        virtual({
          [entry]: `
            /*#__PURE__*/
            (function () { console.log(0); })();
          `,
        }),
        terser(),
      ],
      onwarn: (warning, handle) => {
        if (warning.code !== 'EMPTY_BUNDLE') handle(warning);
      },
    });
    emptyOutputCache = await emptyBundle.generate({ format: 'iife' });
  }
  return emptyOutputCache;
}

async function testFile(filepath) {
  const emptyOutput = await getEmptyOutput();
  const bundle = await rollup({
    input: entry,
    plugins: [
      virtual({
        [entry]: `import ${JSON.stringify(filepath)}`,
      }),
      babel({
        exclude: 'node_modules/**',
        babelrc: false,
        presets: [
          [
            '@babel/preset-env',
            {
              modules: false,
              targets: {
                browsers: ['last 1 version', 'ie >= 11', 'Firefox ESR'],
              },
            },
          ],
        ],
        plugins: ['macros'],
      }),
      resolve({
        jsnext: true,
        main: true,
        module: true,
      }),
      commonjs({
        include: ['node_modules/**'],
        extensions: ['.js'],
      }),
      terser(),
    ],
    onwarn: (warning, handle) => {
      if (warning.code !== 'EMPTY_BUNDLE') handle(warning);
    },
  });
  const output = await bundle.generate({ format: 'iife' });
  return !output.code.trim().replace(emptyOutput.code.trim(), '');
}

function testTreeShake(filepaths) {
  return Promise.all(
    filepaths.map(async filepath => {
      try {
        return {
          filepath,
          result: await testFile(filepath),
        };
      } catch (error) {
        return {
          filepath,
          error,
        };
      }
    })
  );
}

module.exports = testTreeShake;
