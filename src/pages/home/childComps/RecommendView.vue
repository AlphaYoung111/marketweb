<template>
  <div class="recommends">
    <div v-for="item in recommends " :key="item.sort" class="recommends-item">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div class="recommends-item-title">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style scoped>
.recommends {
  display: flex;
  text-align: center; 
  width: 100%;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
}
.recommends-item {
  flex: 1;
}
.recommends-item img {
  width: 70px;
  height: 70px;
}
.recommends-item-title{
  padding-top: 5px;
}
</style>