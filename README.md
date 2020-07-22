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

>

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
  * Search分页器交互
    * 实现静态组件
    * 根据页面交互设计数据
      * 当前页码
      * 每页数量
      * 总数
      * 连续页码  一般都是**奇数**
    * 动态显示页码
    * 点击页码实现重新发送请求获取数据
    * 父组件搜索条件更新，初始化页码数值
  
* 难点：01）连续页码的起始页与结束页

  ​					1. 用算法优化代码

  ​			02）关于每个button功能，何时禁止点击操作，何时展示选择状态

### 3. Detail详情页

* Detail静态页面搭建

* 封装ajax请求，获取详情页数据

* 渲染Detail详情页

  * thumbnail缩略图
    * 使用**Swiper@5**版本插件
    * 加入**slidesPerView**跟**slidesPerGroup**配置
  * 放大镜交互
    * 事件计算**mask**位置
    * 大图方向是预览图的反方向且移动距离是预览图的两倍
    * 六大事件属性及元素位置属性

* 跳转AddCart路由准备工作

  * 把数据存入**sessionStorage**中，便于在AddCart路由访问数据

  * input表单事件

    * onfocus
    * 并没有什么特别的，就是当焦点转移到（点击，tab切换） input 框上边的时候触发；
    * oninput
      * 当oninput触发时，已经可以拿到value，不能拿到keycode，不可以阻止默认事件了
      * 关键是明明每次输入框的值变化时触发的，抢了onchange的饭碗
      * 这个事件，仅在**input**和**textarea**支持
    * onchange
      * 在失去焦点且表单数据改变时触发，但比onblur事件快
      * 如果表单数据没有改变，是不会触发onchange事件的
    * onblur
      * 失去焦点时触发，但比onchange**慢**
      * 能获取到 新的value，但不能获取到**keycode**
    
    **难点**：1）async跟await深入理解
    
    ​					async函数返回的值必然是一个成功或失败的promise对象
    
    ​			2）**a.b.c**报错解决，其中**a[0].b**也属于**a.b.c**
    
    ​					只要出现**a.b.c**这种情况都需要判断

**a.b.c**

```	js
/**
 * imgList[defaultIndex].imgUrl
 */

if(imgList) {
  return imgList[defaultIndex] || {}
}else {
    return {}
}
```

### 4. AddCart

* 搭建AddCart静态页面
* 拿取**sessionStorage**中的数据，渲染页面
* 点击结算进入ShopCart购物车页面
  * 进入ShopCart准备工作
    * 添加一个**userTempId**（用户临时ID）
    * 将创建的用户临时ID存在localStorage和vuex，并携带在请求头里面
      * 这样后端便能通过临时ID获取购物车的商品

### 5. ShopCart购物车页面

* 搭建ShopCart静态页面
* 将请求到的数据进行页面渲染
* 添加交互逻辑
  * 统计商品数量及商品总价格（回顾数组高级方法
    * 用到**reduce**高级数组API
    * 如果回调中需要对当前值进行判断，须将回调函数的返回值写在外面
      * 如果写在里面，当不满足条件的item，他没有返回之前的总和，会出现**NaN**情况
  * 商品数量交互
    * 根据文档传递数据
    * 优化：使用防抖函数解决用户连续点击增加或减少数量
  * 商品前面表单状态切换效果
    * 每一个状态切换都需要按照文档的请求参数，请求改变状态及返回数据
    * 全选切换状态须借用**Promise.all**函数进行封装请求
  * 删除商品交互
    * 删除单个
    * 删除多个 **Promise.all**

### 6. Login && Register页面

* 搭建Login && Register页面
  * Register
    * 根据api文档构建数据
    * 注册成功后跳转Login页面
  * Login
    * 根据api文档构建数据
    * 登录成功把数据存在vuex，并在localStorage中保存
    * 设置自动登录，只需在vuex里的登录数据在localStorage里面读取，并赋值给vuex里的用户登录信息
    * 设置退出登录，退出登录后，先清除localStorage里的用户数据，在清除vuex里的用户数据
* userTempId（用户临时ID）跟token（用户登录后标识信息）
  * 在临时ID添加商品到购物车，再登录添加商品，它会把临时ID购物车里的商品信息合并到登录后的账号购物车中