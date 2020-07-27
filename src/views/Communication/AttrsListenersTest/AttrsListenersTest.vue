<template>
  <div>
    <h2>自定义带Hover提示的按钮</h2>
    <SecondPackage :titel="'删除'" type="primary" icon="el-icon-delete" @click="test1"></SecondPackage>
  </div>
</template>

<script type="text/ecmascript-6">
  import SecondPackage from "./SecondPackage";

  export default {
    name: 'AttrsListenersTest',

    methods: {
      test1() {
        console.log(111)
      }
    },
    components: {
      SecondPackage
    }
  }
</script>
