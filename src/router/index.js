import Vue from 'vue'
import Router from 'vue-router'
import RecentPage from '@/components/RecentPage'
import SettingsPage from '@/components/SettingsPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RecentPage',
      component: RecentPage
    },
    {
      path: '/settings',
      name: 'SettingsPage',
      component: SettingsPage
    }
  ]
})
