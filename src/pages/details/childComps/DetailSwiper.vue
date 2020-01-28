<template>
 <div class="swiper-place">
    <swiper :options="swiperOption" >
      <swiper-slide class="swiper-slide" v-for="item in banners" :key="item">
        <img :src="item" alt />
      </swiper-slide>
     <div class="swiper-pagination"></div>
     <div class="swiper-pagination"></div>
    </swiper>
 </div> 
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "DetailSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
  
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption:{
        autoplay:{
          delay:2000,
        autoplayDisableOnInteraction:false,

        },
        speed:600,
        loop:true,
        grabCursor:true,
        pagination:{
          el:'.swiper-pagination',
          type: 'fraction',
          bulletElement : 'li',
        }
      }
    };
  }
};
</script>
<style scoped>
.swiper-place {
  height: 300px;
  overflow: hidden;
}
/* .place img{
  height: 300px;
  width: 100%;
} */
.swiper-slide {
  height: 300px;
  width: 100%;
 
  overflow: hidden;
}
.swiper-slide img{
  width: 100%;
 height: auto;
  /* height: 100%; */


}
</style>