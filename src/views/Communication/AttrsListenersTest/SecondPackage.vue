<template>
  <a href="javascript:;" title="title">
    <el-button v-bind="$attrs"></el-button>
  </a>
</template>

<script>
  export default {
    name: "SecondPackage",
    props: ['title'],
    mounted() {
      console.log(this.$attrs, this.$listeners)
    }
  }
</script>

<style scoped>

</style>
