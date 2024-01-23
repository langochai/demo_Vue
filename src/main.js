import { createApp } from "vue";
import App from "./App.vue";
import DashBoard from "./components/DashBoard.vue";
import Food from "./components/Food.vue";
import Animal from "./components/Animal.vue";
import { createRouter, createWebHistory } from "vue-router";

const app = createApp(App);
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/food", component: Food },
        { path: "/animal", component: Animal },
    ],
});
app.use(router)
// app.component("example", DashBoard);
app.mount("#app");
