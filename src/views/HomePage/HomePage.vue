<template>
  <div>
    <banner :books="bannerRecommend"/>
    <b-container>
      <h3 class="category-recommend-text text-center">分类推荐</h3>
      <category-recommend class="category-recommend" :recommend-data="categoryRecommend"/>
    </b-container>
    
  </div>
</template>

<script>
import Banner from './Banner/Banner.vue'
import { getAllCategories, queryBooks } from '../../network/common'
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
    queryBooks({
      orderBy: 'random',
      pageSize: 12,
      currentPage: 1
    }).then(res => {
      this.bannerRecommend = res.data
    })

    getAllCategories().then(res => {
      let categories = res.data
      for (let category of res.data) {
        queryBooks({
          categoryId: category.id,
          orderBy: 'random',
          pageSize: 12,
          currentPage: 1
        }).then(res => {
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

.category-recommend-text{
  margin-top: 35px;
}

</style>
