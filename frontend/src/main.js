import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import Axios from "axios";

// aos
import aos from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false;

Axios.defaults.baseURL = 'http://localhost:8000/api/'


new Vue({  
  router,
  created(){
    aos.init()
  },
  render: h => h(App)
}).$mount("#app");
