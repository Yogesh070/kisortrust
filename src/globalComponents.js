import Vue from "vue";
//import vscol1 from "./components/customcomponents/Vscol1.vue";

Vue.component("vscol1", () =>
  import("./components/customcomponents/Vscol1.vue")
);
