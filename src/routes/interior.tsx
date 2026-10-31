import { createFileRoute } from "@tanstack/react-router";
import Interior from "@/pages/services/Interior";

export const Route = createFileRoute("/interior")({
  head: () => ({
    meta: [
      { title: "Интерьерная реклама в Благовещенске | Стенды, навигация, оформление офисов | Графика" },
      { name: "description", content: "Изготовление интерьерной рекламы в Благовещенске: информационные стенды, объемные буквы для офиса, навигация, световое оборудование. Работаем по всей Амурской области. Под ключ от дизайна до монтажа." },
      { name: "keywords", content: "стенды, стенды Благовещенск, информационные стенды, интерьерная реклама, оформление офиса, навигация, офис Благовещенск, стенды Свободный" },
      { property: "og:title", content: "Интерьерная реклама в Благовещенске | Стенды и навигация" },
      { property: "og:description", content: "Оформление офисов, информационные стенды, навигация. Полный цикл от дизайна до монтажа." },
      { property: "og:url", content: "https://ragrafika.ru/interior" }
    ],
    links: [
      { rel: "canonical", href: "https://ragrafika.ru/interior" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Интерьерная реклама и оформление офисов",
            "serviceType": "Информационные стенды и навигация",
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
            "description": "Оформление офисов и торговых пространств в Благовещенске. Информационные стенды, навигация, интерьерная реклама.",
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
                "name": "Интерьерная реклама",
                "item": "https://ragrafika.ru/interior"
              }
            ]
          }),
      }
    ],
  }),
  component: Interior,
});
