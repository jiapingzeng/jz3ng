import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ScrollSpy from 'vue2-scrollspy'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('fa-icon', FontAwesomeIcon)
Vue.use(ScrollSpy)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
