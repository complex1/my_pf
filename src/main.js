import Vue from 'vue'
import App from './App.vue'
import 'animate.css';

Vue.mixin({
    computed: {
        isMobile() {
            return ((window.innerWidth <= 800) && (window.innerHeight <= 600));
        }
    }
})

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')