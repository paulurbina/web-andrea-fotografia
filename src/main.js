// import '@babel/polyfill'
// import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'


// veevalidate
import {
    ValidationObserver,
    ValidationProvider,
    extend,
    localize
} from "vee-validate";

import es from "vee-validate/dist/locale/es.json";
import * as rules from "vee-validate/dist/rules";

// Install VeeValidate rules and localization
Object.keys(rules).forEach(rule => {
    extend(rule, rules[rule]);
});

localize("es", es);

// Install VeeValidate components globally
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);


// bootstrap icons
import { BootstrapVueIcons } from 'bootstrap-vue'
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')