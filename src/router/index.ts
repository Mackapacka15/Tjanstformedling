import { createRouter, createWebHistory } from "vue-router";
import SortList from "../components/SortList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/SearchResult",
      name: "SearchResult",
      component: SortList,
    },
    {
      path: "/CreateListing",
      name: "CreateListing",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/PersonForm.vue"),
    },
    {
      path: "/",
      name: "MainPage",
      component: () => import("../components/MainPage.vue"),
    },
  ],
});

export default router;