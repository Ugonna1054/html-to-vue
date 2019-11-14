import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import "./assets/vendor/fullcalendar/fullcalendar.js";
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbvue/build/css/mdb.css";
// window.$ = require("jquery");
// window.jQuery = require("jquery");

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
