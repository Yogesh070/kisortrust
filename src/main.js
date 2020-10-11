import Vue from "vue";
import App from "./App.vue";
import Vuesax from "vuesax";
import "./globalComponents";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserSecret);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

import "vuesax/dist/vuesax.css"; //Vuesax styles
Vue.use(Vuesax);
Vue.config.productionTip = true;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
