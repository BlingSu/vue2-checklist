<template>
  <div class="reader">
    <top-nav></top-nav>
    <div class="read-container" :bg="bg_color" :night="bg_night" ref="fz_size">
      <h4>{{ title }}</h4>
      <div class="chapterContent" v-show="!loading">
        <p v-for="(item,index) in content" :key="index">{{ item }}</p>
      </div>
      <div class="btn-bar" v-show="!loading">
        <ul class="btn-tab">
          <li class="prev-btn" @click="prevChapter">上一章</li>
          <li class="next-btn" @click="nextChapter">下一章</li>
        </ul>
      </div>
    </div>
    <div class="page-up" @click="pageUp()"></div>
    <div class="click-mask" @click="clickBar"></div>
    <div class="page-down" @click="pageDown()"></div>
    <div class="top-nav-panel-bk font-container" v-show="font_panel"></div>
    <font-nav></font-nav>
    <bottom-nav></bottom-nav>
    <cover :class="{hide:!list_panel}"></cover>
    <list-panel :class="{show: list_panel}" :bookId="$route.params.id"></list-panel>
    <loading v-show="loading"></loading>
  </div>
</template>

<script>
import TopNav from './TopNav/TopNav'
import Loading from './Loading/Loading'
import FontNav from './FontNav/FontNav'
import BottomNav from './BottomNav/BottomNav'
import Cover from './Cover'
import ListPanel from './ListPanel/ListPanel'
import {mapState} from 'vuex'
import localEvent from '../store/local'

export default {
  data () {
    return {
      loading: false,
      content: [],
      booksReadInfo: {},
      showList: false,
      bar: false,
      title: '',
      timer: null
    }
  },
  components: {
    TopNav,
    Loading,
    FontNav,
    BottomNav,
    Cover,
    ListPanel
  },
  created () {
    //  本地是否存文字大小
    if (localEvent.StorageGetter('fz_size')) {
      this.$store.state.fz_size = localEvent.StorageGetter('fz_size')
    }
    // 本地是否存主题色
    if (localEvent.StorageGetter('bg_color')) {
      this.$store.state.bg_color = localEvent.StorageGetter('bg_color')
    }
    //  加载回去所有进度

    const localBookReaderInfo = localEvent.StorageGetter('bookreaderinfo')
    let id = this.$route.params.id

    //   现在的书有读过，且有进度
    if (localBookReaderInfo && localBookReaderInfo[id]) {
      this.booksReadInfo = localEvent.StorageGetter('bookreaderinfo')
      this.getData(id, this.booksReadInfo[id].chapter)
      this.$store.dispatch('curChapter', this.booksReadInfo[id].chapter)
    } else {
      //  没读过 但是local 保存的其他书籍进度
      if (localBookReaderInfo) {
        this.booksReadInfo = localBookReaderInfo
        this.getData(id, 1)
        this.$store.dispatch('curChapter', 1)
      } else {
        //  第一次读
        this.booksReadInfo[id] = {
          book: id,
          chapter: 1
        }
        this.getData(id, 1)
        this.$store.dispatch('curChapter', 1)
      }
    }
  },
  mounted () {
    this.$refs.fz_size.style.fontSize = this.fz_size + 'px'
  },
  computed: {
    ...mapState(['font_panel', 'bg_color', 'fz_size', 'bg_night', 'curChapter', 'windowHeight', 'list_panel'])
  },
  watch: {
    // fz_size的值更改背景色
    fz_size (newVal, oldVal) {
      this.$refs.fz_size.style.fontSize = newVal + 'px'
      localEvent.StorageSetter('fz_size', newVal)
    },
    curChapter (newVal, oldVal) {
      // 章节变化，保存到本地并获取数据
      localEvent.StorageSetter('cur_chapter', newVal)
      this.saveBooksInfo()
      this.getData(this.$route.params.id, newVal)
    }
  },
  methods: {
    saveBooksInfo () {
      // 用local 保存阅读进度
      let id = this.$route.params.id
      this.booksReadInfo[id] = {
        book: id,
        chapter: this.curChapter
      }
      localEvent.StorageSetter('bookreaderinfo', this.booksReadInfo)
    },
    page (e) {
      if (e.keyCode === 39) {
        this.nextChapter()
      } else if (e.keyCode === 37) {
        this.prevChapter()
      }
    },
    prevChapter () {
      this.$store.dispatch('prevChapter')
      this.saveBooksInfo()
      setTimeout(() => {
        document.body.scrollTop = 0
      }, 300)
    },
    nextChapter () {
      this.$store.dispatch('nextChapter', 50)
      this.saveBooksInfo()
      setTimeout(() => {
        document.body.scrollTop = 0
      }, 300)
    },
    // 切换上下工具栏 如果字体面板显示也关闭
    clickBar () {
      this.$store.dispatch('toggleBar')
      this.$store.state.font_panel = false
    },
    //  上翻
    pageUp () {
      let target = document.body.scrollTop - window.screen.height - 80
      this.startScroll(target, -20)
    },
    //  下翻
    pageDown () {
      let target = document.body.scrollTop - window.screen.height - 80
      this.startScroll(target, 20)
    },
    startScroll (target, speed) {
      let times = null
      times = setInterval(() => {
        if (speed > 0) {
          if (document.body.scrollTop <= target) {
            document.body.scrollTop += speed
          }
          if (document.body.scrollTop > target || document.body.scrollTop + window.screen.height >= document.body.scrollHeight) {
            clearInterval(times)
          }
        } else {
          if (document.body.scrollTop >= target) {
            document.body.scrollTop += speed
          }
          if (document.body.scrollTop < target || document.body.scrollTop <= 0) {
            clearInterval(times)
          }
        }
      }, 1)
    },
    getData (id, chapter) {
      this.loading = true
      this.$http.get(this.common.api + '/book?book=' + id + '&id=' + chapter)
      .then((res) => {
        console.log(res)
        this.loading = false
        this.title = res.data.title
        this.content = res.data.content.split('-')
      })
      this.$store.state.windowHeight = window.screen.height
    }
  }
}
</script>

<style lang="less" type="text/less">
  .read-container {
    font-size: 16px;
    color: #555;
    line-height: 31px;
    min-height: 600px;
    padding: 15px;
    h4 {
      position: fixed;
      top: 0;
      left: 15px;
      right: 15px;
      height: 50px;
      line-height: 50px;
      font-size: 20px;
      color: #736357;
      /*border-bottom: solid 1px #736357;*/
      margin: 0 0 1em 0;
      letter-spacing: 2px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    p {
      text-indent: 2em;
      margin: 0.5em 0;
      text-align: justify;
      letter-spacing: 0px;
      line-height: 1.5;
    }
    p:first-of-type {
      margin-top: 43px;
    }
    .btn-bar {
      z-index: 80;
      width: 80%;
      margin: 20px auto 0;
      max-width: 800px;
      .btn-tab {
        padding-left: 0;
        height: 34px;
        line-height: 34px;
        background-color: #000;
        border-radius: 8px;
        border: 1px solid #858382;
        font-size: 14px;
        opacity: 0.9;
        li {
          list-style-type: none;
          display: inline-block;
          width: 49%;
          text-align: center;
          color: #fff;
          &:nth-child(1) {
            border-right: 1px solid #858382;
          }
        }
      }
    }
  }

  .bac(@color) {
    background-color: @color;
  }

  .read-container[bg='1'] {
    .bac(#e9dfc7);
    h4 {
      .bac(#e9dfc7);
    }
  }

  .read-container[bg='2'] {
    .bac(#e7eee5);
    h4 {
      .bac(#e7eee5);
    }
  }

  .read-container[bg='3'] {
    .bac(#a4a4a4);
    h4 {
      .bac(#a4a4a4);
    }
  }

  .read-container[bg='4'] {
    .bac(#cdefcd);
    h4 {
      .bac(#cdefcd);
    }
  }

  .read-container[bg='5'] {
    .bac(#283548);
    h4 {
      .bac(#283548);
    }
  }

  .read-container[bg='6'] {
    .bac(#0f1410);
    h4 {
      .bac(#0f1410);
    }
  }

  .read-container[night='true'] {
    .bac(#0f1410);
    h4 {
      .bac(#0f1410);
    }
  }

  .page-up {
    position: fixed;
    width: 100%;
    height: 35%;
    top: 0;
    color: rgba(0, 0, 0, .1);
    z-index: 5;
  }

  .click-mask {
    position: fixed;
    width: 100%;
    height: 30%;
    top: 35%;
    color: rgba(0, 0, 0, .1);
  }

  .page-down {
    position: fixed;
    width: 100%;
    height: 35%;
    bottom: 65px;
    color: rgba(0, 0, 0, .1);
    z-index: 5;
  }

  .top-nav-pannel-bk {
    position: fixed;
    bottom: 70px;
    height: 135px;
    background: #000;
    width: 100%;
    color: #fff;
    opacity: 0.9;
    z-index: 10003
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }

</style>
