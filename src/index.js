import Vue from 'vue'
import App from './component/List.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
new Vue({
    el: '#app',
    template: '<App/>',
    components: {
        App
    }
})