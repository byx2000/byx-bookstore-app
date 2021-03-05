<template>
  <div>
    <nav-bar/>
    <el-divider id="divider-below-navbar"></el-divider>
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar/NavBar.vue'
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style scoped>
#divider-below-navbar {
  margin-top: 0;
}
</style>
