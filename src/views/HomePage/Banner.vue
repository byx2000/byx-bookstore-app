<template>
  <div>
    <el-carousel id="banner" indicator-position="outside" height="350px">
      <el-carousel-item v-for="(group, index) in bannerGroups" :key="index">
        <el-row type="flex" justify="center">
          <p class="name">{{group[currentBookIndex].name}}</p>
        </el-row>
        <el-row type="flex" justify="center">
          <p class="description">{{group[currentBookIndex].description}}</p>
        </el-row>
        <el-row type="flex" justify="space-around">
          <div v-for="(book, i) in group" :key="i">
            <img :src="book.cover" class="cover" @mouseover="onMouseOver(i)" @click="toBookDetailPage(book.id)"/>
          </div>
        </el-row>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    books: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentBookIndex: 0
    }
  },
  computed: {
    bannerGroups() {
      let groups = []
      for (let i = 0; i < this.books.length; i += 5) {
        groups.push([this.books[i], this.books[i + 1], this.books[i + 2], this.books[i + 3], this.books[i + 4]]);
      }
      return groups
    }
  },
  methods: {
    onMouseOver(index) {
      this.currentBookIndex = index
    },
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
#banner {
  background: url(../../../public/images/banner_background.gif);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding-left: 35px;
  padding-right: 35px;
}

.cover {
  height: 250px;
}

.cover:hover {
  cursor: pointer;
}

.description {
  color: #ffffff;
  margin: 0 20px 20px 20px;
  opacity: 0.6;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.name {
  color: #ffffff;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 20px;
}
</style>