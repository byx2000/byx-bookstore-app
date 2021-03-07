<template>
  <el-container>
    <el-main>
      <category-choose :categories="categories" @optionChanged="optionChanged"/>
      <book-grid :books="books"/>
    </el-main>
  </el-container>
</template>

<script>
import { getAllCategories } from '../../network/common'
import { getClassificationQueryBooks } from '../../network/CategoryPage'
import CategoryChoose from './CategoryChoose.vue'
import BookGrid from '../../components/BookGrid.vue'
export default {
  components: { 
    CategoryChoose, 
    BookGrid
  },
  name: 'CategoryPage',
  data() {
    return {
      categories: [],
      books: [],
      pageSize: 30,
      currentPage: 1,
      totalCount: 0
    }
  },
  created() {
    getAllCategories().then(res => {
      this.categories = res.data
    })
    getClassificationQueryBooks({
      orderBy: 'score',
      orderType: 'desc',
      pageSize: this.pageSize,
      currentPage: this.currentPage
    }).then(res => {
      this.books = res.data.data
      this.totalCount = res.data.totalCount
    })
  },
  methods: {
    optionChanged(selected) {
      selected.pageSize = this.pageSize
      selected.currentPage = this.currentPage
      getClassificationQueryBooks(selected).then(res => {
        this.books = res.data.data
        this.totalCount = res.data.totalCount
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