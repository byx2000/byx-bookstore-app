<template>
  <div>
    搜索词：{{searchText}}
  </div>
</template>

<script>
export default {
  name: 'SearchResultPage',
  computed: {
    searchText() {
      return this.$route.query.searchText
    }
  }
}
</script>