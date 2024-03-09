import { createRouter, createWebHistory } from "vue-router";

import UserRegister from "@/views/UserRegister.vue";
import UserLogin from "@/views/UserLogin.vue";
import CatalogPage from "@/views/CatalogPage.vue";
import ResumePage from "@/views/ResumePage.vue";
import ProfilePage from "@/views/ProfilePage.vue";
import FavoritePage from "@/views/FavoritePage.vue";
import CartPage from "@/views/CartPage.vue";
import HomePage from "@/views/HomePage.vue";
import DetailsPage from "@/views/DetailsPage.vue";

const routes = [
  {
    path: "/resume",
    name: "resume",
    component: ResumePage,
  },
  {
    path: "/details/:id",
    name: "details",
    component: DetailsPage,
  },
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/catalog",
    name: "catalog",
    component: CatalogPage,
  },
  {
    path: "/login",
    name: "login",
    component: UserLogin,
  },
  {
    path: "/register",
    name: "register",
    component: UserRegister,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfilePage,
  },
  {
    path: "/favorite",
    name: "favorite",
    component: FavoritePage,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
