import Vue from 'vue'
import App from './App.vue'

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

//引入axios模块 并挂载到Vue上
import axios from "axios"
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';//全局更改
Vue.prototype.$axios = axios;

//引入路由
import router from "./routers/index"


Vue.config.productionTip = false

new Vue({
  el:"#app",
  router,
  render: h => h(App),
}).$mount('#app')
