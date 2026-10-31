import { createFileRoute } from "@tanstack/react-router";
import Signage from "@/pages/services/Signage";

export const Route = createFileRoute("/signage")({
  head: () => ({
    meta: [
      { title: "Виды вывесок в Благовещенске | Объемные буквы, световые короба | Графика" },
      { name: "description", content: "Изготовление и установка вывесок в Благовещенске. Объемные буквы, световой короб, световая вывеска для магазина. Производство в Амурской области. Бесплатный дизайн-проект. Гарантия до 3 лет." },
      { name: "keywords", content: "заказать вывеску, заказать вывеску Благовещенск, объемные буквы, световой короб, световая вывеска, световые буквы, световая реклама, стенды, вывеска в магазин, вывеска Благовещенск, вывеска Свободный" },
      { property: "og:title", content: "Виды вывесок в Благовещенске | Объемные буквы и световые короба" },
      { property: "og:description", content: "Изготовление световых вывесок в Благовещенске. Бесплатный дизайн-проект. Гарантия до 3 лет." },
      { property: "og:url", content: "https://ragrafika.ru/signage" }
    ],
    links: [
      { rel: "canonical", href: "https://ragrafika.ru/signage" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Изготовление вывесок и световых коробов",
            "serviceType": "Вывески и световая реклама",
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
            "description": "Изготовление и установка вывесок в Благовещенске. Объемные буквы, световые короба, световая реклама.",
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
                "name": "Вывески и световые короба",
                "item": "https://ragrafika.ru/signage"
              }
            ]
          }),
      }
    ],
  }),
  component: Signage,
});
