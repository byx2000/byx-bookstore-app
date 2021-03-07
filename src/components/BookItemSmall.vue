<template>
  <el-card class="box-card">
    <el-row type="flex" justify="start">
      <img class="book-cover" :src="book.cover" @click="toBookDetailPage"/>
    </el-row>
    <el-row type="flex" justify="start">
      <p class="book-name ellipse">{{book.name}}</p>
    </el-row>
    <el-row type="flex" justify="start">
      <p class="book-author ellipse">作者：{{book.author}}</p>
    </el-row>
    <el-divider></el-divider>
    <el-row type="flex" justify="start">
      <p class="book-description">{{book.description}}</p>
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: 'BookItemSmall',
  props: {
    book: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    toBookDetailPage() {
      this.$router.push({
        path: '/detail',
        query: {
          bookId: this.book.id
        }
      })
    }
  }
}
</script>

<style scoped>
.ellipse {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

p {
  margin: 0;
}

.el-divider{
  margin-top: 5px;
  margin-bottom: 5px;
}

.book-cover {
  width: 100%;
}

.book-name {
  
}

.book-author {

}

.book-description {
  height: 5.2em;
  overflow: hidden;
}
</style>