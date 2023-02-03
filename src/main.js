import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from "pinia-plugin-persistedstate"
import './assets/scss/main.scss'
import './styles/element/index.scss'
import ElementPlus from 'element-plus'
// Import the fontawesome core
import { library } from '@fortawesome/fontawesome-svg-core'

// Import font awesome icon component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import specific icons
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

import App from './App.vue'
import router from './router'

// Add icons to the library
library.add(fas, faFacebook, faTwitter, faInstagram)

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedState)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(ElementPlus)
app.use(pinia)
app.use(router)

app.mount('#app')
