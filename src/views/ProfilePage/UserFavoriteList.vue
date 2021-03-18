<template>
  <div>
    <user-favorite-item v-for="(favorite, index) in favorites" :key="index" :favorite="favorite"/>
  </div>
</template>

<script>
import UserFavoriteItem from './UserFavoriteItem.vue'
export default {
  components: { UserFavoriteItem },
  name: 'UserFavoriteList',
  props: {
    favorites: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>