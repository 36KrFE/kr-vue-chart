
# [kr-vue-chart](https://github.com/36KrFE/kr-vue-chart/)

[![Version](https://img.shields.io/npm/v/x-vui.svg)](https://www.npmjs.com/package/kr-vue-chart) [![Downloads](http://img.shields.io/npm/dm/x-vui.svg)](https://www.npmjs.com/package/kr-vue-chart) [![License](https://img.shields.io/npm/l/x-vui.svg?style=flat)](https://opensource.org/licenses/MIT) [![TravisCI](https://travis-ci.org/Brickies/vui.svg)](https://travis-ci.org/Brickies/vui)

> It's a library of chart for vue build with echarts or d3.js .

## 安装

### npm 安装

```shell
npm i kr-vue-chart -D
```

### CDN
```html
<!-- 引入样式 -->
<link rel="stylesheet" href="...">
<!-- 引入组件库 -->
<script src="..."></script>
```

## 快速开始

### 完整引入

```javascript
import Vue from 'vue'
import krVueChart from 'kr-vue-chart'

Vue.use(krVueChart)
```

### 部分引入

```javascript
import Vue from 'vue'
import {
  KrBar,
  KrHistogram
  // ...
} from 'kr-vue-chart'

Vue.component(KrBar.name, KrBar)
Vue.component(KrHistogram.name, KrHistogram)
```

### 引入插件

**注：完整引入了kr-vue-chart，则无需再注册插件**

```javascript
import Vue from 'vue';
import { 
  // ...
} from 'kr-vue-chart';

Vue.prototype.*** = ***
```
 
## 贡献代码

修改代码请阅读 [开发指南](https://github.com/36KrFE/kr-vue-chart)， 使用过程中发现任何问题都可以提 [Issue](https://github.com/Ls-master) 给我。当然，我也非常欢迎你给我发 [PR](https://github.com/Ls-master)。

## 开源协议

本项目基于 [MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89) 协议，请自由地享受和参与开源。

## 特别感谢

该组件库部分灵感来自于 [`v-charts`](https://github.com/ElemeFE/v-charts) 和 [`echarts`](https://github.com/apache/incubator-echarts)，这里感谢 [`36Kr前端团队`](https://github.com/36KrFE) 对开源项目的贡献，手动点波赞 👍 
