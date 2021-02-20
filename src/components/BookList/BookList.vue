<template>
  <b-container>
    <b-row>
      <b-col v-for="(book, index) in books" :key="index" 
        cols="12" sm="6" md="4" lg="3">
        <book-info :book="book"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import BookInfo from '../BookInfo/BookInfo.vue'
export default {
  components: { BookInfo },
  name: 'BookList',
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