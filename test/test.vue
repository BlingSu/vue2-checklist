<template>
  <div id="app">
    <input type="text" @click="selectAddress">
    <vue2-checklist
      :data="testData"
      :visible="dialogVisible"
      :maxlength="maxlength"
      @on-cancel="dialogVisible=false"
      @on-change="handleChange"
    ></vue2-checklist>
  </div>
</template>

<script>

export default {
  data() {
    return {
      testData: [
        {id: 1, address: '厦门软件园1期' },
        {id: 2, address: '厦门软件园2期' },
        {id: 3, address: '厦门软件园3期' },
        {id: 4, address: '厦门软件园4期' },
        {id: 5, address: '厦门软件园5期' },
        {id: 6, address: '厦门软件园6期' },
        {id: 7, address: '厦门软件园7期' }
      ],
      dialogVisible: false,
      maxlength: 3
    }
  },

  methods: {
    selectAddress() {
      document.activeElement.blur()
      this.dialogVisible = true
    },
    handleChange(scope) {
      console.log(scope, 'val')
      this.dialogVisible = false
    }
  }
}
</script>

<style scoped>
input {
  border: 1px solid #000;
}
</style>
