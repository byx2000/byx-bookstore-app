<template>
  <el-form label-width="80px">
    <el-form-item label="类型">
      <el-radio-group v-model="selected.categoryId" @change="optionChanged">
        <el-radio-button v-for="(item, i) in categoryOptions" 
          :key="i" 
          :label="item.value">
          {{item.text}}
        </el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="热度">
      <el-radio-group v-model="selected.heatRange" @change="optionChanged">
        <el-radio-button v-for="(item, i) in heatRangeOptions" :key="i" :label="item.value">
          {{item.text}}
        </el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="评分">
      <el-radio-group v-model="selected.scoreRange" @change="optionChanged">
        <el-radio-button v-for="(item, i) in scoreRangeOptions" :key="i" :label="item.value">
          {{item.text}}
        </el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="更新时间">
      <el-radio-group v-model="selected.updateAfter" @change="optionChanged">
        <el-radio-button v-for="(item, i) in updateAfterOptions" :key="i" :label="item.value">
          {{item.text}}
        </el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-row type="flex">
      <el-form-item label="排序依据">
        <el-radio-group v-model="selected.orderBy" @change="optionChanged">
          <el-radio-button v-for="(item, i) in orderByOptions" :key="i" :label="item.value">
            {{item.text}}
          </el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label-width="20px">
        <el-radio-group v-model="selected.orderType" @change="optionChanged">
          <el-radio-button v-for="(item, i) in orderTypeOptions" :key="i" :label="item.value">
            {{item.text}}
          </el-radio-button>
        </el-radio-group>
      </el-form-item>
    </el-row>
  </el-form>
</template>

<script>
export default {
  name: 'CategoryChoose',
  props: {
    categories: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    categoryOptions() {
      let op = [{ text: '全部', value: -1 }]
      for (let c of this.categories) {
        op.push({text: c.name, value: c.id})
      }
      return op
    }
  },
  data() {
    return {
      radio1: {},
      scoreRangeOptions: [
        { text: '全部', value: {} },
        { text: '小于3.0', value: { max: 3.0 } },
        { text: '3.0~4.0', value: { min: 3.0, max: 4.0 } },
        { text: '4.0~5.0', value: { min: 4.0, max: 5.0 } },
        { text: '5.0~6.0', value: { min: 5.0, max: 6.0 } },
        { text: '6.0~7.0', value: { min: 6.0, max: 7.0 } },
        { text: '7.0~8.0', value: { min: 7.0, max: 8.0 } },
        { text: '8.0~9.0', value: { min: 8.0, max: 9.0 } },
        { text: '大于9.0', value: { min: 9.0 } }
      ],
      heatRangeOptions: [
        { text: '全部', value: {} },
        { text: '小于500', value: { max: 500 } },
        { text: '500~1000', value: { min: 500, max: 1000 } },
        { text: '1000~1500', value: { min: 1000, max: 1500 } },
        { text: '1500~2000', value: { min: 1500, max: 2000 } },
        { text: '2000~2500', value: { min: 2000, max: 2500 } },
        { text: '大于2500', value: { min: 2500 } }
      ],
      updateAfterOptions: [
        { text: '全部', value: 10000 },
        { text: '最近一年', value: 365 },
        { text: '最近9个月', value: 270 },
        { text: '最近半年', value: 182 },
        { text: '最近3个月', value: 90 },
        { text: '最近一个月', value: 30 }
      ],
      orderByOptions: [
        { text: '按评分排序', value: 'score' },
        { text: '按热度排序', value: 'heat' },
        { text: '按点赞数排序', value: 'likeCount' },
        { text: '按字数排序', value: 'wordCount' },
        { text: '随机', value: 'random' }
      ],
      orderTypeOptions: [
        { text: '降序', value: 'desc' },
        { text: '升序', value: 'asc' }
      ],
      selected: {
        categoryId: -1,
        scoreRange: {},
        heatRange: {},
        updateAfter: 10000,
        orderBy: 'score',
        orderType: 'desc'
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

<style scoped>

</style>