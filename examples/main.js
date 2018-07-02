import Vue from 'vue'
import App from './App'
import router from './router'

import 'normalize.css';
import './style/index.less';

// 全局引入
import krChart from '../src/index.es.js';
Vue.use(krChart);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
