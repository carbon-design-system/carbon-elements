# Sass functions, mixins, placeholders, variables

These public Sass functions, mixins, placeholders, and variables are currently supported. Deprecated items are at the bottom of this document.

<!-- toc -->

- [@carbon/colors](#carboncolors)
  - [carbon--colors [mixin]](#carbon--colors-mixin)
- [@carbon/themes](#carbonthemes)
  - [carbon--theme [mixin]](#carbon--theme-mixin)
  - [carbon--theme--white [variable]](#carbon--theme--white-variable)
  - [carbon--theme--g10 [variable]](#carbon--theme--g10-variable)
  - [carbon--theme--g90 [variable]](#carbon--theme--g90-variable)
  - [carbon--theme--g100 [variable]](#carbon--theme--g100-variable)
  - [carbon--theme [variable]](#carbon--theme-variable)
  - [interactive-01 [variable]](#interactive-01-variable)
  - [interactive-02 [variable]](#interactive-02-variable)
  - [interactive-03 [variable]](#interactive-03-variable)
  - [interactive-04 [variable]](#interactive-04-variable)
  - [ui-background [variable]](#ui-background-variable)
  - [ui-01 [variable]](#ui-01-variable)
  - [ui-02 [variable]](#ui-02-variable)
  - [ui-03 [variable]](#ui-03-variable)
  - [ui-04 [variable]](#ui-04-variable)
  - [ui-05 [variable]](#ui-05-variable)
  - [text-01 [variable]](#text-01-variable)
  - [text-02 [variable]](#text-02-variable)
  - [text-03 [variable]](#text-03-variable)
  - [text-04 [variable]](#text-04-variable)
  - [icon-01 [variable]](#icon-01-variable)
  - [icon-02 [variable]](#icon-02-variable)
  - [icon-03 [variable]](#icon-03-variable)
  - [link-01 [variable]](#link-01-variable)
  - [field-01 [variable]](#field-01-variable)
  - [field-02 [variable]](#field-02-variable)
  - [inverse-01 [variable]](#inverse-01-variable)
  - [inverse-02 [variable]](#inverse-02-variable)
  - [support-01 [variable]](#support-01-variable)
  - [support-02 [variable]](#support-02-variable)
  - [support-03 [variable]](#support-03-variable)
  - [support-04 [variable]](#support-04-variable)
  - [overlay-01 [variable]](#overlay-01-variable)
  - [focus [variable]](#focus-variable)
  - [hover-primary [variable]](#hover-primary-variable)
  - [active-primary [variable]](#active-primary-variable)
  - [hover-primary-text [variable]](#hover-primary-text-variable)
  - [hover-secondary [variable]](#hover-secondary-variable)
  - [active-secondary [variable]](#active-secondary-variable)
  - [hover-tertiary [variable]](#hover-tertiary-variable)
  - [active-tertiary [variable]](#active-tertiary-variable)
  - [hover-ui [variable]](#hover-ui-variable)
  - [active-ui [variable]](#active-ui-variable)
  - [selected-ui [variable]](#selected-ui-variable)
  - [hover-selected-ui [variable]](#hover-selected-ui-variable)
  - [hover-danger [variable]](#hover-danger-variable)
  - [active-danger [variable]](#active-danger-variable)
  - [hover-row [variable]](#hover-row-variable)
  - [visited-link [variable]](#visited-link-variable)
  - [disabled-01 [variable]](#disabled-01-variable)
  - [disabled-02 [variable]](#disabled-02-variable)
  - [disabled-03 [variable]](#disabled-03-variable)
  - [highlight [variable]](#highlight-variable)
- [general](#general)
  - [/// Used to intialize the default properties for a column class, most notably](#-used-to-intialize-the-default-properties-for-a-column-class-most-notably)
  - [/// Define the properties for a selector assigned to a row in the grid system.](#-define-the-properties-for-a-selector-assigned-to-a-row-in-the-grid-system)
  - [/// Add no-gutter and no-gutter-- [css]](#-add-no-gutter-and-no-gutter---css)
  - [/// Add hang--left and hang--right classes for a given gutter. These classes are](#-add-hang--left-and-hang--right-classes-for-a-given-gutter-these-classes-are)
  - [carbon--aspect-ratios [variable]](#carbon--aspect-ratios-variable)
  - [/// The aspect ratios that are used to generate corresponding aspect ratio](#-the-aspect-ratios-that-are-used-to-generate-corresponding-aspect-ratio)
  - [/// Create the container for a grid. Will cause full-bleed for the grid unless](#-create-the-container-for-a-grid-will-cause-full-bleed-for-the-grid-unless)
  - [carbon--grid [mixin]](#carbon--grid-mixin)
  - [exports [mixin]](#exports-mixin)
  - [carbon--breakpoint-next [function]](#carbon--breakpoint-next-function)
  - [carbon--is-smallest-breakpoint [function]](#carbon--is-smallest-breakpoint-function)
  - [carbon--largest-breakpoint-name [function]](#carbon--largest-breakpoint-name-function)
  - [carbon--breakpoint-infix [function]](#carbon--breakpoint-infix-function)
  - [carbon--breakpoint-up [mixin]](#carbon--breakpoint-up-mixin)
  - [carbon--breakpoint-down [mixin]](#carbon--breakpoint-down-mixin)
  - [carbon--breakpoint-between [mixin]](#carbon--breakpoint-between-mixin)
  - [carbon--largest-breakpoint [mixin]](#carbon--largest-breakpoint-mixin)
  - [carbon--breakpoint [mixin]](#carbon--breakpoint-mixin)
  - [carbon--rem [function]](#carbon--rem-function)
  - [carbon--em [function]](#carbon--em-function)
  - [carbon--get-column-width [function]](#carbon--get-column-width-function)
  - [carbon--key-height [function]](#carbon--key-height-function)
  - [carbon--mini-units [function]](#carbon--mini-units-function)
  - [map-deep-get [function]](#map-deep-get-function)
  - [carbon--key-by-index [function]](#carbon--key-by-index-function)
  - [last-map-item [function]](#last-map-item-function)
  - [carbon--easings [variable]](#carbon--easings-variable)
  - [carbon--motion [function]](#carbon--motion-function)
  - [carbon--motion [mixin]](#carbon--motion-mixin)
  - [carbon--font-families [variable]](#carbon--font-families-variable)
  - [carbon--font-family [function]](#carbon--font-family-function)
  - [carbon--font-family [mixin]](#carbon--font-family-mixin)
  - [carbon--font-weights [variable]](#carbon--font-weights-variable)
  - [carbon--font-weight [function]](#carbon--font-weight-function)
  - [carbon--font-weight [mixin]](#carbon--font-weight-mixin)
  - [carbon--type-reset [mixin]](#carbon--type-reset-mixin)
  - [carbon--get-type-size [function]](#carbon--get-type-size-function)
  - [carbon--type-scale [variable]](#carbon--type-scale-variable)
  - [carbon--type-scale [function]](#carbon--type-scale-function)
  - [carbon--type-scale [mixin]](#carbon--type-scale-mixin)
  - [carbon--font-size [mixin]](#carbon--font-size-mixin)
  - [fluid-type [mixin]](#fluid-type-mixin)
  - [fluid-type-size [mixin]](#fluid-type-size-mixin)
  - [carbon--type-style [mixin]](#carbon--type-style-mixin)
- [@carbon/colors [deprecated]](#carboncolors-deprecated)
  - [ibm--colors [mixin]](#ibm--colors-mixin)
- [@carbon/themes [deprecated]](#carbonthemes-deprecated)
  - [brand-01 [variable]](#brand-01-variable)
  - [brand-02 [variable]](#brand-02-variable)
  - [brand-03 [variable]](#brand-03-variable)
  - [active-01 [variable]](#active-01-variable)
  - [hover-field [variable]](#hover-field-variable)

<!-- tocstop -->

## @carbon/colors

### carbon--colors [mixin]

Define color variables

```scss
$carbon--colors: {
  $carbon--black-100: #000000 !default !global;
  $carbon--blue-10: #edf4ff !default !global;
  $carbon--blue-20: #c9deff !default !global;
  $carbon--blue-30: #97c1ff !default !global;
  $carbon--blue-40: #6ea6ff !default !global;
  $carbon--blue-50: #408bfc !default !global;
  $carbon--blue-60: #0062ff !default !global;
  $carbon--blue-70: #054ada !default !global;
  $carbon--blue-80: #0530ad !default !global;
  $carbon--blue-90: #061f80 !default !global;
  $carbon--blue-100: #051243 !default !global;
  $carbon--cool-gray-10: #f2f4f8 !default !global;
  $carbon--cool-gray-20: #d5d9e0 !default !global;
  $carbon--cool-gray-30: #b9bfc7 !default !global;
  $carbon--cool-gray-40: #9fa5ad !default !global;
  $carbon--cool-gray-50: #868d95 !default !global;
  $carbon--cool-gray-60: #697077 !default !global;
  $carbon--cool-gray-70: #50565b !default !global;
  $carbon--cool-gray-80: #373d42 !default !global;
  $carbon--cool-gray-90: #242a2e !default !global;
  $carbon--cool-gray-100: #13171a !default !global;
  $carbon--cyan-10: #e3f6ff !default !global;
  $carbon--cyan-20: #b3e6ff !default !global;
  $carbon--cyan-30: #6ccaff !default !global;
  $carbon--cyan-40: #30b0ff !default !global;
  $carbon--cyan-50: #1191e6 !default !global;
  $carbon--cyan-60: #0072c3 !default !global;
  $carbon--cyan-70: #0058a1 !default !global;
  $carbon--cyan-80: #003d73 !default !global;
  $carbon--cyan-90: #002b50 !default !global;
  $carbon--cyan-100: #07192b !default !global;
  $carbon--gray-10: #f3f3f3 !default !global;
  $carbon--gray-20: #dcdcdc !default !global;
  $carbon--gray-30: #bebebe !default !global;
  $carbon--gray-40: #a4a4a4 !default !global;
  $carbon--gray-50: #8c8c8c !default !global;
  $carbon--gray-60: #6f6f6f !default !global;
  $carbon--gray-70: #565656 !default !global;
  $carbon--gray-80: #3d3d3d !default !global;
  $carbon--gray-90: #282828 !default !global;
  $carbon--gray-100: #171717 !default !global;
  $carbon--green-10: #dafbe4 !default !global;
  $carbon--green-20: #9deeb2 !default !global;
  $carbon--green-30: #56d679 !default !global;
  $carbon--green-40: #3dbb61 !default !global;
  $carbon--green-50: #24a148 !default !global;
  $carbon--green-60: #198038 !default !global;
  $carbon--green-70: #10642a !default !global;
  $carbon--green-80: #054719 !default !global;
  $carbon--green-90: #01330f !default !global;
  $carbon--green-100: #081b09 !default !global;
  $carbon--magenta-10: #fff0f6 !default !global;
  $carbon--magenta-20: #ffcfe1 !default !global;
  $carbon--magenta-30: #ffa0c2 !default !global;
  $carbon--magenta-40: #fa75a6 !default !global;
  $carbon--magenta-50: #ee538b !default !global;
  $carbon--magenta-60: #d12765 !default !global;
  $carbon--magenta-70: #a11950 !default !global;
  $carbon--magenta-80: #760a3a !default !global;
  $carbon--magenta-90: #57002b !default !global;
  $carbon--magenta-100: #2a0a16 !default !global;
  $carbon--orange-40: #fc7b1e !default !global;
  $carbon--purple-10: #f7f1ff !default !global;
  $carbon--purple-20: #e6d6ff !default !global;
  $carbon--purple-30: #d0b0ff !default !global;
  $carbon--purple-40: #bb8eff !default !global;
  $carbon--purple-50: #a66efa !default !global;
  $carbon--purple-60: #8a3ffc !default !global;
  $carbon--purple-70: #6e32c9 !default !global;
  $carbon--purple-80: #4f2196 !default !global;
  $carbon--purple-90: #38146b !default !global;
  $carbon--purple-100: #1e1033 !default !global;
  $carbon--red-10: #fff0f1 !default !global;
  $carbon--red-20: #fcd0d3 !default !global;
  $carbon--red-30: #ffa4a9 !default !global;
  $carbon--red-40: #ff767c !default !global;
  $carbon--red-50: #fb4b53 !default !global;
  $carbon--red-60: #da1e28 !default !global;
  $carbon--red-70: #a51920 !default !global;
  $carbon--red-80: #750e13 !default !global;
  $carbon--red-90: #570408 !default !global;
  $carbon--red-100: #2c080a !default !global;
  $carbon--teal-10: #dbfbfb !default !global;
  $carbon--teal-20: #92eeee !default !global;
  $carbon--teal-30: #20d5d2 !default !global;
  $carbon--teal-40: #00bab6 !default !global;
  $carbon--teal-50: #009c98 !default !global;
  $carbon--teal-60: #007d79 !default !global;
  $carbon--teal-70: #006161 !default !global;
  $carbon--teal-80: #004548 !default !global;
  $carbon--teal-90: #003137 !default !global;
  $carbon--teal-100: #081a1c !default !global;
  $carbon--warm-gray-10: #f7f3f1 !default !global;
  $carbon--warm-gray-20: #e0dbda !default !global;
  $carbon--warm-gray-30: #c1bcbb !default !global;
  $carbon--warm-gray-40: #a7a2a2 !default !global;
  $carbon--warm-gray-50: #8f8b8b !default !global;
  $carbon--warm-gray-60: #726e6e !default !global;
  $carbon--warm-gray-70: #595555 !default !global;
  $carbon--warm-gray-80: #403c3c !default !global;
  $carbon--warm-gray-90: #2b2828 !default !global;
  $carbon--warm-gray-100: #1a1717 !default !global;
  $carbon--white-0: #ffffff !default !global;
  $carbon--yellow-20: #fdd13a !default !global;
  $black-100: #000000 !default !global;
  $blue-10: #edf4ff !default !global;
  $blue-20: #c9deff !default !global;
  $blue-30: #97c1ff !default !global;
  $blue-40: #6ea6ff !default !global;
  $blue-50: #408bfc !default !global;
  $blue-60: #0062ff !default !global;
  $blue-70: #054ada !default !global;
  $blue-80: #0530ad !default !global;
  $blue-90: #061f80 !default !global;
  $blue-100: #051243 !default !global;
  $cool-gray-10: #f2f4f8 !default !global;
  $cool-gray-20: #d5d9e0 !default !global;
  $cool-gray-30: #b9bfc7 !default !global;
  $cool-gray-40: #9fa5ad !default !global;
  $cool-gray-50: #868d95 !default !global;
  $cool-gray-60: #697077 !default !global;
  $cool-gray-70: #50565b !default !global;
  $cool-gray-80: #373d42 !default !global;
  $cool-gray-90: #242a2e !default !global;
  $cool-gray-100: #13171a !default !global;
  $cyan-10: #e3f6ff !default !global;
  $cyan-20: #b3e6ff !default !global;
  $cyan-30: #6ccaff !default !global;
  $cyan-40: #30b0ff !default !global;
  $cyan-50: #1191e6 !default !global;
  $cyan-60: #0072c3 !default !global;
  $cyan-70: #0058a1 !default !global;
  $cyan-80: #003d73 !default !global;
  $cyan-90: #002b50 !default !global;
  $cyan-100: #07192b !default !global;
  $gray-10: #f3f3f3 !default !global;
  $gray-20: #dcdcdc !default !global;
  $gray-30: #bebebe !default !global;
  $gray-40: #a4a4a4 !default !global;
  $gray-50: #8c8c8c !default !global;
  $gray-60: #6f6f6f !default !global;
  $gray-70: #565656 !default !global;
  $gray-80: #3d3d3d !default !global;
  $gray-90: #282828 !default !global;
  $gray-100: #171717 !default !global;
  $green-10: #dafbe4 !default !global;
  $green-20: #9deeb2 !default !global;
  $green-30: #56d679 !default !global;
  $green-40: #3dbb61 !default !global;
  $green-50: #24a148 !default !global;
  $green-60: #198038 !default !global;
  $green-70: #10642a !default !global;
  $green-80: #054719 !default !global;
  $green-90: #01330f !default !global;
  $green-100: #081b09 !default !global;
  $magenta-10: #fff0f6 !default !global;
  $magenta-20: #ffcfe1 !default !global;
  $magenta-30: #ffa0c2 !default !global;
  $magenta-40: #fa75a6 !default !global;
  $magenta-50: #ee538b !default !global;
  $magenta-60: #d12765 !default !global;
  $magenta-70: #a11950 !default !global;
  $magenta-80: #760a3a !default !global;
  $magenta-90: #57002b !default !global;
  $magenta-100: #2a0a16 !default !global;
  $orange-40: #fc7b1e !default !global;
  $purple-10: #f7f1ff !default !global;
  $purple-20: #e6d6ff !default !global;
  $purple-30: #d0b0ff !default !global;
  $purple-40: #bb8eff !default !global;
  $purple-50: #a66efa !default !global;
  $purple-60: #8a3ffc !default !global;
  $purple-70: #6e32c9 !default !global;
  $purple-80: #4f2196 !default !global;
  $purple-90: #38146b !default !global;
  $purple-100: #1e1033 !default !global;
  $red-10: #fff0f1 !default !global;
  $red-20: #fcd0d3 !default !global;
  $red-30: #ffa4a9 !default !global;
  $red-40: #ff767c !default !global;
  $red-50: #fb4b53 !default !global;
  $red-60: #da1e28 !default !global;
  $red-70: #a51920 !default !global;
  $red-80: #750e13 !default !global;
  $red-90: #570408 !default !global;
  $red-100: #2c080a !default !global;
  $teal-10: #dbfbfb !default !global;
  $teal-20: #92eeee !default !global;
  $teal-30: #20d5d2 !default !global;
  $teal-40: #00bab6 !default !global;
  $teal-50: #009c98 !default !global;
  $teal-60: #007d79 !default !global;
  $teal-70: #006161 !default !global;
  $teal-80: #004548 !default !global;
  $teal-90: #003137 !default !global;
  $teal-100: #081a1c !default !global;
  $warm-gray-10: #f7f3f1 !default !global;
  $warm-gray-20: #e0dbda !default !global;
  $warm-gray-30: #c1bcbb !default !global;
  $warm-gray-40: #a7a2a2 !default !global;
  $warm-gray-50: #8f8b8b !default !global;
  $warm-gray-60: #726e6e !default !global;
  $warm-gray-70: #595555 !default !global;
  $warm-gray-80: #403c3c !default !global;
  $warm-gray-90: #2b2828 !default !global;
  $warm-gray-100: #1a1717 !default !global;
  $white-0: #ffffff !default !global;
  $yellow-20: #fdd13a !default !global;
  $carbon--colors: (
    'black': (
      100: #000000,
    ),
    'blue': (
      10: #edf4ff,
      20: #c9deff,
      30: #97c1ff,
      40: #6ea6ff,
      50: #408bfc,
      60: #0062ff,
      70: #054ada,
      80: #0530ad,
      90: #061f80,
      100: #051243,
    ),
    'coolGray': (
      10: #f2f4f8,
      20: #d5d9e0,
      30: #b9bfc7,
      40: #9fa5ad,
      50: #868d95,
      60: #697077,
      70: #50565b,
      80: #373d42,
      90: #242a2e,
      100: #13171a,
    ),
    'cyan': (
      10: #e3f6ff,
      20: #b3e6ff,
      30: #6ccaff,
      40: #30b0ff,
      50: #1191e6,
      60: #0072c3,
      70: #0058a1,
      80: #003d73,
      90: #002b50,
      100: #07192b,
    ),
    'gray': (
      10: #f3f3f3,
      20: #dcdcdc,
      30: #bebebe,
      40: #a4a4a4,
      50: #8c8c8c,
      60: #6f6f6f,
      70: #565656,
      80: #3d3d3d,
      90: #282828,
      100: #171717,
    ),
    'green': (
      10: #dafbe4,
      20: #9deeb2,
      30: #56d679,
      40: #3dbb61,
      50: #24a148,
      60: #198038,
      70: #10642a,
      80: #054719,
      90: #01330f,
      100: #081b09,
    ),
    'magenta': (
      10: #fff0f6,
      20: #ffcfe1,
      30: #ffa0c2,
      40: #fa75a6,
      50: #ee538b,
      60: #d12765,
      70: #a11950,
      80: #760a3a,
      90: #57002b,
      100: #2a0a16,
    ),
    'orange': (
      40: #fc7b1e,
    ),
    'purple': (
      10: #f7f1ff,
      20: #e6d6ff,
      30: #d0b0ff,
      40: #bb8eff,
      50: #a66efa,
      60: #8a3ffc,
      70: #6e32c9,
      80: #4f2196,
      90: #38146b,
      100: #1e1033,
    ),
    'red': (
      10: #fff0f1,
      20: #fcd0d3,
      30: #ffa4a9,
      40: #ff767c,
      50: #fb4b53,
      60: #da1e28,
      70: #a51920,
      80: #750e13,
      90: #570408,
      100: #2c080a,
    ),
    'teal': (
      10: #dbfbfb,
      20: #92eeee,
      30: #20d5d2,
      40: #00bab6,
      50: #009c98,
      60: #007d79,
      70: #006161,
      80: #004548,
      90: #003137,
      100: #081a1c,
    ),
    'warmGray': (
      10: #f7f3f1,
      20: #e0dbda,
      30: #c1bcbb,
      40: #a7a2a2,
      50: #8f8b8b,
      60: #726e6e,
      70: #595555,
      80: #403c3c,
      90: #2b2828,
      100: #1a1717,
    ),
    'white': (
      0: #ffffff,
    ),
    'yellow': (
      20: #fdd13a,
    ),
  ) !default !global;
}
```

## @carbon/themes

### carbon--theme [mixin]

Define theme variables from a map of tokens

```scss
$carbon--theme: {
  $interactive-01: map-get($theme, interactive-01) !global;
  $interactive-02: map-get($theme, interactive-02) !global;
  $interactive-03: map-get($theme, interactive-03) !global;
  $interactive-04: map-get($theme, interactive-04) !global;
  $ui-background: map-get($theme, ui-background) !global;
  $ui-01: map-get($theme, ui-01) !global;
  $ui-02: map-get($theme, ui-02) !global;
  $ui-03: map-get($theme, ui-03) !global;
  $ui-04: map-get($theme, ui-04) !global;
  $ui-05: map-get($theme, ui-05) !global;
  $text-01: map-get($theme, text-01) !global;
  $text-02: map-get($theme, text-02) !global;
  $text-03: map-get($theme, text-03) !global;
  $text-04: map-get($theme, text-04) !global;
  $icon-01: map-get($theme, icon-01) !global;
  $icon-02: map-get($theme, icon-02) !global;
  $icon-03: map-get($theme, icon-03) !global;
  $link-01: map-get($theme, link-01) !global;
  $field-01: map-get($theme, field-01) !global;
  $field-02: map-get($theme, field-02) !global;
  $inverse-01: map-get($theme, inverse-01) !global;
  $inverse-02: map-get($theme, inverse-02) !global;
  $support-01: map-get($theme, support-01) !global;
  $support-02: map-get($theme, support-02) !global;
  $support-03: map-get($theme, support-03) !global;
  $support-04: map-get($theme, support-04) !global;
  $overlay-01: map-get($theme, overlay-01) !global;
  $focus: map-get($theme, focus) !global;
  $hover-primary: map-get($theme, hover-primary) !global;
  $active-primary: map-get($theme, active-primary) !global;
  $hover-primary-text: map-get($theme, hover-primary-text) !global;
  $hover-secondary: map-get($theme, hover-secondary) !global;
  $active-secondary: map-get($theme, active-secondary) !global;
  $hover-tertiary: map-get($theme, hover-tertiary) !global;
  $active-tertiary: map-get($theme, active-tertiary) !global;
  $hover-ui: map-get($theme, hover-ui) !global;
  $active-ui: map-get($theme, active-ui) !global;
  $selected-ui: map-get($theme, selected-ui) !global;
  $hover-selected-ui: map-get($theme, hover-selected-ui) !global;
  $hover-danger: map-get($theme, hover-danger) !global;
  $active-danger: map-get($theme, active-danger) !global;
  $hover-row: map-get($theme, hover-row) !global;
  $visited-link: map-get($theme, visited-link) !global;
  $disabled-01: map-get($theme, disabled-01) !global;
  $disabled-02: map-get($theme, disabled-02) !global;
  $disabled-03: map-get($theme, disabled-03) !global;
  $highlight: map-get($theme, highlight) !global;
  $brand-01: map-get($theme, brand-01) !global;
  $brand-02: map-get($theme, brand-02) !global;
  $brand-03: map-get($theme, brand-03) !global;
  $active-01: map-get($theme, active-01) !global;
  $hover-field: map-get($theme, hover-field) !global;

  @content;

  // Reset to default theme after apply in content
  @if $theme != $carbon--theme {
    @include carbon--theme;
  }
}
```

**Parameters**:

| Name     | Description         | Type  | Default value    |
| -------- | ------------------- | ----- | ---------------- |
| `$theme` | map of theme tokens | `Map` | `$carbon--theme` |

**Example**:

```scss
// Default usage
@include carbon--theme();

// Alternate styling (not white theme)
@include carbon--theme($carbon--theme--g90) {
  // declarations...
}

// Inline styling
@include carbon--theme($carbon--theme--g90) {
  .my-dark-theme {
    // declarations...
  }
}
```

- **Content**: Pass in your custom declaration blocks to be used after the token maps set theming variables.
- **Requires**:
  - [interactive-01 [variable]](#interactive-01-variable)
  - [interactive-02 [variable]](#interactive-02-variable)
  - [interactive-03 [variable]](#interactive-03-variable)
  - [interactive-04 [variable]](#interactive-04-variable)
  - [ui-background [variable]](#ui-background-variable)
  - [ui-01 [variable]](#ui-01-variable)
  - [ui-02 [variable]](#ui-02-variable)
  - [ui-03 [variable]](#ui-03-variable)
  - [ui-04 [variable]](#ui-04-variable)
  - [ui-05 [variable]](#ui-05-variable)
  - [text-01 [variable]](#text-01-variable)
  - [text-02 [variable]](#text-02-variable)
  - [text-03 [variable]](#text-03-variable)
  - [text-04 [variable]](#text-04-variable)
  - [icon-01 [variable]](#icon-01-variable)
  - [icon-02 [variable]](#icon-02-variable)
  - [icon-03 [variable]](#icon-03-variable)
  - [link-01 [variable]](#link-01-variable)
  - [field-01 [variable]](#field-01-variable)
  - [field-02 [variable]](#field-02-variable)
  - [inverse-01 [variable]](#inverse-01-variable)
  - [inverse-02 [variable]](#inverse-02-variable)
  - [support-01 [variable]](#support-01-variable)
  - [support-02 [variable]](#support-02-variable)
  - [support-03 [variable]](#support-03-variable)
  - [support-04 [variable]](#support-04-variable)
  - [overlay-01 [variable]](#overlay-01-variable)
  - [focus [variable]](#focus-variable)
  - [hover-primary [variable]](#hover-primary-variable)
  - [active-primary [variable]](#active-primary-variable)
  - [hover-primary-text [variable]](#hover-primary-text-variable)
  - [hover-secondary [variable]](#hover-secondary-variable)
  - [active-secondary [variable]](#active-secondary-variable)
  - [hover-tertiary [variable]](#hover-tertiary-variable)
  - [active-tertiary [variable]](#active-tertiary-variable)
  - [hover-ui [variable]](#hover-ui-variable)
  - [active-ui [variable]](#active-ui-variable)
  - [selected-ui [variable]](#selected-ui-variable)
  - [hover-selected-ui [variable]](#hover-selected-ui-variable)
  - [hover-danger [variable]](#hover-danger-variable)
  - [active-danger [variable]](#active-danger-variable)
  - [hover-row [variable]](#hover-row-variable)
  - [visited-link [variable]](#visited-link-variable)
  - [disabled-01 [variable]](#disabled-01-variable)
  - [disabled-02 [variable]](#disabled-02-variable)
  - [disabled-03 [variable]](#disabled-03-variable)
  - [highlight [variable]](#highlight-variable)
  - [brand-01 [variable]](#brand-01-variable)
  - [brand-02 [variable]](#brand-02-variable)
  - [brand-03 [variable]](#brand-03-variable)
  - [active-01 [variable]](#active-01-variable)
  - [hover-field [variable]](#hover-field-variable)
  - [carbon--theme [variable]](#carbon--theme-variable)

### carbon--theme--white [variable]

Carbon's white color theme

```scss
$carbon--theme--white: (
  interactive-01: #0062ff,
  interactive-02: #171717,
  interactive-03: #0062ff,
  interactive-04: #0062ff,
  ui-background: #ffffff,
  ui-01: #f3f3f3,
  ui-02: #ffffff,
  ui-03: #dcdcdc,
  ui-04: #8c8c8c,
  ui-05: #171717,
  text-01: #171717,
  text-02: #565656,
  text-03: #8c8c8c,
  text-04: #ffffff,
  icon-01: #171717,
  icon-02: #565656,
  icon-03: #ffffff,
  link-01: #0062ff,
  field-01: #f3f3f3,
  field-02: #ffffff,
  inverse-01: #ffffff,
  inverse-02: #3d3d3d,
  support-01: #da1e28,
  support-02: #24a148,
  support-03: #fdd13a,
  support-04: #054ada,
  overlay-01: rgba(23, 23, 23, 0.5),
  focus: #0062ff,
  hover-primary: #0353e9,
  active-primary: #0530ad,
  hover-primary-text: #054ada,
  hover-secondary: #4c4c4c,
  active-secondary: #6f6f6f,
  hover-tertiary: #0353e9,
  active-tertiary: #0530ad,
  hover-ui: #e5e5e5,
  active-ui: #bebebe,
  selected-ui: #dcdcdc,
  hover-selected-ui: #cacaca,
  hover-danger: #ba1b23,
  active-danger: #750e13,
  hover-row: #e5e5e5,
  visited-link: #8a3ffc,
  disabled-01: #f3f3f3,
  disabled-02: #bebebe,
  disabled-03: #8c8c8c,
  highlight: #c9deff,
  brand-01: #0062ff,
  brand-02: #171717,
  brand-03: #0062ff,
  active-01: #bebebe,
  hover-field: #e5e5e5,
);
```

- **Type**: `Map`
- **Aliased**:
  - `carbon--theme`

### carbon--theme--g10 [variable]

Carbon's g10 color theme

```scss
$carbon--theme--g10: (
  interactive-01: #0062ff,
  interactive-02: #171717,
  interactive-03: #0062ff,
  interactive-04: #0062ff,
  ui-background: #f3f3f3,
  ui-01: #ffffff,
  ui-02: #f3f3f3,
  ui-03: #dcdcdc,
  ui-04: #8c8c8c,
  ui-05: #171717,
  text-01: #171717,
  text-02: #565656,
  text-03: #8c8c8c,
  text-04: #ffffff,
  icon-01: #171717,
  icon-02: #565656,
  icon-03: #ffffff,
  link-01: #0062ff,
  field-01: #ffffff,
  field-02: #f3f3f3,
  inverse-01: #ffffff,
  inverse-02: #3d3d3d,
  support-01: #da1e28,
  support-02: #24a148,
  support-03: #fdd13a,
  support-04: #054ada,
  overlay-01: rgba(23, 23, 23, 0.5),
  focus: #0062ff,
  hover-primary: #0353e9,
  active-primary: #0530ad,
  hover-primary-text: #054ada,
  hover-secondary: #4c4c4c,
  active-secondary: #6f6f6f,
  hover-tertiary: #0353e9,
  active-tertiary: #0530ad,
  hover-ui: #e5e5e5,
  active-ui: #bebebe,
  selected-ui: #dcdcdc,
  hover-selected-ui: #cacaca,
  hover-danger: #ba1b23,
  active-danger: #750e13,
  hover-row: #e5e5e5,
  visited-link: #8a3ffc,
  disabled-01: #ffffff,
  disabled-02: #bebebe,
  disabled-03: #8c8c8c,
  highlight: #c9deff,
  brand-01: #0062ff,
  brand-02: #171717,
  brand-03: #0062ff,
  active-01: #bebebe,
  hover-field: #e5e5e5,
);
```

- **Type**: `Map`

### carbon--theme--g90 [variable]

Carbon's g90 color theme

```scss
$carbon--theme--g90: (
  interactive-01: #0062ff,
  interactive-02: #6f6f6f,
  interactive-03: #ffffff,
  interactive-04: #408bfc,
  ui-background: #282828,
  ui-01: #3d3d3d,
  ui-02: #565656,
  ui-03: #565656,
  ui-04: #8c8c8c,
  ui-05: #f3f3f3,
  text-01: #f3f3f3,
  text-02: #bebebe,
  text-03: #8c8c8c,
  text-04: #ffffff,
  icon-01: #f3f3f3,
  icon-02: #bebebe,
  icon-03: #ffffff,
  link-01: #6ea6ff,
  field-01: #3d3d3d,
  field-02: #565656,
  inverse-01: #171717,
  inverse-02: #f3f3f3,
  support-01: #fb4b53,
  support-02: #3dbb61,
  support-03: #fdd13a,
  support-04: #408bfc,
  overlay-01: rgba(23, 23, 23, 0.7),
  focus: #ffffff,
  hover-primary: #0353e9,
  active-primary: #0530ad,
  hover-primary-text: #054ada,
  hover-secondary: #606060,
  active-secondary: #3d3d3d,
  hover-tertiary: #f3f3f3,
  active-tertiary: #bebebe,
  hover-ui: #353535,
  active-ui: #6f6f6f,
  selected-ui: #565656,
  hover-selected-ui: #656565,
  hover-danger: #ba1b23,
  active-danger: #750e13,
  hover-row: #4c4c4c,
  visited-link: #bb8eff,
  disabled-01: #3d3d3d,
  disabled-02: #565656,
  disabled-03: #8c8c8c,
  highlight: #061f80,
  brand-01: #0062ff,
  brand-02: #6f6f6f,
  brand-03: #ffffff,
  active-01: #6f6f6f,
  hover-field: #353535,
);
```

- **Type**: `Map`

### carbon--theme--g100 [variable]

Carbon's g100 color theme

```scss
$carbon--theme--g100: (
  interactive-01: #0062ff,
  interactive-02: #6f6f6f,
  interactive-03: #ffffff,
  interactive-04: #408bfc,
  ui-background: #171717,
  ui-01: #282828,
  ui-02: #3d3d3d,
  ui-03: #3d3d3d,
  ui-04: #6f6f6f,
  ui-05: #f3f3f3,
  text-01: #f3f3f3,
  text-02: #bebebe,
  text-03: #6f6f6f,
  text-04: #ffffff,
  icon-01: #f3f3f3,
  icon-02: #bebebe,
  icon-03: #ffffff,
  link-01: #6ea6ff,
  field-01: #282828,
  field-02: #3d3d3d,
  inverse-01: #171717,
  inverse-02: #f3f3f3,
  support-01: #fb4b53,
  support-02: #3dbb61,
  support-03: #fdd13a,
  support-04: #408bfc,
  overlay-01: rgba(23, 23, 23, 0.7),
  focus: #ffffff,
  hover-primary: #0353e9,
  active-primary: #0530ad,
  hover-primary-text: #054ada,
  hover-secondary: #606060,
  active-secondary: #3d3d3d,
  hover-tertiary: #f3f3f3,
  active-tertiary: #bebebe,
  hover-ui: #353535,
  active-ui: #565656,
  selected-ui: #3d3d3d,
  hover-selected-ui: #4c4c4c,
  hover-danger: #ba1b23,
  active-danger: #750e13,
  hover-row: #353535,
  visited-link: #bb8eff,
  disabled-01: #282828,
  disabled-02: #3d3d3d,
  disabled-03: #6f6f6f,
  highlight: #061f80,
  brand-01: #0062ff,
  brand-02: #6f6f6f,
  brand-03: #ffffff,
  active-01: #565656,
  hover-field: #353535,
);
```

- **Type**: `Map`

### carbon--theme [variable]

Carbon's default theme

```scss
$carbon--theme: $carbon--theme--white;
```

- **Type**: `Map`
- **Alias**: `carbon--theme--white`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### interactive-01 [variable]

Primary interactive color; Primary buttons

```scss
$interactive-01: map-get($carbon--theme, interactive-01);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### interactive-02 [variable]

Secondary interactive color; Secondary button

```scss
$interactive-02: map-get($carbon--theme, interactive-02);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### interactive-03 [variable]

4.5:1 AA contrast; Tertiary button

```scss
$interactive-03: map-get($carbon--theme, interactive-03);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### interactive-04 [variable]

3:1 AA contrast; Selected elements; Active elements; Accent icons

```scss
$interactive-04: map-get($carbon--theme, interactive-04);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### ui-background [variable]

Default page background

```scss
$ui-background: map-get($carbon--theme, ui-background);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### ui-01 [variable]

Primary container background; Secondary page background

```scss
$ui-01: map-get($carbon--theme, ui-01);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### ui-02 [variable]

Primary page background; Secondary container background

```scss
$ui-02: map-get($carbon--theme, ui-02);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### ui-03 [variable]

Subtle border; Tertiary background color

```scss
$ui-03: map-get($carbon--theme, ui-03);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### ui-04 [variable]

3:1 AA element contrast; Medium contrast border

```scss
$ui-04: map-get($carbon--theme, ui-04);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### ui-05 [variable]

4.5:1 AA element contrast; High contrast border; Emphasis elements

```scss
$ui-05: map-get($carbon--theme, ui-05);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### text-01 [variable]

Primary text; Body copy; Headers; Hover text color for text-02

```scss
$text-01: map-get($carbon--theme, text-01);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### text-02 [variable]

Secondary text; Input labels; Help text

```scss
$text-02: map-get($carbon--theme, text-02);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### text-03 [variable]

Placeholder text

```scss
$text-03: map-get($carbon--theme, text-03);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### text-04 [variable]

Text on interactive colors

```scss
$text-04: map-get($carbon--theme, text-04);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### icon-01 [variable]

Primary icons

```scss
$icon-01: map-get($carbon--theme, icon-01);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### icon-02 [variable]

Secondary icons

```scss
$icon-02: map-get($carbon--theme, icon-02);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### icon-03 [variable]

Tertiary icons; Icons on interactive colors; Icons on non-ui colors

```scss
$icon-03: map-get($carbon--theme, icon-03);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### link-01 [variable]

Primary links; Ghost button

```scss
$link-01: map-get($carbon--theme, link-01);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### field-01 [variable]

Default input fields; Field color on \$ui-backgrounds

```scss
$field-01: map-get($carbon--theme, field-01);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### field-02 [variable]

Input field color on `$ui-02` backgrounds

```scss
$field-02: map-get($carbon--theme, field-02);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### inverse-01 [variable]

Inverse text color; Inverse icon color

```scss
$inverse-01: map-get($carbon--theme, inverse-01);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### inverse-02 [variable]

High contrast backgrounds; High contrast elements

```scss
$inverse-02: map-get($carbon--theme, inverse-02);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### support-01 [variable]

Error

```scss
$support-01: map-get($carbon--theme, support-01);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### support-02 [variable]

Success

```scss
$support-02: map-get($carbon--theme, support-02);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### support-03 [variable]

Warning

```scss
$support-03: map-get($carbon--theme, support-03);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### support-04 [variable]

Information

```scss
$support-04: map-get($carbon--theme, support-04);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### overlay-01 [variable]

Background overlay

```scss
$overlay-01: map-get($carbon--theme, overlay-01);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### focus [variable]

Focus border; Focus underline

```scss
$focus: map-get($carbon--theme, focus);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### hover-primary [variable]

`$interactive-01` hover

```scss
$hover-primary: map-get($carbon--theme, hover-primary);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### active-primary [variable]

`$interactive-01` active

```scss
$active-primary: map-get($carbon--theme, active-primary);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### hover-primary-text [variable]

`$interactive-01` text hover

```scss
$hover-primary-text: map-get($carbon--theme, hover-primary-text);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### hover-secondary [variable]

`$interactive-02` hover

```scss
$hover-secondary: map-get($carbon--theme, hover-secondary);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### active-secondary [variable]

`$interactive-02` active; `$inverse-01` active

```scss
$active-secondary: map-get($carbon--theme, active-secondary);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### hover-tertiary [variable]

`$interactive-03` hover; `$inverse-01` hover

```scss
$hover-tertiary: map-get($carbon--theme, hover-tertiary);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### active-tertiary [variable]

`$interactive-03` active

```scss
$active-tertiary: map-get($carbon--theme, active-tertiary);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### hover-ui [variable]

`$ui-01` hover; `$ui-02` hover; Transparent background hover

```scss
$hover-ui: map-get($carbon--theme, hover-ui);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### active-ui [variable]

`$ui-01` active; `$ui-02` active

```scss
$active-ui: map-get($carbon--theme, active-ui);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### selected-ui [variable]

Selected UI elements

```scss
$selected-ui: map-get($carbon--theme, selected-ui);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### hover-selected-ui [variable]

Data table selected row hover

```scss
$hover-selected-ui: map-get($carbon--theme, hover-selected-ui);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### hover-danger [variable]

Danger hover; `$support-01` hover

```scss
$hover-danger: map-get($carbon--theme, hover-danger);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### active-danger [variable]

Danger active; `$support-01` active

```scss
$active-danger: map-get($carbon--theme, active-danger);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### hover-row [variable]

Row hover

```scss
$hover-row: map-get($carbon--theme, hover-row);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### visited-link [variable]

Visited links

```scss
$visited-link: map-get($carbon--theme, visited-link);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### disabled-01 [variable]

Disabled fields; Disabled backgrounds; Disabled border

```scss
$disabled-01: map-get($carbon--theme, disabled-01);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### disabled-02 [variable]

Disabled elements on `$disabled-01`; Disabled label; Disabled text on `$disabled-01`; Disabled icons; Disabled border

```scss
$disabled-02: map-get($carbon--theme, disabled-02);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### disabled-03 [variable]

Disabled text on `$disabled-02`; Disabled icons on `$disabled-02`

```scss
$disabled-03: map-get($carbon--theme, disabled-03);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

### highlight [variable]

`$interactive-01` highlight

```scss
$highlight: map-get($carbon--theme, highlight);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)

## general

### /// Used to intialize the default properties for a column class, most notably

/// for setting width and default gutters when a column's breakpoint has not been
/// hit yet.
/// @param [css]

Columns

```scss
$/// Used to intialize the default properties for a column class, most notably
/// for setting width and default gutters when a column's breakpoint has not been
/// hit yet.
/// @param: Number;
```

### /// Define the properties for a selector assigned to a row in the grid system.

/// @param [css]

Rows

```scss
$/// Define the properties for a selector assigned to a row in the grid system.
/// @param: Number;
```

### /// Add no-gutter and no-gutter-- [css]

No gutter

```scss
$///Addno-gutter and no-gutter--: left, right;
```

### /// Add hang--left and hang--right classes for a given gutter. These classes are

/// used alongside `no-gutter--left` and `no-gutter--right` to "hang" type.
/// @param [css]

Hang

```scss
$/// Add hang--left and hang--right classes for a given gutter. These classes are
/// used alongside `no-gutter--left` and `no-gutter--right` to "hang" type.
/// @param: Number;
```

### carbon--aspect-ratios [variable]

The aspect ratios that are used to generate corresponding aspect ratio
classes in code

```scss
$carbon--aspect-ratios: ((16, 9), (2, 1), (4, 3), (1, 1));
```

### /// The aspect ratios that are used to generate corresponding aspect ratio

/// classes in code
/// @access public
\$carbon--aspect-ratios: ((16, 9), (2, 1), (4, 3), (1, 1));

/// Output the CSS classes for generating aspect ratio classes
/// @param [css]

Aspect ratio

```scss
$///Theaspect ratios that are used to generate corresponding aspect ratio
/// classes in code
/// @access public
$carbon--aspect-ratios: ((16, 9), (2, 1), (4, 3), (1, 1));

/// Output the CSS classes for generating aspect ratio classes
/// @param: List;
```

### /// Create the container for a grid. Will cause full-bleed for the grid unless

/// max-width properties are added with `make-container-max-widths`
/// @param [css]

Grid

```scss
$/// Create the container for a grid. Will cause full-bleed for the grid unless
/// max-width properties are added with `make-container-max-widths`
/// @param: Map;
```

### carbon--grid [mixin]

Generate the CSS for a grid for the given breakpoints and gutter

```scss
$carbon--grid: {
  .#{$prefix}--grid {
    @include carbon--make-container($breakpoints);
  }

  @include carbon--largest-breakpoint($breakpoints) {
    .#{$prefix}--grid--full-width {
      max-width: 100%;
    }
  }

  .#{$prefix}--row {
    @include carbon--make-row();
  }

  .#{$prefix}--grid--condensed .#{$prefix}--row:not(:last-of-type) {
    margin-bottom: $condensed-gutter;
  }

  .#{$prefix}--row--condensed + .#{$prefix}--row--condensed {
    margin-top: $condensed-gutter;
  }

  @include carbon--make-grid-columns($breakpoints, $grid-gutter);
  @include carbon--no-gutter();
  @include carbon--hang($grid-gutter);
  @include carbon--aspect-ratio();
}
```

**Parameters**:

| Name           | Description | Type     | Default value |
| -------------- | ----------- | -------- | ------------- |
| `$breakpoints` | undefined   | `Map`    | `—`           |
| `$grid-gutter` | undefined   | `Number` | `—`           |

- **Requires**:
  - [carbon--make-container [mixin]](#carbon--make-container-mixin)
  - [carbon--largest-breakpoint [mixin]](#carbon--largest-breakpoint-mixin)
  - [carbon--make-row [mixin]](#carbon--make-row-mixin)
  - [carbon--make-grid-columns [mixin]](#carbon--make-grid-columns-mixin)
  - [carbon--no-gutter [mixin]](#carbon--no-gutter-mixin)
  - [carbon--hang [mixin]](#carbon--hang-mixin)
  - [carbon--aspect-ratio [mixin]](#carbon--aspect-ratio-mixin)

### exports [mixin]

Module export mixin
This mixin helps making sure a module is imported once and only once.

```scss
$exports: {
  @if (index($imported-modules, $name) == null) {
    $imported-modules: append($imported-modules, $name) !global;
    @content;
  } @else if $warn == true {
    @warn 'Module `#{$name}` has already been imported.';
  }
}
```

**Parameters**:

| Name     | Description                                   | Type     | Default value |
| -------- | --------------------------------------------- | -------- | ------------- |
| `$name`  | Name of exported module                       | `String` | `—`           |
| `$error` | Error when a module has been already imported | `Bool`   | `false`       |

### carbon--breakpoint-next [function]

Get the value of the next breakpoint, or null for the last breakpoint.

```scss
$carbon--breakpoint-next: {
  $n: index($breakpoint-names, $name);
  @if $n != null and $n < length($breakpoint-names) {
    @return nth($breakpoint-names, $n + 1);
  }
  @return null;
}
```

**Parameters**:

| Name                                                             | Description                                    | Type                        | Default value            |
| ---------------------------------------------------------------- | ---------------------------------------------- | --------------------------- | ------------------------ |
| `$name`                                                          | the name of the brekapoint                     | `String`                    | `—`                      |
| `$breakpoints`                                                   | a map of breakpoints where the key is the name |
| of the breakpoint and the value is the values for the breakpoint | `Map`                                          | `$carbon--grid-breakpoints` |
| `$breakpoint-names`                                              | a list of names from the \$breakpoints map     | `List`                      | `map-keys($breakpoints)` |

- **Used by**:
  - [fluid-type-size [mixin]](#fluid-type-size-mixin)
  - [fluid-type-size [mixin]](#fluid-type-size-mixin)

### carbon--is-smallest-breakpoint [function]

Check to see if the given breakpoint name

```scss
$carbon--is-smallest-breakpoint: {
  @return index(map-keys($breakpoints), $name) == 1;
}
```

- **Used by**:
  - [carbon--breakpoint-up [mixin]](#carbon--breakpoint-up-mixin)
  - [carbon--breakpoint-down [mixin]](#carbon--breakpoint-down-mixin)

### carbon--largest-breakpoint-name [function]

returns the largest breakpoint name

```scss
$carbon--largest-breakpoint-name: {
  $total-breakpoints: length($breakpoints);
  @return carbon--key-by-index($breakpoints, $total-breakpoints);
}
```

**Parameters**:

| Name           | Description                                    | Type  | Default value               |
| -------------- | ---------------------------------------------- | ----- | --------------------------- |
| `$breakpoints` | a map of breakpoints where the key is the name | `Map` | `$carbon--grid-breakpoints` |

- **Requires**:
  - [carbon--key-by-index [function]](#carbon--key-by-index-function)
- **Used by**:
  - [carbon--largest-breakpoint [mixin]](#carbon--largest-breakpoint-mixin)

### carbon--breakpoint-infix [function]

Get the infix for a given breakpoint in a list of breakpoints. Usesful for
generate the size part in a selector, for example: `.prefix--col-sm-2`

```scss
$carbon--breakpoint-infix: {
  @return '-#{$name}';
}
```

**Parameters**:

| Name    | Description                | Type     | Default value |
| ------- | -------------------------- | -------- | ------------- |
| `$name` | the name of the breakpoint | `String` | `—`           |

- **Used by**:
  - [carbon--make-grid-columns [mixin]](#carbon--make-grid-columns-mixin)

### carbon--breakpoint-up [mixin]

Generate a media query up to the width of the given breakpoint name

```scss
$carbon--breakpoint-up: {
  @if type-of($name) == 'number' {
    @media (min-width: $name) {
      @content;
    }
  } @else if map-has-key($breakpoints, $name) {
    $breakpoint: map-get($breakpoints, $name);
    $width: map-get($breakpoint, width);
    @if carbon--is-smallest-breakpoint($name, $breakpoints) {
      @content;
    } @else {
      @media (min-width: $width) {
        @content;
      }
    }
  } @else {
    @error 'Unable to find a breakpoint with name `#{$name}`. Expected one of: (#{map-keys($breakpoints)})';
  }
}
```

**Parameters**:

| Name           | Description                                    | Type              | Default value               |
| -------------- | ---------------------------------------------- | ----------------- | --------------------------- |
| `$name`        | undefined                                      | `string | number` | `—`                         |
| `$breakpoints` | a map of breakpoints where the key is the name | `Map`             | `$carbon--grid-breakpoints` |

- **Requires**:
  - [carbon--is-smallest-breakpoint [function]](#carbon--is-smallest-breakpoint-function)
- **Used by**:
  - [carbon--breakpoint-between [mixin]](#carbon--breakpoint-between-mixin)
  - [carbon--breakpoint [mixin]](#carbon--breakpoint-mixin)

### carbon--breakpoint-down [mixin]

Generate a media query for the maximum width of the given styles

```scss
$carbon--breakpoint-down: {
  @if type-of($name) == 'number' {
    @media (max-width: $name) {
      @content;
    }
  } @else if map-has-key($breakpoints, $name) {
    $breakpoint: map-get($breakpoints, $name);
    $width: map-get($breakpoint, width);
    @if carbon--is-smallest-breakpoint($name, $breakpoints) {
      @content;
    } @else {
      @media (max-width: $width) {
        @content;
      }
    }
  } @else {
    @error 'Unable to find a breakpoint with name `#{$name}`. Expected one of: (#{map-keys($breakpoints)})';
  }
}
```

**Parameters**:

| Name           | Description                                    | Type              | Default value               |
| -------------- | ---------------------------------------------- | ----------------- | --------------------------- |
| `$name`        | undefined                                      | `string | number` | `—`                         |
| `$breakpoints` | a map of breakpoints where the key is the name | `Map`             | `$carbon--grid-breakpoints` |

- **Requires**:
  - [carbon--is-smallest-breakpoint [function]](#carbon--is-smallest-breakpoint-function)
- **Used by**:
  - [carbon--breakpoint-between [mixin]](#carbon--breakpoint-between-mixin)

### carbon--breakpoint-between [mixin]

Generate a media query for the range between the lower and upper
breakpoints.

```scss
$carbon--breakpoint-between: {
  $is-number-lower: type-of($lower) == 'number';
  $is-number-upper: type-of($upper) == 'number';
  $min: if($is-number-lower, $lower, map-get($breakpoints, $lower));
  $max: if($is-number-upper, $upper, map-get($breakpoints, $upper));

  @if $min and $max {
    $min-width: if(not $is-number-lower and $min, map-get($min, width), $min);
    $max-width: if(not $is-number-upper and $max, map-get($max, width), $max);
    @media (min-width: $min-width) and (max-width: $max-width) {
      @content;
    }
  } @else if $min != null and $max == null {
    @include carbon--breakpoint-up($lower) {
      @content;
    }
  } @else if $min == null and $max != null {
    @include carbon--breakpoint-down($upper) {
      @content;
    }
  } @else {
    @error 'Unable to find a breakpoint to satisfy: (#{$lower},#{$upper}). Expected both to be one of (#{map-keys($breakpoints)}).';
  }
}
```

**Parameters**:

| Name     | Description | Type              | Default value |
| -------- | ----------- | ----------------- | ------------- |
| `$lower` | undefined   | `string | number` | `—`           |
| `$upper` | undefined   | `string | number` | `—`           |

- **Requires**:
  - [carbon--breakpoint-up [mixin]](#carbon--breakpoint-up-mixin)
  - [carbon--breakpoint-down [mixin]](#carbon--breakpoint-down-mixin)

### carbon--largest-breakpoint [mixin]

generate media query for the largest breakpoint

```scss
$carbon--largest-breakpoint: {
  @include carbon--breakpoint(carbon--largest-breakpoint-name()) {
    @content;
  }
}
```

**Parameters**:

| Name           | Description                                    | Type  | Default value               |
| -------------- | ---------------------------------------------- | ----- | --------------------------- |
| `$breakpoints` | a map of breakpoints where the key is the name | `Map` | `$carbon--grid-breakpoints` |

- **Requires**:
  - [carbon--breakpoint [mixin]](#carbon--breakpoint-mixin)
  - [carbon--largest-breakpoint-name [function]](#carbon--largest-breakpoint-name-function)
- **Used by**:
  - [carbon--grid [mixin]](#carbon--grid-mixin)

### carbon--breakpoint [mixin]

Generate a media query for a given breakpoint

```scss
$carbon--breakpoint: {
  @include carbon--breakpoint-up($name, $breakpoints) {
    @content;
  }
}
```

**Parameters**:

| Name           | Description                                    | Type              | Default value               |
| -------------- | ---------------------------------------------- | ----------------- | --------------------------- |
| `$name`        | undefined                                      | `string | number` | `—`                         |
| `$breakpoints` | a map of breakpoints where the key is the name | `Map`             | `$carbon--grid-breakpoints` |

- **Requires**:
  - [carbon--breakpoint-up [mixin]](#carbon--breakpoint-up-mixin)
- **Used by**:
  - [carbon--make-grid-columns [mixin]](#carbon--make-grid-columns-mixin)
  - [carbon--make-container [mixin]](#carbon--make-container-mixin)
  - [carbon--make-container [mixin]](#carbon--make-container-mixin)
  - [carbon--make-container-max-widths [mixin]](#carbon--make-container-max-widths-mixin)
  - [carbon--largest-breakpoint [mixin]](#carbon--largest-breakpoint-mixin)
  - [fluid-type [mixin]](#fluid-type-mixin)

### carbon--rem [function]

Convert a given px unit to a rem unit

```scss
$carbon--rem: {
  @return ($px / $carbon--base-font-size) * 1rem;
}
```

**Parameters**:

| Name  | Description | Type | Default value |
| ----- | ----------- | ---- | ------------- |
| `$px` | undefined   | `px` | `—`           |

- **Used by**:
  - [carbon--mini-units [function]](#carbon--mini-units-function)

### carbon--em [function]

Convert a given px unit to a em unit

```scss
$carbon--em: {
  @return ($px / $carbon--base-font-size) * 1em;
}
```

**Parameters**:

| Name  | Description | Type | Default value |
| ----- | ----------- | ---- | ------------- |
| `$px` | undefined   | `px` | `—`           |

### carbon--get-column-width [function]

Get the column width for a given breakpoint. Useful for figuring out key
heights

```scss
$carbon--get-column-width: {
  @if map-has-key($breakpoints, $breakpoint) {
    $values: map-get($breakpoints, $breakpoint);
    $width: map-get($values, width);
    $margin: map-get($values, margin);
    $columns: map-get($values, columns);

    @return ($width - (2 * $margin)) / $columns;
  } @else {
    @warn 'Breakpoint: `#{$breakpoint}` is not a valid breakpoint.';
  }
}
```

**Parameters**:

| Name          | Description | Type     | Default value |
| ------------- | ----------- | -------- | ------------- |
| `$breakpoint` | undefined   | `string` | `—`           |

### carbon--key-height [function]

Get the value of a key height step at a given breakpoint

```scss
$carbon--key-height: {
  @if map-has-key($carbon--key-height-scales, $breakpoint) {
    @return nth(map-get($carbon--key-height-scales, $breakpoint), $step);
  } @else {
    @warn 'Breakpoint: `#{$breakpoint}` is not a valid breakpoint.';
  }
}
```

**Parameters**:

| Name          | Description | Type     | Default value |
| ------------- | ----------- | -------- | ------------- |
| `$breakpoint` | undefined   | `string` | `—`           |
| `$step`       | undefined   | `number` | `—`           |

### carbon--mini-units [function]

Get the value of the corresponding number of units

```scss
$carbon--mini-units: {
  @return carbon--rem($carbon--mini-unit-size * $count);
}
```

**Parameters**:

| Name     | Description                              | Type     | Default value |
| -------- | ---------------------------------------- | -------- | ------------- |
| `$count` | the number of units to get the value for | `number` | `—`           |

- **Requires**:
  - [carbon--rem [function]](#carbon--rem-function)

### map-deep-get [function]

Map deep get

```scss
$map-deep-get: {
  @each $key in $keys {
    $map: map-get($map, $key);
  }
  @return $map;
}
```

**Parameters**:

| Name    | Description | Type      | Default value |
| ------- | ----------- | --------- | ------------- |
| `$map`  | Map         | `Map`     | `—`           |
| `$keys` | Key chain   | `Arglist` | `—`           |

### carbon--key-by-index [function]

Key by Index
provide a $map, and $index, and get back the relevant
key value.

```scss
$carbon--key-by-index: {
  $keys: map-keys($map);
  @return nth($keys, $index);
}
```

**Parameters**:

| Name     | Description | Type      | Default value |
| -------- | ----------- | --------- | ------------- |
| `$map`   | Map         | `Map`     | `—`           |
| `$index` | Key chain   | `Integer` | `—`           |

- **Used by**:
  - [carbon--largest-breakpoint-name [function]](#carbon--largest-breakpoint-name-function)
  - [last-map-item [function]](#last-map-item-function)

### last-map-item [function]

Last Map Item
Pass in a map, and get the last one in the list back.

```scss
$last-map-item: {
  $total-length: length($map);
  @return map-get($map, carbon--key-by-index($map, $total-length));
}
```

**Parameters**:

| Name   | Description | Type  | Default value |
| ------ | ----------- | ----- | ------------- |
| `$map` | Map         | `Map` | `—`           |

- **Requires**:
  - [carbon--key-by-index [function]](#carbon--key-by-index-function)
- **Used by**:
  - [carbon--set-largest-breakpoint [mixin]](#carbon--set-largest-breakpoint-mixin)

### carbon--easings [variable]

Common easings for components in the Carbon Design System

```scss
$carbon--easings: (
  standard: (
    productive: cubic-bezier(0.2, 0, 0.38, 0.9),
    expressive: cubic-bezier(0.4, 0.14, 0.3, 1),
  ),
  entrance: (
    productive: cubic-bezier(0, 0, 0.38, 0.9),
    expressive: cubic-bezier(0, 0, 0.3, 1),
  ),
  exit: (
    productive: cubic-bezier(0.2, 0, 1, 0.9),
    expressive: cubic-bezier(0.4, 0.14, 1, 1),
  ),
);
```

### carbon--motion [function]

Get the transition-timing-function for a given easing and motion mode.
Easings that are currently supported include: standard, entrance, and exit.
We also offer two modes: productive and expressive.

```scss
$carbon--motion: {
  @if map-has-key($easings, $name) {
    $easing: map-get($easings, $name);
    @if map-has-key($easing, $mode) {
      @return map-get($easing, $mode);
    } @else {
      @error 'Unable to find a mode for the easing #{$easing} called: #{$mode}.';
    }
  } @else {
    @error 'Unable to find an easing named #{$name} in our supported easings.';
  }
}
```

**Parameters**:

| Name    | Description                           | Type     | Default value |
| ------- | ------------------------------------- | -------- | ------------- |
| `$name` | the name of the easing curve to apply | `String` | `—`           |
| `$mode` | the mode for the easing curve to use  | `String` | `—`           |

- **Used by**:
  - [carbon--motion [mixin]](#carbon--motion-mixin)

### carbon--motion [mixin]

Set the transition-timing-function for a given easing and motion mode.

```scss
$carbon--motion: {
  transition-timing-function: carbon--motion($name, $mode);
}
```

**Parameters**:

| Name    | Description                           | Type     | Default value |
| ------- | ------------------------------------- | -------- | ------------- |
| `$name` | the name of the easing curve to apply | `String` | `—`           |
| `$mode` | the mode for the easing curve to use  | `String` | `—`           |

- **Requires**:
  - [carbon--motion [function]](#carbon--motion-function)

### carbon--font-families [variable]

Font family fallbacks for: IBM Plex Mono, IBM Plex Sans, IBM Plex Sans
Condensed, IBM Plex Sans Hebrew, and IBM Plex Serif

```scss
$carbon--font-families: (
  'mono': unquote("'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace"),
  'sans': unquote("'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif"),
  'sans-condensed': unquote("'IBM Plex Sans Condensed', 'Helvetica Neue', Arial, sans-serif"),
  'sans-hebrew': unquote("'IBM Plex Sans Hebrew', 'Helvetica Hebrew', 'Arial Hebrew', sans-serif"),
  'serif': unquote("'IBM Plex Serif', 'Georgia', Times, serif"),
);
```

- **Type**: `{Map}`
- **Used by**:
  - [carbon--font-family [function]](#carbon--font-family-function)

### carbon--font-family [function]

Get the font-family for an IBM Plex font.

```scss
$carbon--font-family: {
  @return map-get($carbon--font-families, $name);
}
```

**Parameters**:

| Name    | Description | Type     | Default value |
| ------- | ----------- | -------- | ------------- |
| `$name` | undefined   | `String` | `—`           |

- **Requires**:
  - [carbon--font-families [variable]](#carbon--font-families-variable)
- **Used by**:
  - [carbon--font-family [mixin]](#carbon--font-family-mixin)

### carbon--font-family [mixin]

Include the `font-family` definition for the given name in your selector.

```scss
$carbon--font-family: {
  font-family: carbon--font-family($name);
}
```

**Parameters**:

| Name    | Description | Type     | Default value |
| ------- | ----------- | -------- | ------------- |
| `$name` | undefined   | `String` | `—`           |

- **Requires**:
  - [carbon--font-family [function]](#carbon--font-family-function)
- **Used by**:
  - [carbon--type-reset [mixin]](#carbon--type-reset-mixin)

### carbon--font-weights [variable]

Suggested font weights to be used in product.

```scss
$carbon--font-weights: (
  'light': 300,
  'regular': 400,
  'semibold': 600,
);
```

- **Used by**:
  - [carbon--font-weight [function]](#carbon--font-weight-function)

### carbon--font-weight [function]

Retrieve the font-weight value for a given name

```scss
$carbon--font-weight: {
  @return map-get($carbon--font-weights, $weight);
}
```

**Parameters**:

| Name      | Description | Type     | Default value |
| --------- | ----------- | -------- | ------------- |
| `$weight` | undefined   | `String` | `—`           |

- **Requires**:
  - [carbon--font-weights [variable]](#carbon--font-weights-variable)
- **Used by**:
  - [carbon--font-weight [mixin]](#carbon--font-weight-mixin)

### carbon--font-weight [mixin]

Set the `font-weight` property with the value for a given name

```scss
$carbon--font-weight: {
  font-weight: carbon--font-weight($weight);
}
```

**Parameters**:

| Name      | Description | Type     | Default value |
| --------- | ----------- | -------- | ------------- |
| `$weight` | undefined   | `String` | `—`           |

- **Requires**:
  - [carbon--font-weight [function]](#carbon--font-weight-function)
- **Used by**:
  - [carbon--type-reset [mixin]](#carbon--type-reset-mixin)

### carbon--type-reset [mixin]

Include a type reset that individuals can use in their projects for
consistent rendering

```scss
$carbon--type-reset: {
  html {
    font-size: $carbon--base-font-size;
  }

  body {
    @include carbon--font-family('sans');
    @include carbon--font-weight('regular');

    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  strong {
    font-weight: 600;
  }
}
```

- **Requires**:
  - [carbon--font-family [mixin]](#carbon--font-family-mixin)
  - [carbon--font-weight [mixin]](#carbon--font-weight-mixin)

### carbon--get-type-size [function]

Compute the type size for the given type scale step

```scss
$carbon--get-type-size: {
  @if $step == 1 {
    @return 12px;
  }
  // Yn = Yn-1 + {INT[(n-2)/4] + 1} * 2
  @return carbon--get-type-size($step - 1) + (floor(($step - 2) / 4) + 1) * 2;
}
```

**Parameters**:

| Name    | Description | Type     | Default value |
| ------- | ----------- | -------- | ------------- |
| `$step` | undefined   | `Number` | `—`           |

### carbon--type-scale [variable]

Our type scale. Follows a custom formula for determining each step size.
Supports sizes from 12px to 92px.

```scss
$carbon--type-scale: ();
```

- **Used by**:
  - [carbon--type-scale [function]](#carbon--type-scale-function)

### carbon--type-scale [function]

Get the value of a specific step in the typescale

```scss
$carbon--type-scale: {
  @return nth($carbon--type-scale, $step);
}
```

**Parameters**:

| Name    | Description | Type     | Default value |
| ------- | ----------- | -------- | ------------- |
| `$step` | undefined   | `Number` | `—`           |

- **Requires**:
  - [carbon--type-scale [variable]](#carbon--type-scale-variable)
- **Used by**:
  - [carbon--type-scale [mixin]](#carbon--type-scale-mixin)
  - [carbon--font-size [mixin]](#carbon--font-size-mixin)

### carbon--type-scale [mixin]

Set the font-size value of a selector with the value at the given \$step

```scss
$carbon--type-scale: {
  font-size: carbon--type-scale($step);
}
```

**Parameters**:

| Name    | Description | Type     | Default value |
| ------- | ----------- | -------- | ------------- |
| `$step` | undefined   | `Number` | `—`           |

- **Requires**:
  - [carbon--type-scale [function]](#carbon--type-scale-function)

### carbon--font-size [mixin]

Alias of `type-scale` mixin.

```scss
$carbon--font-size: {
  font-size: carbon--type-scale($step);
}
```

**Parameters**:

| Name    | Description | Type     | Default value |
| ------- | ----------- | -------- | ------------- |
| `$step` | undefined   | `Number` | `—`           |

- **Requires**:
  - [carbon--type-scale [function]](#carbon--type-scale-function)

### fluid-type [mixin]

This helper includes fluid type styles for the given token value. Fluid type
means that the `font-size` is computed using `calc()` in order to be
determined by the screen size instead of a breakpoint. As a result, fluid
styles should be used with caution in fixed width contexts.

In addition, we make use of %-based line-heights so that the line-height of
each type style is computed correctly due to the dynamic nature of the
`font-size`.

Most of the logic for this work comes from CSS Tricks:
https://css-tricks.com/snippets/css/fluid-typography/

```scss
$fluid-type: {
  // Include the initial styles for the given token by default without any
  // media query guard. This includes `font-size` as a fallback in the case
  // that a browser does not support `calc()`
  @include properties(map-remove($type-styles, breakpoints));
  // We also need to include the `sm` styles by default since they don't
  // appear in the fluid styles for tokens
  @include fluid-type-size($type-styles, sm, $breakpoints);

  // Finally, we need to go through all the breakpoints defined in the type
  // token and apply the properties and fluid type size for that given
  // breakpoint
  @each $name, $values in map-get($type-styles, breakpoints) {
    @include carbon--breakpoint($name) {
      @include properties($values);
      @include fluid-type-size($type-styles, $name, $breakpoints);
    }
  }
}
```

**Parameters**:

| Name           | Description                     | Type   | Default value |
| -------------- | ------------------------------- | ------ | ------------- |
| `$type-styles` | the value of a given type token | `Map`  | `—`           |
| `$breakpoints` | custom breakpoints to use       | `?Map` | `—`           |

- **Requires**:
  - [fluid-type-size [mixin]](#fluid-type-size-mixin)
  - [carbon--breakpoint [mixin]](#carbon--breakpoint-mixin)
  - [fluid-type-size [mixin]](#fluid-type-size-mixin)
- **Used by**:
  - [carbon--type-style [mixin]](#carbon--type-style-mixin)

### fluid-type-size [mixin]

Computes the fluid `font-size` for a given type style and breakpoint

```scss
$fluid-type-size: {
  // Get the information about the breakpoint we're currently working in. Useful
  // for getting initial width information
  $breakpoint: map-get($breakpoints, $name);

  // Our fluid styles are captured under the 'breakpoints' property in our type
  // styles map. These define what values to treat as `max-` variables below
  $fluid-sizes: map-get($type-styles, breakpoints);
  $fluid-breakpoint: ();
  // Special case for `sm` because the styles for small are on the type style
  // directly
  @if $name == sm {
    $fluid-breakpoint: map-remove($type-styles, breakpoints);
  } @else {
    $fluid-breakpoint: map-get($fluid-sizes, $name);
  }

  // Initialize our font-sizes to the default size for the type style
  $max-font-size: map-get($type-styles, font-size);
  $min-font-size: map-get($type-styles, font-size);
  @if map-has-key($fluid-breakpoint, font-size) {
    $min-font-size: map-get($fluid-breakpoint, font-size);
  }

  // Initialize our min and max width to the width of the current breakpoint
  $max-vw: map-get($breakpoint, width);
  $min-vw: map-get($breakpoint, width);

  // We can use `breakpoint-next` to see if there is another breakpoint we can
  // use to update `max-font-size` and `max-vw` with larger values
  $next-breakpoint-available: carbon--breakpoint-next($name, $breakpoints);
  $next-fluid-breakpoint-name: null;

  // We need to figure out what the next available fluid breakpoint is for our
  // given $type-styles. In this loop we try and iterate through breakpoints
  // until we either manually set $next-breakpoint-available to null or
  // `breakpoint-next` returns null.
  @while $next-breakpoint-available {
    @if map-has-key($fluid-sizes, $next-breakpoint-available) {
      $next-fluid-breakpoint-name: $next-breakpoint-available;
      $next-breakpoint-available: null;
    } @else {
      $next-breakpoint-available: carbon--breakpoint-next(
        $next-breakpoint-available,
        $breakpoints
      );
    }
  }

  // If we have found the next available fluid breakpoint name, then we know
  // that we have values that we can use to set max-font-size and max-vw as both
  // values derive from the next breakpoint
  @if $next-fluid-breakpoint-name {
    $next-fluid-breakpoint: map-get($breakpoints, $next-fluid-breakpoint-name);
    $max-font-size: map-get(
      map-get($fluid-sizes, $next-fluid-breakpoint-name),
      font-size
    );
    $max-vw: map-get($next-fluid-breakpoint, width);

    // prettier-ignore
    font-size: calc(#{$min-font-size} +
      #{strip-unit($max-font-size - $min-font-size)} *
      ((100vw - #{$min-vw}) / #{strip-unit($max-vw - $min-vw)})
    );
  } @else {
    // Otherwise, just default to setting the font size found from the type
    // style or the given fluid breakpoint in the type style
    font-size: $min-font-size;
  }
}
```

**Parameters**:

| Name           | Description                                            | Type   | Default value |
| -------------- | ------------------------------------------------------ | ------ | ------------- |
| `$type-styles` | the styles for a given token                           | `Map`  | `—`           |
| `$name`        | the name of the breakpoint to which we apply the fluid |
| styles         | `String`                                               | `—`    |
| `$breakpoints` | the breakpoints for the grid system                    | `?Map` | `—`           |

- **Requires**:
  - [carbon--breakpoint-next [function]](#carbon--breakpoint-next-function)
  - [carbon--breakpoint-next [function]](#carbon--breakpoint-next-function)
- **Used by**:
  - [fluid-type [mixin]](#fluid-type-mixin)
  - [fluid-type [mixin]](#fluid-type-mixin)

### carbon--type-style [mixin]

Helper mixin to include the styles for a given token in any selector in your
project. Also includes an optional fluid option that will enable fluid
styles for the token if they are defined. Fluid styles will cause the
token's font-size to be computed based on the viewport size. As a result, use
with caution in fixed contexts.

```scss
$carbon--type-style: {
  @if not map-has-key($tokens, $name) {
    @error 'Unable to find a token with the name: `#{$name}`';
  }

  $token: map-get($tokens, $name);

  // If $fluid is set to true and the token has breakpoints defined for fluid
  // styles, delegate to the fluid-type helper for the given token
  @if $fluid == true and map-has-key($token, 'breakpoints') {
    @include fluid-type($token, $breakpoints);
  } @else {
    // Otherwise, we just include all the property declarations directly on the
    // selector
    @include properties(map-remove($token, 'breakpoints'));
  }
}
```

**Parameters**:

| Name           | Description                                     | Type       | Default value |
| -------------- | ----------------------------------------------- | ---------- | ------------- |
| `$name`        | the name of the token to get the styles for     | `String`   | `—`           |
| `$fluid`       | specify whether to include fluid styles for the | `?Boolean` | `—`           |
| `$breakpoints` | provide a custom breakpoint map to use          |
| token          | `?Map`                                          | `—`        |

- **Requires**:
  - [fluid-type [mixin]](#fluid-type-mixin)

## @carbon/colors [deprecated]

These public Sass functions, mixins, placeholders, and variables are deprecated and may not be available in future releases.

### ibm--colors [mixin]

Define color variables

```scss
$ibm--colors: {
  $ibm-color__black-100: #000000 !default !global;
  $ibm-color__blue-10: #edf4ff !default !global;
  $ibm-color__blue-20: #c9deff !default !global;
  $ibm-color__blue-30: #97c1ff !default !global;
  $ibm-color__blue-40: #6ea6ff !default !global;
  $ibm-color__blue-50: #408bfc !default !global;
  $ibm-color__blue-60: #0062ff !default !global;
  $ibm-color__blue-70: #054ada !default !global;
  $ibm-color__blue-80: #0530ad !default !global;
  $ibm-color__blue-90: #061f80 !default !global;
  $ibm-color__blue-100: #051243 !default !global;
  $ibm-color__cool-gray-10: #f2f4f8 !default !global;
  $ibm-color__cool-gray-20: #d5d9e0 !default !global;
  $ibm-color__cool-gray-30: #b9bfc7 !default !global;
  $ibm-color__cool-gray-40: #9fa5ad !default !global;
  $ibm-color__cool-gray-50: #868d95 !default !global;
  $ibm-color__cool-gray-60: #697077 !default !global;
  $ibm-color__cool-gray-70: #50565b !default !global;
  $ibm-color__cool-gray-80: #373d42 !default !global;
  $ibm-color__cool-gray-90: #242a2e !default !global;
  $ibm-color__cool-gray-100: #13171a !default !global;
  $ibm-color__cyan-10: #e3f6ff !default !global;
  $ibm-color__cyan-20: #b3e6ff !default !global;
  $ibm-color__cyan-30: #6ccaff !default !global;
  $ibm-color__cyan-40: #30b0ff !default !global;
  $ibm-color__cyan-50: #1191e6 !default !global;
  $ibm-color__cyan-60: #0072c3 !default !global;
  $ibm-color__cyan-70: #0058a1 !default !global;
  $ibm-color__cyan-80: #003d73 !default !global;
  $ibm-color__cyan-90: #002b50 !default !global;
  $ibm-color__cyan-100: #07192b !default !global;
  $ibm-color__gray-10: #f3f3f3 !default !global;
  $ibm-color__gray-20: #dcdcdc !default !global;
  $ibm-color__gray-30: #bebebe !default !global;
  $ibm-color__gray-40: #a4a4a4 !default !global;
  $ibm-color__gray-50: #8c8c8c !default !global;
  $ibm-color__gray-60: #6f6f6f !default !global;
  $ibm-color__gray-70: #565656 !default !global;
  $ibm-color__gray-80: #3d3d3d !default !global;
  $ibm-color__gray-90: #282828 !default !global;
  $ibm-color__gray-100: #171717 !default !global;
  $ibm-color__green-10: #dafbe4 !default !global;
  $ibm-color__green-20: #9deeb2 !default !global;
  $ibm-color__green-30: #56d679 !default !global;
  $ibm-color__green-40: #3dbb61 !default !global;
  $ibm-color__green-50: #24a148 !default !global;
  $ibm-color__green-60: #198038 !default !global;
  $ibm-color__green-70: #10642a !default !global;
  $ibm-color__green-80: #054719 !default !global;
  $ibm-color__green-90: #01330f !default !global;
  $ibm-color__green-100: #081b09 !default !global;
  $ibm-color__magenta-10: #fff0f6 !default !global;
  $ibm-color__magenta-20: #ffcfe1 !default !global;
  $ibm-color__magenta-30: #ffa0c2 !default !global;
  $ibm-color__magenta-40: #fa75a6 !default !global;
  $ibm-color__magenta-50: #ee538b !default !global;
  $ibm-color__magenta-60: #d12765 !default !global;
  $ibm-color__magenta-70: #a11950 !default !global;
  $ibm-color__magenta-80: #760a3a !default !global;
  $ibm-color__magenta-90: #57002b !default !global;
  $ibm-color__magenta-100: #2a0a16 !default !global;
  $ibm-color__orange-40: #fc7b1e !default !global;
  $ibm-color__purple-10: #f7f1ff !default !global;
  $ibm-color__purple-20: #e6d6ff !default !global;
  $ibm-color__purple-30: #d0b0ff !default !global;
  $ibm-color__purple-40: #bb8eff !default !global;
  $ibm-color__purple-50: #a66efa !default !global;
  $ibm-color__purple-60: #8a3ffc !default !global;
  $ibm-color__purple-70: #6e32c9 !default !global;
  $ibm-color__purple-80: #4f2196 !default !global;
  $ibm-color__purple-90: #38146b !default !global;
  $ibm-color__purple-100: #1e1033 !default !global;
  $ibm-color__red-10: #fff0f1 !default !global;
  $ibm-color__red-20: #fcd0d3 !default !global;
  $ibm-color__red-30: #ffa4a9 !default !global;
  $ibm-color__red-40: #ff767c !default !global;
  $ibm-color__red-50: #fb4b53 !default !global;
  $ibm-color__red-60: #da1e28 !default !global;
  $ibm-color__red-70: #a51920 !default !global;
  $ibm-color__red-80: #750e13 !default !global;
  $ibm-color__red-90: #570408 !default !global;
  $ibm-color__red-100: #2c080a !default !global;
  $ibm-color__teal-10: #dbfbfb !default !global;
  $ibm-color__teal-20: #92eeee !default !global;
  $ibm-color__teal-30: #20d5d2 !default !global;
  $ibm-color__teal-40: #00bab6 !default !global;
  $ibm-color__teal-50: #009c98 !default !global;
  $ibm-color__teal-60: #007d79 !default !global;
  $ibm-color__teal-70: #006161 !default !global;
  $ibm-color__teal-80: #004548 !default !global;
  $ibm-color__teal-90: #003137 !default !global;
  $ibm-color__teal-100: #081a1c !default !global;
  $ibm-color__warm-gray-10: #f7f3f1 !default !global;
  $ibm-color__warm-gray-20: #e0dbda !default !global;
  $ibm-color__warm-gray-30: #c1bcbb !default !global;
  $ibm-color__warm-gray-40: #a7a2a2 !default !global;
  $ibm-color__warm-gray-50: #8f8b8b !default !global;
  $ibm-color__warm-gray-60: #726e6e !default !global;
  $ibm-color__warm-gray-70: #595555 !default !global;
  $ibm-color__warm-gray-80: #403c3c !default !global;
  $ibm-color__warm-gray-90: #2b2828 !default !global;
  $ibm-color__warm-gray-100: #1a1717 !default !global;
  $ibm-color__white-0: #ffffff !default !global;
  $ibm-color__yellow-20: #fdd13a !default !global;

  $ibm-color-map: (
    'black': (
      100: #000000,
    ),
    'blue': (
      10: #edf4ff,
      20: #c9deff,
      30: #97c1ff,
      40: #6ea6ff,
      50: #408bfc,
      60: #0062ff,
      70: #054ada,
      80: #0530ad,
      90: #061f80,
      100: #051243,
    ),
    'coolGray': (
      10: #f2f4f8,
      20: #d5d9e0,
      30: #b9bfc7,
      40: #9fa5ad,
      50: #868d95,
      60: #697077,
      70: #50565b,
      80: #373d42,
      90: #242a2e,
      100: #13171a,
    ),
    'cyan': (
      10: #e3f6ff,
      20: #b3e6ff,
      30: #6ccaff,
      40: #30b0ff,
      50: #1191e6,
      60: #0072c3,
      70: #0058a1,
      80: #003d73,
      90: #002b50,
      100: #07192b,
    ),
    'gray': (
      10: #f3f3f3,
      20: #dcdcdc,
      30: #bebebe,
      40: #a4a4a4,
      50: #8c8c8c,
      60: #6f6f6f,
      70: #565656,
      80: #3d3d3d,
      90: #282828,
      100: #171717,
    ),
    'green': (
      10: #dafbe4,
      20: #9deeb2,
      30: #56d679,
      40: #3dbb61,
      50: #24a148,
      60: #198038,
      70: #10642a,
      80: #054719,
      90: #01330f,
      100: #081b09,
    ),
    'magenta': (
      10: #fff0f6,
      20: #ffcfe1,
      30: #ffa0c2,
      40: #fa75a6,
      50: #ee538b,
      60: #d12765,
      70: #a11950,
      80: #760a3a,
      90: #57002b,
      100: #2a0a16,
    ),
    'orange': (
      40: #fc7b1e,
    ),
    'purple': (
      10: #f7f1ff,
      20: #e6d6ff,
      30: #d0b0ff,
      40: #bb8eff,
      50: #a66efa,
      60: #8a3ffc,
      70: #6e32c9,
      80: #4f2196,
      90: #38146b,
      100: #1e1033,
    ),
    'red': (
      10: #fff0f1,
      20: #fcd0d3,
      30: #ffa4a9,
      40: #ff767c,
      50: #fb4b53,
      60: #da1e28,
      70: #a51920,
      80: #750e13,
      90: #570408,
      100: #2c080a,
    ),
    'teal': (
      10: #dbfbfb,
      20: #92eeee,
      30: #20d5d2,
      40: #00bab6,
      50: #009c98,
      60: #007d79,
      70: #006161,
      80: #004548,
      90: #003137,
      100: #081a1c,
    ),
    'warmGray': (
      10: #f7f3f1,
      20: #e0dbda,
      30: #c1bcbb,
      40: #a7a2a2,
      50: #8f8b8b,
      60: #726e6e,
      70: #595555,
      80: #403c3c,
      90: #2b2828,
      100: #1a1717,
    ),
    'white': (
      0: #ffffff,
    ),
    'yellow': (
      20: #fdd13a,
    ),
  ) !default !global;
}
```

- **Deprecated**: Use `$carbon--colors` going forward

## @carbon/themes [deprecated]

These public Sass functions, mixins, placeholders, and variables are deprecated and may not be available in future releases.

### brand-01 [variable]

```scss
$brand-01: map-get($carbon--theme, brand-01);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)
- **Deprecated**: This may not be available in future releases

### brand-02 [variable]

```scss
$brand-02: map-get($carbon--theme, brand-02);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)
- **Deprecated**: This may not be available in future releases

### brand-03 [variable]

```scss
$brand-03: map-get($carbon--theme, brand-03);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)
- **Deprecated**: This may not be available in future releases

### active-01 [variable]

```scss
$active-01: map-get($carbon--theme, active-01);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)
- **Deprecated**: This may not be available in future releases

### hover-field [variable]

```scss
$hover-field: map-get($carbon--theme, hover-field);
```

- **Type**: `Color`
- **Used by**:
  - [carbon--theme [mixin]](#carbon--theme-mixin)
- **Deprecated**: This may not be available in future releases
