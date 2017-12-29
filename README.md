# Vue全家桶

## 说明
1. 技术栈
* Node
* Express
* MongoDB
* Vue
* Vue-router
* Vuex
* Webpack

2. 目录

```
| .babelrc                  #配置文件
| .package-lock.json
| .package.json
| README.md
| webpack.config.js         #生产环境
| webpack.dev.config.js     #开发环境
| index.html
| 
└─dist
└─src                      #源码
      | App.vue
      | assets             #公共
      |  └─css
      |  └─img
      |  └─js
      | main.js            #入口文件
      | 
      |-components          #组件
      |  └─Home
      |       Home.js
      |
      |-store              #vuex
      |   └─actions.js
      |   └─index.js
      |   └─mutations-type.js
      |   └─mutations.js
      |   └─local.js
      |
      |-router              #路由
          index.js
```

## 初始化项目

```bash
cd vue-library
npm init
npm i webpack --save -dev
```

新建源码和入口文件

```bash
cd src
touch main.js
```

webpack.dev.config.js配置,引入path模块

```js
const path = require(`path`)

module.exports = {
  entry: path.join(__dirname, 'src/main.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  }
}

```

配置命令
```bash
"scripts": {
    "dev-build": "webpack --config webpack.dev.config.js"
 }
```
执行 npm run dev-build 打包完后可以打开index.html可以看到入口文件的内容


## vue

```shell
npm i vue --save
npm i vue-template-compiler css-loader vue-loader style-loader --save-dev

cd src
touch App.vue

mkdir component && cd component
mkdir Home && cd Home
touch Home.vue

```

Home.vue
```html
<template>
  <div>
    this is test vue
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
```
App.vue

```html
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>

```

需要配置下main.js,实例一波vue
```js
/**
 * this is vue entry config
 * @author angelasu 
 * @date 2017/12/07
 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

```

配置webpack.dev.config.js

> module 
```js
{
  test: /\.vue$/,
  loader: 'vue-loader'
},
{
  test:/\.css$/,
  loader:'style!css'
}
```

> plugins的HtmlWebpackPlugin 负责让打包后的文件自己引入到index.html里面
```js
npm i html-webpack-plugin --save-dev

plugins: [
  new HtmlWebpackPlugin({
    inject: true,
    filename: 'index.html',
    template: path.resolve(__dirname, 'index.html')
  })
]
```

> 启动服务
```js
devServer: {
  port: 8888,
  contentBase: path.join(__dirname, './dist'),
  historyApiFallback: true
},
```

> 配置webpack-dev-server 命令
```shell
"dev": "webpack-dev-server --config webpack.dev.config.js --color --progress"
```
执行npm run dev 会发现页面是空的 没有渲染<router-view></router-view> 所以需要vue-router


## vue-router

```shell
cd src && mkdir router
cd router
touch router.js
```

router.js
```js
npm i vue-router --save
```

router/index.js
```js
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: resolve => require(['../component/Home/Home.vue'], resolve)
    }
  ]
})

```

然后要把router引到main配置文件里面

main.js

```js
/**
 * this is vue entry config
 * @author angelasu 
 * @date 2017/12/07
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

```

执行 npm run dev 打开 http://localhost:8888 就可以看到效果啦😁


## 引入Mint-UI

```bash
cd vue-library
npm i mint-ui --save
```

在 main.js里面引入

```js
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)
```

这时候会发现终端报 can't reslove 'style'

所以需要配置一下 style-loader 和 css-loader

```bash
npm i --save-dev style-loader css-loader
```

然后再webpack.dev.config.js里面修改rules

```js
{
  test:/\.css$/,
  use: [
    { loader: 'style-loader' },
    { loader: 'css-loader' }
  ]
}
```

这样就能在Home.vue里面引入mint-ui的组建咯~

Home.vue
```js
<template>
  <div>
    <mt-header fixed title="test component"></mt-header>
  </div>
</template>

<script>

export default {
  data () {
    return {}
  }
}
</script>
```
