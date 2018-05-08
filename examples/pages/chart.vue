<template>
  <div class="pages-chart">
    <div class="chart-item" v-for="(item, index) in chartData" :key="index">
      <div class="chart-part">
        <h3>{{ item.name }}</h3>
        <!-- <component
          :is="`kr-${innerType}`"
          :data="item.data"
          :setting="item.setting">
        </component>  -->
      </div>
      <div class="code-view">
        <p>数据格式</p>
        <div class="data-code">

        </div>
        <p>配置项</p>
        <div class="setting-code">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KrBar from '../../src/packages/bar';
import CHART_DATA from '../data';

export default {
  name: 'Item',
  data () {
    return {
      type: null,     // 路由图表类型
      chartData: [],  // 图表加载数据
      innerType: null // 图表类型
    }
  },
  methods: {
    init () {
      this.type = this.$route.params.type;
      this.chartData = CHART_DATA[this.type].data;
      this.innerType = CHART_DATA[this.type].type;
    }
  },
  created () {
    this.init();
  },
  watch: {
    $route () {
      this.init();
    }
  },
  components: {
    // KrBar
  }
}
</script>
