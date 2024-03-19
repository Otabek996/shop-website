import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Remix icon
import "remixicon/fonts/remixicon.css";

createApp(App).use(router).mount("#app");
