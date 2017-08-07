<template>
  <div class="book-list">
    <h2 class="title">{{title}}</h2>
    <ul>
      <li v-for="item in datalist">
        <router-link :to="{ path: '/bookdetail/' + item.id }" @click.native="bookDetailId(item.id)">
          <div class="book-image">
            <img src="item.images">
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
  props: ['booklist'],

  data () {
    return {}
  },
  methods: {
    bookDetailId (id) {
      console.log(id, '?')
    }
  }
}
</script>
