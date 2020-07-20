<template>
  <div class="spec-preview">
    <img :src="defaultImg.imgUrl" />
    <div class="event" ref="target" @mousemove="showMask"></div>
    <div class="big">
      <img :src="defaultImg.imgUrl" ref="bigImg" />
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex"

  export default {
    name: "Zoom",
    data() {
      return {
        defaultIndex: 0
      }
    },
    mounted() {
      this.$bus.$on("updateIndex", this.updateIndex)
    },
    methods: {
      updateIndex(index) {
        this.defaultIndex = index;
      },
      showMask(event) {
        let target = this.$refs.target,
          mask = this.$refs.mask,
          bigImg = this.$refs.bigImg,
          mouseX = event.offsetX,
          mouseY = event.offsetY,
          maskLeft = mouseX - mask.offsetWidth / 2,
          maskTop = mouseY - mask.offsetHeight / 2;

        if(maskLeft < 0) {
          maskLeft = 0;
        }else if(maskLeft > target.clientWidth - mask.offsetWidth) {
          maskLeft = target.clientWidth - mask.offsetWidth
        }

        if(maskTop < 0) {
          maskTop = 0;
        }else if(maskTop > target.clientHeight - mask.offsetHeight) {
          maskTop = target.clientHeight - mask.offsetHeight
        }

        mask.style.left = maskLeft + "px"
        mask.style.top = maskTop + "px"

        bigImg.style.left = -2 * maskLeft + "px"
        bigImg.style.top = -2 * maskTop + "px"
      }
    },
    computed: {
      ...mapGetters(["imgList"]),
      defaultImg() {
        const { imgList, defaultIndex } = this
        if(imgList) {
          return imgList[defaultIndex] || {}
        }else {
          return {}
        }
      }
    }
  }
</script>

<style lang="less">
  .spec-preview {
    position: relative;
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;

    img {
      width: 100%;
      height: 100%;
    }

    .event {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 998;
    }

    .mask {
      width: 50%;
      height: 50%;
      background-color: rgba(0, 255, 0, 0.3);
      position: absolute;
      left: 0;
      top: 0;
      display: none;
    }

    .big {
      width: 100%;
      height: 100%;
      position: absolute;
      top: -1px;
      left: 100%;
      border: 1px solid #aaa;
      overflow: hidden;
      z-index: 998;
      display: none;
      background: white;

      img {
        width: 200%;
        max-width: 200%;
        height: 200%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }

    .event:hover~.mask,
    .event:hover~.big {
      display: block;
    }
  }
</style>
