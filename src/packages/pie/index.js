import echarts from '../../echarts-base'
import 'echarts/lib/chart/pie'
import { pie } from './main'
import Core from '../../core'
export default {
  name: 'KrPie',
  mixins: [Core],
  created () {
    this.chartHandler = pie
    this.echartsLib = echarts
  }
}
