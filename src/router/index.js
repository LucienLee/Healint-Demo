import Vue from 'vue'
import Router from 'vue-router'
import RecentPage from '@/pages/RecentPage'
import TrendPage from '@/pages/TrendPage'
import SettingsPage from '@/pages/SettingsPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'recent',
      component: RecentPage
    },
    {
      path: '/trend',
      name: 'trend',
      component: TrendPage
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsPage
    }
  ]
})
