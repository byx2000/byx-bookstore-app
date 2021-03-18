<template>
  <el-card class="box-card comment-item">
    <el-row slot="header" type="flex" justify="space-between">
      <span class="book-name" @click="toBookDetailPage(comment.bookId)">{{comment.bookName}}</span>
      <span>发表时间：{{comment.time}}</span>
    </el-row>
    <p>{{comment.content}}</p>
  </el-card>
</template>

<script>
export default {
  name: 'UserCommentItem',
  props: {
    comment: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    toBookDetailPage(bookId) {
      this.$router.push({
        path: '/detail',
        query: {
          bookId
        }
      })
    }
  }
}
</script>

<style scoped>
.comment-item {
  margin-top: 20px;
  margin-bottom: 20px;
}

.book-name {
  font-weight: bold;
}

.book-name:hover {
  text-decoration: underline;
  cursor: pointer;
  color: #409eff;
}
</style>