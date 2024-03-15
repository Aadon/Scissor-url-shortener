import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../layouts/Dashboard.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import NotFound from "../views/NotFound.vue";
import MyUrls from "@/views/MyUrls.vue";
import Result from "@/views/Result.vue";
import Pricing from "@/views/Pricing.vue";
import Features from "@/views/Features.vue";
import Analytics from "@/views/Analytics.vue";
import Faqs from "@/views/Faqs.vue";
import UrlsList from "@/views/UrlsList.vue";

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
          path: "/myurls",
          name: "myurls",
          component: MyUrls
        },
        
        {
          path: "/pricing",
          name: "pricing",
          component: Pricing
        },
        {
          path: "/features",
          name: "features",
          component: Features
        },
        {
          path: "/analytics",
          name: "analytics",
          component: Analytics
        },
        {
          path: "/faqs",
          name: "faqs",
          component: Faqs
        }, 
        {
          path: "/result",
          name: "result",
          component: Result,
        },
       {
        path: '/result/:id',
        name: 'urlslist',
        component: UrlsList
       }
        
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
    { path: "/:pathMatch(.*)*", 
      name: "notfound", 
     component: NotFound },
  ],
});

export default router;
