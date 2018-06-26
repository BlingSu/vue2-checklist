<template>
  <div class="vue2-checklist">
    <div class="content" v-show="getShow">
      <div class="topbar">
        <span class="cancel" @click="handleCancel">取消</span>
        <span class="address">选择地址</span>
        <span class="success" @click="handleSuccess">完成</span>
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
    <div class="mask" v-show="getShow" @click="handleMask"></div>
  </div>
</template>

<script>
export default {
  name: 'vue2-checklist',
  props: {
    // showMask: {
    //   type: Boolean,
    //   default: false
    // },
    listData: {
      type: Array,
      default: []
    },
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      resData: []
      // lineData: []
    }
  },

  computed: {
    addressLen () {
      return this.lineData.filter(v => v.classShow).length
    },
    getShow: {
      get() {
        return this.isVisible
      },
      set(newState) {
        return this.isVisible = newState
      }
    },
    lineData() {
      return this.listData
    }
  },

  watch: {
    test(v) {
      console.log(v, 'vvv')
    }
  },

  methods: {
    changeClass(item, $event) {
      if ($event.target.className == 'check-disabled') { return false }
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
        }
        return 'rad'
      } else {
        return 'dis-rad'
      }
    },
    handleCancel() {
      this.$emit('on-cancel', true)
    },
    handleSuccess() {
      this.resData = []
      this.lineData.forEach(v => {
        if (v.classShow) {
          this.resData.push(v)
        }
      })
      this.$emit('on-change', this.resData)
    },
    handleMask() {
      this.getShow = false
      // this.isShowMask = false
      // this.getShow = false
      // console.log(this.getShow)
      // this.getShow = false
      // console.log(this.getShow)
      // this.$emit('close-mask', false)
      // this.isShowMask = false
    }
  },

  created() {
    // if (this.showMask) {
      // this.isShowMask = true
    // }
    // this.lineData = this.listData
  }
}
</script>

<style lang="scss" src="./styles/common.scss"></style>
<style lang="scss" src="./styles/check-list.scss"></style>
