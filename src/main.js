import Vue from 'vue'
import App from './App.vue'
import './assets/scss/light.scss'
import './assets/main.scss'
import './utills/ripple'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
