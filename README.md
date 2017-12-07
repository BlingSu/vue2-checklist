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
