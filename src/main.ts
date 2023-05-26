import { createApp } from 'vue'
import '@/assets/style/main.css';
import '@/assets/style/fonticon.css'
import App from '@/App.vue'
import router from '@/router';
import { createPinia } from 'pinia'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faList,faMoon,faBars } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faList,faMoon,faBars)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)
app.mount('#app')
