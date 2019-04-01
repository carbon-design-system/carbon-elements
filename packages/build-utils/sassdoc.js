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
 * Create a unique Sassdoc item name
 * @param {string} name - Sassdoc name
 * @param {string} type - Sassdoc type (e.g. `variable`, `mixin`)
 * @return {string} unique Sassdoc item name
 */
function createUniqueName(name, type) {
  return `${name} [${type}]`;
}

/**
 * Create GitHub-flavored markdown anchor link
 * @param {string} name - anchor value
 * @param {string} heading - anchor link destination
 * @return {string} markdown anchor
 */
function createAnchorLink(name, heading) {
  const anchorLink = heading
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[`~!@#$%^&*()+=<>?,./:;"'|{}\[\]\\–—]/g, '')
    .replace(
      /[　。？！，、；：“”【】（）〔〕［］﹃﹄“”‘’﹁﹂—…－～《》〈〉「」]/g,
      ''
    );

  return `[${name}](#${anchorLink})`;
}

/**
 * Create markdown for Sassdoc item (function, mixin, placeholder, variable)
 * @param {string} item - Sassdoc item
 * @return {string} item in markdown formatting
 */
function createMarkdownItem(item) {
  let str = '';

  if (!item.context) return '';

  // Name
  str += `\n\n### ${createUniqueName(item.context.name, item.context.type)}`;

  // Description
  if (item.description) {
    str += `\n\n${item.description.trim()}`;
  }

  // Value (variables)
  if (item.context.value) {
    str += `

\`\`\`scss
$${item.context.name}: ${item.context.value};
\`\`\``;
  }

  // Code (mixins)
  if (item.context.code) {
    str += `

\`\`\`scss
$${item.context.name}: {${item.context.code}}
\`\`\``;
  }

  // Parameters
  if (item.parameter && item.parameter.length) {
    str += `

**Parameters**:

| Name | Description | Type | Default value |
| --- | --- | --- | --- |`;

    item.parameter.forEach(param => {
      const paramDefault = param.default || '—';

      str += `\n| \`$${param.name}\` | ${param.description} | \`${
        param.type
      }\` | \`${paramDefault}\` |`;
    });
  }

  // Example
  if (item.example && item.example.length) {
    str += `\n\n**Example**:`;

    if (item.example[0].description) {
      str += ` ${item.example[0].description}`;
    }

    str += `

\`\`\`${item.example[0].type}
${item.example[0].code}
\`\`\``;
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
      subbullets += `\n   - ${createAnchorLink(
        `${requires.name} [${requires.type}]`,
        createUniqueName(requires.name, requires.type)
      )}`;
    });

    metadata.push({
      key: 'Requires',
      value: subbullets,
    });
  }

  if (item.usedBy && item.usedBy.length) {
    let subbullets = '';

    item.usedBy.forEach(usedBy => {
      subbullets += `\n   - ${createAnchorLink(
        `${usedBy.context.name} [${usedBy.context.type}]`,
        createUniqueName(usedBy.context.name, usedBy.context.type)
      )}`;
    });

    metadata.push({
      key: 'Used by',
      value: subbullets,
    });
  }

  if (item.since && item.since.length) {
    metadata.push({
      key: 'Since',
      value: item.since[0].version,
    });
  }

  if (item.deprecated) {
    metadata.push({
      key: 'Deprecated',
      value: item.deprecated,
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

      file.write(`# Sass functions, mixins, placeholders, variables

<!-- prettier-ignore-start -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!-- prettier-ignore-end -->

These public Sass functions, mixins, placeholders, and variables are currently supported. Deprecated items are at the bottom of this document.`);

      let currentGroup = '';

      currentItems.forEach(item => {
        const itemGroup =
          !item.group || !item.group[0] || item.group[0] === 'undefined'
            ? 'general'
            : item.group[0];

        if (itemGroup !== currentGroup) {
          file.write(`\n\n## ${itemGroup}`);
          currentGroup = itemGroup;
        }

        file.write(createMarkdownItem(item));
      });

      file.write(`\n\n# Deprecated functions, mixins, placeholders, variables

These public Sass functions, mixins, placeholders, and variables are deprecated and may not be available in future releases.`);

      currentGroup = '';

      deprecatedItems.forEach(item => {
        const itemGroup =
          !item.group || !item.group[0] || item.group[0] === 'undefined'
            ? 'general'
            : item.group[0];

        if (itemGroup !== currentGroup) {
          file.write(`\n\n## Deprecated ${itemGroup}`);
          currentGroup = itemGroup;
        }

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
