import Vue from 'vue';

import '../node_modules/bootswatch/dist/lux/bootstrap.css';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
