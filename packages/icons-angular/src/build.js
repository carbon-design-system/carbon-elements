const icons = require("@carbon/icons/meta.json");
const { toString } = require("@carbon/icon-helpers");
const fs = require("fs-extra");
const { join, dirname } = require("path");
const { param } = require("change-case");
const { componentTemplate, moduleTemplate, indexTemplate, storyTemplate } = require("./templates");
const ngc = require("@angular/compiler-cli/src/main");

async function generateComponents() {
  // loop through the icons meta array
  for (const icon of icons) {
    const className = icon.moduleName;
    const selectorName = param(icon.moduleName);
    const rawSvg = toString(icon.descriptor);
    const dirExists = await fs.exists(join("ts", icon.basename));
    const outputPath = icon.outputOptions.file.replace("es", "ts").replace(".js", ".ts");
    // try to write out the component
    try {
      if (!dirExists) {
        await fs.ensureDir(dirname(outputPath));
      }
      await fs.writeFile(outputPath, componentTemplate(selectorName, className, rawSvg, icon.descriptor.attrs));
    } catch (err) {
      console.error(err);
    }
  }
  // write out the module
  try {
    await fs.writeFile(join("ts", "IconModule.ts"), moduleTemplate(icons));
    await fs.writeFile(join("ts", "index.ts"), indexTemplate());
  } catch (err) {
    console.log(err);
  }
}

async function buildExamples() {
  await fs.copy("lib", "examples/storybook/lib");
  const grouped = new Map();
  for (const icon of icons) {
    if (!grouped.has(icon.basename)) {
      grouped.set(icon.basename, []);
    }
    grouped.get(icon.basename).push(icon);
  }
  let filesToWrite = [];
  for (const [basename, icons] of grouped) {
    filesToWrite.push(fs.writeFile(`examples/storybook/stories/${basename}.stories.ts`, storyTemplate(basename, icons)));
  }
  await Promise.all(filesToWrite);
}

async function build() {
  console.log("Cleaning build dirs...");
  try {
    await Promise.all([
      fs.remove("ts"),
      fs.remove("lib"),
      fs.remove("waste"),
      fs.remove("examples/storybook/lib"),
      fs.remove("examples/storybook/stories")
    ]);

    await Promise.all([
      fs.mkdir("examples/storybook/stories"),
      fs.mkdir("ts")
    ]);
  } catch (err) {
    console.error(err);
  }
  console.log("Generating source components...");
  await generateComponents();
  console.log("Compiling and generating modules...");
  // run the angular compiler over everything
  ngc.main(["-p", "./config/tsconfig-aot.json"]);
  // build the storybook examples
  console.log("Generating storybook examples...");
  buildExamples();
}

module.exports = build;
