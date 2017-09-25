<template>
  <div class="rate-score">
    <span class="star-item" :class="item" v-for="(item,index) in itemClass">{{ score }</span>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: ['score'],
  computed: {
    itemClass () {
      let result = []
      let score = Math.floor(this.score * 2) / 2
      let hasDecimal = score % 1 !== 0
      let interger = Math.floor(score)
      for (let i = 0; i < interger; i++) {
        result.push('on')
      }
      if (hasDecimal) {
        result.push('half')
      }
      while (result.length < 5) {
        result.push('off')
      }
      return result
    }
  }
}
</script>

<style type="text/less" lang="less">
  .rate-score {
    display: flex;
    align-items: center;
    .star-item {
      display: inline-block;
      width: 20px;
      height: 20px;
      background-size: 100% 100%;
      &.on {
        background: url("./star_on.png");
      }
      &.half {
        background: url("./star_half.png");
      }
      &.off {
        background: url("./star_off.png");
      }
      &:last-of-type {
        margin-right:10px;
      }
    }
  }
</style>
