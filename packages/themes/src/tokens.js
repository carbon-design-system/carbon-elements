/**
 * Copyright IBM Corp. 2018, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const _colors = {
  interactive01: {
    description: 'Primary interactive color; Primary buttons',
  },
  interactive02: {
    description: 'Secondary interactive color; Secondary button',
  },
  interactive03: {
    description: '4.5:1 AA contrast; Tertiary button',
  },
  interactive04: {
    description:
      '3:1 AA contrast; Selected elements; Active elements; Accent icons',
  },
  uiBackground: {
    description: 'Default page background',
  },
  ui01: {
    description: 'Primary container background; Secondary page background',
  },
  ui02: {
    description: 'Primary page background; Secondary container background',
  },
  ui03: {
    description: 'Subtle border; Tertiary background color',
  },
  ui04: {
    description: '3:1 AA element contrast; Medium contrast border',
  },
  ui05: {
    description:
      '4.5:1 AA element contrast; High contrast border; Emphasis elements',
  },
  text01: {
    description:
      'Primary text; Body copy; Headers; Hover text color for text-02',
  },
  text02: {
    description: 'Secondary text; Input labels; Help text',
  },
  text03: {
    description: 'Placeholder text',
  },
  text04: {
    description: 'Text on interactive colors',
  },
  icon01: {
    description: 'Primary icons',
  },
  icon02: {
    description: 'Secondary icons',
  },
  icon03: {
    description:
      'Tertiary icons; Icons on interactive colors; Icons on non-ui colors',
  },
  link01: {
    description: 'Primary links; Ghost button',
  },
  field01: {
    description: 'Default input fields; Field color on $ui-backgrounds',
  },
  field02: {
    description: 'Input field color on `$ui-02` backgrounds',
  },
  inverse01: {
    description: 'Inverse text color; Inverse icon color',
  },
  inverse02: {
    description: 'High contrast backgrounds; High contrast elements',
  },
  support01: {
    description: 'Error',
  },
  support02: {
    description: 'Success',
  },
  support03: {
    description: 'Warning',
  },
  support04: {
    description: 'Information',
  },
  overlay01: {
    description: 'Background overlay',
  },
  focus: {
    description: 'Focus border; Focus underline',
  },
  hoverPrimary: {
    description: '`$interactive-01` hover',
  },
  activePrimary: {
    description: '`$interactive-01` active',
  },
  hoverPrimaryText: {
    description: '`$interactive-01` text hover',
  },
  hoverSecondary: {
    description: '`$interactive-02` hover',
  },
  activeSecondary: {
    description: '`$interactive-02` active; `$inverse-01` active',
  },
  hoverTertiary: {
    description: '`$interactive-03` hover; `$inverse-01` hover',
  },
  activeTertiary: {
    description: '`$interactive-03` active',
  },
  hoverUI: {
    description: '`$ui-01` hover; `$ui-02` hover; Transparent background hover',
  },
  activeUI: {
    description: '`$ui-01` active; `$ui-02` active',
  },
  selectedUI: {
    description: 'Selected UI elements',
  },
  hoverSelectedUI: {
    description: 'Data table selected row hover',
  },
  hoverDanger: {
    description: 'Danger hover; `$support-01` hover',
  },
  activeDanger: {
    description: 'Danger active; `$support-01` active',
  },
  hoverRow: {
    description: 'Row hover',
  },
  visitedLink: {
    description: 'Visited links',
  },
  disabled01: {
    description: 'Disabled fields; Disabled backgrounds; Disabled border',
  },
  disabled02: {
    description:
      'Disabled elements on `$disabled-01`; Disabled label; Disabled text on `$disabled-01`; Disabled icons; Disabled border',
  },
  disabled03: {
    description:
      'Disabled text on `$disabled-02`; Disabled icons on `$disabled-02`',
  },
  highlight: {
    description: '`$interactive-01` highlight',
  },
  brand01: {
    description: '',
    alias: 'interactive-01',
    deprecated: true,
  },
  brand02: {
    description: '',
    alias: 'interactive-02',
    deprecated: true,
  },
  brand03: {
    description: '',
    alias: 'interactive-03',
    deprecated: true,
  },
  active01: {
    description: '',
    alias: 'active-ui',
    deprecated: true,
  },
  hoverField: {
    description: '',
    alias: 'hover-ui',
    deprecated: true,
  },
};

// The color token names for a Carbon theme, value corresponds to what they're
// exported as in JavaScript
const colors = Object.keys(_colors);

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

/**
 * Format a given token into the format expected in CSS/SCSS-based projects.
 * @param {string} token
 * @return {string}
 */
export function formatTokenName(token) {
  let string = '';

  for (let i = 0; i < token.length; i++) {
    // If we run into a number, we hit the scale step at the end of a token name
    // and can safely truncate the rest of the token
    if (numbers.indexOf(token[i]) !== -1) {
      string += '-' + token.slice(i);
      break;
    }

    // When encountering an uppercase name, we will want to start adding `-`
    // between words
    if (token[i] === token[i].toUpperCase()) {
      // Check backwards to see if previous letter was also capitalized, if so
      // we are in a special case like UI where each piece should be connected
      if (token[i - 1] && token[i - 1] === token[i - 1].toUpperCase()) {
        string += token[i].toLowerCase();
        continue;
      }

      // Otherwise, just concatenate this new part on to the existing string
      string += '-' + token[i].toLowerCase();
      continue;
    }

    // By default, we add the current character to the output string
    string += token[i];
  }

  return string;
}

export const tokens = {
  colors,
  tokenDocs: _colors,
};
