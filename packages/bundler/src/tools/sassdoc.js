-/**
 * Copyright IBM Corp. 2018, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const prettier = require('prettier');
const sassdoc = require('sassdoc');
const toc = require('markdown-toc');

const prettierOptions = {
  parser: 'markdown',
  printWidth: 80,
  singleQuote: true,
  trailingComma: 'es5',
};

/**
 * Create a JSON file of documented Sass items
 * @see {@link http://sassdoc.com/configuration/|Sassdoc configuration}
 * @param {string} sourceDir - source directory
 * @param {Object} config - configuration object
 * @return {Object} json object
 */
async function createJson(sourceDir, config) {
  config = config || {};

  return sassdoc.parse(sourceDir, config).then(
    data => {
      return data;
    },
    err => {
      console.error(err);
    }
  );
}

/**
 * Remove duplicate objects in `require` and `usedBy` arrays. Array objects have
 * `name` and `type` properties, sometimes nested in a `context` object.
 * @param {Array} arr - array with potential duplicates
 * @return {Array} deduped array
 */
function dedupeArray(arr) {
  return arr.reduce(
    (p, item) => {
      const type = item.type || item.context.type;
      const name = item.name || item.context.name;
      const id = [type, name].join('|');

      if (p.temp.indexOf(id) === -1) {
        p.out.push(item);
        p.temp.push(id);
      }
      return p;
    },
    { temp: [], out: [] }
  ).out;
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
      const paramDefault = param.default ? `\`${param.default}\`` : '—';

      str += `\n| \`$${param.name}\` | ${param.description || '—'} | \`${
        param.type
      }\` | ${paramDefault} |`;
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

    dedupeArray(item.require).forEach(requires => {
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

    dedupeArray(item.usedBy).forEach(usedBy => {
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

  // if (item.since && item.since.length) {
  //   metadata.push({
  //     key: 'Since',
  //     value: item.since[0].version,
  //   });
  // }

  if (item.deprecated || item.deprecated === '') {
    metadata.push({
      key: 'Deprecated',
      value: item.deprecated || 'This may not be available in future releases',
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
 * @param {string} sourceDir - source directory
 * @param {Object} config - configuration object
 * @return {string} markdown
 */
async function createMarkdown(sourceDir, config) {
  config = config || {};

  return sassdoc.parse(sourceDir, config).then(
    data => {
      let markdownFile = '';

      const publicItems = data.filter(
        (item, index) => item.access === 'public'
      );
      const currentItems = publicItems.filter((item, index) => {
        return !item.deprecated && item.deprecated !== '';
      });
      const deprecatedItems = publicItems.filter((item, index) => {
        return item.deprecated || item.deprecated === '';
      });

      markdownFile += `# Sass functions, mixins, placeholders, variables

These public Sass functions, mixins, placeholders, and variables are currently supported. Deprecated items are at the bottom of this document.

<!-- toc -->
<!-- tocstop -->`;

      let currentGroup = '';

      currentItems.forEach(item => {
        const itemGroup =
          !item.group || !item.group[0] || item.group[0] === 'undefined'
            ? 'general'
            : item.group[0];

        if (itemGroup !== currentGroup) {
          markdownFile += `\n\n## ${itemGroup}`;
          currentGroup = itemGroup;
        }

        markdownFile += createMarkdownItem(item);
      });

      currentGroup = '';

      deprecatedItems.forEach(item => {
        const itemGroup =
          !item.group || !item.group[0] || item.group[0] === 'undefined'
            ? 'general'
            : item.group[0];

        if (itemGroup !== currentGroup) {
          markdownFile += `\n\n## ${itemGroup} [deprecated]

These public Sass functions, mixins, placeholders, and variables are deprecated and may not be available in future releases.`;
          currentGroup = itemGroup;
        }

        markdownFile += createMarkdownItem(item);
      });

      return prettier.format(toc.insert(markdownFile), prettierOptions);
    },
    err => {
      console.error(err);
    }
  );
}

module.exports = {
  createJson,
  createMarkdown,
};
