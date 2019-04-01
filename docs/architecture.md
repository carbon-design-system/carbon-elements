# Architecture

## Packages shipping Sass

If a package in elements is shipping Sass-based files, then it will follow a certain number of conventions.

The first convention is that each of these packages will have a `scss` folder that contains all the Sass files for the package. For example, `@carbon/colors` would have a folder at `@carbon/colors/scss` in the import path for Sass.

To include the entire package, there are two options within this `scss` folder: the `index.scss` entrypoint for modules and an entrypoint for inline support. The `index.scss` entrypoint would be found at `@carbon/colors/scss/index.scss` and would work for teams that are using tools like eyeglass or have already setup `node-sass`'s `includePaths` option to include `node_modules`.

The other entrypoint option is for inline support. This option will work without having to use eyeglass or something like `node-sass`'s `includePaths` option. Each package that ships a `scss` folder will include this entrypoint, and the name will reflect the package name. For example, `@carbon/colors` would have an entrypoint available at `@carbon/colors/scss/colors.scss`.
