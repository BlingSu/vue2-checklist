<template>
  <div class="top-nav-panel font-container" id="font-container" v-show="font_panel">
    <div class="child-mod">
      <span>字号</span>
      <button id="large-font" class="spe-button" @click="add">大</button>
      <button id="small-font" class="spe-button" @click="sub" style="margin-left: 10px;">小</button>
    </div>
    <div class="child-mod" id="bk-container">
      <span>背景</span>
      <div class="bk-container" :class="{'bk-container-current'}" :index=="now_color" v-for="(item, index) in 6">
        <div class="color_btn" @click="changeColor(index)"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import localEvent from '../../store/local'

export default {
  data () {
    return {
      now_color: 0
    }
  },
  computed: {
    ...mapState([ 'font_panel': 'bg_color' ])
  },
  methods: {
    changeColor (index) {
      this.now_color = index
      this.$store.state.bg_color = index + 1
      localEvent.StorageSetter('bg_color', index + 1)
    },
    add () {
      this.$store.dispatch('fzSizeAdd')
    },
    sub () {
      this.$store.dispatch('fzSizeSub')
    }
  }
}
</script>
