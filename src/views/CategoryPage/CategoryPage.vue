<template>
  <b-container>
    <category-choose :categories="categories" 
      @optionChanged="optionChanged" 
      id="category-choose"/>
    <book-list :books="books"/>
  </b-container>
</template>

<script>
import BookList from '../../components/BookList/BookList.vue'
import { getAllCategories, queryBooks } from '../../network/common'
import CategoryChoose from './CategoryChoose/CategoryChoose.vue'
export default {
  components: { CategoryChoose, BookList },
  name: 'CategoryPage',
  data() {
    return {
      categories: [],
      books: [],
      pageSize: 12,
      currentPage: 1
    }
  },
  created() {
    getAllCategories().then(res => {
      this.categories = res.data
    })

    queryBooks({
      categoryId: 1,
      orderBy: 'score',
      orderType: 'desc',
      pageSize: 12,
      currentPage: 1
    }).then(res => {
        this.books = res.data
      })
  },
  methods: {
    optionChanged(selected) {
      selected.pageSize = 12
      selected.currentPage = 1
      queryBooks(selected).then(res => {
        this.books = res.data
      })
    }
  }
}
</script>

<style scoped>

#category-choose {
  margin-top: 30px;
  margin-bottom: 30px;
}

</style>