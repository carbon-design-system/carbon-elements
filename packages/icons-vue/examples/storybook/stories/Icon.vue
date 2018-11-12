<template>
  <svg v-bind="svg">
    <title v-if="title" :id="`icon-title-${id}`">
      {{ title }}
    </title>
    <slot />
  </svg>
</template>

<script>
let id = 0;

export default {
  name: 'Icon',
  props: {
    ariaLabel: String,
    ariaLabelledBy: String,
    focusable: {
      type: Boolean,
      default: false,
    },
    height: String,
    title: String,
    desc: String,
    viewBox: String,
    width: String,
  },
  data: {
    preserveAspectRatio: '',
  },
  computed: {
    titleId() {
      return `icon-title-${this.id}`;
    },
    svg() {
      const {
        desc,
        width,
        height,
        viewBox,
        ariaLabel,
        ariaLabelledBy,
        id,
        title,
      } = this;
      const props = {
        width,
        height,
        viewBox,
        preserveAspectRatio: 'xMidYMid meet',
        'aria-hidden': true,
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledBy,
        focusable: 'false',
      };

      if (ariaLabel || ariaLabelledBy || title) {
        props.focusable = 'true';
        props['aria-hidden'] = false;
      }

      if (title) {
        props['aria-labelledby'] = this.titleId;
      }

      return props;
    },
  },
  beforeCreate() {
    this.id = ++id;
  },
};
</script>
