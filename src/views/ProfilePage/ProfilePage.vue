<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col :span="3">
          <el-row type="flex" justify="center" class="user-avatar">
            <el-avatar :size="120" :src="userInfo.avatar"></el-avatar>
          </el-row>
          <el-row type="flex" justify="center" class="user-nickname">
            <p>{{userInfo.nickname}}</p>
          </el-row>
          <el-menu :default-active="currentTabIndex"
            class="el-menu-vertical-demo"
            @select="onTabChanged">
            <el-menu-item index="0">
              <i class="el-icon-s-comment"></i>
              <span slot="title">我的评论</span>
            </el-menu-item>
            <el-menu-item index="1">
              <i class="el-icon-star-on"></i>
              <span slot="title">我的收藏</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-s-management"></i>
              <span slot="title">我的书签</span>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col v-if="currentTabIndex === '0'" :span="21" class="user-comment">
          <user-comment-tab :commentData="commentData" 
            :commentQuery="commentQuery" 
            @onCurrentPageChanged="onCommentCurrentPageChanged"
            @onSearchClick="onCommentSearchClick"/>
        </el-col>
        <el-col v-if="currentTabIndex === '1'" :span="21" class="user-favorite">
          <user-favorite-tab :favoriteData="favoriteData"
            :favoriteQuery="favoriteQuery"
            @onSearchClick="onFavoriteSearchClick"
            @onCurrentPageChanged="onFavoriteCurrentPageChanged"/>
        </el-col>
        <el-col v-if="currentTabIndex === '2'" :span="21" class="user-bookmark">
          我的书签
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import { getCurrentUser } from '../../network/common'
import { getUserComments, getUserFavorites } from '../../network/ProfilePage'
import UserCommentTab from './UserCommentTab.vue'
import UserFavoriteTab from './UserFavoriteTab.vue'

export default {
  components: { UserCommentTab, UserFavoriteTab },
  name: 'ProfilePage',
  data() {
    return {
      userInfo: {},
      currentTabIndex: '0',
      commentQuery: {
        commentKeyword: '',
        bookKeyword: '',
        orderType: 'desc',
        currentPage: 1,
        pageSize: 10
      },
      commentData: {
        comments: [],
        totalCount: 0,
        totalPage: 0
      },
      favoriteQuery: {
        bookKeyword: '',
        authorKeyword: '',
        orderType: 'desc',
        currentPage: 1,
        pageSize: 10
      },
      favoriteData: {
        favorites: [],
        totalCount: 0,
        totalPage: 0
      }
    }
  },
  created() {
    getCurrentUser().then(res => {
      this.userInfo = res.data
    })

    this.getCommentData()
  },
  methods: {
    onTabChanged(index) {
      if (index == 1 && this.favoriteData.favorites.length === 0) {
        this.getFavoriteData()
      }
      this.currentTabIndex = index
    },
    getCommentData() {
      getUserComments(this.commentQuery).then(res => {
        this.commentData.comments = res.data.data
        this.commentData.totalCount = res.data.totalCount
        this.commentData.totalPage = res.data.totalPage
      })
    },
    getFavoriteData() {
      getUserFavorites(this.favoriteQuery).then(res => {
        this.favoriteData.favorites = res.data.data
        this.favoriteData.totalCount = res.data.totalCount
        this.favoriteData.totalPage = res.data.totalPage
      })
    },
    onCommentCurrentPageChanged(currentPage) {
      this.commentQuery.currentPage = currentPage
      this.getCommentData()
      window.scrollTo(0, 0)
    },
    onCommentSearchClick(selected) {
      this.commentQuery.bookKeyword = selected.bookKeyword
      this.commentQuery.commentKeyword = selected.commentKeyword
      this.commentQuery.orderType = selected.orderType
      this.commentQuery.currentPage = 1
      this.getCommentData()
    },
    onFavoriteSearchClick(selected) {
      this.favoriteQuery.bookKeyword = selected.bookKeyword
      this.favoriteQuery.authorKeyword = selected.authorKeyword
      this.favoriteQuery.orderType = selected.orderType
      this.favoriteQuery.currentPage = 1
      this.getFavoriteData()
    },
    onFavoriteCurrentPageChanged(currentPage) {
      this.favoriteQuery.currentPage = currentPage
      this.getFavoriteData()
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style scoped>
.user-info {
  margin-bottom: 20px;
}

.user-comment, .user-favorite, .user-bookmark {
  padding-left: 20px;
}
</style>