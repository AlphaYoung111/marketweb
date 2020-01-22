import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('@pages/home/Home')
const Category = () => import('@pages/category/Category')
const Car = () => import('@pages/car/Car')
const Profile = () => import('@pages/profile/Profile')


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
]
const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
