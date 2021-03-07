<template>
  <div>
    电子书id：{{bookId}}
  </div>
</template>

<script>
export default {
  name: 'BookDetailPage',
  computed: {
    bookId() {
      return this.$route.query.bookId
    }
  }
}
</script>