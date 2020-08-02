import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Axios from 'axios'

const moment =require('moment')
require('moment/locale/th');
moment.locale('th')
window.moment = moment;
Vue.use(require('vue-moment'),{moment,});

Vue.config.productionTip = false

const baseURL = 'http://127.0.0.1:8000'
window.axios = new Axios.create({
  baseURL: baseURL,
  timeout: 60000
})
if (localStorage.getItem('access_token')) {
  window.axios.defaults.headers.common['Authorization'] = `Token ${localStorage.getItem('access_token')}`;
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
