<template>
  <div class="recommend">
    <h2 class="title">{{title}}</h2>
    <div class="list">
      <ul class="list-ul">
        <li class="list-li" v-for="(item, index) in booklist">
          <router-link :to="{ path: '/bookdetail/' + item.id }" @click.native="bookDetailId(item.id)">
            <img src="item.images" @error="loadImage($event)">
            <p class="book-name">{{item.name}}</p>
            <p class="book-author">{{item.author}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: ['booklist', 'title'],
  methods: {
    bookDetailId (id) {
      console.log(id)
    },
    loadImage (e) {
      this.common.defaultImage(e)
    }
  },
  mounted () {
    console.log(this.booklist, '?')
  }
}
</script>

<style type="text/less" lang="less">
.recommend {
  padding: 15px 0;
}
</style>
