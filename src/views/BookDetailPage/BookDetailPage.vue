<template>
  <el-container>
    <el-main>
      <book-detail :book="book"/>
    </el-main>
  </el-container>
</template>

<script>
import { getBookDetail } from '../../network/BookDetailPage'
import BookDetail from './BookDetail.vue'

export default {
  components: { 
    BookDetail
  },
  name: 'BookDetailPage',
  computed: {
    bookId() {
      return this.$route.query.bookId
    }
  },
  data() {
    return {
      book: {}
    }
  },
  created() {
    this.refresh()
  },
  methods: {
    refresh() {
      getBookDetail(this.bookId).then(res => {
        this.book = res.data
      })
    }
  },
  watch: {
    '$route': function(to, from) {
      this.refresh()
    }
  }
}
</script>