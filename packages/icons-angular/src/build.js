const fs = require("fs-extra");
const { join, resolve } = require("path");
const { param, lower, pascal } = require("change-case");
const { componentTemplate, moduleTemplate, indexTemplate, storyTemplate } = require("./templates");
const ngc = require("@angular/compiler-cli/src/main");

// generate a safe class name
const formatClassName = (fileName, size) => {
  const name = fileName.replace(".svg", "");
  if (isNaN(name[0])) {
    return `${pascal(name)}${pascal(size)}`;
  }
  return `_${pascal(name)}${pascal(size)}`;
}

async function generateComponents() {
  const svgPath = resolve(require.resolve("@carbon/icons"), "../../svg");
  const dirs = await fs.readdir(svgPath);
  const exportList = [];
  // loop through the directories and svgs
  for (const dir of dirs) {
    const svgs = await fs.readdir(join(svgPath, dir))
    for (const svg of svgs) {
      // various names we need to generate the component
      const dirName = pascal(svg.replace(".svg", ""));
      const className = formatClassName(svg, dir);
      const selectorName = `${param(lower(svg.replace(".svg", "")))}${pascal(dir)}`;
      // find the source svg we'll use in the template
      const rawSvg = await fs.readFile(join(svgPath, dir, svg));
      const dirExists = await fs.exists(join("ts", dirName));
      // try to write out the component
      try {
        if (!dirExists) {
          await fs.mkdir(join("ts", dirName))
        }
        await fs.writeFile(join("ts", dirName, `${dir}.ts`), componentTemplate(selectorName, className, rawSvg, dir));
        exportList.push({
          name: className,
          selector: selectorName,
          dir: join(dirName, dir),
          size: dir
        });
      } catch (err) {
        console.error(err);
      }
    }
  }
  try {
    await fs.writeFile(join("ts", "IconModule.ts"), moduleTemplate(exportList));
    await fs.writeFile(join("ts", "index.ts"), indexTemplate());
  } catch (err) {
    console.log(err);
  }
  return exportList;
}

async function buildExamples(icons) {
  await fs.copy("lib", "examples/storybook/lib");
  let filesToWrite = [];
  for (const icon of icons) {
    filesToWrite.push(fs.writeFile(`examples/storybook/stories/${icon.selector}.stories.ts`, storyTemplate(icon)));
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
  const icons = await generateComponents();
  console.log("Compiling and generating modules...");
  // run the angular compiler over everything
  ngc.main(["-p", "./config/tsconfig-aot.json"]);
  // build the storybook examples
  console.log("Generating storybook examples...");
  buildExamples(icons);
}

module.exports = build;
