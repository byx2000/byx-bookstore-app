<template>
  <el-container>
    <el-main class="content">
      <el-row type="flex" justify="center">
        <!-- <el-divider content-position="center">{{chapterData.bookName}} —— {{chapterData.chapterName}}</el-divider> -->
        <el-col :span="6">
          <div class="contents">
            <div v-for="(content, index) in contents" :key="index">
              <!-- <p>第 {{content.chapter}} 章 {{content.chapterName}}</p> -->
              <el-link type="primary" @click="jumpToChapter(content.chapter)">第 {{content.chapter}} 章 {{content.chapterName}}</el-link>
            </div>
          </div>
        </el-col>
        <el-col :span="18">
          <h1>第 {{chapter}} 章 {{chapterData.chapterName}}</h1>
          <div class="text">
            <pre>{{chapterData.content}}</pre>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import { getChapter, getContents } from '../../network/ReadPage'

export default {
  name: 'ReadPage',
  data() {
    return {
      chapterData: {},
      contents: []
    }
  },
  activated() {
    this.getChapterData()
    this.getContentsData()
  },
  computed: {
    bookId() {
      return this.$route.query.bookId
    },
    chapter() {
      return this.$route.query.chapter
    }
  },
  methods: {
    getChapterData() {
      getChapter(this.bookId, this.chapter).then(res => {
        this.chapterData = res.data
      })
    },
    getContentsData() {
      getContents(this.bookId).then(res => {
        this.contents = res.data
      })
    },
    jumpToChapter(chapter) {
      this.$router.replace({
        path: '/read',
        query: {
          bookId: this.bookId,
          chapter
        }
      })
    }
  },
  watch: {
    '$route': function(to, from) {
      if (to.path === '/read') {
        this.getChapterData()
        window.scrollTo(0, 0)
      }
    }
  }
}
</script>

<style scoped>
.text {
  
}

pre {
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  *word-wrap: break-word;
  *white-space : normal ;  

  font-size: 18px;
  color: #333333;
  line-height: 40px;
  overflow-wrap: break-word;
  word-break: break-all;
  font-family: "Microsoft Yahei", arial, sans-serif;
  text-align: left;
  user-select: none;
}
</style>