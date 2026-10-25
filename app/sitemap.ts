import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";
import { projects } from "@/lib/projects";
import { services } from "@/lib/servicesData";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: new Date(siteConfig.lastUpdated),
      changeFrequency: "yearly",
      priority: 1,
      images: [
        "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2000&auto=format&fit=crop",
      ],
    },
    {
      url: `${siteConfig.url}/kurumsal`,
      lastModified: new Date(siteConfig.lastUpdated),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/iletisim`,
      lastModified: new Date(siteConfig.lastUpdated),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/faaliyet-alanlarimiz`,
      lastModified: new Date(siteConfig.lastUpdated),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: new Date(siteConfig.lastUpdated),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.flatMap((service) => [
    {
      url: `${siteConfig.url}/faaliyet-alanlarimiz/${service.slug}`,
      lastModified: new Date(siteConfig.lastUpdated),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [service.image],
    },
    ...service.subServices.map((sub) => ({
      url: `${siteConfig.url}/faaliyet-alanlarimiz/${service.slug}/${sub.slug}`,
      lastModified: new Date(siteConfig.lastUpdated),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: [sub.image],
    })),
  ]);

  const projectRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteConfig.url}/projeler`,
      lastModified: new Date(siteConfig.lastUpdated),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...projects.map((project) => ({
      url: `${siteConfig.url}/projeler/${project.slug}`,
      lastModified: new Date(project.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      images: [project.image],
    })),
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
    images: [post.image],
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...blogRoutes];
}
