<template>
  <el-card class="box-card">
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
        <span class="book-heat"><i class="fa fa-fire" aria-hidden="true"></i> {{book.heat}}</span>
      </el-col>
    </el-row>
    <el-row type="flex">
      <el-col :span="9">
        <el-image class="book-cover" :src="book.cover" @click="toBookDetailPage"/>
      </el-col>
      <el-col :span="15">
        <p class="book-description">简介：{{book.description}}</p>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: 'BookGridItem',
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
  color: tomato;
  font-size: 14px;
}

.book-cover {
  width: 156px;
  height: 208px;
}

.book-cover:hover {
  cursor: pointer;
}

.book-description {
  margin: 0;
  margin-left: 20px;
  height: 208px;
  overflow: hidden;
  text-align: justify;
}
</style>