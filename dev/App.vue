<template>
  <div id="app">
    <input class="check-input" type="text" placeholder="请选择地址" @click="getAddress">
    <vue-check-list v-if="isShow" @cancelState="getCancelState"></vue-check-list>
    <div class="mask" v-if="isShowMask" @click="handleMask"></div>
  </div>
</template>


<script>
import {VueCheckList} from '../src/index'

export default {
  components: {
    VueCheckList
  },
  data() {
    return {
      isShow: false,
      isShowMask: false
    }
  },
  methods: {
    getAddress() {
      document.activeElement.blur()
      this.isShow = true
      this.isShowMask = true
    },
    handleMask() {
      this.isShowMask = false
      this.isShow = false
    },
    getCancelState(v) {
      if (v) {
        this.isShow = false
        this.isShowMask = false
      }
    }
  }
}
</script>

<style lang="scss" src="../src/styles/common.scss"></style>
<style scoped>
.check-input {
  border: 1px solid #000;
}
</style>
