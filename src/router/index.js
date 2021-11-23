import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import MoviesIndex from "../views/MoviesIndex.vue";
import MoviesShow from "../views/MoviesShow.vue";
import MoviesNew from "../views/MoviesNew.vue";
import MoviesEdit from "../views/MoviesEdit.vue";
import axios from "axios";

axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/movies", name: "MoviesIndex", component: MoviesIndex },
  { path: "/movies/new", name: "MoviesNew", component: MoviesNew },
  { path: "/movies/:id", name: "MoviesShow", component: MoviesShow },
  { path: "/movies/:id/edit", name: "MoviesEdit", component: MoviesEdit },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
