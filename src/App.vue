<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-if="!$route.meta.isHide"></Footer>
  </div>
</template>

<script>
  import Header from "@/components/Header"
  import Footer from "@/components/Footer"

  export default {
    name: "App",
    mounted() {
      this.getCategoryList();
    },
    methods: {
      getCategoryList() {
        this.$store.dispatch("gainCategoryList")
      }
    },
    components: {
      Header,
      Footer
    }
  }
</script>

<style scoped>

</style>
