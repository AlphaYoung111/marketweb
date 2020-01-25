<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from '@better-scroll/core'
  // import Pullup from '@better-scroll/pull-up'
  // BScroll.use(Pullup)
  export default {
    name: "Scroll",
    data() {
      return {
        scroll: null
      }
    },
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default: false
      }
    },
    mounted() {
      this.scroll = new BScroll('.wrapper',{
        click:true,
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad
      })
      // this.scroll.on('scroll',(position) => {
      //   this.$emit('scrollPosition',position)
      // })
      // this.scroll.on('pullingUp', () => {
      //   this.$emit('pullingUp')
      // })
    },
    methods:{
      // refresh(){
      //   this.scroll && this.scroll.refresh()
      // }
    }
  }
</script>

<style scoped>
</style>