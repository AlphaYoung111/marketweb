<template>
  <div class="tab-control">
    <div
      v-for="(item,index) in title"
      :key="item"
      class="tab-control-item"
      @click="indexChange(index)"
    >
      <span :class="{active:index===currentIndex}">{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabControl",
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    indexChange(index) {
      this.currentIndex = index;
    }
  },
  props: {
    title: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  line-height: 40px;
  height: 40px;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 0px 10px 8px;
}
.active {
  border-bottom: 3px solid var(--color-tint);
  color: var(--color-high-text);
}
</style>