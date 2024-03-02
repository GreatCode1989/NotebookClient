// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@fortawesome/fontawesome-free/css/all.css' 
import './assets/css/main.css'





window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = true;

library.add(faGithub)

createApp(App)
  .use(store)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')


