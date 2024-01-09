import { createRouter, createWebHistory } from "vue-router";
import ProductList from "../views/ProductList.vue";
import UserRegister from "@/views/UserRegister.vue";
import ProductFavorites from "../views/ProductFavorites.vue";
import ProductDetails from "@/views/ProductDetails.vue";
import UserLogin from "@/views/UserLogin.vue";



const routes = [
  {
    path: "/",
    name: "list",
    component: ProductList,
  },
  {
    path: "/user",
    name: "user",
    component: UserRegister,
  },
  {
    path: "/page",
    name: "page",
    component: ProductFavorites,
  },
  {
    path: "/details/:id",
    name: "details",
    component: ProductDetails,
  },
  {
    path: "/login",
    name: "login",
    component: UserLogin,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
