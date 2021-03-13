<template>
  <el-container>
    <el-main>
      <book-detail :book="book"/>
      <comment-order-option-choose @optionChanged="optionChanged"/>
      <p>共 {{totalCount}} 条评论，共 {{totalPage}} 页，当前第 {{currentPage}} 页</p>
      <book-comment-list :comments="comments"/>
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
</template>

<script>
import { getBookDetail, getBookComments } from '../../network/BookDetailPage'
import BookCommentList from './BookCommentList.vue'
import BookDetail from './BookDetail.vue'
import CommentOrderOptionChoose from './CommentOrderOptionChoose.vue'

export default {
  components: { 
    BookDetail,
    BookCommentList,
    CommentOrderOptionChoose
  },
  name: 'BookDetailPage',
  computed: {
    bookId() {
      return this.$route.query.bookId
    }
  },
  data() {
    return {
      book: {},
      comments: [],
      pageSize: 10,
      currentPage: 1,
      orderType: 'desc',
      totalCount: 0,
      totalPage: 0
    }
  },
  created() {
    this.getBookData()
    this.getCommentData()
  },
  methods: {
    getBookData() {
      getBookDetail(this.bookId).then(res => {
        this.book = res.data
      })
    },
    getCommentData() {
      getBookComments({
        bookId: this.bookId,
        pageSize: this.pageSize,
        currentPage: this.currentPage,
        orderBy: this.orderBy,
        orderType: this.orderType
      }).then(res => {
        this.comments = res.data.data
        this.totalCount = res.data.totalCount
        this.totalPage = res.data.totalPage
      })
    },
    optionChanged(selected) {
      this.orderType = selected.orderType
      this.currentPage = 1
      this.getCommentData()
    },
    onCurrentPageChanged(currentPage) {
      this.currentPage = currentPage
      this.getCommentData()
      window.scrollTo(0, 0)
    }
  },
  watch: {
    '$route': function(to, from) {
      if (to.path === '/detail') {
        this.getBookData()
        this.getCommentData()
        this.currentPage = 1
      }
    }
  }
}
</script>