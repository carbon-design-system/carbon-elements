/**
 * Copyright IBM Corp. 2018, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const path = require('path');
const chalk = require('chalk');
const { reporter } = require('../reporter');
const glob = require('../glob');
const testTreeShake = require('../tools/test-tree-shake');

async function checkTreeShake(pattern, { ignore, cwd, list } = {}) {
  reporter.info(`Running in: ${cwd}`);
  reporter.info(`Checking pattern: '${pattern}', ignoring: '${ignore}'`);

  const files = await glob(pattern, {
    cwd,
    ignore,
  });

  reporter.info(`Checking ${files.length} files...`);

  const testAll = async filepaths => {
    const queue = filepaths.slice();
    const results = [];
    while (queue.length > 0) {
      const files = queue
        .splice(0, 10)
        .map(filepath => path.join(cwd, filepath));
      results.push(...(await testTreeShake(files)));
      reporter.info(`${queue.length} files remaining...`);
    }
    return results;
  };

  const errors = (await testAll(files)).reduce((acc, result) => {
    if (!result.result) {
      const error = new Error(`File ${result.filepath} is not tree-shakable.`);
      error.filepath = result.filepath;
      return acc.concat(error);
    }
    if (result.error) {
      const error = result.error;
      error.filepath = result.filepath;
      return acc.concat(error);
    }
    return acc;
  }, []);

  if (errors.length > 0) {
    errors.forEach(error => {
      const { formatted, filepath } = error;
      reporter.error(
        `Error checking tree-shakability of ${path.relative(cwd, filepath)}`
      );
      console.log(chalk.gray(formatted)); // eslint-disable-line no-console
    });
    process.exit(1);
    return;
  }

  if (list) {
    reporter.info('Checked the following files for tree-shakability:');
    console.log(files); // eslint-disable-line no-console
  }
  reporter.success(
    `Successfully checked ${files.length} files for tree-shakability! 🎉`
  );
  process.exit(0);
}

module.exports = checkTreeShake;
