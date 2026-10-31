import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import React from "react";
import { renderToString } from "react-dom/server";
import { createServer } from "vite";

const projectRoot = path.dirname(fileURLToPath(import.meta.url)).replace(/\/scripts$/, "");
const outputRoot = path.join(projectRoot, "dist/public");
const basePath = (process.env.BASE_PATH || "/").replace(/\/+$/, "");
const routerBase = basePath;
const publicOrigin = (process.env.PUBLIC_SITE_URL || "").trim().replace(/\/+$/, "");

process.env.PORT ||= "5000";
process.env.BASE_PATH ||= "/";
process.env.NODE_ENV ||= "production";

const pages = [
  {
    path: "/",
    title: "Meditazioni guidate per il subconscio | Mind Haven",
    description:
      "Meditazioni guidate in italiano per esplorare i tuoi schemi e coltivare nuove abitudini. Non suoni binaurali: una voce accompagna la pratica.",
  },
  {
    path: "/sonno",
    title: "Meditazioni guidate per dormire in italiano | Mind Haven",
    description:
      "Meditazioni guidate in italiano per accompagnare il riposo e creare una routine serale più calma, senza fretta e con il tuo ritmo.",
  },
  {
    path: "/respiro",
    title: "Respirazione guidata in italiano per la calma | Mind Haven",
    description:
      "Trova esercizi di respirazione guidata in italiano e pratiche brevi per fare una pausa nella giornata. Ascolta quando vuoi, con calma e al tuo ritmo, oggi.",
  },
  {
    path: "/focus",
    title: "Meditazioni guidate per concentrarsi in italiano | Mind Haven",
    description:
      "Meditazioni guidate in italiano per allenare l’attenzione durante studio e lavoro. Una voce accompagna la pratica: non sono suoni binaurali.",
  },
  {
    path: "/ricerca-meditazione-guidata",
    title: "Meditazione guidata: benefici, studi e limiti | Mind Haven",
    description:
      "Una guida basata su studi e fonti scientifiche sui benefici possibili della meditazione guidata, sui limiti delle prove e sul significato di “riprogrammare il subconscio”.",
  },
];

const escapeAttribute = (value) =>
  value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");

const buildUrl = (route) => {
  const routePath = route === "/" ? "/" : `${route}/`;
  return publicOrigin ? `${publicOrigin}${basePath}${routePath}` : "";
};

const updateMeta = (html, pattern, replacement) =>
  html.replace(pattern, replacement);

const vite = await createServer({
  configFile: path.join(projectRoot, "vite.config.ts"),
  root: projectRoot,
  appType: "custom",
  logLevel: "error",
  optimizeDeps: { noDiscovery: true, include: [], entries: [] },
  server: { middlewareMode: true, hmr: false },
});

try {
  const [{ default: Home }, { default: Intent }, { default: Evidence }, { Router }] = await Promise.all([
    vite.ssrLoadModule("/src/pages/home.tsx"),
    vite.ssrLoadModule("/src/pages/intent.tsx"),
    vite.ssrLoadModule("/src/pages/evidence.tsx"),
    import("wouter"),
  ]);
  const template = await readFile(path.join(outputRoot, "index.html"), "utf8");
  const sitemapEntries = [];

  for (const page of pages) {
    const requestedPath = `${routerBase}${page.path}` || "/";
    const component =
      page.path === "/"
        ? React.createElement(Home)
        : page.path === "/ricerca-meditazione-guidata"
          ? React.createElement(Evidence)
        : React.createElement(Intent);
    const app = React.createElement(
      Router,
      { base: routerBase, ssrPath: requestedPath },
      component,
    );
    const markup = renderToString(app);
    const url = buildUrl(page.path);
    let html = template.replace(
      /<div id="root"><\/div>/,
      `<div id="root">${markup}</div>`,
    );

    html = updateMeta(html, /<title>[\s\S]*?<\/title>/, `<title>${escapeAttribute(page.title)}</title>`);
    html = updateMeta(
      html,
      /<meta name="description" content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${escapeAttribute(page.description)}" />`,
    );
    html = updateMeta(
      html,
      /<meta name="robots" content="[^"]*"\s*\/?>/,
      `<meta name="robots" content="${publicOrigin ? "index, follow" : "noindex, follow"}" />`,
    );
    html = updateMeta(
      html,
      /<meta property="og:title" content="[^"]*"\s*\/?>/,
      `<meta property="og:title" content="${escapeAttribute(page.title)}" />`,
    );
    html = updateMeta(
      html,
      /<meta property="og:description" content="[^"]*"\s*\/?>/,
      `<meta property="og:description" content="${escapeAttribute(page.description)}" />`,
    );
    html = updateMeta(
      html,
      /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
      `<meta name="twitter:title" content="${escapeAttribute(page.title)}" />`,
    );
    html = updateMeta(
      html,
      /<meta name="twitter:description" content="[^"]*"\s*\/?>/,
      `<meta name="twitter:description" content="${escapeAttribute(page.description)}" />`,
    );

    if (publicOrigin && url) {
      const canonical = `<link rel="canonical" href="${escapeAttribute(url)}" />`;
      const ogUrl = `<meta property="og:url" content="${escapeAttribute(url)}" />`;
      const imageUrl = `${publicOrigin}${basePath}/images/hero-forest.jpg`;
      const imageMeta = `<meta property="og:image" content="${escapeAttribute(imageUrl)}" />`;
      const twitterImageMeta = `<meta name="twitter:image" content="${escapeAttribute(imageUrl)}" />`;
      const schema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: page.title,
        description: page.description,
        url,
        inLanguage: "it-IT",
        isPartOf: {
          "@type": "WebSite",
          name: "Mind Haven",
          url: `${publicOrigin}${basePath}/`,
        },
      };
      html = html.replace("</head>", `${canonical}${ogUrl}${imageMeta}${twitterImageMeta}<script type="application/ld+json">${JSON.stringify(schema)}</script></head>`);
      sitemapEntries.push(
        `  <url><loc>${url}</loc><changefreq>weekly</changefreq></url>`,
      );
    }

    const relativePage = page.path === "/" ? "" : page.path.replace(/^\//, "");
    const destination = relativePage
      ? path.join(outputRoot, relativePage, "index.html")
      : path.join(outputRoot, "index.html");
    await mkdir(path.dirname(destination), { recursive: true });
    await writeFile(destination, html);
  }

  const robotsPath = path.join(outputRoot, "robots.txt");
  const robots = publicOrigin
    ? `User-agent: *\nAllow: /\nSitemap: ${publicOrigin}${basePath}/sitemap.xml\n`
    : "User-agent: *\nAllow: /\n";
  await writeFile(robotsPath, robots);

  if (publicOrigin) {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries.join("\n")}\n</urlset>\n`;
    await writeFile(path.join(outputRoot, "sitemap.xml"), sitemap);
  }
} finally {
  await vite.close();
}
