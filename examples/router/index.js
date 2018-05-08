import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';

import Install from '@/pages/install.vue';
import Chart from '@/pages/chart.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '安装',
      component: Install
    },
    {
      path: '/chart/:type',
      name: '演示图表',
      component: Chart
    }
  ]
})
