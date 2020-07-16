<template>
  <div class="swiper-container" id="mySwiper" ref="banner">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="banner in bannerList" :key="banner.id">
        <img :src="banner.imgUrl"/>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
  import Swiper from "swiper"
  import "swiper/css/swiper.min.css"

  export default {
    name: "index",
    props: {
      bannerList: {
        type: Array,
        required: true
      }
    },
    watch: {
      bannerList: {
        handler() {
          this.$nextTick(
            () => {
              new Swiper(this.$refs.banner, {
                loop: true, // 循环模式选项

                // 如果需要分页器
                pagination: {
                  el: '.swiper-pagination',
                },
                autoplay: {
                  delay: 1500,
                  stopOnLastSlide: false,
                  disableOnInteraction: false,
                },

                // 如果需要前进后退按钮
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },

                // 如果需要滚动条
                scrollbar: {
                  el: '.swiper-scrollbar',
                },
              })
            }
          )
        },
        immediate: true
      }
    }
  }
</script>

<style scoped>

</style>
