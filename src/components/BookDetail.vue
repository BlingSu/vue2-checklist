<template>
  <div class="book-detail">
    <Loading v-show="detailLoading"></Loading>
    <div class="detail-content">
      <div class="detail-linear">
        测试
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
