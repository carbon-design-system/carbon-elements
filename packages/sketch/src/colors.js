import { colors, tokens } from '@carbon/colors';
import React from 'react';
import { render, Text, View } from 'react-sketchapp';
import sketch from 'sketch';

export function renderColors() {
  sketch.UI.message('Hi 👋 We are still working on this! 🚧');

  render(
    <View name="colors" style={{ display: 'flex' }}>
      {Object.keys(colors).map(name => (
        <ColorSwatch key={name} name={name} swatch={colors[name]} />
      ))}
    </View>,
    context.document.currentPage()
  );
}

export function renderTokens() {
  sketch.UI.message('Hi 👋 We are still working on this! 🚧');

  render(
    <View name="tokens" style={{ display: 'flex' }}>
      {Object.keys(tokens).map(key => (
        <View key={key} name={key}>
          <Text>{key}</Text>
          <View
            style={{ backgroundColor: tokens[key], width: 50, height: 50 }}
          />
        </View>
      ))}
    </View>,
    context.document.currentPage()
  );
}

function ColorSwatch({ name, swatch }) {
  return (
    <View name={name} style={{ display: 'flex', flexDirection: 'row' }}>
      <View style={{ width: 100, height: 50 }}>
        <Text>{name}</Text>
      </View>
      {Object.keys(swatch).map(key => (
        <View key={key} name={key}>
          <Text>{key}</Text>
          <View
            style={{ backgroundColor: swatch[key], width: 50, height: 50 }}
          />
        </View>
      ))}
    </View>
  );
}
