<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
  name:'NavBar',
  
}
</script>
<style scoped>
.nav-bar{
  /* display:flex;
  line-height: 44px;
  height: 44px;
  text-align: center; */

  position: relative;
    z-index: 10;
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    border-bottom: 1px solid rgb(247, 240, 240);

 
}
.left,.right{
  width: 60px;
  
}
.center{
  flex: 1;
}
</style>