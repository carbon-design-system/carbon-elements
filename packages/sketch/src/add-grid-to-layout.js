import sketch from 'sketch';
import { breakpoints } from '@carbon/layout';

function filter(selection, fn) {
  const result = [];
  selection.forEach(layer => {
    if (fn(layer)) {
      result.push(layer);
    }
  });
  return result;
}

function breakpointNext(gridBreakpoints, name) {
  const breakpoints = Object.keys(gridBreakpoints);
  return breakpoints[breakpoints.indexOf(name) + 1];
}

export default function() {
  const doc = sketch.getSelectedDocument();
  if (!doc) {
    return;
  }

  const { selectedLayers } = doc;
  if (!selectedLayers) {
    return;
  }

  const artboards = filter(selectedLayers, layer => layer.type === 'Artboard');

  if (artboards.length === 0) {
    sketch.UI.message('Please select an artboard 🙏');
    return;
  }

  artboards.forEach(artboard => {
    const { frame } = artboard;
    let breakpointName = 'sm';
    while (breakpointNext(breakpoints, breakpointName)) {
      const next = breakpointNext(breakpoints, breakpointName);
      if (frame.width <= parseFloat(breakpoints[next].width, 10) * 16) {
        break;
      }
      breakpointName = next;
    }

    const breakpoint = breakpoints[breakpointName];
    const width = parseFloat(breakpoint.width, 10) * 16;
    const margin = parseFloat(breakpoint.margin, 10) * 16;

    // Set a default layout in case it does not have one
    artboard.sketchObject.layout = MSDefaultLayoutGrid.defaultLayout();
    const layout = artboard.sketchObject.layout();

    layout.numberOfColumns = breakpoint.columns;
    layout.totalWidth = width;
    layout.horizontalOffset = (frame.width - width) / 2;
    layout.setGutterWidth(32);
    layout.setIsEnabled(true);
  });
}
