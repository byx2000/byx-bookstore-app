<template>
  <div>
    <nav-bar/>
    <el-divider id="divider-below-navbar"></el-divider>
    <keep-alive>
      <router-view/>
    </keep-alive>
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

<style>
body {
  margin: 0;
}

#divider-below-navbar {
  margin-top: 0;
}
</style>
