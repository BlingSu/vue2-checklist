<template>
  <div class="container">
    <nav class="nav-header">
      <header>
        <a href="/" class="title">测试小说网</a>
        <a href="/" class="avatar"></a>
      </header>
      <div class="swpie">
        <mt-swipe :auto="4000">
          <mt-swipe-item><img src="../assets/images/1.jpg"></mt-swipe-item>
          <mt-swipe-item><img src="../assets/images/2.jpg"></mt-swipe-item>
          <mt-swipe-item><img src="../assets/images/3.jpg"></mt-swipe-item>
          <mt-swipe-item><img src="../assets/images/4.jpg"></mt-swipe-item>
          <mt-swipe-item><img src="../assets/images/5.jpg"></mt-swipe-item>
        </mt-swipe>
      </div>
    </nav>
    <nav class="home-nav">
      <router-link></router-link>
    </nav>
  </div>
</template>

<script>

</script>

<style lang="less" type="text/less">
.container {
  background-color: #f6f7f9;
}

.nav-header {
  header {
    height: 45px;
    padding: 0 15px;
    line-height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      text-decoration: none;
      color: #333;
      white-space:nowrap;
    }
    a:nth-child(1) {
      font-size: 20px;
    }
    a:nth-child(2) {
      width: 24px;
      height: 24px;
      background: url(../assets/images/avatar.png) no-repeat;
      background-size: 100%;
    }
  }
  .swpie {
    height: 160px;
    img {
      width: 100%;
    }
  }
}
</style>
