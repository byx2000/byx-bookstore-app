<template>
  <div>
    <b-card :img-src="book.cover" img-top class="book-container">
      <b-card-title class="text-truncate name">{{book.name}}</b-card-title>
      <b-card-text>
        <b-container class="author-and-score">
          <b-row>
            <b-col cols="6">
              <b-row>
                <p class="text-truncate author">{{book.author}}</p>
              </b-row>
            </b-col>
            <b-col cols="6">
              <b-row>
                <p class="text-truncate text-right score">评分：{{book.score.toFixed(1)}}</p>
              </b-row>
            </b-col>
          </b-row>
        </b-container>
        
        <p class="text-justify description">{{book.description}}</p>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'BookInfo',
  props: {
    book: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>

.book-container {
  margin-bottom: 20px;
}

.name {
  font-size: 20px;
  border-bottom: 1px solid #dfdfdf;
  margin-bottom: 0;
  padding-bottom: 6px;
}

.author-and-score {
  margin-top: 6px;
}

.description {
  font-size: 14px;
  height: 85px;
  overflow: hidden;
  margin-bottom: 0;
}

.author {
  font-size: 14px;
}

.score {
  font-size: 14px;
  width: 100%;
}

</style>