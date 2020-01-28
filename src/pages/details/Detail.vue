<template>
  <div id="detail">
    <!-- 顶部导航栏 -->
    <detail-nav class="detail-nav" @titleClick="titleClick" ref="nav"></detail-nav>
    <!-- 滚动区域 -->
    <scroll class="detail-scroll-place" ref="scroll" @scrollPosition="detailScroll" :probeType="3">
      <!-- 轮播图 -->
      <detail-swiper :banners="banner"></detail-swiper>
      <!-- 基础信息 -->
      <base-info :base="goods"></base-info>
      <!-- 店铺详情 -->
      <shop-info :shop="shop"></shop-info>
      <!-- 商品详情 -->
      <goods-info :detailInfo="detailInfo" @imgLoaded="loadRefresh"></goods-info>
      <!-- 参数详情 -->
      <params-info :paramsInfo="paramsInfo" ref="ptop"></params-info>
      <!-- 评论详情 -->
      <comment-info :commentInfo="commentInfo" ref="ctop"></comment-info>
      <!-- 推荐详情 -->
      <goods-list :goodsList="recommends" ref="rtop"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="showToTop"></back-top>
    <!-- 底部购物车 -->
    <bottom-bar></bottom-bar>
  </div>
</template>
<script>
import DetailNav from "@pages/details/childComps/DetailNav";
import DetailSwiper from "./childComps/DetailSwiper";
import BaseInfo from "./childComps/BaseInfo";
import ShopInfo from "./childComps/ShopInfo";
import GoodsInfo from "./childComps/GoodsInfo";
import ParamsInfo from "./childComps/ParamsInfo";
import CommentInfo from "./childComps/CommentInfo";
import BottomBar from "./childComps/BottomBar";

import GoodsList from "@components/content/goods/GoodsList";

import Scroll from "@components/common/scroll/Scroll";
import { debounce } from "@common/utils";
import { imgListenerMixin, backTopMixin } from "@common/mixin";

import {
  getDetailData,
  Goods,
  Shop,
  GoodsParam,
  getRecommendData
} from "@network/detail";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      //轮播图
      banner: [],
      //商品详情
      goods: {},
      //店铺详情
      shop: {},
      //图片详情
      detailInfo: {},
      //参数详情
      paramsInfo: {},
      //评论
      commentInfo: {},
      //推荐
      recommends: [],
      imgListener: null,
      navTopY: [0],
      currentIndex: 0
    };
  },
  created() {
    this.iid = this.$route.params.id;
    this.getDetail();
    this.getRecommend();
  },
  components: {
    DetailNav,
    DetailSwiper,
    BaseInfo,
    ShopInfo,
    GoodsInfo,
    ParamsInfo,
    CommentInfo,
    BottomBar,
    GoodsList,

    Scroll
  },
  mounted() {},
  mixins: [imgListenerMixin, backTopMixin],
  destroyed() {
    this.$bus.$off("itemImgLoaded", this.imgListenr);
  },
  updated() {
    // this.funcTop();
  },
  methods: {
    /*
    网络请求
    */
    getDetail() {
      getDetailData(this.iid)
        .then(res => {
          // console.log(res);
          const data = res.data.result;
          //轮播
          this.banner = data.itemInfo.topImages;
          //商品详情
          this.goods = new Goods(
            data.itemInfo,
            data.columns,
            data.shopInfo.services
          );
          //店铺详情
          this.shop = new Shop(data.shopInfo);
          //图片详情
          this.detailInfo = data.detailInfo;
          //商品参数
          this.paramsInfo = new GoodsParam(
            data.itemParams.info,
            data.itemParams.rule
          );
          //评论
          if (data.rate.cRate !== 0) {
            this.commentInfo = data.rate.list[0];
          }
        })
        .catch(err => {});
    },
    getRecommend() {
      getRecommendData()
        .then(res => {
          // console.log(res);
          this.recommends = res.data.data.list;
        })
        .catch(err => {});
    },
    /*
   事件监听
   */
    loadRefresh() {
      // console.log(1);
      this.$refs.scroll.refresh();
      const refresh = debounce(() => {
        this.navTopY = [];
        this.navTopY.push(0);
        this.navTopY.push(this.$refs.ptop.$el.offsetTop - 50);
        this.navTopY.push(this.$refs.ctop.$el.offsetTop);
        this.navTopY.push(this.$refs.rtop.$el.offsetTop - 40);
        this.navTopY.push(Number.MAX_VALUE);
        // console.log(this.navTopY);
      }, 300);
      refresh();
      // console.log(this.$refs.nav);
    },
    titleClick(index) {
      // console.log(index);
      this.$refs.scroll.scrollTo(0, -this.navTopY[index], 300);
    },
    detailScroll(position) {
      let length = this.navTopY.length;
      let posy = -position.y;
      for (let i = 0; i < length - 1; i++) {
        if (
          this.$refs.nav.currentIndex !== i &&
          posy >= this.navTopY[i] && posy < this.navTopY[i + 1]
        ) {
          this.$refs.nav.currentIndex = i;
        }
      }
      this.showToTop = posy > 1000;
    }
  }
};
</script>
<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-scroll-place {
  height: calc(100% - 44px);
  overflow: hidden;
}
.detail-nav {
  background-color: #fff;
  position: relative;
  z-index: 9;
}
</style>