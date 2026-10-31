import { createFileRoute } from "@tanstack/react-router";
import Transport from "@/pages/services/Transport";

export const Route = createFileRoute("/transport")({
  head: () => ({
    meta: [
      { title: "Брендирование транспорта в Благовещенске | Оклейка авто пленкой | Графика" },
      { name: "description", content: "Брендирование транспорта в Благовещенске. Частичная оклейка коммерческих авто виниловой пленкой. Работаем по всей Амурской области. Профессиональный монтаж, долговечные материалы." },
      { name: "keywords", content: "брендирование транспорта, брендирование транспорта Благовещенск, оклейка авто пленкой, реклама на транспорте, оклейка машин, Свободный" },
      { property: "og:title", content: "Брендирование транспорта в Благовещенске | Оклейка авто" },
      { property: "og:description", content: "Частичная оклейка коммерческих авто виниловой пленкой. Профессиональный монтаж." },
      { property: "og:url", content: "https://ragrafika.ru/transport" }
    ],
    links: [
      { rel: "canonical", href: "https://ragrafika.ru/transport" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Брендирование транспорта",
            "serviceType": "Оклейка коммерческих авто виниловой пленкой",
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
            "description": "Брендирование коммерческого транспорта в Благовещенске. Оклейка авто виниловой пленкой, реклама на транспорте.",
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
                "name": "Брендирование транспорта",
                "item": "https://ragrafika.ru/transport"
              }
            ]
          }),
      }
    ],
  }),
  component: Transport,
});
