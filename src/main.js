import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueSwiper from 'vue-awesome-swiper'
import store from './store/store'
import toast from '@components/common/toast'
// import 'swiper/dist/css/swiper.css'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.use(vueSwiper)
Vue.use(toast)
Vue.config.productionTip = false

//移动端300ms延迟
FastClick.attach(document.body)
//图片懒加载
Vue.use(VueLazyLoad)

Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
