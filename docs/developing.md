# Developing

<!-- prettier-ignore-start -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Installing dependencies](#installing-dependencies)
- [Packages](#packages)
- [Common tasks](#common-tasks)
- [Bundler](#bundler)
  - [Check](#check)
  - [Measure](#measure)
- [FAQ](#faq)
    - [CircleCI is failing saying that it cannot find a dependency in offline mode](#circleci-is-failing-saying-that-it-cannot-find-a-dependency-in-offline-mode)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!-- prettier-ignore-end -->

## Setting up your machine

Before getting started, you will need to install some of the tools we use to build the website. These tools also can be used to contribute to some of our other projects, as well! To start off, you'll want to install a version of Node.js `npm`, and `yarn`. These are the powerhouse tools that drive most of the work we do in JavaScript.

While you can install Node.js directly from [their website](https://nodejs.org/en/), we recommend using a tool called [`nvm`](https://github.com/creationix/nvm#install-script). Node.js can change versions multiple times in a year, and this tool helps to easily update to the latest version.

To install `nvm`, you can follow their [install instructions](https://github.com/creationix/nvm#install-script). If this is your first time working in the terminal, all you will need to do is open up your terminal of choice (either Terminal.app or iTerm) and run the following command next to the prompt:

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

This command will install `nvm` for you, allowing you to run `nvm` commands directly from your terminal. When this command completes, you should see a message that looks like the following:

```bash
=> Close and reopen your terminal to start using nvm or run the following to use it now:

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
```

After you see this, you will need to run:

```bash
echo 'export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm' > ~/.bash_profile
```

When this is complete, you should open a new tab in your terminal and close the one that you were using to enter in the commands above.

_Tip: to open a new tab, you can use `CMD`+`T`_

In this new tab, you should be able to run the following command from `nvm`:

```bash
nvm install v8
nvm alias default v8
```

This will install Node.js v8.x and alias is as your default Node.js version.

Now, each time you open the terminal you should be able to run the command `node -v` and see an output that `v8.x.y`. In addition to installing Node.js and the `node` command, this work will also install the `npm` tool for you to use in the terminal.

To find out how to install Yarn, head to [this section]().

### Install Homebrew

[Homebrew](https://brew.sh/) is a tool used for installing software on MacOS machines. Installing this on your machine is completely optional, but it can make it easier to install other tools that might be relevant while working on our projects. To install Homebrew, you can run the following command in your terminal:

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### Install Yarn

[Yarn](https://yarnpkg.com/en/) is an alternative to the `npm` we use for the website. You can install Yarn by using Homebrew, or by following their install instructions [here](https://yarnpkg.com/en/docs/install#alternatives-stable).

If you're using homebrew, you can install Yarn by running:

```bash
brew install yarn --without-node
```

## Installing dependencies

Carbon Elements is built using a collection of packages all built in the same
git repository. You might have heard this setup described as a
[monorepo](https://en.wikipedia.org/wiki/Monorepo).

As a result, we use two pieces of tooling to help us managing installing
dependencies and publishing our packages. These include:

- [Yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) for handling
  dependencies across all packages
- [Lerna](https://lernajs.io/) for publishing packages, tagging versions, and
  more

In order for you to install all the dependencies in this project, you'll need to
[install Yarn](https://yarnpkg.com/en/docs/install) and run the following
command in your terminal:

```bash
yarn install
```

This will install all of the dependencies for every package in our project. In
addition, it allows us to link between packages that we are developing. In other
words, if we are building an `icons` package and an `icons-react` package then
we could have our `icons-react` package depend on our local `icons` package.

This strategy is particularly useful during development, and tooling like Lerna
will pick up on when packages are linked in this way and will automatically
update versions when publishing new versions of packages.

Next up, you'll most likely want to build all of the package files so that
things don't fail while you are working on a package. To do this, you can run
the following command:

```bash
yarn build
```

Afterwards, you should be good to go! For more information about how we handle
dependencies, definitely take a look at our write-up
[here](/docs/dependencies.md).

## Packages

As mentioned earlier, Carbon Elements is architected as a monorepo that is
composed of multiple packages. Some of these packages are meant to be the code
accompaniment for the IBM Design Language (IDL), while others are meant to augment or
assist in building those packages.

For the IBM Design Language, we output the following packages:

| Name             | Descripton                                                                                                                                                          |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@carbon/colors` | Provides the JavaScript and SCSS assets for IDL colors and tokens                                                                                                   |
| `@carbon/grid`   | Provides a Flexbox-based set of classes to be used for building using the IDL grid                                                                                  |
| `@carbon/icons`  | Provides optimized SVG assets and JavaScript assets for using icons in Vanilla JS, or to build a [framework icon package](/docs/guides/building-an-icon-library.md) |
| `@carbon/layout` | Provides utilities and helpers in SCSS and JavaScript for constructing layouts based on the IDL                                                                     |
| `@carbon/motion` | Provides utilities and helpers for implementing motion following the IDL                                                                                            |
| `@carbon/type`   | Provides utilities and helpers for typography following the IDL                                                                                                     |

In addition, we also include some packages that either use these IDL-based
packages or are used to help build these packages. These include:

| Name                   | Descripton                                                                                                                    |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `@carbon/bundler`      | Used for bundling JavaScript assets, measuring package size, and more                                                         |
| `@carbon/cli-reporter` | Used internally in build processes to have structured, friendly log messages                                                  |
| `@carbon/icon-helpers` | Helpers for determining icon attributes, or printing icon descriptors from `@carbon/icons`. Useful in framework icon packages |

## Common tasks

While working on Carbon Elements, here are some of the top-level tasks that you
might want to run:

| Command                           | Usage                                                                                                         |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `yarn build`                      | Uses `lerna` to run the `build` script in each package                                                        |
| `yarn ci-check`                   | Runs all of our Continuous Integration checks locally                                                         |
| `yarn clean`                      | Resets the state of the project by removing all `node_modules` and running the `clean` script in each package |
| `yarn doctoc`                     | Runs `doctoc` on all files in the `doctoc` directory                                                          |
| `yarn examples`                   | Builds the project and publishes examples to GitHub pages. Defaults to your `gh-pages` branch                 |
| `yarn format`, `yarn format:diff` | Format files using prettier, check if files have been formatted                                               |
| `yarn lint`                       | Run all of our linters on our source files                                                                    |
| `yarn test`                       | Run all of our JavaScript-based tests using [Jest](https://jestjs.io/)                                        |

In addition, you can use `yarn` to run `bin` files using the `yarn <bin>`
syntax. For example, if you wanted to use `lerna` to run a script in every
package you could do the following:

```bash
# Access $(yarn bin)/lerna and pass `run build` to the executable
yarn lerna run build
```

## Bundler

### Check

The `@carbon/bundler` package has a command called `check` that asserts that all
of the files included in the glob can be compiled successfully. Currently, this
is used to verify that all of our `scss` files can be imported individually
without breaking compilation.

You can run this command by doing the following:

```bash
yarn bundler check --ignore '**/@(node_modules|examples)/**' 'packages/**/*.scss'
```

### Measure

The `@carbon/bundler` package has a command that is used for measuring the size
of our package bundles called `measure`. Currently, it only supports measuring
`scss` bundles but in the future we would love to add `js` support!

You can run this command by doing the following:

```bash
yarn bundler measure --ignore '**/@(examples|node_modules)/**' 'packages/**/*.scss'
```

This should generate a table once it is finished running that lists out all of
the bundles and any module that can be imported. It lists out general size
information, in addition to any changes in overall size. Results are then saved
in `results.json` in the root of the project.

## FAQ

#### CircleCI is failing saying that it cannot find a dependency in offline mode

Most likely this is due to Yarn mistakenly removing, or forgetting to add, a
dependency to our offline mirror. Typically, running the following set of
commands should reset the project back to a valid state and should bring back
any missing dependencies or fetch new ones.

```bash
yarn clean
yarn cache clean
yarn
```
