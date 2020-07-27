<template>
  <div>
    <!-- 原生DOM事件在html标签和组件标签的区别 -->
    <h1 @click="test1">EventTest组件</h1>

    <!-- 原生事件用在html标签或组件标签
    此时组件上的事件是自定义事件不是原生DOM事件
         且这个原生事件是添加给了组件内部的根元素-->
    <Event1 @click="test2"></Event1>

    <!-- 自定义事件用在html标签或组件标签
    自定义事件在html标签上毫无意义
    自定义事件绑定在组件标签，需要子组件触发事件
          -->
    <Event2 @click="test3"></Event2>
  </div>
</template>

<script type="text/ecmascript-6">
  import Event1 from './Event1.vue'
  import Event2 from './Event2.vue'

  export default {
    name: 'EventTest',

    components: {
      Event1,
      Event2,
    },

    methods: {
      test1(event) {
        console.log(event.target.innerText)
      },
      test2(event) {
        console.log(event)
      },
      test3(event) {
        console.log(event)
      }
    }
  }
</script>
