<template>
  <div id="app">
    <div class="main-container">
      <div class="left-section">
        <sidebar></sidebar>
      </div>
      <div class="right-section">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/sidebar.vue';

export default {
  name: 'App',
  components: {
    Sidebar
  }
}
</script>


