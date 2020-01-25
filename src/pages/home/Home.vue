<template>
  <div id="home">
    <!-- 导航栏 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll
      class="content1"
      ref="scroll"
      :probeType="3"
      @scrollPosition="showPosition"
      :pullUpLoad="true"
        
    >
      <!-- 轮播图 -->
      <home-swiper :banners="banners" style="width:100%;"></home-swiper>
      <!-- 推荐 -->
      <recommend-view :recommends="recommends" style="height:auto;"></recommend-view>
      <!-- 热门 -->
      <feature-view></feature-view>
      <!-- 首页选项卡 -->
      <tab-control :title="tabTitle" class="tab" @tabClick="tabClick"></tab-control>
      <!-- 商品详情 -->
      <goods-list :goodsList="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="showToTop"></back-top>

    <!-- 返回顶部 -->
  </div>
</template>
<script>
import HomeSwiper from "@pages/home/childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import NavBar from "@components/common/navbar/NavBar";
import TabControl from "@components/content/tabcontrol/TabControl";
import GoodsList from "@components/content/goods/GoodsList";
import Scroll from "@components/common/scroll/Scroll";
import BackTop from "@components/content/backtop/BackTop";

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
      },
      //商品类型
      goodsType: "pop",
      showToTop: false
    };
  },
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,

    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  created() {
    // 轮播，分类
    this.getMulti();
    //商品
    this.getGoods("pop");
    this.getGoods("new");
    this.getGoods("sell");

    this.$bus.$on('itemImgLoaded',()=>{
      console.log(2);
      this.$refs.scroll.refresh()
      
    })
    
  },

  computed: {
    showGoods() {
      return this.goods[this.goodsType].list;
    }
  },

  methods: {
    /*
    网络请求相关方法
    */
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
      const page = this.goods[type].page + 1;
      getHomeGoodsData(type, page)
        .then(res => {
          // console.log(res.data.data);
          this.goods[type].list.push(...res.data.data.list);
          this.goods[type].page += 1;
          this.$refs.scroll.finishPullUp();
        })
        .catch(err => {});
    },

    /*
    事件监听相关方法
    */
    //选项卡切换数据内容
    tabClick(index) {
      switch (index) {
        case 0:
          this.goodsType = "pop";
          break;
        case 1:
          this.goodsType = "new";
          break;
        case 2:
          this.goodsType = "sell";
          break;
      }
    },
    backClick() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 500);
      // console.log(this.$refs.scroll.scroll);
    },
    showPosition(pos) {
      if (pos.y < -1000) {
        this.showToTop = true;
      } else {
        this.showToTop = false;
      }
    },
    // loadMore() {
    //   this.getGoods(this.goodsType);
    //   this.$refs.scroll.refresh();
    // }
  }
};
</script>
<style scoped>
#home {
  /* padding-top: 44px; */
  /* margin-top: 44px; */
  position: relative;
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
  /* margin-bottom: 44px; */
}
.tab {
  position: sticky;
  position: -webkit-sticky;
  position: -moz-sticky;
  position: -ms-sticky;
  /* position: -webkit-sticky; */
  top: 0px;
  /* z-index: 999; */
}
.content1 {
  margin-top: 44px;
  position: absolute;
  top: 0px;
  bottom: 50px;
  left: 0;
  right: 0;
  overflow: auto;
}
</style>