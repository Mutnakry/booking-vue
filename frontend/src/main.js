import { createApp } from 'vue'
import App from './App.vue'
import router from './router/Index' 
import './assets/style.css'
import 'flowbite';
// import Toast from 'vue-toastification';
// import 'vue-toastification/dist/index.css'; // Import the Toast CSS


const app = createApp(App)
app.use(router)
// app.use(Toast);
app.mount('#app')

