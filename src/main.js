import { createApp } from 'vue'
import App from './App.vue'
import DashBoard from './components/DashBoard.vue'
const app = createApp(App)


app.component('example',DashBoard)
app.mount('#app')
