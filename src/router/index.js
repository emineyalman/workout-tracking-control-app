import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store';


const routes = [
  {
    name: "HomePage",
    path: "/",
    component: () => import("@/views/Home/HomePage.vue")
  },
  {
    name: "OneDay",
    path: "/OneDay",
    component: () => import("@/views/Days/OneDay.vue")
  },
  {
    name: "TwoDay",
    path: "/TwoDay",
    component: () => import("@/views/Days/TwoDay.vue")
  },
  {
    name: "AllExercise",
    path: "/AllExercise",
    component: () => import("@/views/AllExercise.vue")
  },
  {
    name: "LoginPage",
    path: "/LoginPage",
    component: () => import("@/views/Users/LoginPage.vue")
  },
  {
    name: "SignUp",
    path: "/SignUp",
    component: () => import("@/views/Users/SignUp.vue")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, _, next) => {
  const authRequiredRoutes = ["HomePage"];
  const authNotRequiredRoutes = ["LoginPage", "SignUp"];
  const _isAuthenticated = store.getters._isAuthenticated;

  if (authNotRequiredRoutes.indexOf(to.name) > -1 && _isAuthenticated) next(false);

  if (authRequiredRoutes.indexOf(to.name) > -1) {
    if (_isAuthenticated) next();
    else next({ name: "LoginPage" });
  } else {
    next();
  }
});



export default router
