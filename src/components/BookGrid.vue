<template>
  <el-row>
    <el-col v-for="(book, index) in books" 
      :key="index"
      :span="8">
      <book-grid-item :book="book" class="book-info"/>
    </el-col>
  </el-row>
</template>

<script>
import BookGridItem from './BookGridItem.vue'

export default {
  name: 'BookGrid',
  components: {
    BookGridItem
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
  margin: 20px 10px 10px 10px;
}
</style>