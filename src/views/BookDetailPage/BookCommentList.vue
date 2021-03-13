<template>
  <div>
    <book-comment-item v-for="(comment, index) in comments" :key="index" :comment="comment"/>
  </div>
</template>

<script>
import BookCommentItem from './BookCommentItem.vue'
export default {
  components: { BookCommentItem },
  name: 'BookCommentList',
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