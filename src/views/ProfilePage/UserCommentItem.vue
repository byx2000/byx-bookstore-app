<template>
  <el-card class="box-card comment-item">
    <el-row slot="header" type="flex" justify="space-between">
      <span>{{comment.bookName}}</span>
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
  }
}
</script>

<style scoped>
.comment-item {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>