<template>
  <el-card class="box-card favorite-item">
    <el-row slot="header" type="flex" justify="space-between">
      <el-row type="flex">
        <span class="book-name" @click="toBookDetailPage(favorite.bookId)">{{favorite.bookName}}</span>
        <span class="book-author">作者：{{favorite.bookAuthor}}</span>
      </el-row>
      <span>发表时间：{{favorite.time}}</span>
    </el-row>
    <el-row type="flex">
      <el-col :span="3">
        <el-image :src="favorite.bookCover" class="book-cover" @click="toBookDetailPage(favorite.bookId)"/>
      </el-col>
      <el-col :span="21">
        <p class="book-description">{{favorite.bookDescription}}</p>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: 'UserFavoriteItem',
  props: {
    favorite: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    toBookDetailPage(bookId) {
      this.$router.push({
        path: '/detail',
        query: {
          bookId
        }
      })
    }
  }
}
</script>
<style scoped>
.favorite-item {
  margin-top: 20px;
  margin-bottom: 20px;
}

.book-name {
  font-weight: bold;
}

.book-name:hover {
  text-decoration: underline;
  cursor: pointer;
  color: #409eff;
}

.book-author {
  margin-left: 20px;
}

.book-description {
  text-align: justify;
  height: 170px;
  overflow: hidden;
  margin: 0;
}

.book-cover {
  width: 130px;
  height: 170px;
}

.book-cover:hover {
  cursor: pointer;
}
</style>
