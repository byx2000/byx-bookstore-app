<template>
  <el-card class="box-card comment-item">
    {{comment}}
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
</style>