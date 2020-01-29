<template>
  <div class="car-list">
    <scroll class="car-scroll" ref="scroll">
      <list-item v-for="(item,i) in carList" :key="i" :product="item"></list-item>
    </scroll>
  </div>
</template>
<script>
import Scroll from "@components/common/scroll/Scroll";
import ListItem from './ListItem';
import {mapGetters} from 'vuex';
export default {
  name: "CarList",
  components: {
    Scroll,
    ListItem
  },
  computed:{
    ...mapGetters(['carList'])
  },
  activated(){
    this.$refs.scroll.refresh()
    
  }
};
</script>
<style scoped>
.car-list{
  height: calc(100% - 44px - 49px - 40px);

}
.car-scroll {
  height: 100%;

}
</style>