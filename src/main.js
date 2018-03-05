
import Vue from 'vue';
import App from './App'
import router from './router';
import ElementUI from 'element-ui';
import store from './vuex/store.js';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(router);

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
});
