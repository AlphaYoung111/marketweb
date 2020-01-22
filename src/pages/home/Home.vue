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
    <!-- 热门 -->
    <feature-view></feature-view>
    <!-- 首页选项卡 -->
    <tab-control :title="tabTitle" class="tab"></tab-control>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>
<script>
import HomeSwiper from "@pages/home/childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import NavBar from "@components/common/navbar/NavBar";
import TabControl from "@components/content/tabcontrol/TabControl";

import { getHomeMultiData, getHomeGoodsData } from "@network/home";
export default {
  name: "Home",
  data() {
    return {
      // 轮播图
      banners: [],
      //四个分类选项
      recommends: [],
      //选项卡标题
      tabTitle: ["流行", "新款", "精选"],
      //商品详情数据
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      }
    };
  },
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,

    NavBar,
    TabControl
  },
  created() {
    // 轮播，分类
    this.getMulti();
    //商品
    this.getGoods('pop');
    this.getGoods('new');
    this.getGoods('sell');
  },
  methods: {
    // 轮播，分类
    getMulti() {
      getHomeMultiData()
        .then(res => {
          // console.log(res.data.data.banner.list);
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list;
        })
        .catch(err => {});
    },
    //商品
    getGoods(type) {
      const page =this.goods[type].page+1;
      getHomeGoodsData(type, page)
        .then(res => {
          console.log(res.data.data);
          this.goods[type].list.push(...res.data.data.list);
          this.goods[type].page+=1;
        })
        .catch(err => {});
    }
  }
};
</script>
<style scoped>
#home {
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab {
  position: sticky;
  top: 44px;
}
</style>