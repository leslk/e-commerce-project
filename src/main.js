import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/reboot.scss'
import './styles/element/index.scss'
import ElementPlus from 'element-plus'
// Import the fontawesome core
import { library } from '@fortawesome/fontawesome-svg-core'

// Import font awesome icon component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import specific icons
import { fas } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import router from './router'

// Add icons to the library
library.add(fas)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.mount('#app')
