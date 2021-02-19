<template>
  <div>
    <b-tabs content-class="mt-3" fill pills card class="tabs">
      <b-tab v-for="(item, index) in recommendData"
        :key="index"
        :title="item.category.name">
        <b-container>
          <b-row>
            <b-col v-for="(book, index) in item.books" :key="index" 
              cols="12" sm="6" md="4" lg="3">
              <book-info :book="book"/>
            </b-col>
          </b-row>
        </b-container>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import BookInfo from '../../../components/BookInfo/BookInfo.vue'

export default {
  name: 'CategoryRecommend',
  components: {
    BookInfo
  },
  props: {
    recommendData: {
      type: Array,
      default() {
        return []
      }
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

</style>