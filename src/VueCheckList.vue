<template>
  <div class="vue-check-list">
    <div class="topbar">
      <span class="cancel">取消</span>
      <span class="address">选择地址</span>
      <span class="success">完成</span>
    </div>
    <div class="desc">
      已经选择0个地址，最多可选2个
    </div>
    <div class="list">
      <div class="line">
        <div class="p">
          <div class="cont">厦门软件园二期</div>
          <div :class="classShow == false ? 'dis-rad' : 'rad'" @click="changeClass" id="chec">
            {{ checkValue }}
          </div>
        </div>
      </div>
    </div>
    <div class="mask" v-if="isShowMask"></div>
  </div>
</template>

<script>
export default {
  name: 'vue-check-list',
  data() {
    return {
      classShow: false,
      checkValue: '',
      isShowMask: false
    }
  },

  methods: {
    changeClass() {
      this.classShow = !this.classShow
      if (this.classShow) {
        this.checkValue = '✓'
      }
    }
  },

  created() {
  }
}
</script>

<style lang="scss" src="./styles/check-list.scss"></style>
