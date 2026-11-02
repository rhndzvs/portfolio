import type { MetadataRoute } from "next";
import { getAllProjects } from "@/content/projects";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/projects", "/about", "/contact"];
  const projectRoutes = getAllProjects().map(
    (project) => `/projects/${project.slug}`,
  );

  return [...routes, ...projectRoutes].map((route) => ({
    url: new URL(route, siteUrl).toString(),
  }));
}
