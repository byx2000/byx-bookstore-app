<template>
  <el-card class="box-card" shadow="hover">
    <el-row slot="header">
      <el-col :span="10">
        <p class="book-name ellipse" @click="toBookDetailPage">{{book.name}}</p>
      </el-col>
      <el-col :span="10">
        <el-row type="flex">
          <el-rate
            :value="bookScoreValue"
            disabled>
          </el-rate>
          <span class="book-score">{{book.score.toFixed(1)}}</span>
        </el-row>
      </el-col>
      <el-col :span="4">
        <i class="el-icon-view book-heat"><span>{{book.heat}}</span></i>
      </el-col>
    </el-row>
    <el-row type="flex">
      <img class="book-cover" :src="book.cover" @click="toBookDetailPage"/>
      <p class="book-description">简介：{{book.description}}</p>
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: 'SearchResultItem',
  props: {
    book: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    bookScoreValue() {
      return this.book.score / 2
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

.book-name {
  margin: 0;
  margin-right: 10px;
  font-weight: bold;
}

.book-name:hover {
  text-decoration: underline;
  cursor: pointer;
  color: #409eff;
}

.book-score {
  font-size: 14px;
  color: #ff9900;
}

.book-heat {
  color: #ed5a30;
}

.book-heat span {
  font-size: 14px;
  margin-left: 5px
}

.book-cover {
  height: 10.5em;
}

.book-cover:hover {
  cursor: pointer;
}

.book-description {
  margin: 0;
  margin-left: 20px;
  height: 10.5em;
  overflow: hidden;
}
</style>