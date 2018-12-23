import { fontFamilies, scale, tokens } from '@carbon/type';
import React from 'react';
import { render, Text, View } from 'react-sketchapp';
import sketch from 'sketch';
import { SharedStyle } from 'sketch/dom';

export function renderScale() {
  sketch.UI.message('Hi 👋 We are still working on this! 🚧');

  render(
    <View name="Type scale">
      {scale.map((step, index) => (
        <Text
          key={step}
          name={`Step ${index}`}
          style={{
            fontFamily: sanitize(fontFamilies.sans),
            fontSize: step,
          }}>
          Good design is good business
        </Text>
      ))}
    </View>,
    context.document.currentPage()
  );
}

export function renderTokens() {
  sketch.UI.message('Hi 👋 We are still working on this! 🚧');

  render(
    <View name="Type tokens">
      {Object.keys(tokens).map(token => {
        return (
          <View key={token} name={token} style={{ marginBottom: 32 }}>
            <Text style={{ fontFamily: sanitize(fontFamilies.sans) }}>
              {token}
            </Text>
            <Text style={cleanStyles(tokens[token])}>Text sample</Text>
          </View>
        );
      })}
    </View>,
    context.document.currentPage()
  );
}

export function addTextStyles() {
  sketch.UI.message('Hi 👋 We are still working on this!! 🚧');
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
