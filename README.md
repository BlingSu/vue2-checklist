# vue-music

> 音乐播放器

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
