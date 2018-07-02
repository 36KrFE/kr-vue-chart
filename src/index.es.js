import KrBar from './packages/bar'
import KrHistogram from './packages/histogram'
import KrLine from './packages/line'
import KrPie from './packages/pie'
// import KrRing from './packages/ring'
// import KrWaterfall from './packages/waterfall'
// import KrFunnel from './packages/funnel'
// import KrRadar from './packages/radar'
// import KrChart from './packages/chart'
// import KrMap from './packages/map'
// import KrBmap from './packages/bmap'
// import KrAmap from './packages/amap'
// import KrSankey from './packages/sankey'
// import KrHeatmap from './packages/heatmap'
// import KrScatter from './packages/scatter'
import KrCandle from './packages/candle'
// import KrGauge from './packages/gauge'
// import KrTree from './packages/tree'

const components = [
  KrBar,
  KrHistogram,
  KrLine,
  KrPie,
  // KrRing,
  // KrWaterfall,
  // KrFunnel,
  // KrRadar,
  // KrChart,
  // KrMap,
  // KrBmap,
  // KrAmap,
  // KrSankey,
  // KrHeatmap,
  // KrScatter,
  KrCandle,
  // KrGauge,
  // KrTree
]

function install (Vue, _) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  KrBar,
  KrHistogram,
  // KrRing,
  KrLine,
  KrPie,
  // KrWaterfall,
  // KrFunnel,
  // KrRadar,
  // KrChart,
  // KrMap,
  // KrBmap,
  // KrAmap,
  // KrSankey,
  // KrHeatmap,
  // KrScatter,
  KrCandle,
  // KrGauge,
  // KrTree,
  install
}
