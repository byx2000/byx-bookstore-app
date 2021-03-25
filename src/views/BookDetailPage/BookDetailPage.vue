<template>
  <el-container>
    <el-main>
      <book-detail :book="book" 
        :isFavorite="isFavorite" 
        class="book-detail"
        @addFavorite="addFavorite"
        @cancelFavorite="cancelFavorite"
        :isLike="isLike"
        :isDislike="isDislike"
        @like="like"
        @dislike="dislike"/>
      <el-row type="flex" align="middle">
        <span>评论区</span>
        <comment-order-option-choose :selected="{orderType}" @optionChanged="optionChanged" class="order-option"/>
        <span>共 {{totalCount}} 条评论，共 {{totalPage}} 页，当前第 {{currentPage}} 页</span>
        <el-button type="primary" icon="el-icon-s-comment" class="write-comment" @click="commentEditDlalogOpen = true">写评论</el-button>
      </el-row>
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
    <el-dialog title="发表评论" width="50%" :visible.sync="commentEditDlalogOpen">
      <el-input
        type="textarea"
        :rows="5"
        placeholder="请输入评论内容"
        v-model="commentText">
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="commentEditDlalogOpen = false">取 消</el-button>
        <el-button type="primary" @click="publishComment">发 表</el-button>
      </span>
    </el-dialog>
  </el-container>
</template>

<script>
import { CODE_SUCCESS } from '../../common/constants'
import { 
  getBookDetail, getBookComments, publishComment, 
  isFavorite, addFavorite, cancelFavorite, isLike, isDislike,
  like, dislike, cancelLike, cancelDislike
} from '../../network/BookDetailPage'
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
      totalPage: 0,
      commentEditDlalogOpen: false,
      commentText: "",
      isFavorite: false,
      isLike: false,
      isDislike: false
    }
  },
  activated() {
    this.getBookData()
    this.getCommentData()
    this.getIsFavorite()
    this.getIsLike()
    this.getIsDislike()
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
    getIsFavorite() {
      isFavorite(this.bookId).then(res => {
        if (res.code === CODE_SUCCESS) {
          this.isFavorite = res.data
        }
      })
    },
    getIsLike() {
      isLike(this.bookId).then(res => {
        if (res.code === CODE_SUCCESS) {
          this.isLike = res.data
        }
      })
    },
    getIsDislike() {
      isDislike(this.bookId).then(res => {
        if (res.code === CODE_SUCCESS) {
          this.isDislike = res.data
        }
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
    },
    publishComment() {
      publishComment({
        bookId: this.bookId,
        content: this.commentText
      }).then(res => {
        if (res.code === CODE_SUCCESS) {
          this.commentEditDlalogOpen = false
          window.location.reload()
        } else {
          this.$message.error('当前未登录')
        }
      })
    },
    addFavorite() {
      addFavorite(this.bookId).then(res => {
        if (res.code !== CODE_SUCCESS) {
          this.$message.error('当前未登录')
        } else {
          this.isFavorite = true
        }
      })
    },
    cancelFavorite() {
      cancelFavorite(this.bookId).then(res => {
        if (res.code !== CODE_SUCCESS) {
          this.$message.error('当前未登录')
        } else {
          this.isFavorite = false
        }
      })
    },
    like() {
      if (this.isLike) {
        cancelLike(this.bookId).then(res => {
          if (res.code === CODE_SUCCESS) {
            this.book.likeCount--
            this.isLike = !this.isLike
          } else {
            this.$message.error('当前未登录')
          }
        })
      } else {
        like(this.bookId).then(res => {
          if (res.code === CODE_SUCCESS) {
            if (this.isDislike) {
              this.isDislike = false
              this.book.dislikeCount--
            }
            this.book.likeCount++
            this.isLike = !this.isLike
          } else {
            this.$message.error('当前未登录')
          }
        })
      }
    },
    dislike() {
      if (this.isDislike) {
        cancelDislike(this.bookId).then(res => {
          if (res.code === CODE_SUCCESS) {
            this.book.dislikeCount--
            this.isDislike = !this.isDislike
          } else {
            this.$message.error('当前未登录')
          }
        })
      } else {
        dislike(this.bookId).then(res => {
          if (res.code === CODE_SUCCESS) {
            if (this.isLike) {
              this.isLike = false
              this.book.likeCount--
            }
            this.book.dislikeCount++
            this.isDislike = !this.isDislike
          } else {
            this.$message.error('当前未登录')
          }
        })
      }
    }
  },
  watch: {
    '$route': function(to, from) {
      if (to.path === '/detail') {
        this.getBookData()
        this.getCommentData()
        this.currentPage = 1
        this.orderType = 'desc'
        window.scrollTo(0, 0)
      }
    }
  }
}
</script>

<style scoped>
.book-detail {
  margin-bottom: 20px;
}

.order-option {
  margin-left: 20px;
  margin-right: 20px;
}

.write-comment {
  margin-left: 20px;
}
</style>