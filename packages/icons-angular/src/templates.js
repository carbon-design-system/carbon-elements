const formatImports = iconInfo => {
  let value = "";
  for (const icon of iconInfo) {
    value += `import { ${icon.name} } from "./${icon.dir}";\n`;
  }
  return value;
}

formatDeclarations = iconInfo => {
  let value = "";
  for (const icon of iconInfo) {
    value += `${icon.name},\n`;
  }
  return value;
}

const indexTemplate = () => `
export * from "./IconModule";
`;

const moduleTemplate = iconInfo => `
import { NgModule } from "@angular/core";

${formatImports(iconInfo)}

@NgModule({
	declarations: [
    ${formatDeclarations(iconInfo)}
  ],
	exports: [
    ${formatDeclarations(iconInfo)}
  ]
})
export class IconModule {}

export {
  ${formatDeclarations(iconInfo)}
};
`;

const componentTemplate = (iconName, className, svg) => `
import {
	Component,
	ElementRef,
  Input,
  AfterViewInit
} from "@angular/core";

@Component({
	selector: "ibm-icon-${iconName}",
	template: \`${svg}\`
})
export class ${className} implements AfterViewInit {
	/**
	 * Pass down \`classList\` from host element.
	 */
	get classList(): any {
		return this.elementRef.nativeElement.classList;
	}

	/**
	 * Initialize the component
	 */
	constructor(protected elementRef: ElementRef) {}

	ngAfterViewInit() {
    const root: HTMLElement = this.elementRef.nativeElement;
    // root.classList = this.classList;
	}
}
`;

module.exports = {
  moduleTemplate,
  componentTemplate,
  indexTemplate
};
