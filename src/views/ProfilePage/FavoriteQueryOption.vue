<template>
  <el-form :inline="true">
    <el-form-item>
      <el-input v-model="selected.bookKeyword" placeholder="书名"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input v-model="selected.authorKeyword" placeholder="作者名"></el-input>
    </el-form-item>
    <el-form-item>
      <el-select v-model="selected.orderType">
        <el-option label="按时间降序排序" value="desc"/>
        <el-option label="按时间升序排序" value="asc"/>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSearchClick">搜索收藏</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'FavoriteQueryOption',
  props: {
    selected: {
      type: Object,
      default() {
        return {
          bookKeyword: '',
          authorKeyword: '',
          orderType: 'desc'
        }
      }
    }
  },
  methods: {
    onSearchClick() {
      this.$emit('onSearchClick', this.selected)
    }
  }
}
</script>