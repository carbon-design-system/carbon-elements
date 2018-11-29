import { CarbonComponentsVue, CvBee32 } from '@carbon/icons-vue';
import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(CarbonComponentsVue, {
  components: {
    CvBee32,
  },
});

new Vue({
  render: h => h(App),
}).$mount('#app');
