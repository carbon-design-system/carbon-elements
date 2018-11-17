'use strict';

const { reporter } = require('@carbon/cli-reporter');
const { pascal } = require('change-case');
const del = require('del');
const fs = require('fs-extra');
const path = require('path');
const prettier = require('prettier');
const { rollup } = require('rollup');
const { flatMapAsync } = require('./tools');
const { parse } = require('./svgo');
const optimize = require('./optimize');

const blacklist = new Set(['.DS_Store']);

const prettierOptions = {
  parser: 'babylon',
  printWidth: 80,
  singleQuote: true,
  trailingComma: 'es5',
};

function createIconSource(file, descriptor) {
  const { basename, prefix, size } = file;
  return {
    source: prettier.format(
      `export default ${JSON.stringify(descriptor)};`,
      prettierOptions
    ),
    moduleName: getModuleName(basename, size, prefix),
  };
}

async function createDescriptorFromFile(file) {
  const { basename, size, optimized, original, prefix } = file;
  const info = await parse(optimized.data, basename);
  const descriptor = {
    ...info,
    name: basename,
  };

  if (size) {
    descriptor.size = size;
    descriptor.attrs.width = size;
    descriptor.attrs.height = size;
    descriptor.attrs.viewBox = original
      ? `0 0 ${original} ${original}`
      : `0 0 ${size} ${size}`;
  } else {
    const [width, height] = info.attrs.viewBox.split(' ').slice(2);
    descriptor.attrs.width = width;
    descriptor.attrs.height = height;
  }

  const { source, moduleName } = createIconSource(file, descriptor);

  return {
    ...file,
    descriptor,
    source,
    moduleName,
  };
}

const SCALED_SIZES = [24, 20];

async function build(source, { cwd } = {}) {
  const optimized = await optimize(source, { cwd });

  reporter.info(`Building the module source for ${optimized.length} icons...`);

  const packageJson = await findPackageJsonFor(cwd);
  const {
    main: commonjsEntrypoint = 'lib/index.js',
    module: esmEntrypoint = 'es/index.js',
    umd: umdEntrypoint = 'umd/index.js',
  } = packageJson;
  const esmFolder = path.dirname(esmEntrypoint);
  const bundles = [
    {
      type: 'cjs',
      directory: path.join(cwd, path.dirname(commonjsEntrypoint)),
    },
    {
      type: 'umd',
      directory: path.join(cwd, path.dirname(umdEntrypoint)),
    },
  ];

  reporter.info(
    `Building bundle types: [${bundles.map(b => b.type).join(', ')}] ` +
      `under: [${bundles.map(b => b.directory).join(', ')}]`
  );

  reporter.info('Building module source...');

  const files = await flatMapAsync(optimized, async file => {
    const { size } = file;
    if (size === 32) {
      const defaultIcon = await createDescriptorFromFile(file);
      const scaledIcons = await Promise.all(
        SCALED_SIZES.map(size =>
          createDescriptorFromFile({
            ...file,
            size,
            original: 32,
          })
        )
      );
      return [defaultIcon, ...scaledIcons];
    }
    return Object.assign({}, file, await createDescriptorFromFile(file));
  });

  reporter.info('Building JavaScript modules...');

  await Promise.all(
    files.map(async file => {
      const { basename, descriptor, moduleName, prefix, size, source } = file;
      const formattedPrefix = prefix.filter(step => isNaN(step));
      const moduleFolder = path.join(esmFolder, ...formattedPrefix, basename);
      const jsFilepath = path.join(
        moduleFolder,
        size ? `${size}.js` : 'index.js'
      );

      await fs.ensureDir(moduleFolder);
      await fs.writeFile(jsFilepath, source);

      await Promise.all(
        bundles.map(async ({ type, directory }) => {
          const bundle = await rollup({
            input: jsFilepath,
          });
          const outputOptions = {
            format: type,
            file: jsFilepath.replace(/es/, directory),
          };
          if (type === 'umd') {
            outputOptions.name = moduleName;
          }
          return bundle.write(outputOptions);
        })
      );
    })
  );

  reporter.info('Building module entrypoints...');
  const moduleNames = files.map(file => file.moduleName);
  const entrypoint = prettier.format(
    files.reduce((acc, file) => {
      const { moduleName, descriptor } = file;
      return (
        acc + `\nexport const ${moduleName} = ${JSON.stringify(descriptor)}`
      );
    }, ''),
    prettierOptions
  );
  await fs.writeFile(esmEntrypoint, entrypoint);

  const entrypointBundle = await rollup({
    input: esmEntrypoint,
  });
  await Promise.all(
    bundles.map(({ type, directory }) => {
      const outputOptions = {
        format: type,
        file: esmEntrypoint.replace(/es/, directory),
      };
      if (type === 'umd') {
        outputOptions.name = 'CarbonIcons';
      }
      return entrypointBundle.write(outputOptions);
    })
  );

  reporter.success('Done! 🎉');
}

function getModuleName(name, size, prefixParts) {
  const prefix = prefixParts
    .filter(size => isNaN(size))
    .map(pascal)
    .join('');

  if (prefix !== '') {
    if (!size) {
      return prefix + pascal(name) + 'Glyph';
    }
    return prefix + pascal(name) + size;
  }

  if (!size) {
    return pascal(name) + 'Glyph';
  }

  if (isNaN(name[0])) {
    return pascal(name) + size;
  }

  return '_' + pascal(name) + size;
}

async function findPackageJsonFor(filepath) {
  let workingDirectory = path.dirname(filepath);
  while (workingDirectory !== path.dirname(workingDirectory)) {
    const files = await fs.readdir(workingDirectory);
    if (files.indexOf('package.json') !== -1) {
      return fs.readFile(path.join(workingDirectory, 'package.json'), 'utf8');
    }
    workingDirectory = path.dirname(workingDirectory);
  }
  throw new Error(
    `Unable to find a corresponding \`package.json\` for file: \`${filepath}\``
  );
}

module.exports = build;
