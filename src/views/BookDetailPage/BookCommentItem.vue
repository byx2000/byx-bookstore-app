<template>
  <el-card class="box-card comment-item">
    <el-row slot="header" type="flex" justify="space-between">
      <el-row type="flex" align="middle">
        <el-avatar :size="40" :src="comment.avatar"></el-avatar>
        <span class="username">{{comment.username}}</span>
      </el-row>
      <el-row type="flex" align="middle">
        <span class="publish-time">发表时间：{{comment.time}}</span>
      </el-row> 
    </el-row>
    <p>{{comment.content}}</p>
  </el-card>
</template>

<script>
export default {
  name: 'BookCommentItem',
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

.username {
  margin-left: 10px;
  font-weight: bold;
}

.publish-time {
  font-size: 14px;
}
</style>