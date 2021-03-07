<template>
  <el-container>
    <el-main>
      <category-choose :categories="categories" :selected="query" @optionChanged="optionChanged"/>
      <h3>共 {{totalCount}} 条结果，共 {{totalPage}} 页，当前第 {{query.currentPage}} 页</h3>
      <book-grid :books="books"/>
      <el-row type="flex" justify="center">
        <el-pagination
          background
          layout="prev, pager, next"
          :current-page="query.currentPage"
          :page-count="totalPage"
          @current-change="onCurrentPageChanged">
        </el-pagination>
      </el-row>
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
      query: {
        categoryId: -1,
        scoreRange: {},
        heatRange: {},
        updateAfter: 10000,
        orderBy: 'score',
        orderType: 'desc',
        pageSize: 30,
        currentPage: 1
      },
      categories: [],
      books: [],
      totalCount: 0,
      totalPage: 0
    }
  },
  created() {
    getAllCategories().then(res => {
      this.categories = res.data
    })

    getClassificationQueryBooks(this.query).then(res => {
      this.books = res.data.data
      this.totalCount = res.data.totalCount
      this.totalPage = res.data.totalPage
    })
  },
  methods: {
    optionChanged(selected) {
      this.query = selected
      this.query.pageSize = 30
      this.query.currentPage = 1
      getClassificationQueryBooks(this.query).then(res => {
        this.books = res.data.data
        this.totalCount = res.data.totalCount
        this.totalPage = res.data.totalPage
      })
    },
    onCurrentPageChanged(currentPage) {
      this.query.currentPage = currentPage
      getClassificationQueryBooks(this.query).then(res => {
        this.books = res.data.data
        this.totalCount = res.data.totalCount
        this.totalPage = res.data.totalPage
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