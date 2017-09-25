<template>
  <div class="bg-cover" @touchmove:prevent @click="hideListPanel"></div>
</template>

<script>
export default {
  methods: {
    hideListPanel () {
      this.$store.state.list_panel = false
    }
  }
}
</script>

<style type="text/less" lang="less">
  .bg-cover {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 1;
    z-index: 10;
    background-color: rgba(0,0,0,.5);
    transition: all .5s;
    &.hide {
      position: relative;
      opacity: 0;
    }
  }
</style>
