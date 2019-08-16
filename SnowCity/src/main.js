import Vue from 'vue'
import App from './App.vue'

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

//引入icon
import "./assets/css/iconfont.css";

//引入axios模块 并挂载到Vue上
import axios from "axios"
import qs from "qs";//配合qs模块转化post请求的参数，记得先npm install qs
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;

//引入路由
import router from "./routers/index"


Vue.config.productionTip = false

new Vue({
  el:"#app",
  router,
  render: h => h(App),
}).$mount('#app')
