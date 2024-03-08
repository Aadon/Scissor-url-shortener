import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../layouts/Dashboard.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import NotFound from "../views/NotFound.vue";
import UserProfile from '@/views/UserProfile.vue'
import Result from "@/views/Result.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home",
      component: Dashboard,
      children: [
        {
          path: "/home",
          name: "home",
          component: Home,
        },
        
        {
          path: "/result",
          name: "result",
          component: Result,
        },
        {
          path: "/result/:id",
          name: "userprofile",
          component: UserProfile,
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup,
    },
    { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
  ],
});

export default router;
