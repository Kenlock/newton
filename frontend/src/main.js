import "@babel/polyfill";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";


Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

// aos
// import aos from 'aos'
// import 'aos/dist/aos.css'

Vue.config.productionTip = false;

new Vue({
    router,
    // created(){
    //   aos.init()
    // },
    render: (h) => h(App),
}).$mount("#app");
