import { createRouter, createWebHistory, useRoute } from "vue-router";
import SortList from "../components/SortList.vue";
import { getAuth, onAuthStateChanged } from "@firebase/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/searchresult",
      name: "SearchResult",
      component: SortList,
    },
    {
      path: "/createlisting",
      name: "CreateListing",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/PersonForm.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/mypage",
      name: "mypage",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/MyPage.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/",
      name: "MainPage",
      component: () => import("../components/MainPage.vue"),
    },
    {
      path: "/login",
      name: "LogIn",
      component: () => import("../components/login/LoginPage.vue"),
    },
    {
      path: "/createaccount",
      name: "CreateAccount",
      component: () => import("../components/login/CreateAccount.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: () => import("../components/404.vue"),
    },
  ],
});
const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("You dont have acces");
      next("/");
    }
  } else next();
});

export default router;
