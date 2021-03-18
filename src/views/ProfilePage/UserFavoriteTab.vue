<template>
  <div>
    <favorite-query-option @onSearchClick="onSearchClick"/>
    <h3>共 {{favoriteData.totalCount}} 条收藏，共 {{favoriteData.totalPage}} 页，当前第 {{favoriteQuery.currentPage}} 页</h3>
    <user-favorite-list :favorites="favoriteData.favorites"/>
    <el-row type="flex" justify="center">
      <el-pagination
        background
        layout="prev, pager, next"
        :current-page="favoriteQuery.currentPage"
        :total="favoriteData.totalCount"
        :page-size="favoriteQuery.pageSize"
        @current-change="onCurrentPageChanged">
      </el-pagination>
    </el-row>
  </div>
</template>

<script>
import FavoriteQueryOption from './FavoriteQueryOption.vue'
import UserFavoriteList from './UserFavoriteList.vue'
export default {
  components: { UserFavoriteList, FavoriteQueryOption },
  name: 'UserFavoriteTab',
  props: {
    favoriteData: {
      type: Object,
      default() {
        return {}
      }
    },
    favoriteQuery: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    onSearchClick(selected) {
      this.$emit('onSearchClick', selected)
    },
    onCurrentPageChanged(currentPage) {
      this.$emit("onCurrentPageChanged", currentPage)
    }
  }
}
</script>