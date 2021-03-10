<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span class="book-name">{{book.name}}</span>
    </div>
    <el-row type="flex">
      <el-col :span="3">
        <el-image class="book-cover" :src="book.cover"/>
      </el-col>
      <el-col :span="21">
        <el-row>
          <span>作者：{{book.author}}</span>
          <span>更新时间：{{book.updateTime}}</span>
          <span>字数：1234</span>
        </el-row>
        <p class="book-description">简介：{{book.description}}</p>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: 'BookDetail',
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
.book-cover {
  width: 156px;
  height: 208px;
}
</style>