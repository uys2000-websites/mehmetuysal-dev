import type { RouteRecordRaw } from "vue-router";

export const routes = [
  {
    path: "/",
    name: "Layout",
    component: () => import("../layouts/Layout.vue"),
    meta: { title: "Base" },
    children: [
      {
        path: "",
        name: "HomeView",
        component: () => import("../views/HomeView.vue"),
        meta: { title: "Home" },
      },
      {
        path: "links",
        name: "LinksView",
        component: () => import("../views/LinksView.vue"),
        meta: { title: "Apps" },
      },
      {
        path: "apps",
        name: "AppsView",
        component: () => import("../views/AppsView.vue"),
        meta: { title: "Apps" },
      },
    ],
  },
] as RouteRecordRaw[];
