<template>
  <div>
    <TypeNav></TypeNav>
    <ToolBar></ToolBar>
    <Main></Main>
  </div>
</template>

<script>
  import ToolBar from './ToolBar'
  import Main from './Main'

  export default {
    name: "Search",
    components: {
      ToolBar,
      Main
    }
  }
</script>

<style lang="less" scoped>



</style>
