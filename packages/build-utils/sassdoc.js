/**
 * Copyright IBM Corp. 2018, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const fs = require('fs');
const sassdoc = require('sassdoc');

/**
 * Create a JSON file of documented Sass items
 * @see {@link http://sassdoc.com/configuration/|Sassdoc configuration}
 * @param {string} source - path to source or glob string/array
 * @param {string} filename - output filename
 * @param {Object} config - configuration object
 */
function createJsonFile(source, filename, config) {
  config = config || {};

  sassdoc.parse(source, config).then(
    data => {
      fs.writeFile(filename, JSON.stringify(data, null, 2), err => {
        if (err) {
          return console.error(err);
        }
      });
    },
    err => {
      console.error(err);
    }
  );
}

/**
 * Create markdown for Sassdoc item (function, mixin, placeholder, variable)
 * @param {string} item - Sassdoc item
 * @return {string} item in markdown formatting
 */
function createMarkdownItem(item) {
  let str = '';

  if (!item.context) return '';

  // Group
  const group =
    !item.group[0] || item.group[0] === 'undefined' ? 'general' : item.group[0];

  // Name
  str += `\n\n## ${item.context.name} (${group} ${item.context.type})`;

  // Description
  if (item.description) {
    str += `\n\n${item.description.trim()}`;
  }

  // Value
  const snippet = item.context.value ? item.context.value : item.context.code;
  if (snippet) {
    str += `

\`\`\`scss
$${item.context.name}: ${snippet};
\`\`\``;
  }

  // Parameters
  if (item.parameter && item.parameter.length) {
    str += `

| Name | Description | Type | Default value |
| --- | --- | --- | --- |`;

    item.parameter.forEach(param => {
      const paramDefault = param.default || '—';

      str += `\n| \`$${param.name}\` | \`${param.description}\` | \`${
        param.type
      }\` | \`${paramDefault}\` |`;
    });
  }

  // Bullets
  const metadata = [];

  if (item.type) {
    metadata.push({
      key: 'Type',
      value: `\`${item.type}\``,
    });
  }

  if (item.alias) {
    metadata.push({
      key: 'Alias',
      value: `\`${item.alias}\``,
    });
  }

  if (item.aliased) {
    let subbullets = '';

    item.aliased.forEach(aliased => {
      subbullets += `\n  - \`${aliased}\``;
    });

    metadata.push({
      key: 'Aliased',
      value: subbullets,
    });
  }

  if (item.content) {
    metadata.push({
      key: 'Content',
      value: item.content,
    });
  }

  // Returns

  if (item.require && item.require.length) {
    let subbullets = '';

    item.require.forEach(requires => {
      subbullets += `\n  - [${requires.type}] ${requires.name}`; // TODO create markdown link
    });

    metadata.push({
      key: 'Requires',
      value: subbullets,
    });
  }

  // Used by

  // Example

  if (item.since && item.since.length) {
    metadata.push({
      key: 'Since',
      value: item.since[0].version,
    });
  }

  if (metadata.length) {
    str += '\n';

    metadata.forEach(meta => {
      str += `\n- **${meta.key}**: ${meta.value}`;
    });
  }

  return str;
}

/**
 * Create a markdown file of documented Sass items
 * @see {@link http://sassdoc.com/configuration/|Sassdoc configuration}
 * @param {string} source - path to source or glob string/array
 * @param {string} filename - output filename
 * @param {Object} config - configuration object
 */
function createMarkdownFile(source, filename, config) {
  config = config || {};

  sassdoc.parse(source, config).then(
    data => {
      const file = fs.createWriteStream(filename);
      const publicItems = data.filter(
        (item, index) => item.access === 'public'
      );
      const currentItems = publicItems.filter(
        (item, index) => !item.deprecated
      );
      const deprecatedItems = publicItems.filter(
        (item, index) => item.deprecated
      );

      file.write(`# Functions, mixins, placeholders, variables

These public Sass functions, mixins, placeholders, and variables are currently supported. Deprecated items are at the bottom of this document.`);

      currentItems.forEach(item => {
        file.write(createMarkdownItem(item));
      });

      file.write(`\n\n# Deprecated functions, mixins, placeholders, variables

These public Sass functions, mixins, placeholders, and variables are deprecated and may not be available in future releases.`);

      deprecatedItems.forEach(item => {
        file.write(createMarkdownItem(item));
      });

      file.end();
    },
    err => {
      console.error(err);
    }
  );
}

module.exports = {
  createJsonFile,
  createMarkdownFile,
};
