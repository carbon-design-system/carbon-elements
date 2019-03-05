/**
 * Copyright IBM Corp. 2018, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @jest-environment jsdom
 */

'use strict';

const Module = require('module');
const rollup = require('rollup').rollup;
const virtual = require('rollup-plugin-virtual');
const vm = require('vm');
// Include version of Vue that has built-in template support
const Vue = require('vue/dist/vue');

async function getModuleFromString(
  string,
  { external = ['@carbon/icon-helpers'], name = '<MockIconModule>' } = {}
) {
  const bundle = await rollup({
    input: '__entrypoint__',
    external,
    plugins: [
      virtual({
        __entrypoint__: string,
      }),
    ],
  });
  const { code } = await bundle.generate({
    format: 'cjs',
  });
  const sandbox = {
    console,
    module: new Module(name),
    require,
  };
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox);

  return sandbox.module.exports;
}

describe('createFromInfo', () => {
  describe('createModuleFromInfo', () => {
    let createModuleFromInfo;
    let descriptor;
    let info;
    let mountNode;

    beforeEach(() => {
      createModuleFromInfo = require('../createFromInfo').createModuleFromInfo;
      descriptor = {
        attrs: {
          width: 16,
          height: 16,
          viewBox: '0 0 16 16',
        },
        content: [
          {
            elem: 'circle',
            attrs: {
              cx: 8,
              cy: 8,
              r: 8,
            },
          },
        ],
      };
      info = {
        descriptor,
        moduleName: 'MockIcon',
      };
      mountNode = document.createElement('div');
      document.body.appendChild(mountNode);
    });

    afterEach(() => {
      mountNode.parentNode.removeChild(mountNode);
    });

    it('should create a renderable component', async () => {
      const moduleSource = createModuleFromInfo(info);
      const MockIconComponent = await getModuleFromString(moduleSource);
      const rootNode = mountNode.appendChild(document.createElement('div'));
      const originalConsoleError = console.error;

      console.error = jest.fn();

      new Vue({
        el: rootNode,
        components: {
          [MockIconComponent.name]: MockIconComponent,
        },
        template: `<MockIcon />`,
      });

      // Verify that we can render without errors
      expect(console.error).not.toHaveBeenCalled();

      console.error = originalConsoleError;
    });

    it('should treat focusable as a string', async () => {
      const moduleSource = createModuleFromInfo(info);
      const MockIconComponent = await getModuleFromString(moduleSource);

      const defaultNode = mountNode.appendChild(document.createElement('div'));
      const defaultTestId = 'default';

      const focusableNode = mountNode.appendChild(
        document.createElement('div')
      );
      const focusableTestId = 'focusable';

      const getContainer = testId =>
        document.querySelector(`[data-test-id="${testId}"] > svg`);

      new Vue({
        el: defaultNode,
        components: {
          [MockIconComponent.name]: MockIconComponent,
        },
        template: `<div data-test-id="${defaultTestId}"><MockIcon /></div>`,
      });

      expect(getContainer(defaultTestId).getAttribute('focusable')).toBe(
        'false'
      );

      new Vue({
        el: focusableNode,
        components: {
          [MockIconComponent.name]: MockIconComponent,
        },
        template: `<div data-test-id="${focusableTestId}"><MockIcon focusable="true" /></div>`,
      });

      expect(getContainer(focusableTestId).getAttribute('focusable')).toBe(
        'true'
      );
    });

    it('should support rendering a title in the SVG markup', async () => {
      const moduleSource = createModuleFromInfo(info);
      const MockIconComponent = await getModuleFromString(moduleSource);
      const node = mountNode.appendChild(document.createElement('div'));
      const testId = 'title';

      new Vue({
        el: node,
        components: {
          [MockIconComponent.name]: MockIconComponent,
        },
        template: `
<div data-test-id="${testId}">
  <MockIcon>
    <template v-slot:title>
      <title>Title</title>
    </template>
  </MockIcon>
</div>
`,
      });

      const children = Array.from(
        document.querySelector(`[data-test-id="${testId}"] svg`).children
      );
      expect(children[0].tagName).toBe('title');

      for (let i = 1; i < descriptor.content.length; i++) {
        // We do i + 1 here since 0 is used for title above
        expect(children[i].tagName).toBe(descriptor.content[i].elem);
      }
    });

    it('should support custom class names and styles', async () => {
      const moduleSource = createModuleFromInfo(info);
      const MockIconComponent = await getModuleFromString(moduleSource);
      const node = mountNode.appendChild(document.createElement('div'));
      const testId = 'custom-styles';

      new Vue({
        el: node,
        components: {
          [MockIconComponent.name]: MockIconComponent,
        },
        template: `
<div data-test-id="${testId}">
  <MockIcon class="foo" v-bind:style="{ background: 'black' }" />
</div>
`,
      });

      // TODO: custom style should not override `style` from icon-helpers
    });

    it.todo('should be focusable if an aria label and tab index is used');
  });
});
