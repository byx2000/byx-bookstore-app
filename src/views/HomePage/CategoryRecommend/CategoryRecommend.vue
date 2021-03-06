<template>
  <div>
    <el-tabs :value="firstCategoryName" :stretch="true">
      <el-tab-pane v-for="(item, index) in recommendData" 
        :key="index" 
        :label="item.category.name" 
        :name="item.category.name">
        <el-row>
          <el-col v-for="(book, index) in item.books" 
            :key="index"
            :span="4">
            <BookInfo :book="book" class="book-info"/>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import BookInfo from '../../../components/BookInfo/BookInfo.vue'
import Banner from '../Banner/Banner.vue'

export default {
  name: 'CategoryRecommend',
  components: {
    BookInfo,
    Banner
  },
  props: {
    recommendData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      
    }
  },
  computed: {
    firstCategoryName() {
      if (this.recommendData.length === 0)
        return '小说'
      return this.recommendData[0].category.name
    }
  }
}
</script>

<style>

.tabs .card-header {
  background-color: white;
}

.tabs .tab-pane {
  padding-left: 0;
  padding-right: 0;
}

.ellipse {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

p {
  margin: 0;
}

.book-info {
  margin: 0 5px 10px 5px;
}

.book-cover {
  width: 100%;
}

.book-name {
  
}

.book-author {

}

.book-description {
  height: 5.2em;
  overflow: hidden;
}

</style>