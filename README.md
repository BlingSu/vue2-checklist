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
