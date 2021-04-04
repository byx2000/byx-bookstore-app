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
              <el-dropdown-item v-if="userInfo === null" @click.native="registerDialogOpen = true">注册</el-dropdown-item>
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
    <!--登录对话框-->
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
    <!--注册对话框-->
    <el-dialog title="注册" width="30%" :visible.sync="registerDialogOpen">
      <el-row class="margin-bottom-20">
        <el-input placeholder="请输入用户名" v-model="registerData.username"></el-input>
      </el-row>
      <el-row class="margin-bottom-20">
        <el-input placeholder="请输入昵称" v-model="registerData.nickname"></el-input>
      </el-row>
      <el-row class="margin-bottom-20">
        <el-input placeholder="请输入密码" v-model="registerData.password" show-password></el-input>
      </el-row>
      <el-row type="flex" align="middle" class="margin-bottom-20">
        <span>用户头像：</span>
        <el-upload
          :show-file-list="false"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <el-button v-if="registerData.userAvatarUrl === null" size="small" type="primary">点击上传头像</el-button>
          <el-avatar v-if="registerData.userAvatarUrl !== null" :size="40" :src="registerData.userAvatarUrl"/>
        </el-upload>
      </el-row>
      <el-row type="flex">
        <el-input placeholder="验证码" class="margin-right-20" v-model="registerData.checkCode"></el-input>
        <el-image ref="checkCodeImage" :src="checkCodeImageUrl" @click="changeCheckCode"/>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="registerDialogOpen = false">取 消</el-button>
        <el-button type="primary" @click="register">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { login, getCurrentUser, logout as logoutRequest, register } from '../network/common'
import { CODE_SUCCESS, CODE_USER_EXIST } from '../common/constants'

export default {
  name: 'NavBar',
  data() {
    return {
      keyword: '',
      loginDlalogOpen: false,
      registerDialogOpen: false,
      username: '',
      password: '',
      userInfo: null,
      checkCodeImageUrl: 'http://182.92.74.74:8888/byx-bookstore-api/check-code/generate',
      registerData: {
        username: '',
        nickname: '',
        password: '',
        userAvatarUrl: null,
        avatar: null,
        checkCode: ''
      }
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
        if (this.$route.path === '/profile' || this.$route.path === '/read') {
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
    },
    handleAvatarSuccess(res, file) {
      this.registerData.userAvatarUrl = URL.createObjectURL(file.raw);
      this.registerData.avatar = file.raw
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    changeCheckCode() {
      this.checkCodeImageUrl = 'http://182.92.74.74:8888/byx-bookstore-api/check-code/generate?timestamp=' + Date.now()
    },
    register() {
      let formData = new FormData();
      formData.append("username", this.registerData.username);
      formData.append("password", this.registerData.password);
      formData.append("nickname", this.registerData.nickname);
      formData.append("avatar", this.registerData.avatar);
      formData.append("checkCode", this.registerData.checkCode);
      register(formData).then(res => {
        if (res.code === CODE_SUCCESS) {
          this.$message.success('注册成功！')
          this.registerDialogOpen = false
        } else if (res.code === CODE_USER_EXIST) {
          this.$message.error('用户已存在！')
        } else {
          this.$message.error('注册失败：' + res.data)
        }
        this.changeCheckCode()
        
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

.avatar-upload {
  margin-top: 20px;
}

.margin-bottom-20 {
  margin-bottom: 20px;
}

.margin-right-20 {
  margin-right: 20px;
}
</style>