<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <TodayRecommend></TodayRecommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="floor in floorList" :key="floor.id" :floor="floor"></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
  import ListContainer from "./ListContainer"
  import TodayRecommend from "./TodayRecommend"
  import Rank from "./Rank"
  import Like from "./Like"
  import Floor from "./Floor"
  import Brand from "./Brand"

  import { mapState } from "vuex"

  export default {
    name: "Home",
    mounted() {
      this.getFloorList()
    },
    methods: {
      getFloorList() {
        this.$store.dispatch("getFloorList")
      }
    },
    computed: {
      ...mapState({
        floorList: state => state.home.floorList
      })
    },
    components: {
      ListContainer,
      TodayRecommend,
      Rank,
      Like,
      Floor,
      Brand
    }
  }
</script>

<style scoped>

</style>
