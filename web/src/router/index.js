import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import APropos from "../views/About.vue"; 
import Products from "../views/Products.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/apropos",
    name: "APropos",
    component: APropos
  },
  {
    path: "/produits",
    name: "Products",
    component: Products
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
