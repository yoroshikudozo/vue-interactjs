import Vue, { VueConstructor } from "vue";
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import App from "~entry";
import plugin from "../src/index";

Vue.use<VueConstructor>(plugin);

Vue.config.productionTip = false;

new Vue({
  // NOTE: if you need to inject as option, you can set here!
  // plugin,
  render: h => h(App)
}).$mount("#app");
