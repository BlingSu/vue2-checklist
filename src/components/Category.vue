<template>
  <div class="category">
    <div class="header">
      <router-link to="/">
        <i></i>
        <h2>{{ title }}</h2>
      </router-link>
    </div>
    <div class="container" v-if="!loading">
      <ul>
        <li v-for="item in categoryList">
          <router-link>
            <div class="category-image">
              <img :src="item.images">
            </div>
            <div class="category-content">
              <h3>{{item.name}}</h3>
              <p>{{item.intro}}</p>
              <div class="category-author">
                <i></i>
                <span>{{item.author}}</span>
              </div>
              <div class="category-message">
                <span>{{1}}</span><span>{{item.serialize}}</span><span>{{item.wordcount}}万字</span>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <Loading v-show="loading"></Loading>
  </div>
</template>

<script>
import Loading from './Loading/Loading.vue'

export default {
  components: {
    Loading
  },
  data () {
    return {
      categoryList: [],
      loading: false
    }
  },
  computed: {
    title () {
      switch (this.$route.query.type) {
        case 1:
          return '玄幻'
        case 2:
          return '修真'
        case 3:
          return '都市'
        case 4:
          return '历史'
        case 5:
          return '网游'
        default:
          return '分类'
      }
    }
  },
  methods: {
    getCategoryList (type) {
      this.loading = true
    }
  },
  created () {
    this.getCategoryList(this.$route.query.type)
  }
}
</script>

<style type="text/less" lang="less">
.category {
  background-color: #f6f7f9;
  .header {
    height: 50px;
    background-color: #fff;
    i {
      position: absolute;
      background: url('../assets/images/back.png');
      width: 30px;
      height: 30px;
      top: 10px;
      left: 10px;
    }
    h2 {
      margin: 0 40px;
      font-size: 18px;
      line-height: 52px;
      color: #ed424b;
    }
    a {
      text-decoration: none;
    }
  }
  .container {
  }
}
</style>
