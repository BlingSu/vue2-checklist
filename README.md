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
