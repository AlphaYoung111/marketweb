<template>
  <div class="car">
    <!-- 顶部导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <!-- 商品详情 -->
    <car-list></car-list>
    <!-- 底部汇总 -->
    <car-buttom-bar></car-buttom-bar>
  </div>
</template>
<script>
import NavBar from '@components/common/navbar/NavBar';

import CarList from './childComps/CarList';
import CarButtomBar from './childComps/CarButtomBar';

import {mapGetters} from 'vuex';
export default {
  name:'Car',
  components:{
    NavBar,

    CarList,
    CarButtomBar
  },
  computed:{
    // ...mapGetters(['carLength'])
    ...mapGetters({
      length:'carLength'
    })
  }
}
</script>
<style scoped>
.car{
  height: 100vh;
}
.nav-bar{
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 600;
  width: 100%;
}
</style>