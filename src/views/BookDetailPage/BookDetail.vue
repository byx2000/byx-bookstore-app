<template>
  <el-card class="box-card">
    <el-row slot="header" type="flex" align="middle" justify="space-between">
      <el-row type="flex">
        <span class="book-name">{{book.name}}</span>
        <el-row type="flex" class="book-score">
          <el-rate
            :value="bookScoreValue"
            disabled>
          </el-rate>
          <span v-if="book.score !== undefined">{{book.score.toFixed(1)}}</span>
        </el-row>
        <span class="book-heat">
          <i class="fa fa-fire" aria-hidden="true"></i> {{book.heat}}
        </span>
      </el-row>
      <el-row type="flex">
        <el-button type="danger" class="book-like-count">
          <i v-if="!isLike" class="fa fa-thumbs-o-up" aria-hidden="true"></i>
          <i v-if="isLike" class="fa fa-thumbs-up" aria-hidden="true"></i> {{book.likeCount}}
        </el-button>
        <el-button type="info" class="book-dislike-count">
          <i v-if="!isDislike" class="fa fa-thumbs-o-down" aria-hidden="true"></i>
          <i v-if="isDislike" class="fa fa-thumbs-down" aria-hidden="true"></i> {{book.dislikeCount}}
        </el-button>
      </el-row>
    </el-row>
    <el-row type="flex">
      <el-col :span="3">
        <el-image class="book-cover" :src="book.cover"/>
      </el-col>
      <el-col :span="21">
        <el-row>
          <span class="book-author">
            <i class="fa fa-user" aria-hidden="true"></i> {{book.author}}
          </span>
          <span class="book-update-time">
            <i class="fa fa-clock-o" aria-hidden="true"></i> {{book.updateTime}}
          </span>
          <span class="book-word-count">字数：{{book.wordCount}}</span>
          <el-button type="primary">
            <i class="fa fa-book" aria-hidden="true"></i> 在线阅读
          </el-button>
          <el-button v-if="!isFavorite" type="success" @click="addFavorite">
            <i class="fa fa-star-o" aria-hidden="true"></i> 收藏
          </el-button>
          <el-button v-if="isFavorite" type="success" @click="cancelFavorite">
            <i class="fa fa-star" aria-hidden="true"></i> 取消收藏
          </el-button>
        </el-row>
        <el-divider></el-divider>
        <p class="book-description">简介：{{book.description}}</p>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: 'BookDetail',
  props: {
    book: {
      type: Object,
      default() {
        return {}
      }
    },
    isFavorite: {
      type: Boolean,
      default() {
        return false
      }
    },
    isLike: {
      type: Boolean,
      default() {
        return false
      }
    },
    isDislike: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  computed: {
    bookScoreValue() {
      return this.book.score / 2
    }
  },
  methods: {
    addFavorite() {
      this.$emit('addFavorite')
    },
    cancelFavorite() {
      this.$emit('cancelFavorite')
    }
  }
}
</script>

<style scoped>
.book-name {
  font-weight: bold;
  font-size: 18px;
}

.book-score {
  font-size: 14px;
  color: #ff9900;
  margin-left: 20px;
}

.book-heat {
  color: tomato;
  font-size: 14px;
  margin-left: 20px;
}

.book-cover {
  width: 156px;
  height: 208px;
}

.book-author {
  font-size: 14px;
}

.book-update-time {
  font-size: 14px;
  margin-left: 20px;
}

.book-word-count {
  font-size: 14px;
  margin-left: 20px;
  margin-right: 20px;
}

.book-description {
  text-align:justify;
}
</style>