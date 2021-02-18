<template>
  <div>
    <banner :books="bannerRecommend"/>
  </div>
</template>

<script>
import request from '../../network/request'
import Banner from './Banner/Banner.vue'

export default {
  components: { Banner },
  name: 'HomePage',
  data() {
    return {
      bannerRecommend: []
    }
  },
  created() {
    request({
      url: '/book/recommend?count=12'
    }).then(res => {
      this.bannerRecommend = res.data
    })
  }
}
</script>
