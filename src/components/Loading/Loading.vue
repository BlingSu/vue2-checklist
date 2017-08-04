<template>
  <div class="loading">
    <svg class="svg" :style="loadingSize" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
      <circle class="path" :style="loadingColor" fill="none" :stroke-width="stroke" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    size: { type: Number, default: 50 },
    stroke: { type: Number, default: 3.5 },
    color: { type: String, default: '#58b7ff' }
  },
  computed: {
    loadingSize () {
      const newSize = this.size + 'px'
      return {
        width: newSize,
        height: newSize
      }
    },
    loadingColor () {
      return {
        stroke: this.color
      }
    }
  }
}
</script>

<style lang="less" type="text/less">
.loading {
  display: inline-block;
  pointer-events: none;
  will-change: transform, opacity;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@offset: 187;
@duration: 1.4s;

.svg {
  animation: rotator @duration linear infinite;
}

@keyframes rotator {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(270deg); }
}

.path {
  stroke-dasharray: @offset;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: dz @duration ease-in-out infinite;
}

@keyframes colors {
  0% { stroke: #fff; }
  25% { stroke: #58b7ff; }
  50% { stroke: #58b7ff; }
  75% { stroke: #fff; }
  100% { stroke: #58b7ff; }
}

@keyframes dz {
  0% { stroke-dashoffset: @offset; }
  50% { stroke-dashoffset: @offset/4; transform: rotate(135deg); }
  100% { stroke-dashoffset: @offset; transform: rotate(450deg) }
}
</style>
