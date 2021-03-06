<template>
  <div>
    <banner :books="bannerData"/>
    <el-container>
      <el-main>
        <category-recommend :recommend-data="categoryData"/>
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

      for (let category of res.data) {
        getRecommendBooks({
          categoryId: category.id,
          count: 18
        }).then(res => {
          this.categoryData.push({
            category,
            books: res.data
          })
          if (this.categoryData.length === categories.length) {
            this.categoryData.sort((a, b) => {
              return a.category.id - b.category.id
            })
          }
        })
      }
    })
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
