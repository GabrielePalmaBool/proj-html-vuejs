import { createApp } from 'vue'
import App from './App.vue'

//importo il file router js
import { router } from './router';

//utilizzo il file nell'applicazione
createApp(App).use(router).mount('#app')
