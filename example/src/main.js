'use strict'

import Vue from 'vue'
import App from './App'

import VueSpriteAnimator from '../../src'
Vue.use(VueSpriteAnimator)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  template: '<App/>'
}).$mount('#app')
