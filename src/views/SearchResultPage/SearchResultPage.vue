<template>
  <div>
    <el-container>
      <el-main>
        <order-option-choose :selected="query" @optionChanged="optionChanged"/>
        <h3>共找到 {{totalCount}} 条关于“{{keyword}}”的结果，共 {{totalPage}} 页，当前第 {{query.currentPage}} 页</h3>
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
  </div>
</template>

<script>
import OrderOptionChoose from './OrderOptionChoose.vue'
import { getSearchResult } from '../../network/SearchResultPage'
import BookGrid from '../../components/BookGrid.vue'

export default {
  name: 'SearchResultPage',
  components: {
    OrderOptionChoose,
    BookGrid
  },
  data() {
    return {
      query: {
        orderBy: 'score',
        orderType: 'desc',
        pageSize: 15,
        currentPage: 1
      },
      books: [],
      totalCount: 0,
      totalPage: 0
    }
  },
  created() {
    this.query.keyword = this.keyword
    this.refresh()
  },
  computed: {
    keyword() {
      return this.$route.query.keyword
    }
  },
  methods: {
    refresh() {
      getSearchResult(this.query).then(res => {
        this.books = res.data.data
        this.totalCount = res.data.totalCount
        this.totalPage = res.data.totalPage
      })
    },
    optionChanged(selected) {
      selected.pageSize = 15
      selected.currentPage = 1
      selected.keyword = this.query.keyword
      this.query = selected
      this.refresh()
    },
    onCurrentPageChanged(currentPage) {
      this.query.currentPage = currentPage
      this.refresh()
      window.scrollTo(0, 0)
    }
  },
  watch: {
    '$route': function(to, from) {
      this.query.keyword = this.$route.query.keyword
      this.query.pageSize = 15
      this.query.currentPage = 1
      this.refresh()
    }
  }
}
</script>

<style scoped>
.book-item {
  margin: 20px 10px 10px 10px;
}
</style>