# vue-mall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

## 

### 1. Home主页

* 所有页面分为 **上中下结构** 大多数页面只是中间部分在变化

  * 定义主体组件，路由组件及非路由组件
  * 点击路由链接切换路由显示，并进行路由参数传递
    * 使用声明式导航和编程式导航
    * 路由参数问题？

* Home静态页面搭建

* Home主页数据获取，封装Ajax模块，并使用vuex存储home数据

  * 三级类别数据获取
  * banner数据获取
  * 楼层数据获取

* 渲染三级类别

  * 实现路由跳转到搜索页
    * 优化主页跳转搜索页发送两次请求问题
  * 优化列表滑过卡顿问题 **节流函数**
  * 使用委派优化路由跳转及参数传递

* 渲染轮播图

  * 使用**mockJs**对banner数据获取
  * **Swiper**插件
  * **vm.$nextTick**解决页面未加载完毕，就渲染轮播图bug
  * 封装**SlideShow**轮播图组件

* 渲染楼层组件

  * 使用**mockJs**对楼层数据获取
  * 复用**SlideShow**

* **难点**

  * 路由**params**参数传递问题及路由**push**及**replace**方法重写

    * 1)难点01: 如何指定params参数可传可不传?    

      ```js
      path: '/search/:keyword?'
      ```

    * 2）面试问题4: 如果指定name与params配置, 但params中数据是一个""（空串）, 无法跳转，路径会出问题
          	解决1: 不指定params
      		解决2: 指定params参数值为**undefined**
      		**前提**是路由params参数要可传可不传

  * 节流函数及委派思想优化代码

  * 轮播图组件封装

    * 使用**watch + vm.$nextTick**

### 2. Search搜索页

* Search静态页面搭建
* Search搜索页数据获取，数据存储在vuex search模块
  * 使用vuex的getters对Search页需要的数据进行暴露
  * Search通过计算属性对数据进行获取
* 渲染Search搜索页
* 实现用户交互
  * 点击品牌，在Search页对品牌进行搜索
  * 点击属性，在Search页对属性进行搜索
    * 处理多次点击相同属性并渲染到面包屑问题
  * 在面包屑对商标、属性进行渲染
    * 关闭面包屑里的商标及属性，重新发送请求获取数据进行渲染
  * 商品根据不同类别进行排序
    * 根据后端给定的参数，进行判别