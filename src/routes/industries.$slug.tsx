import { createFileRoute, notFound } from "@tanstack/react-router";
import IndustryPage from "@/pages/industries/IndustryPage";
import { getIndustryBySlug } from "@/data/industries";

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const found = getIndustryBySlug(params.slug);
    if (!found) throw notFound();
    return { slug: found.slug, title: found.title, metaTitle: found.metaTitle, metaDescription: found.metaDescription };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const industry = loaderData;
    return {
    meta: [
      { title: industry.metaTitle },
      { name: "description", content: industry.metaDescription },
      { property: "og:title", content: industry.metaTitle },
      { property: "og:description", content: industry.metaDescription },
      { property: "og:url", content: `https://ragrafika.ru/industries/${industry.slug}` }
    ],
    links: [
      { rel: "canonical", href: `https://ragrafika.ru/industries/${industry.slug}` }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": industry.title,
            "serviceType": "Вывески и оформление",
            "provider": {
              "@type": "Organization",
              "name": "Графика",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Благовещенск",
                "addressRegion": "Амурская область",
                "addressCountry": "RU"
              }
            },
            "description": industry.metaDescription
          }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Главная",
                "item": "https://ragrafika.ru/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": industry.title,
                "item": `https://ragrafika.ru/industries/${industry.slug}`
              }
            ]
          }),
      }
    ],
    };
  },
  component: IndustryPage,
});
