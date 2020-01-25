<template>
  <div class="goods-item">
   <div class="item-place">
      <img :src="goodsItem.show.img" alt class="item-place-img" />
    <div>
      <p class="goods-item-title">{{goodsItem.title}}</p>
      <div class="price">{{'￥'+goodsItem.price}}</div>
      <div class="collect">
        <span class="star"><img src="@assets/img/common/collect.svg" alt=""></span>
        <span class="cfav">{{goodsItem.cfav}}</span>
      </div>
    </div>
   </div>
  </div>
</template>
<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style scoped>
.item-place-img{
  width: 100%;
  height: 250px;
}
.goods-item{
  /* float: left; */
  font-size: 12px;
  width: 47%;
  height: 300px;
  /* margin-left: 5px; */
  /* padding-bottom: 20px; */
  position: relative;
  /* z-index: 1; */
}
.item-place{
  width: 100%;
  /* padding-left: 5px; */

}
.goods-item-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 4px;
}

.price{
  color: var(--color-high-text);
 position: absolute;
 left:25%;
 top: 91.5%;
}
.collect{
  position: relative;
  display: flex;

}
.cfav{
  position: absolute;
  left: 63%;
  top:-1px ;
}
.star{
  width: 14px;
  height: 14px;
  display: block;
   position: absolute;
  left:55%;
  top:-2px ;
 
}
.star img{
  width: 100%;
  height: 100%;
}
</style>