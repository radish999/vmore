import Vue from 'vue'
import one from '../pages/two/two.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#two',
  render: h => h(one)
})
