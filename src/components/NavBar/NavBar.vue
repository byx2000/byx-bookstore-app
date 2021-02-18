<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#" @click="toHomePage">Byx网上书城</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item @click="toHomePage">主页</b-nav-item>
          <b-nav-item @click="toCategoryPage">分类</b-nav-item>
          <b-nav-item @click="toRankPage">排行</b-nav-item>
          <b-nav-item @click="toAboutPage">关于</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="书名/作者名/关键字" v-model="searchText"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" @click="toSearchPage">搜索电子书</b-button>
          </b-nav-form>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>用户</em>
            </template>
            <b-dropdown-item @click="toProfilePage">我的</b-dropdown-item>
            <b-dropdown-item href="#">注销</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
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
    console.log('获取用户信息')
  },
  methods: {
    toHomePage() {
      this.$router.replace('/home')
    },
    toCategoryPage () {
      this.$router.replace('/category')
    },
    toRankPage() {
      this.$router.replace('/rank')
    },
    toAboutPage() {
      this.$router.replace('/about')
    },
    toProfilePage() {
      this.$router.replace('/profile')
    },
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