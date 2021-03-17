<template>
  <div>
    <h3>共 {{commentData.totalCount}} 条评论，共 {{commentData.totalPage}} 页，当前第 {{commentQuery.currentPage}} 页</h3>
    <user-comment-list :comments="commentData.comments"/>
    <el-row type="flex" justify="center">
      <el-pagination
        background
        layout="prev, pager, next"
        :current-page="commentQuery.currentPage"
        :total="commentData.totalCount"
        :page-size="commentQuery.pageSize"
        @current-change="onCurrentPageChanged">
      </el-pagination>
    </el-row>
  </div>
</template>

<script>
import UserCommentList from './UserCommentList.vue'

export default {
  components: { UserCommentList },
  name: 'UserCommentTab',
  props: {
    commentData: {
      type: Object,
      default() {
        return {}
      }
    },
    commentQuery: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    onCurrentPageChanged(currentPage) {
      this.$emit("onCurrentPageChanged", currentPage)
    }
  }
}
</script>