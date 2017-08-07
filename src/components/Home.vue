<template>
  <div class="container">
    <nav class="nav-header">
      <header>
        <a href="/" class="title">测试小说网</a>
        <a href="/" class="avatar"></a>
      </header>
      <div class="swpie">
        <mt-swipe :auto="4000">
          <mt-swipe-item><img src="../assets/images/1.jpg"></mt-swipe-item>
          <mt-swipe-item><img src="../assets/images/2.jpg"></mt-swipe-item>
          <mt-swipe-item><img src="../assets/images/3.jpg"></mt-swipe-item>
          <mt-swipe-item><img src="../assets/images/4.jpg"></mt-swipe-item>
          <mt-swipe-item><img src="../assets/images/5.jpg"></mt-swipe-item>
        </mt-swipe>
      </div>
    </nav>
    <nav class="home-nav">
      <router-link
        class="home-nav-icon"
        v-for="(item, index) in types"
        :to="{ path: 'category', query: { type: item.type} }"
        :key="item.type">
        <i class="icon"></i>
        <h4 class="home-nav-h">{{item.content}}</h4>
      </router-link>
    </nav>
    <div v-if="!loading">
      <Recommend :booklist="booklist | hot" title="热门小说"></Recommend>
     <!--  <Recommend></Recommend>
      <Recommend></Recommend>
      <Recommend></Recommend>
      <Recommend></Recommend>
      <Recommend></Recommend> -->
    </div>

    <Loading v-show="loading"></Loading>
  </div>
</template>

<script>
import Loading from './Loading/Loading.vue'
import Recommend from './Common/Recommend.vue'
import BookList from './Common/BookList.vue'

export default {
  components: {
    Loading,
    Recommend,
    BookList
  },
  data () {
    return {
      types: [
        { type: 1, content: '玄幻' },
        { type: 2, content: '修真' },
        { type: 3, content: '都市' },
        { type: 4, content: '历史' },
        { type: 5, content: '游戏' }
      ],
      loading: false,
      booklist: []
    }
  },
  methods: {
    getData () {
      this.loading = true
      this.$http.get('book.json')
      .then((resp) => {
        this.booklist = resp.data
        this.loading = false
      })
    }
  },
  filters: {
    hot (value) {
      if (!value) return ''
      let arr = []
      value.forEach((item, index) => {
        if (index < 20) {
          if (index % 2 === 1) {
            arr.push(item)
          }
        }
      })
      return arr
    }
  },
  created () {
    this.getData()
  }
}
</script>

<style lang="less" type="text/less">
.container {
  background-color: #f6f7f9;
}

.nav-header {
  header {
    height: 45px;
    padding: 0 15px;
    line-height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      text-decoration: none;
      color: #333;
      white-space:nowrap;
    }
    a:nth-child(1) {
      font-size: 20px;
    }
    a:nth-child(2) {
      width: 24px;
      height: 24px;
      background: url(../assets/images/avatar.png) no-repeat;
      background-size: 100%;
    }
  }
  .swpie {
    height: 160px;
    img {
      width: 100%;
    }
  }
}

.home-nav {
  display: flex;
  margin: 10px 0;
  padding: 10px 0;
  background-color: #fff;
  a {
    color: #333;
    text-decoration: none;
  }
  .home-nav-icon {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    .home-nav-h {
      margin: 0;
    }
    > i {
      width: 24px;
      height: 24px;
      background-image: url('../assets/images/sprite.0.50.png')
    }
    &:nth-of-type(1) {
        i {
          background-position: -63px -28px;
        }
      }
    &:nth-of-type(2) {
      i {
        background-position: 0 0;
      }
    }
    &:nth-of-type(3) {
      i {
        background-position: 0 -30px;
      }
    }
    &:nth-of-type(4) {
      i {
        background-position: 0 -60px;
      }
    }
    &:nth-of-type(5) {
      i {
        background-position: -30px -30px;
      }
    }
  }
}
</style>
