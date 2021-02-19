<template>
  <div>
    <banner :books="bannerRecommend"/>
  </div>
</template>

<script>
import Banner from './Banner/Banner.vue'
import { getRecommend } from '../../network/HomePage'

export default {
  components: { Banner },
  name: 'HomePage',
  data() {
    return {
      bannerRecommend: []
    }
  },
  created() {
    getRecommend(12).then(res => {
      this.bannerRecommend = res.data
    })
  }
}
</script>
