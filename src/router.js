import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import PostDetails from "./views/PostDetails.vue";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/post-details/:id",
      name: "post-details",
      component: PostDetails
    },
    {
      path: "/signup",
      name: "singup",
      component: Signup
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }
  ]
});
