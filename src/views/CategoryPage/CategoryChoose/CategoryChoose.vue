<template>
  <b-container>
    <b-row>
      <b-col cols="12" sm="6" md="6" lg="4">
        <b-form-group label="类型：" label-cols="3">
          <b-form-select :options="categoryOptions" v-model="selected.categoryId" @change="optionChanged"/>
        </b-form-group>
      </b-col>
      <b-col cols="12" sm="6" md="6" lg="4">
        <b-form-group label="评分：" label-cols="3">
          <b-form-select :options="scoreRangeOptions" v-model="selected.scoreRange" @change="optionChanged"/>
        </b-form-group>
      </b-col>
      <b-col cols="12" sm="6" md="6" lg="4">
        <b-form-group label="热度：" label-cols="3">
          <b-form-select :options="heatRangeOptions" v-model="selected.heatRange" @change="optionChanged"/>
        </b-form-group>
      </b-col>
      <b-col cols="12" sm="12" md="6" lg="4">
        <b-form-group label="更新时间：" label-cols="4">
          <b-form-select :options="updateAfterOptions" v-model="selected.updateAfter" @change="optionChanged"/>
        </b-form-group>
      </b-col>
      <b-col cols="12" sm="12" md="6" lg="4">
        <b-form-group label="排序依据：" label-cols="4">
          <b-form-select :options="orderOptions" v-model="selected.orderBy" @change="optionChanged"/>
        </b-form-group>
      </b-col>
      <b-col cols="12" sm="12" md="6" lg="4">
        <b-form-group label="排序方式：" label-cols="4">
          <b-form-select :options="orderMethodOptions" v-model="selected.orderType" @change="optionChanged"/>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
    </b-row>
  </b-container>
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
    },
    selected: {
      type: Object,
      default() {
        return {
          categoryId: 1,
          scoreRange: {},
          heatRange: {},
          updateAfter: 10000,
          orderBy: 'score',
          orderType: 'desc'
        }
      }
    }
  },
  computed: {
    categoryOptions() {
      let op = [{ text: '全部', value: '-1' }]
      for (let c of this.categories) {
        op.push({text: c.name, value: c.id})
      }
      return op
    }
  },
  data() {
    return {
      // selected: {
      //   categoryId: 1,
      //   scoreRange: {},
      //   heatRange: {},
      //   updateAfter: 10000,
      //   orderBy: 'score',
      //   orderType: 'desc',
      //   pageSize: 12,
      //   currentPage: 1
      // },
      scoreRangeOptions: [
        { text: '全部', value: {} },
        { text: '小于5.0', value: { max: 5.0 } },
        { text: '5.0~7.0', value: { min: 5.0, max: 7.0 } },
        { text: '7.0~9.0', value: { min: 7.0, max: 9.0 } },
        { text: '大于9.0', value: { min: 9.0 } }
      ],
      heatRangeOptions: [
        { text: '全部', value: {} },
        { text: '小于1000', value: { max: 1000 } },
        { text: '1000~2000', value: { min: 1000, max: 2000 } },
        { text: '2000~3000', value: { min: 2000, max: 3000 } },
        { text: '大于3000', value: { min: 3000 } }
      ],
      updateAfterOptions: [
        { text: '全部', value: 10000 },
        { text: '最近一年', value: 365 },
        { text: '最近半年', value: 182 },
        { text: '最近一个月', value: 30 }
      ],
      orderOptions: [
        { text: '按评分排序', value: 'score' },
        { text: '按热度排序', value: 'heat' },
        { text: '按点赞数排序', value: 'likeCount' },
        { text: '按字数排序', value: 'wordCount' },
        { text: '随机', value: 'random' }
      ],
      orderMethodOptions: [
        { text: '降序', value: 'desc' },
        { text: '升序', value: 'asc' }
      ]
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