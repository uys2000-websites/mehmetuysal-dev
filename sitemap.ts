import { appendFileSync, writeFileSync } from "node:fs";
import { RouteRecordRaw } from "vue-router";

const sitemapPath = "./public/sitemap.xml";
const baseUrl = "https://mehmetuysal.dev";
const getRoutes = function (routes: RouteRecordRaw[], parent: string = "") {
  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    getRoute(route, parent);
  }
};

const getRoute = function (route: RouteRecordRaw, parent: string) {
  if (route.children?.length) getRoutes(route.children, parent + route.path);
  else {
    console.log(route.name, parent + route.path);
    const url = baseUrl + parent + route.path;
    appendFileSync(sitemapPath, "  <url>\n");
    appendFileSync(sitemapPath, `    <loc>${url}</loc>\n`);
    if (route.meta?.lastmod)
      appendFileSync(
        sitemapPath,
        `    <lastmod>${route.meta.lastmod}</lastmod>\n`
      );
    if (route.meta?.changefreq)
      appendFileSync(
        sitemapPath,
        `    <changefreq>${route.meta.changefreq}</changefreq>\n`
      );
    if (route.meta?.priority)
      appendFileSync(
        sitemapPath,
        `    <priority>${route.meta.priority}</priority>\n`
      );
    appendFileSync(sitemapPath, "  </url>\n");
  }
};

(async () => {
  if (!process.argv[2]) return;

  const routePath = process.argv[2];

  writeFileSync(
    sitemapPath,
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`
  );
  const router = (await import(routePath)) as { routes: RouteRecordRaw[] };
  getRoutes(router.routes);
  appendFileSync(sitemapPath, `</urlset>\n`);
})();
