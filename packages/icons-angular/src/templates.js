const { param } = require("change-case");

const formatImports = iconMeta => {
  let value = "";
  for (const icon of iconMeta) {
    value += `import { ${icon.moduleName} } from "./${icon.outputOptions.file.replace("es/", "").replace(".js", "")}";\n`;
  }
  return value;
}

formatDeclarations = iconMeta => {
  let value = "";
  for (const icon of iconMeta) {
    value += `${icon.moduleName},\n`;
  }
  return value;
}

const indexTemplate = () => `
export * from "./IconModule";
`;

const moduleTemplate = iconMeta => `
import { NgModule } from "@angular/core";

${formatImports(iconMeta)}

@NgModule({
	declarations: [
    ${formatDeclarations(iconMeta)}
  ],
	exports: [
    ${formatDeclarations(iconMeta)}
  ]
})
export class IconModule {}

export {
  ${formatDeclarations(iconMeta)}
};
`;

const componentTemplate = (iconName, className, svg, size) => `
import { Component, ElementRef, Input } from "@angular/core";

@Component({
	selector: "ibm-icon-${iconName}",
	template: \`${svg}\`
})
export class ${className} {
  @Input() ariaLabel: string;
  @Input() ariaLabelledby: string;
  @Input() focusable: boolean = null;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    const size: string = \`${size}\`;
    const svg = this.elementRef.nativeElement.querySelector("svg");
    if (size === "glyph") {
      svg.style.width = \`\$\{svg.viewBox.baseVal.width\}px\`;
      svg.style.height = \`\$\{svg.viewBox.baseVal.height\}px\`;
    } else {
      svg.style.width = \`\$\{size\}px\`;
      svg.style.height = \`\$\{size\}px\`;
    }

    if (this.ariaLabel || this.ariaLabelledby) {
      // set attrs for interactive element
      svg.setAttribute("role", "img");
      // override anything the user has set
      this.focusable = true;
      // set label/labelledby
      if (this.ariaLabel) {
        svg.setAttribute("aria-label", this.ariaLabel);
      }
      if (this.ariaLabelledby) {
        svg.setAttribute("aria-labelledby", this.ariaLabelledby);
      }
    } else {
      // hide it from screen readers since it shouldn't be interactive
      svg.setAttribute("aria-hidden", true);
    }

    // set focusable if it has a value
    if (this.focusable !== null) {
      svg.setAttribute("focusable", this.focusable);
    }
  }
}
`;


const storyTemplate = icon => `
import { storiesOf, moduleMetadata } from "@storybook/angular";

import { IconModule } from "./../lib";

storiesOf("${icon.moduleName}", module)
  .addDecorator(moduleMetadata({
    imports: [ IconModule ],
  }))
  .add("${icon.moduleName}", () => ({
    template: \`<ibm-icon-${param(icon.moduleName)}></ibm-icon-${param(icon.moduleName)}>\`
  }));
`;

module.exports = {
  moduleTemplate,
  componentTemplate,
  indexTemplate,
  storyTemplate
};
