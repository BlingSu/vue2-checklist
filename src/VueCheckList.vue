<template>
  <div class="vue-check-list">
    <div class="topbar">
      <span class="cancel" @click="cancelList">取消</span>
      <span class="address">选择地址</span>
      <span class="success">完成</span>
    </div>
    <div class="desc">
      已经选择{{ addressLen }}个地址，最多可选2个
    </div>
    <div class="list">
      <div class="line"
        v-for="item in lineData"
        :key="item.id">
        <div class="p">
          <div class="cont">{{ item.address }}</div>
          <div :class="classState(item.classShow)"
               @click="changeClass(item, $event)" ref="check">
            ✓</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue-check-list',
  data() {
    return {
      lineData: [
        {id: 1, address: '厦门软件园二期', classShow: false},
        {id: 2, address: '厦门软件园三期', classShow: false},
        {id: 3, address: '厦门软件园四期', classShow: false},
        {id: 4, address: '厦门软件园五期', classShow: false}
      ]
    }
  },

  computed: {
    addressLen () {
      return this.lineData.filter(v => v.classShow).length
    }
  },

  methods: {
    changeClass(item, $event) {
      console.log($event)
      if ($event.target.className == 'check-disabled') {
        return false
      }
      item.classShow = !item.classShow
    },
    classState(state) {
      if (state) {
        if (this.addressLen == 2) {
          let dom = document.querySelectorAll('.dis-rad')
          for (let i = 0; i < dom.length; i++) {
            dom[i].setAttribute('class', 'check-disabled')
          }
        } else if (this.addressLen < 3) {
          let dom = document.querySelectorAll('.check-disabled')
          for (let i = 0; i < dom.length; i++) {
            dom[i].setAttribute('class', 'dis-rad')
          }
        } else {
          console.log(1)
        }
        return 'rad'
      } else {
        return 'dis-rad'
      }
    },
    cancelList() {
      this.$emit('cancelState', true)
    }
  },

  created() {
  }
}
</script>

<style lang="scss" src="./styles/check-list.scss"></style>
