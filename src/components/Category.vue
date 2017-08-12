<template>
  <div class="category">
    <div class="header">
      <router-link :to="'/'">
        <i></i>
        <h2>{{title}}</h2>
      </router-link>
    </div>
    <div class="container" v-if="!loading">
      <ul>
        <li v-for="item in categoryList">
          <router-link :to="{ path: '/bookdetail/' + item.id }" @click.native="bookDetailId(item.id)">
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
                <span>{{bookCategoryType}}</span><span>{{item.serialize}}</span><span>{{item.wordcount}}万字</span>
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
import {mapState} from 'vuex'
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
    ...mapState(['bookCategoryType']),
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
      this.$http.get(this.common.api + '/type', {
        params: {
          type: type
        }
      })
      .then((resp) => {
        this.loading = false
        this.categoryList = resp.data
      })
    },
    bookDetailId (id) {
      this.$store.dispatch('chooseBook', id)
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
    margin-top: 15px;
    padding: 15px;
    background-color: #fff;
    ul {
      padding: 0;
    }
    ul li {
      display: flex;
      padding-bottom: 10px;
      margin-bottom: 10px;
      border-bottom: 1px solid #ddd;
      a {
        display: flex;
        text-decoration: none;
      }
      .category-image {
        width: 80px;
        img {
          width: 100%;
        }
      }
      .category-content {
        position: relative;
        flex: 1;
        padding: 0;
        margin-left: 20px;
        h3 {
          font-size: 18px;
          margin: 0;
          margin-bottom: 10px;
        }
        p {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          line-clamp: 2;
          font-size: 14px;
          color: #969ba3;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .category-author {
          position: absolute;
          left: 0;
          bottom: 5px;
          color: #969ba3;
          font-size: 13px;
          i {
            position: relative;
            bottom: -3px;
            display: inline-block;
            width: 16px;
            height: 16px;
            background: url("../assets/images/man.png") no-repeat;
          }
        }
        .category-message {
          position: absolute;
          right: 0;
          bottom: 5px;
          float: right;
          color: #969ba3;
          font-size: 10px;
          span {
            border: 1px solid #ccc;
            border-radius: 2px;
            padding: 0 2px;
          }
          span:nth-child(2) {
            color: #ed424b;
          }
          span:nth-child(3) {
            color: #4284ed;
          }
        }
      }
    }
  }
}
</style>
