import Vue from "vue";
import App from "./App.vue";
import Vuesax from "vuesax";
import "./globalComponents";

import "vuesax/dist/vuesax.css"; //Vuesax styles
Vue.use(Vuesax);
Vue.config.productionTip = true;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
