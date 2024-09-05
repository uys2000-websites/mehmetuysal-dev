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
        meta: {
          title: "Home",
          lastmod: "2024-09-04",
          priority: "0.5",
          changefreq: "never",
        },
      },
      {
        path: "links",
        name: "LinksView",
        component: () => import("../views/LinksView.vue"),
        meta: {
          title: "Apps",
          lastmod: "2024-09-04",
          priority: "0.8",
          changefreq: "never",
        },
      },
      {
        path: "apps",
        name: "AppsView",
        component: () => import("../views/AppsView.vue"),
        meta: {
          title: "Apps",
          lastmod: "2024-09-04",
          priority: "0.8",
          changefreq: "never",
        },
      },
    ],
  },
] as RouteRecordRaw[];
