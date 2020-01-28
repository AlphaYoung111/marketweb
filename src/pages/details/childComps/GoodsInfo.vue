<template>
    <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start">
      </div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="item in detailInfo.detailImage[0].list" :src="item" alt="" :key="item" @load="imgLoad">
    </div>
  </div>
</template>
<script>
export default {
  name:'GoodsInfo',
  props:{
    detailInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data() {
    return {
      count:0,
      imgListLength:0
    }
  },
  /*
  这里监听图片加载完成使用的是另一种方法，这里的思路是,新建一个计数器。
  通过watch方法去监听传过来的detailInfo对象中的的图片数组是否都在家完毕，
  然后图片加载完成后触发的load函数，通过判断计数器和图片数组的长度一致时，在向外提交时事件
  */
  watch: {
    detailInfo(){
      this.imgListLength=this.detailInfo.detailImage[0].list.length
    }
  },
  methods:{
    imgLoad(){
      if(++this.count ===this.imgListLength){
        this.$emit('imgLoaded')
      }
    }
  }
}
</script>
<style scoped>
  .goods-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-desc {
    padding: 0 15px;
  }
  .info-desc .start, .info-desc .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }
  .info-desc .start {
    float: left;
  }
  .info-desc .end {
    float: right;
  }
  .info-desc .start::before, .info-desc .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }
  .info-desc .end::after {
    right: 0;
  }
  .info-desc .desc {
    padding: 15px 0;
    font-size: 14px;
  }
  .info-key {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }
  .info-list img {
    width: 100%;
  }
</style>