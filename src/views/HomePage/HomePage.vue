<template>
  <div>
    主页
  </div>
</template>

<script>
import request from '../../network/request'

export default {
  name: 'HomePage',
  data() {
    return {
      bannerRecommend: []
    }
  },
  created() {
    console.log('主页初始化')
    request({
      url: '/book/recommend?count=12'
    }).then(res => {
      this.bannerRecommend = res.data
      console.log(this.bannerRecommend)
    })
  }
}
</script>
