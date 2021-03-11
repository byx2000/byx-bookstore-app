<template>
  <div>
    <el-container>
      <el-main>
        <order-option-choose :selected="{orderBy, orderType}" @optionChanged="optionChanged"/>
        <h3>共找到 {{totalCount}} 条关于“{{keyword}}”的结果，共 {{totalPage}} 页，当前第 {{currentPage}} 页</h3>
        <book-grid :books="books"/>
        <el-row type="flex" justify="center">
          <el-pagination
            background
            layout="prev, pager, next"
            :current-page="currentPage"
            :total="totalCount"
            :page-size="pageSize"
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
      pageSize: 15,
      books: [],
      totalCount: 0,
      totalPage: 1
    }
  },
  created() {
    this.getData()
  },
  computed: {
    keyword() {
      return this.$route.query.keyword
    },
    currentPage() {
      return parseInt(this.$route.query.currentPage)
    },
    orderBy() {
      return this.$route.query.orderBy
    },
    orderType() {
      return this.$route.query.orderType
    }
  },
  methods: {
    getData() {
      getSearchResult({
        keyword: this.keyword,
        orderBy: this.orderBy,
        orderType: this.orderType,
        pageSize: this.pageSize,
        currentPage: this.currentPage
      }).then(res => {
        this.books = res.data.data
        this.totalCount = res.data.totalCount
        this.totalPage = res.data.totalPage
      })
    },
    optionChanged(selected) {
      this.$router.replace({
        path: '/search',
        query: {
          keyword: this.keyword,
          orderBy: selected.orderBy,
          orderType: selected.orderType,
          pageSize: this.pageSize,
          currentPage: this.currentPage
        }
      })
    },
    onCurrentPageChanged(currentPage) {
      this.$router.replace({
        path: '/search',
        query: {
          keyword: this.keyword,
          orderBy: this.orderBy,
          orderType: this.orderType,
          pageSize: this.pageSize,
          currentPage
        }
      })
      window.scrollTo(0, 0)
    }
  },
  watch: {
    '$route': function(to, from) {
      if (to.path === '/search') {
        this.getData()
      }
    }
  }
}
</script>