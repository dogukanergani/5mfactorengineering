import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";
import { faaliyetAlanlari } from "@/lib/faaliyet-alanlari";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
      images: [
        "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2000&auto=format&fit=crop",
      ],
    },
    {
      url: `${siteConfig.url}/kurumsal`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/iletisim`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/faaliyet-alanlarimiz`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = faaliyetAlanlari.map(
    (alan) => ({
      url: `${siteConfig.url}/faaliyet-alanlarimiz/${alan.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [alan.image],
    })
  );

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
    images: [post.image],
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
