<template>
  <div>
    <el-row type="flex" align="middle">
      <el-col :span="16">
        <el-menu id="navbar" :default-active="'home'" class="el-menu-demo" mode="horizontal" router>
          <el-menu-item index="home">首页推荐</el-menu-item>
          <el-menu-item index="category">分类浏览</el-menu-item>
          <el-menu-item index="rank">排行榜</el-menu-item>
          <el-submenu index="4">
            <template slot="title">用户</template>
            <el-menu-item index="profile">我的主页</el-menu-item>
            <el-menu-item index="2-2">注销</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="8">
        <el-form :inline="true" class="demo-form-inline">
          <el-row type="flex" justify="end">
            <el-form-item>
              <el-input v-model="searchText" placeholder="请输入关键字"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="toSearchPage">搜索</el-button>
            </el-form-item>
          </el-row>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      searchText: ''
    }
  },
  created() {
    
  },
  methods: {
    toSearchPage() {
      this.$router.replace({
        path: '/search',
        query: {
          searchText: this.searchText
        }
      })
    }
  }
}
</script>

<style scoped>
#navbar {
  border: none;
}

.el-form-item {
  margin-bottom: 0;
}
</style>