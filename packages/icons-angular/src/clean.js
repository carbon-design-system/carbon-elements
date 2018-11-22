const { remove } = require('fs-extra');

module.exports = async function clean() {
  return Promise.all([
    remove('ts'),
    remove('lib'),
    remove('waste'),
    remove('examples/storybook/lib'),
    remove('examples/storybook/stories'),
  ]);
};
