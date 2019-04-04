# Sass functions, mixins, placeholders, variables

These public Sass functions, mixins, placeholders, and variables are currently supported. Deprecated items are at the bottom of this document.

<!-- toc -->

- [@carbon/import-once](#carbonimport-once)
  - [imported-modules [variable]](#imported-modules-variable)
  - [exports [mixin]](#exports-mixin)

<!-- tocstop -->

## @carbon/import-once

### imported-modules [variable]

Used by `exports` mixin to track which modules have been imported

<details>
<summary>Source code</summary>

```scss
$imported-modules: ();
```

</details>

- **Type**: `Map`
- **Used by**:
  - [exports [mixin]](#exports-mixin)

### exports [mixin]

Module export mixin that helps making sure a module is imported once and only once

<details>
<summary>Source code</summary>

```scss
@mixin exports($name, $warn: false) {
  @if (index($imported-modules, $name) == null) {
    $imported-modules: append($imported-modules, $name) !global;
    @content;
  } @else if $warn == true {
    @warn 'Module `#{$name}` has already been imported.';
  }
}
```

</details>

- **Parameters**:

| Name    | Description                                  | Type     | Default value |
| ------- | -------------------------------------------- | -------- | ------------- |
| `$name` | name of exported module                      | `String` | —             |
| `$warn` | warn when a module has been already imported | `Bool`   | `false`       |

- **Content**: Declaration blocks to be imported
- **Requires**:
  - [imported-modules [variable]](#imported-modules-variable)
