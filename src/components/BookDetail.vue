<template>
  <div class="book-detail">
    <Loading v-show="detailLoading"></Loading>
    <div class="detail-content">
      <div class="detail-linear">
        <header>
          <a><i></i></a>
          <h2></h2>
          <a><i></i></a>
        </header>
        <div class="detail-header">
          <div>
            <img>
          </div>
          <div>
            <h3>
              <p></p>
              <p></p>
              <p></p>
            </h3>
          </div>
          <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="read-btn">
          <button></button>
          <button></button>
        </div>
        <div class="detail-intro"></div>
        <div class="detail-tag"></div>
        <div class="detail-favorite"></div>
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
      detailLoading: false
    }
  }
}
</script>

<style type="text/less" lang="less">

</style>
