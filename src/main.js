import { createApp } from "vue";
import App from "./App.vue";
import Codemirror from "codemirror-editor-vue3";

const app = createApp(App);
app.use(Codemirror);
app.mount("#app");
