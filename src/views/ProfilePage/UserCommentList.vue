<template>
  <div>
    <user-comment-item v-for="(comment, index) in comments" :key="index" :comment="comment"/>
  </div>
</template>

<script>
import UserCommentItem from './UserCommentItem.vue'
export default {
  components: { UserCommentItem },
  name: 'UserCommentList',
  props: {
    comments: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>