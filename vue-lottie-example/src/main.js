import Vue from "vue";
import App from "./App.vue";
import Lottie from "vue-lottie";
Vue.component("lottie", Lottie);
Vue.config.productionTip = false;
new Vue({
  render: h => h(App)
}).$mount("#app");
