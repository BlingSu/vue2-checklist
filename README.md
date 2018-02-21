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
  引入maxin 使用方法，比如bakground-image
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
