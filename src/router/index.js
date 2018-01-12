import Vue from 'vue'
import Router from 'vue-router'
import RecentPage from '@/components/RecentPage'
import SettingsPage from '@/components/SettingsPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'recent',
      component: RecentPage
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsPage
    }
  ]
})
