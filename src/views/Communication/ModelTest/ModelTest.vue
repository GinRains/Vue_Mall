<template>
  <div>
    <h2>深入v-model</h2>

    <input type="text" v-model="value" />
    <span>{{value}}</span>
    <br>

    <!--v-model 的本质-->
    <input type="text" :value="value" @input="value = $event.target.value" />
    <span>{{value}}</span>
    <br>
    <!-- v-model在组件上的用法-->
    <!--v-model在组件标签上可以实现父子数据同步，用在组件内部是表单元素的情况下-->
    <!--<CustomInput :value="value" @input="value=$event"></CustomInput>-->
    <!--上面情况的简写-->
    <!--简写，v-model 默认会利用名为prop和名为input事件，不能该这两个默认-->
    <CustomInput v-model="value"></CustomInput>
  </div>
</template>

<script type="text/ecmascript-6">
  import CustomInput from './CustomInput.vue'
  export default {
    name: 'ModelTest',
    data() {
      return {
        value: '你好',
        msg: "世界"
      }
    },
    components: {
      CustomInput
    }
  }
</script>
