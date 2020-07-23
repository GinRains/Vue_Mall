<template>
  <div class="spec-preview" @mousemove="moveMask">
    <img :src="defaultImg.imgUrl" />
    <div class="event"></div>
    <div class="big">
      <img :src="defaultImg.imgUrl" ref="bigImg"/>
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
  export default {
    name: "Zoom",
    props: ["skuImageList"],
    data() {
      return {
        defaultIndex: 0
      }
    },
    mounted() {
      this.$bus.$on("toggleIndex", this.toggleIndex)
    },
    methods: {
      toggleIndex(index) {
        this.defaultIndex = index
      },
      moveMask(event) {
        let target = event.target,
          mouseX = event.offsetX,
          mouseY = event.offsetY,
          { mask, bigImg } = this.$refs;

        let maskX = mouseX - Math.floor(mask.offsetWidth / 2),
          maskY = mouseY - Math.floor(mask.offsetHeight / 2);

        if(maskX < 0) {
          maskX = 0
        }else if(maskX > target.clientWidth - mask.offsetWidth) {
          maskX = target.clientWidth - mask.offsetWidth
        }

        if(maskY < 0) {
          maskY = 0
        }else if(maskY > target.clientHeight - mask.offsetHeight) {
          maskY= target.clientHeight - mask.offsetHeight
        }

        mask.style.left = maskX + "px"
        mask.style.top = maskY + "px"

        bigImg.style.left = -2 * maskX + "px"
        bigImg.style.top = -2 * maskY + "px"
      }
    },
    computed: {
      defaultImg() {
        let { skuImageList, defaultIndex } = this
        if(skuImageList) {
          return skuImageList[defaultIndex] || {}
        }else {
          return []
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
