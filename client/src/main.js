import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Vue2TouchEvents from "vue2-touch-events";
import MainComponent from "./components/MainComponent";
import DeleteRowComponent from "./components/DeleteRowComponent";
import EditRowComponent from "./components/EditRowComponent";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vue2TouchEvents);

const routes = [
  { path: "/", component: MainComponent },
  { name: "delete", path: "/:id", component: DeleteRowComponent, props: true },
  { name: "edit", path: "/:id", component: EditRowComponent, props: true }
];

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
