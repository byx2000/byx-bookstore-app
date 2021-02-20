<template>
  <div>
    <banner :books="bannerRecommend"/>
    <b-container>
      <category-recommend class="category-recommend" :recommend-data="categoryRecommend"/>
    </b-container>
    
  </div>
</template>

<script>
import Banner from './Banner/Banner.vue'
import { getAllCategories } from '../../network/common'
import { getRecommend, getRecommendOfCategory, getRecommendOfCategories } from '../../network/HomePage'
import CategoryRecommend from './CategoryRecommend/CategoryRecommend.vue'

export default {
  components: { Banner, CategoryRecommend },
  name: 'HomePage',
  data() {
    return {
      bannerRecommend: [],
      categoryRecommend: []
    }
  },
  created() {
    getRecommend(12).then(res => {
      this.bannerRecommend = res.data
    })

    getAllCategories().then(res => {
      let categories = res.data
      for (let category of res.data) {
        getRecommendOfCategory(category.id, 12).then(res => {
          this.categoryRecommend.push({
            category,
            books: res.data
          })
          if (this.categoryRecommend.length === categories.length) {
            this.categoryRecommend.sort((a, b) => {
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

</style>
