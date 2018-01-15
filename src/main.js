// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import fontawesome from '@fortawesome/fontawesome'
import {
  faCog, faSortDown, faQuestionCircle, faSpinner,
  faBatteryEmpty, faBatteryHalf, faBatteryFull,
  faSmile, faMeh, faFrown
} from '@fortawesome/fontawesome-free-solid'

import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

Vue.config.productionTip = false

fontawesome.library.add(
  faCog, faSortDown, faQuestionCircle, faSpinner,
  faBatteryEmpty, faBatteryHalf, faBatteryFull,
  faSmile, faMeh, faFrown
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
