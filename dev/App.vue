<template>
  <div id="app">
    <input class="check-input" type="text" placeholder="请选择地址" @click="getAddress">
    <p v-for="item in content" :key="item.id">{{ item.address }}</p>
    <vue-check-list
      v-if="isShow"
      @cancelState="getCancelState"
      @listdata="getlistData"
      @checkState="getCheckState"
      :showMask="mask">
    </vue-check-list>
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
      content: [],
      mask: false
    }
  },
  methods: {
    getAddress() {
      document.activeElement.blur()
      this.isShow = true
      this.mask = true
    },
    handleMask() {
      this.isShow = false
    },
    getCancelState(v) {
      if (v) {
        this.isShow = false
      }
    },
    getlistData(v) {
      this.content = []
      for (let i = 0; i < v.length; i++) {
        this.content.push(v[i])
      }
      this.isShow = false
    },
    getCheckState(v) {
      if(!v) {
        this.isShow = false
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
