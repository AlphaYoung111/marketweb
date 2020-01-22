<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-show="!isShow">
      <slot name="item-img"></slot>
    </div>
    <div v-show="isShow">
      <slot name="item-img-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-title"></slot>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // isShow: false
    };
  },
  computed: {
    isShow() {
      return this.$route.path === this.link;
    },
    activeStyle() {
      return this.isShow ? { color: this.activeColor } : {};
    }
  },
  props: {
    link: String,
    activeColor: {
      type: String,
      default: "red"
    }
  },
  methods: {
    itemClick() {
      // this.$router.replace(this.link)
      // console.log(this.$route);

      if (this.link != this.$router.history.current.path) {
        this.$router.replace(this.link);
      }
    }
  }
};
</script>
<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  /* display: block; */
  vertical-align: middle;
  margin-bottom: 2px;
  margin-top: 4px;
}
.active {
  color: rgb(216, 138, 138);
}
</style>