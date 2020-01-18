import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/components/recommend'
import Singer from '@/components/singer'
import Rank from '@/components/rank'
import Search from '@/components/search'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'router-link-active',
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/Singer',
      name: 'Singer',
      component: Singer
    },
    {
      path: '/Rank',
      name: 'Rank',
      component: Rank
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    }
  ]
})
