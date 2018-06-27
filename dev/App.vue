<template>
  <div id="app">
    <input class="check-input" type="text" placeholder="请选择地址" @click="selectAddress">
    <p v-for="item in content" :key="item.id">{{ item.address }}</p>
    <vue-check-list
      :visible="dialogVisible"
      :data="lineData"
      :maxlength="maxlength"
      @on-cancel="hanldeCancel"
      @on-change="handleChange">
    </vue-check-list>
  </div>
</template>


<script>
import {VueCheckList} from '../src/index'

export default {
  components: {
    VueCheckList
  },
  props: {
  },
  data() {
    return {
      content: [],
      dialogVisible: false,
      lineData: [
        {id: 1, address: '厦门软件园二期' },
        {id: 2, address: '厦门软件园三期' },
        {id: 3, address: '厦门软件园四期' },
        {id: 4, address: '厦门软件园五期' },
        {id: 5, address: '厦门软件园六期' },
        {id: 6, address: '厦门软件园七期' },
        {id: 7, address: '厦门软件园八期' },
        {id: 8, address: '厦门软件园九期' }
      ],
      maxlength: 5
    }
  },

  methods: {
    selectAddress() {
      document.activeElement.blur()
      this.dialogVisible = true
    },
    hanldeCancel(scope) { if (scope) { this.dialogVisible = false } },
    handleChange(scope) {
      this.content = []
      for (let i = 0; i < scope.length; i++) {
        this.content.push(scope[i])
      }
      this.dialogVisible = false
    }
  },

  mounted() {

  }
}
</script>

<style lang="scss" src="../src/styles/common.scss"></style>
<style scoped>
.check-input {
  border: 1px solid #000;
}
</style>
