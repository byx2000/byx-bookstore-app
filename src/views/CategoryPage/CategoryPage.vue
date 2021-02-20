<template>
  <b-container>
    <category-choose :categories="categories" @optionChanged="optionChanged" id="category-choose"/>
  </b-container>
</template>

<script>
import { getAllCategories, queryBooks } from '../../network/common'
import CategoryChoose from './CategoryChoose/CategoryChoose.vue'
export default {
  components: { CategoryChoose },
  name: 'CategoryPage',
  data() {
    return {
      categories: []
    }
  },
  created() {
    getAllCategories().then(res => {
      this.categories = res.data
    })

    queryBooks({
      categoryId: 7,
      pageSize: 10,
      currentPage: 1
    }).then(res => {
      console.log(res)
    })
  },
  methods: {
    optionChanged(selected) {
      console.log(selected)
    }
  }
}
</script>

<style scoped>

#category-choose {
  margin-top: 20px;
}

</style>