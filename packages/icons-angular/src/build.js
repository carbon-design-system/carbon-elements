const icons = require("@carbon/icons");
const fs = require("fs-extra");
const { join, resolve } = require("path");
const { param, lower, pascal } = require("change-case");
const { componentTemplate, moduleTemplate, indexTemplate } = require("./templates");
const ngc = require("@angular/compiler-cli/src/main");

const formatClassName = (fileName, size) => {
  const name = fileName.replace(".svg", "");
  if (isNaN(name[0])) {
    return `${pascal(name)}${pascal(size)}`;
  }
  return `_${pascal(name)}${pascal(size)}`;
}

async function generateComponents() {
  await fs.mkdir("ts");
  const svgPath = resolve(require.resolve("@carbon/icons"), "../../svg");
  const dirs = await fs.readdir(svgPath);
  const exportList = [];
  for (const dir of dirs) {
    const svgs = await fs.readdir(join(svgPath, dir))
    for (const svg of svgs) {
      const dirName = pascal(svg.replace(".svg", ""));
      const className = formatClassName(svg, dir);
      const selectorName = `${param(lower(svg.replace(".svg", "")))}${pascal(dir)}`;
      const rawSvg = await fs.readFile(join(svgPath, dir, svg));
      const dirExists = await fs.exists(join("ts", dirName));
      try {
        if (!dirExists) {
          await fs.mkdir(join("ts", dirName))
        }
        await fs.writeFile(join("ts", dirName, `${dir}.ts`), componentTemplate(selectorName, className, rawSvg));
        exportList.push({
          name: className,
          dir: join(dirName, dir)
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
}

async function build() {
  console.log("Cleaning build dirs...");
  try {
    await fs.remove("ts");
    await fs.remove("lib");
    await fs.remove("waste");
  } catch (err) {
    console.error(err);
  }
  console.log("Generating source components...");
  await generateComponents();
  console.log("Compiling and generating modules...");
  ngc.main(["-p", "./config/tsconfig-aot.json"]);
}

module.exports = build;
