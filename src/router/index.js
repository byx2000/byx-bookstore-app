import Vue from 'vue'
import VueRouter from 'vue-router'

const HomePage = () => import('../views/HomePage/HomePage.vue')
const AboutPage = () => import('../views/AboutPage/AboutPage.vue')
const CategoryPage = () => import('../views/CategoryPage/CategoryPage.vue')
const RankPage = () => import('../views/RankPage/RankPage.vue')
const ProfilePage = () => import('../views/ProfilePage/ProfilePage.vue')
const SearchResultPage = () => import('../views/SearchResultPage/SearchResultPage.vue')
const BookDetailPage = () => import('../views/BookDetailPage/BookDetailPage.vue')
const ReadPage = () => import('../views/ReadPage/ReadPage.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: HomePage
  },
  {
    path: '/category',
    component: CategoryPage
  },
  {
    path: '/rank',
    component: RankPage
  },
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '/profile',
    component: ProfilePage
  },
  {
    path: '/search',
    component: SearchResultPage
  },
  {
    path: '/detail',
    component: BookDetailPage
  },
  {
    path: '/read',
    component: ReadPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 解决重复点击路由的报错问题
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
