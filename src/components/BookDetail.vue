<template>
  <div class="book-detail">
    <loading v-show="loading"></loading>
    <div class="detail-content" v-if="bookDetail">
      <div class="detail-linear">
        <header detail-top>
          <a @click="back"><i class="back"></i>
            <h2 class="detail-title">{{  bookDetail.name }}</h2>
          </a>
          <router-link to="/" class="home-btn"><i class="iconfont icon-home"></i></router-link>
        </header>
      </div>
    </div>
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
      loading: false,
      bookDetail: {}
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style type="text/less" lang="less">

</style>
