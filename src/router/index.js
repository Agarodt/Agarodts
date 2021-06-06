import { createWebHistory, createRouter } from "vue-router"
import ListView from "@/components/ListView.vue"
import SingleView from "@/components/SingleView.vue"

const routes = [
  {
    path: "/",
    name: "List",
    component: ListView,
  },
  {
   path: "/contact/:id",
   name: "Contact",
  component: SingleView, }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;