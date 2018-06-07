<template>
  <div id="app">
    <input class="check-input" type="text" placeholder="请选择地址" @click="getAddress">
    <vue-check-list v-if="isShow"></vue-check-list>
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
      isShow: false
    }
  },
  methods: {
    getAddress() {
      document.activeElement.blur()
      this.isShow = !this.isShow
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
