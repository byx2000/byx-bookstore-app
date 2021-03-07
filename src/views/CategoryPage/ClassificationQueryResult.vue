<template>
  <div></div>
</template>

<script>
import BookItemSmall from '../../components/BookItemSmall.vue'

export default {
  name: 'ClassificationQueryResult',
  components: {
    BookItemSmall
  },
  props: {
    books: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>