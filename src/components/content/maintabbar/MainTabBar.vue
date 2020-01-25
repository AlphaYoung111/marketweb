<template>
<div class="container">
   <tab-bar>
      <tab-bar-item link="/home" >
        <img slot="item-img" src="@assets/img/tabbarIcon/home.png" alt />
        <img slot="item-img-active" src="@assets/img/tabbarIcon/home1.png" alt />
        <div slot="item-title">首页</div>
      </tab-bar-item>
      <tab-bar-item link="/category">
        <img slot="item-img" src="@assets/img/tabbarIcon/class.png" alt />
        <img slot="item-img-active" src="@assets/img/tabbarIcon/class1.png" alt />

        <div slot="item-title">分类</div>
      </tab-bar-item>
      <tab-bar-item link="/car">
        <img slot="item-img" src="@assets/img/tabbarIcon/car.png" alt />
        <img slot="item-img-active" src="@assets/img/tabbarIcon/car1.png" alt />

        <div slot="item-title">购物车</div>
      </tab-bar-item>
      <tab-bar-item link="/profile">
        <img slot="item-img" src="@assets/img/tabbarIcon/user.png" alt />
        <img slot="item-img-active" src="@assets/img/tabbarIcon/user1.png" alt />

        <div slot="item-title">个人中心</div>
      </tab-bar-item>
    </tab-bar>
    <!-- <router-view></router-view> -->
    </div>
</template>
<script>
import TabBar from "@components/common/tabbar/TabBar";
import TabBarItem from "@components/common/tabbar/TabBarItem";
export default {
  components:{
     TabBar,
    TabBarItem
  }
}
</script>
<style>
.container{
  z-index: 100;
}
</style>
