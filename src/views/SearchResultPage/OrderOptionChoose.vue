<template>
  <el-form :inline="true">
    <el-form-item label="排序依据">
      <el-select v-model="selected.orderBy" @change="optionChanged">
        <el-option label="按得分排序" value="score"/>
        <el-option label="按热度排序" value="heat"/>
        <el-option label="按点赞数排序" value="likeCount"/>
        <el-option label="按字数排序" value="wordCount"/>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-radio-group v-model="selected.orderType" @change="optionChanged">
        <el-radio-button label="desc">降序</el-radio-button>
        <el-radio-button label="asc">升序</el-radio-button>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'OrderOptionChoose',
  props: {
    selected: {
      type: Object,
      default() {
        return{
          orderBy: 'score',
          orderType: 'desc'
        }
      }
    }
  },
  methods: {
    optionChanged() {
      this.$emit('optionChanged', this.selected)
    }
  }
}
</script>