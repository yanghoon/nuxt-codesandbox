// import "core-js/stable";
import Vue from "vue";
import CoreuiVue from "@coreui/vue";
// import App from './App'
// import router from './router/index'
import { iconsSet as icons } from "@/assets/icons/icons.js";
// import store from './store'

Vue.use(CoreuiVue);
Vue.use((vm, options) => {
  vm.options.icons = icons;
});
// Vue.prototype.$log = console.log.bind(console)

// new Vue({
//   el: '#app',
//   router,
//   store,
//   //CIcon component documentation: https://coreui.io/vue/docs/components/icon
//   icons,
//   template: '<App/>',
//   components: {
//     App
//   }
// })
