<template>
  <div>
    <banner :books="bannerData"/>
    <el-container>
      <el-main>
        <category-recommend :recommend-data="categoryData" @onTabChanged="onTabChanged"/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Banner from './Banner.vue'
import { getRecommendBooks } from '../../network/HomePage'
import { getAllCategories, queryBooks } from '../../network/common'
import CategoryRecommend from './CategoryRecommend.vue'

export default {
  components: { Banner, CategoryRecommend },
  name: 'HomePage',
  data() {
    return {
      bannerData: [],
      categories: [],
      categoryData: []
    }
  },
  created() {
    getRecommendBooks({
      count: 15
    }).then(res => {
      this.bannerData = res.data
    })

    getAllCategories().then(res => {
      let categories = res.data
      this.categories = categories
      for (let c of categories) {
        this.categoryData.push({
          category: c,
          books: []
        })
      }
      getRecommendBooks({
        categoryId: categories[0].id,
        count: 15
      }).then(res => {
        this.categoryData.splice(0, 1, {
          category: categories[0],
          books: res.data
        })
      })
    })
  },
  methods: {
    onTabChanged(index) {
      if (this.categoryData[index].books.length === 0) {
        getRecommendBooks({
          categoryId: this.categories[index].id,
          count: 15
        }).then(res => {
          this.categoryData[index].books = res.data
        })
      }
    }
  }
}
</script>

<style scoped>
.category-recommend {
  margin-top: 20px;
}

.category-recommend-text{
  margin-top: 35px;
}
</style>
