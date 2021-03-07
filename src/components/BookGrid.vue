<template>
  <el-row>
    <el-col v-for="(book, index) in books" 
      :key="index"
      :span="4">
      <BookItemSmall :book="book" class="book-info"/>
    </el-col>
  </el-row>
</template>

<script>
import BookItemSmall from './BookItemSmall.vue'

export default {
  name: 'BookGrid',
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

<style scoped>
.book-info {
  margin: 0 5px 10px 5px;
}
</style>