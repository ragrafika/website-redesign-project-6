import { createFileRoute } from "@tanstack/react-router";
import Banners from "@/pages/services/Banners";

export const Route = createFileRoute("/banners")({
  head: () => ({
    meta: [
      { title: "Баннеры и штендеры в Благовещенске | Широкоформатная печать | Графика" },
      { name: "description", content: "Изготовление баннеров и штендеров в Благовещенске. Широкоформатная печать, Roll-up стенды, X-баннеры, мобильные рекламные конструкции. Работаем по всей Амурской области." },
      { name: "keywords", content: "баннеры, штендеры, баннеры Благовещенск, roll up стенды, широкоформатная печать, X-баннеры, Свободный" },
      { property: "og:title", content: "Баннеры и штендеры в Благовещенске" },
      { property: "og:description", content: "Широкоформатная печать, Roll-up стенды, мобильные рекламные конструкции." },
      { property: "og:url", content: "https://ragrafika.ru/banners" }
    ],
    links: [
      { rel: "canonical", href: "https://ragrafika.ru/banners" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Баннеры и штендеры",
            "serviceType": "Широкоформатная печать и мобильные конструкции",
            "provider": {
              "@type": "Organization",
              "name": "Графика",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Благовещенск",
                "addressRegion": "Амурская область",
                "addressCountry": "RU"
              },
              "areaServed": {
                "@type": "State",
                "name": "Амурская область"
              }
            },
            "description": "Изготовление баннеров и штендеров в Благовещенске. Широкоформатная печать, Roll-up стенды, X-баннеры.",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock"
            }
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
                "name": "Баннеры и штендеры",
                "item": "https://ragrafika.ru/banners"
              }
            ]
          }),
      }
    ],
  }),
  component: Banners,
});
