import { storiesOf } from '@storybook/vue';
import Icon from './Icon.vue';

storiesOf('Icon', module).add('default', () => {
  return {
    components: { Icon },
    template: `<icon viewBox="0 0 32 32" width="32" height="32" title="sup">
    <circle
      width="32"
      height="32"
      viewBox="0 0 32 32"
      cx="16"
      cy="16"
      r="16"
      fill="black">
    </circle>
    </icon>`,
  };
});
