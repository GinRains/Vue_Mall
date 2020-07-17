<template>
  <div>
    <TypeNav></TypeNav>
    <ToolBar></ToolBar>
    <Main></Main>
  </div>
</template>

<script>
  import ToolBar from "./ToolBar"
  import Main from "./Main"

  export default {
    name: "Search",
    props: ["keyword"],
    components: {
      ToolBar,
      Main
    }
  }
</script>

<style scoped>

</style>
