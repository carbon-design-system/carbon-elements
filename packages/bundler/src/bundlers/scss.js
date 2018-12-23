/**
 * Copyright IBM Corp. 2018, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const { reporter } = require('@carbon/cli-reporter');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const fs = require('fs-extra');
const path = require('path');
const postcss = require('postcss');
const compile = require('../tools/compile');
const findPackageFolder = require('../tools/findPackageFolder');

const autoprefixerOptions = {
  browsers: ['last 1 version', 'ie >= 11', 'Firefox ESR'],
};

async function bundle(entrypoint, options, info) {
  const basename = path.basename(entrypoint, '.scss');
  const packageFolder = await findPackageFolder(entrypoint);
  const outputFolder = path.join(packageFolder, 'css');

  await fs.ensureDir(outputFolder);

  const [uncompressed] = await Promise.all(compile([entrypoint]));
  const [compressed] = await Promise.all(
    compile([entrypoint], {
      outputStyle: 'compressed',
    })
  );

  await Promise.all([
    fs.writeFile(
      path.join(outputFolder, `${basename}.css`),
      await process(
        uncompressed.result.css,
        [autoprefixer(autoprefixerOptions)],
        {
          from: entrypoint,
          to: path.join(outputFolder, `${basename}.css`),
        }
      )
    ),
    fs.writeFile(
      path.join(outputFolder, `${basename}.min.css`),
      compressed.result.css
    ),
  ]);
}

async function process(css, plugins, options) {
  const result = await postcss(plugins).process(css, options);
  return result.css;
}

module.exports = bundle;
