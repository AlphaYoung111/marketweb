import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('@pages/home/Home')
const Category = () => import('@pages/category/Category')
const Car = () => import('@pages/car/Car')
const Profile = () => import('@pages/profile/Profile')
const Detail = () => import('@pages/details/Detail')


Vue.use(VueRouter)

const routes = [{
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/car',
    component: Car
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:id',
    component: Detail
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
