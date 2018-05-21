<template>
  <div class="component-sidebar">
    <div
      class="main-section"
      v-for="(menu, title) in menus"
      :key="title">
      <span class="main-title">{{ title }}</span>
      <ul>
        <li v-for="(item, index) in menu" :key="index">
          <router-link  :to="{name: '演示图表', params: {type: item.type}}">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import chartData from '../data/index.js';

const routerInfo = {
  '图表': Object.keys(chartData).map(key => {
    return {
      name: chartData[key].name,
      url: `chart/${chartData[key].type}`,
      type: chartData[key].type
    }
  }),
  '其他': [
    {
      name: '',
      url: ''
    }
  ]
}

export default {
  name: 'Sidebar',
  created() {
    this.menus = routerInfo;
  }
}
</script>
