# Sass functions, mixins, placeholders, variables

These public Sass functions, mixins, placeholders, and variables are currently supported. Deprecated items are at the bottom of this document.

<!-- toc -->

- [@carbon/icons](#carbonicons)
  - [carbon--icons [mixin]](#carbon--icons-mixin)

<!-- tocstop -->

## @carbon/icons

### carbon--icons [mixin]

Makes SVGs accessible in high contrast mode

<details>
<summary>Code</summary>

```scss
$carbon--icons: {
  @media screen and (-ms-high-contract: active) {
    svg {
      fill: ButtonText;
    }
  }
}
```

</details>

- **Links**:
  - [Carbon-elements #345](https://github.com/IBM/carbon-elements/issues/345#issuecomment-466577293)
