'use strict';

const prettier = require('prettier');

const prettierOptions = {
  parser: 'babylon',
  printWidth: 80,
  singleQuote: true,
  trailingComma: 'es5',
};

const MODULE_IMPORTS = `
import { getAttributes } from '@carbon/icon-helpers';
`;

function createEntrypointFromMeta(meta) {
  const install = `export const CarbonComponentsVue = {
  install(Vue, options) {
    const { components } = options;
    Object.keys(components).forEach(key => {
      Vue.component(key, components[key]);
    });
  },
}`;
  const components = meta.map(info => {
    const source = createComponentFromInfo(info);
    return `export const Cv${info.moduleName} = ${source}`;
  });
  const source = `${MODULE_IMPORTS}
${components.join('\n')}
${install}`;

  return prettier.format(source, prettierOptions);
}

function createModuleFromInfo(info) {
  const source = `${MODULE_IMPORTS}
export default ${createComponentFromInfo(info)};`;
  return prettier.format(source, prettierOptions);
}

function createComponentFromInfo(info) {
  const { descriptor, moduleName, size } = info;
  const { attrs, content } = descriptor;
  return `{
  name: 'Cv${moduleName}',
  props: {
    ariaLabel: String,
    ariaLabelledBy: String,
    height: {
      type: String,
      default: '${attrs.height}',
    },
    title: String,
    viewBox: {
      type: String,
      default: '${attrs.viewBox}',
    },
    width: {
      type: String,
      default: '${attrs.width}',
    },
    preserveAspectRatio: {
      type: String,
      default: 'xMidYMid meet',
    },
    tabindex: String,
    xmlns: {
      type: String,
      default: 'http://www.w3.org/2000/svg',
    },
  },
  render(createElement) {
    const { ariaLabel, ariaLabelledBy, ...rest } = this.$props;
    const attrs = getAttributes({
      ...rest,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
    });
    return createElement('svg', {
      attrs,
      on: this.$listeners,
    }, [
      this.$slots.title,
      ${content.map(toString).join(', ')},
      this.$slots.default,
    ]);
  },
};`;
}

function toString(descriptor) {
  const { elem, attrs = {}, content = [] } = descriptor;
  if (content.length === 0) {
    return `createElement('${elem}', { attrs: ${JSON.stringify(attrs)} })`;
  }
  return `createElement('${elem}', { attrs: ${JSON.stringify(
    attrs
  )} }, [${content.map(toString).join(', ')}])`;
}

module.exports = {
  createModuleFromInfo,
  createEntrypointFromMeta,
};
