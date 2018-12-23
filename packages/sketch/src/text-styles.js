import { fontFamilies, scale, tokens } from '@carbon/type';
import sketch from 'sketch';
import { TextStyles } from 'react-sketchapp';

export function addTextStyles() {
  sketch.UI.message('Hi 👋 We are still working on this! 🚧');

  TextStyles.create(
    {
      context,
      clearExistingStyles: true,
    },
    Object.keys(tokens).reduce(
      (acc, token) => ({
        ...acc,
        [token]: cleanStyles(tokens[token]),
      }),
      {}
    )
  );
}

function sanitize(fontFamily) {
  const plex = fontFamily.split(', ')[0].trim();
  return plex.replace(/'/g, '');
}

function cleanStyles(styles) {
  return Object.keys(styles)
    .filter(key => {
      if (key[0] === '@') {
        return false;
      }
      if (typeof styles[key] === 'string' && styles[key].includes('calc')) {
        return false;
      }
      return true;
    })
    .reduce((acc, key) => {
      if (key === 'fontFamily') {
        return {
          ...acc,
          fontFamily: sanitize(styles[key]),
        };
      }
      if (typeof styles[key] === 'string' && styles[key].includes('rem')) {
        return {
          ...acc,
          [key]: parseFloat(styles[key], 10) * 16,
        };
      }
      if (typeof styles[key] === 'string' && styles[key].includes('px')) {
        return {
          ...acc,
          [key]: parseFloat(styles[key], 10),
        };
      }
      return {
        ...acc,
        [key]: styles[key],
      };
    }, {});
}
