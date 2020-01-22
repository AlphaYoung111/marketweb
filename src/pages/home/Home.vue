<template>
  <div id="home">
    <!-- 导航栏 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 轮播图 -->
  <home-swiper :banners="banners"></home-swiper>
  <!-- 推荐 -->
  <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>
<script>
import NavBar from '@components/common/navbar/NavBar'
import HomeSwiper from '@pages/home/childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import {getHomeMultiData} from '@network/home'
export default {
  name:'Home',
  data() {
    return {
      // 轮播图
      banners:[],
      //四个分类选项
      recommends:[],
    }
  },
  components:{
    NavBar,
    HomeSwiper,
    RecommendView
  },
  created(){
    getHomeMultiData().then(res => {
      // console.log(res.data.data.banner.list);
      this.banners=res.data.data.banner.list;
      this.recommends=res.data.data.recommend.list;
    }).catch(err => {
      
    });
  }
}
</script>
<style scoped>
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
}
</style>