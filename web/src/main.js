import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueClipboard from 'vue-clipboard2'
import vmodal from 'vue-js-modal'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faLink, faMobile, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faGithub, faTwitter, faLink, faMobile, faEnvelopeOpen)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Buefy)
Vue.use(vmodal)
Vue.use(VueClipboard)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
