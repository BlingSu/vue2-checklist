<template>
  <div class="book-list">
    <h2 class="title">{{title}}</h2>
    <ul>
      <li v-for="item in datalist">
        <router-link :to="{ path: '/bookdetail/' + item.id }" @click.native="bookDetailId(item.id)">
          <div class="book-image">
            <img :src="item.images">
          </div>
          <div class="book-detail">
            <h3>{{ item.name }}</h3>
            <p>{{ item.intro }}</p>
            <div class="author">
              <i></i>
              <span>{{ item.author }}</span>
            </div>
            <div class="category-r">
              <span>{{ item.type }}</span><span>{{ item.serialize }}</span><span>{{ item.wordcount }}万字</span>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['datalist', 'title'],

  data () {
    return {}
  },
  methods: {
    bookDetailId (id) {
      // console.log(id, '?')
    }
  },
  filters: {
    type (value) {
      switch (value) {
        case 1:
          return '测试'
        case 2:
          return '修真'
        case 3:
          return '都市'
        case 4:
          return '历史'
        case 5:
          return '网游'
        default:
          return '类型'
      }
    }
  }
}
</script>

<style type="text/less" lang="less">
.book-list {
  margin-top: 15px;
  padding: 15px 0;
  background-color: #fff;
  .title {
    margin-left: 15px;
    margin-bottom: 10px;
    border-left: 2px solid #ed424b;
    font-size: 16px;
    text-indent: 5px;
    line-height: 16px;
  }
}
</style>
