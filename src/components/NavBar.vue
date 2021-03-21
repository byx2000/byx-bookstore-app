<template>
  <div>
    <el-row type="flex" align="middle">
      <el-col :span="16">
        <el-row type="flex" align="middle">
          <img src="../../public/images/logo.png" class="logo"/>
          <el-menu id="navbar" :default-active="$route.path" class="el-menu-demo" mode="horizontal" router>
            <el-menu-item index="/home">首页推荐</el-menu-item>
            <el-menu-item index="/category">分类浏览</el-menu-item>
            <el-menu-item index="/rank">排行榜</el-menu-item>
          </el-menu>
        </el-row>
      </el-col>
      <el-col :span="8">
        <el-row type="flex" align="middle" justify="end">
          <el-dropdown class="user-dropdown">
            <span class="el-dropdown-link">
              <el-row type="flex" align="middle">
                <span v-if="userInfo === null">登录 | 注册</span>
                <el-avatar v-if="userInfo !== null" :size="40" :src="userInfo.avatar"/>
                <span v-if="userInfo !== null" class="nickname">{{userInfo.nickname}}</span>
                <i class="el-icon-arrow-down el-icon--right"></i>
              </el-row>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-if="userInfo === null" @click.native="loginDlalogOpen = true">登录</el-dropdown-item>
              <el-dropdown-item v-if="userInfo === null">注册</el-dropdown-item>
              <el-dropdown-item v-if="userInfo !== null" @click.native="toProfilePage">我的主页</el-dropdown-item>
              <el-dropdown-item v-if="userInfo !== null" @click.native="logout">注销</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-form :inline="true" class="demo-form-inline" @submit.native.prevent>
            <el-row type="flex" justify="end">
              <el-form-item>
                <el-input v-model="keyword" placeholder="请输入关键字" @keyup.enter="toSearchPage"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="toSearchPage">搜索</el-button>
              </el-form-item>
            </el-row>
          </el-form>
        </el-row>
      </el-col>
    </el-row>
    <el-dialog title="登录" width="30%" :visible.sync="loginDlalogOpen">
      <el-form>
        <el-form-item label="用户名">
          <el-input v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="password" show-password></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="loginDlalogOpen = false">取 消</el-button>
        <el-button type="primary" @click="login">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { login, getCurrentUser, logout as logoutRequest } from '../network/common'
import { CODE_SUCCESS } from '../common/constants'

export default {
  name: 'NavBar',
  data() {
    return {
      keyword: '',
      loginDlalogOpen: false,
      username: '',
      password: '',
      userInfo: null
    }
  },
  created() {
    getCurrentUser().then(res => {
      if (res.code == CODE_SUCCESS) {
        this.userInfo = res.data
      }
    })
  },
  methods: {
    toSearchPage() {
      this.$router.push({
        path: '/search',
        query: {
          keyword: this.keyword,
          currentPage: 1,
          orderBy: 'score',
          orderType: 'desc'
        }
      })
    },
    login() {
      login({
        username: this.username,
        password: this.password
      }).then(res => {
        if (res.code === CODE_SUCCESS) {
          this.userInfo = res.data
          this.loginDlalogOpen = false
          window.location.reload()
        }
        else {
          this.$message.error('用户名或密码错误');
        }
      })
    },
    logout() {
      logoutRequest().then(res => {
        this.userInfo = null
        if (this.$route.path === '/profile') {
          this.$router.replace('/home')
        } else {
          window.location.reload()
        }
      })   
    },
    toProfilePage() {
      this.$router.replace({
        path: '/profile'
      })
    }
  }
}
</script>

<style scoped>
.logo {
  height: 50px;
  margin-left: 10px;
  margin-right: 10px;
}

#navbar {
  border: none;
}

.el-form-item {
  margin-bottom: 0;
}

.nickname {
  margin-left: 10px;
}

.user-dropdown {
  margin-right: 20px;
  cursor: pointer;
}
</style>