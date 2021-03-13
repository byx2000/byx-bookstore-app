<template>
  <el-form>
    <el-form-item>
      <el-radio-group v-model="selected.orderType" @change="optionChanged">
        <el-radio-button label="desc">按时间降序排序</el-radio-button>
        <el-radio-button label="asc">按时间升序排序</el-radio-button>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'CommentOrderOptionChoose',
  props: {
    selected: {
      type: Object,
      default() {
        return {
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