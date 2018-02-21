# vue-music

> 音乐播放器

## 初始化项目

``` bash
vue init webpack vue-music
```

## 项目运行

``` bash
# 安装依赖
npm install

# 8080端口热加载
npm run dev

# 打包构建
npm run build
```

## 项目目录以及公共样式资源准备

``` bash
cd src
rm -rf *

# 在src目录下

# 跟后端请求相关的代码(ajax,jsonp请求)
mkdir api

# 通用静态资源
mkdir common

# 通用组件
mkdir components

# 路由
mkdir router

# vuex 管理
mkdir store

# 入口文件
touch main.js

# 简单输出
touch App.vue
```

添加sytlus 和 stylus-loader 模块
```bash
npm i stylus stylus-loader -D
```

增加ESlint 规则

```js
// 不检测文件末尾是否有空行
'eol-last': 0,
// function 左括号少sapce 去除
'space-before-function-paren': 0
```

在webapck.base.conf.js 里面修改配置
``` js
function resolve (dir) {
  // 当前目录往上找
  return path.join(__dirname, '..', dir)
}

resolve: {
  extensions: ['.js', '.vue', '.json'],
  alias: {
    '@': resolve('src'),
    // 新增的别名
    'common': resolve('src/common')
  }
}
```

main.js
```js
// 配置完别名就可以自己找到这个模块
import 'common/stylus/index.styl'
```

执行npm run dev 就不会报错了

## 页面入口以及header组件
在index.html修改 meta

```html
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0, user-scalable=no">
```

新增依赖
``` bash
# -S 是你开发时候依赖的东西，-D 是你发布之后还依赖的东西
npm i babel-runtime fastclick -S
npm i babel-polyfill -D

# babel-runtime
# 对es语法做一些转译

# fastclick
# 对移动端3秒延迟的处理

# babel-polyfill
# 对es6的一些API 比如Promise转译
```

main.js

```js
/* 引入babel-polyfill 和fastclick 并且attach在body下 */
import 'babel-polyfill'
import fastclick from 'fastclick'
fastclick.attach(document.body)
```

创建m-header组件
``` bash
cd src/components
mkdir m-header
cd m-header
touch m-header.vue
```

``` vue
<template>
  <div class="m-header">
    <div class="icon"></div>
    <div class="text">Vue Music</div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

  /*
  引入 variable stylus的变量，比如颜色字体
  引入 maxin 使用方法，比如bakground-image
  */
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .m-header
    position: relative
    height: 44px
    text-align: center
    color: $color-theme
    font-size: 0
    .icon
      display: inline-block
      vertical-align: top
      margin-top: 6px
      width: 30px
      height: 32px
      margin-right: 9px
      bg-image('logo')
      background-size: 30px 32px
    .text
      display: inline-block
      vertical-align: top
      line-height: 44px
      font-size: $font-size-large
    .mine
      position: absolute
      top: 0
      right: 0
      .icon-mine
        display: block
        padding: 12px
        font-size: 20px
        color: $color-theme
</style>

```

在App.vue中引入m-header组件并且注册使用
```js
import MHeader from './components/m-header/m-header'
export default {
  components: {
    MHeader
  }
}
```
如果不想使用相对路径的话，就要在webapck.base.conf.js的resolve中设置别名

```js
'components': resolve('src/components')
```

执行npm run dev 就可以看到效果啦～


## 路由 Vue-router

创建所需要的组件
``` bash
cd src/components
# 排行页面
mkdir rank && cd rank
touch rank.vue
# 推荐页面
mkdir recommend && cd recommend
touch recommend.vue
# 搜索页面
mkdir search && cd search
touch search.vue
# 歌手页面
mkdir signer && cd signer
touch signer.vue
```

router/index.js

路由配置

``` vue
import Vue from 'vue'
import Router from 'vue-router'

import Rank from 'components/rank/rank'
import Recommend from 'components/recommend/recommend'
import Search from 'components/search/search'
import Singer from 'components/singer/singer'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/recommend' },
    { path: '/rank', component: Rank },
    { path: '/recommend', component: Recommend },
    { path: '/search', component: Search },
    { path: '/singer', component: Singer }
  ]
})

```

man.js
```javascript
/* 引入router并且传下来 */
import router from './router'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})

```

然后在App.vue中添加router-view

```html
<router-view></router-view>
```


新增导航Tab组件

```bash
cd src/components
mkdir tab && cd tab
touch tab.vue
```

``` vue
/* tag是渲染成div */
<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/recommend">
      <span class="tab-link">推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/singer">
      <span class="tab-link">歌手</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rank">
      <span class="tab-link">排行</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/search">
      <span class="tab-link">搜索</span>
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable'

  .tab
    display: flex
    height: 44px
    line-height: 44px
    font-size: $font-size-medium
    .tab-item
      flex: 1
      text-align: center
      .tab-link
        padding-bottom: 5px
        color: $color-text-l
        /* 当前router被激活的时候，会添加一个class="tab-link" */
      &.router-link-active
        .tab-link
          color: $color-theme
          border-bottom: 2px solid $color-theme
</style>

```

然后在App.vue中引入tab组件，并且注册

``` vue
<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script type="text/javascript">
import MHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'

export default {
  components: {
    MHeader,
    Tab
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>

```
执行npm run dev 就可以看到效果咯～

## 推荐页面

### JSONP

```js
npm i jsonp --save
```

封装jsonp方法

``` bash
cd src/common/js
touch jsonp.js
```

封装JSONP方法
```js
import originJSONP from 'jsonp'

export default function jsonp(url, data, option) {
  // 如果url小于0 没有问号就添加一个 否则就是&
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

  // 返回一个promise
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

function param (data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += `&${k}=${encodeURIComponent(value)}`
  }
  // 如果url有 第一个&去掉 否则为空
  return url ? url.substring(1) : ''
}

```

JSONP抓取数据
* 在api下封装对应的方法

``` bash
cd src/api
# 添加推荐相关的 api
touch recommend.js
```

在api下创建一个config.js,用来封装一写参数
```js
export const commonParams = {
  g_tk: 5381,
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0,
  format: 'jsonp'
}

// 库
export const options = {
  param: 'jsonpCallback'
}

export const ERR_OK = 0
```

recommend.js
```js
import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

/* 通过jsonp抓取轮播图数据 */
export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  // 返回一个promise
  return jsonp(url, data, options)
}

```

在 recommend.vue中获取数据并且渲染

``` vue
// template基本架构

<template>
  <div class="recommend">
    <div class="recommend-content">
      <div class="slider-wrapper"></div>
    </div>
    <div class="recommend-list">
      <h1 class="list-title">热门歌单推荐</h1>
      <ul></ul>
    </div>
  </div>
</template>

```
获取数据
``` js
<script>
import { getRecommend } from 'api/recommend'
import { ERR_OK } from 'api/config'

export default {
  created () {
    this._getRecommend()
  },

  methods: {
    _getRecommend () {
      getRecommend().then((r) => {
        if (r.code === ERR_OK) {
          // 如果为0 返回正确的数据
          console.log(r)
        }
      })
    }
  }
}
</script>
```

## 开发轮播图组件 (基础组件库)

``` bash
cd src && mkdir base
cd base && mkdir slider
cd slider && touch slider.vue
```

slider.vue

``` vue
/**
 * template
 * slider 会插到slot里面
 */

<template>
  <div class="slider">
    <div class="slider-group">
      <slot></slot>
    </div>
    <div class="dots"></div>
  </div>
</template>

```

在recommend中引入 slider组件 然后遍历获取到的数据

``` vue
/* 插槽内容对应slot */
  <slider>
    <div v-for="item in recommends" :key="item.id">
      <a :href="item.linkUrl">
        <img :src="item.picUrl">
      </a>
    </div>
  </slider>
```

安装轮播
``` bash
npm i better-scroll -S
```

slider.vue
``` vue
/* 设置轮播属性 */
import BScroll from 'better-scroll'
export default {
  props: {
    loop: {
      // 循环轮播
      type: Boolean,
      default: true
    },
    autoPlay: {
      // 自动轮播
      type: Boolean,
      default: true
    },
    interval: {
      // 间隔轮播
      type: Number,
      default: 4000 // 时间
    }
  }
}
```

封装dom方法

``` bash
cd src/common/js
touch dom.js
```

```js
export function addClass (el, className) {
  //  一个dom 对象和 class
  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

export function hasClass (el, className) {
  // 判断是否有这个class
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

```

设置轮播宽度以及初始化

```js
_setSilderWidth () {
  // 设置宽度 获取children
  this.children = this.$refs.sliderGroup.children

  let width = 0
  let sliderWidth = this.$refs.slider.clientWidth

  for (let i = 0; i < this.children.length; i++) {
    let child = this.children[i]
    addClass(child, 'slider-item')
    child.style.width = sliderWidth + 'px'
    width += sliderWidth
  }

  if (this.loop) {
    width += 2 * sliderWidth
  }

  this.$refs.sliderGroup.style.width = width + 'px'
}

_initSlider () {
  this.slider = new BScroll(this.$refs.slider, {
    scrollX: true,
    scrollY: false,
    momentum: false,
    snap: true,
    snapLoop: this.loop,
    snapThreshold: 0.3,
    snapSpeed: 400
  })
}

```
