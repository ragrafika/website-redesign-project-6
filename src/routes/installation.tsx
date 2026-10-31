import { createFileRoute } from "@tanstack/react-router";
import Installation from "@/pages/services/Installation";

export const Route = createFileRoute("/installation")({
  head: () => ({
    meta: [
      { title: "Монтаж и установка вывесок в Благовещенске | Профессиональный монтаж | Графика" },
      { name: "description", content: "Профессиональный монтаж и установка вывесок в Благовещенске. Фасадные работы, высотный монтаж, подключение подсветки. Работаем по всей Амурской области. Безопасно и качественно." },
      { name: "keywords", content: "монтаж вывесок, установка вывесок, монтаж вывесок Благовещенск, высотные работы, фасадный монтаж, Свободный" },
      { property: "og:title", content: "Монтаж вывесок в Благовещенске" },
      { property: "og:description", content: "Профессиональный монтаж рекламных конструкций. Фасадные и высотные работы." },
      { property: "og:url", content: "https://ragrafika.ru/installation" }
    ],
    links: [
      { rel: "canonical", href: "https://ragrafika.ru/installation" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Монтаж и установка вывесок",
            "serviceType": "Фасадные и высотные работы",
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
            "description": "Профессиональный монтаж и установка вывесок в Благовещенске. Фасадные работы, высотный монтаж.",
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
                "name": "Монтаж и установка",
                "item": "https://ragrafika.ru/installation"
              }
            ]
          }),
      }
    ],
  }),
  component: Installation,
});
