import { createApp } from 'vue'
import '@/assets/style/main.css';
import '@/assets/style/fonticon.css'
import App from '@/App.vue'
import router from '@/router';
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)
app.mount('#app')
