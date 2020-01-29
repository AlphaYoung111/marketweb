<template>
  <div class="cart-bottom-bar">
    <div class="total-check">
      <!--      <img src="~assets/img/cart/tick.svg" alt="">-->
      <check-button :isCheck="isSelectAll" @click.native="selectAllClick"></check-button>
      <span>全选</span>
    </div>
    <div class="total-price">
      <span>合计：￥{{totalPrice}}</span>
    </div>
    <div class="calc">去结算({{calcCount}})</div>
  </div>
</template>
<script>
import CheckButton from "@components/content/checkbutton/CheckButton";

export default {
  name: "CarButtomBar",
  components: {
    CheckButton
  },
  computed: {
    //总价
    totalPrice() {
      return this.$store.state.carList
        .filter(item => {
          return item.isCheck;
        })
        .reduce((pre, item) => {
          return pre + item.newPrice * item.count;
        }, 0)
        .toFixed(2);
    },
    //商品总数
    calcCount() {
      return this.$store.state.carList.filter(item => item.isCheck).length;
    },
    //
    isSelectAll() {
      if(this.$store.state.carList.length===0) return false
      return !(this.$store.state.carList.find(item => !item.isCheck));
    }
  },
  methods:{
    selectAllClick(){
      if(this.isSelectAll){
        this.$store.state.carList.forEach(item => item.isCheck=false)
      }else{
        this.$store.state.carList.forEach(item=> item.isCheck=true)
      }
  }
  }
}
</script>
<style scoped>
.cart-bottom-bar {
  width: 100%;
  height: 40px;
  position: fixed;
  bottom: 49px;
  background: #eeeeee;
  display: flex;
  line-height: 40px;
  text-align: center;
}
.total-check {
  width: 25%;
  display: flex;
  justify-content: center;
}
.total-price {
  width: 50%;
}
.calc {
  width: 25%;
  background-color: #ff5028;
  color: #fff;
}
</style>