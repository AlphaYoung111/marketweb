<template>
  <div>
       <swiper>
      <swiper-item v-for="item in banners" :key="item.title">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import {Swiper,SwiperItem} from '@components/common/swiper';

export default {
  name:'HomeSwiper',
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    banners:{
      type:Array,
      default:[]
    }
  },
  data() {
    return {
      isLoad:false
    }
  },
  methods:{
    imgLoad(){
      if(!this.isLoad){
        // console.log(1);
        
      this.$emit('swiperImgLoad')
      this.isLoad=true
      }
    }
  }
}
</script>
<style scoped>

</style>