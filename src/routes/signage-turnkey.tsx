import { createFileRoute } from "@tanstack/react-router";
import SignageTurnkey from "@/pages/services/SignageTurnkey";

export const Route = createFileRoute("/signage-turnkey")({
  head: () => ({
    meta: [
      { title: "Вывески под ключ в Благовещенске | Дизайн, согласование, монтаж | Графика" },
      { name: "description", content: "Вывески под ключ в Благовещенске: от дизайна и согласования в администрации до изготовления и монтажа. Объемные буквы, световые короба, световая реклама для бизнеса и госучреждений. Работаем в Амурской области, Якутии, ЕАО, Хабаровском и Приморском краях. Гарантия до 3 лет." },
      { name: "keywords", content: "вывеска под ключ, заказать вывеску, заказать вывеску Благовещенск, объемные буквы, световой короб, световая вывеска, световые буквы, световая реклама, вывеска для госучреждений, вывеска в магазин, вывеска Благовещенск, вывеска Свободный, вывеска Якутск, вывеска Хабаровск, вывеска Владивосток, вывеска Биробиджан, изготовление вывесок Дальний Восток" },
      { property: "og:title", content: "Вывески под ключ в Благовещенске | Дизайн, согласование, монтаж" },
      { property: "og:description", content: "Вывески под ключ: от дизайна и согласования до монтажа. Работаем по всему Дальнему Востоку — Амурская область, Якутия, ЕАО, Хабаровский и Приморский края. Бесплатный дизайн-проект. Гарантия до 3 лет." },
      { property: "og:url", content: "https://ragrafika.ru/signage-turnkey" }
    ],
    links: [
      { rel: "canonical", href: "https://ragrafika.ru/signage-turnkey" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Вывески под ключ",
            "serviceType": "Вывески под ключ: дизайн, согласование, изготовление, монтаж",
            "provider": {
              "@type": "Organization",
              "name": "Графика",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Благовещенск",
                "addressRegion": "Амурская область",
                "addressCountry": "RU"
              },
              "areaServed": [
                { "@type": "State", "name": "Амурская область" },
                { "@type": "State", "name": "Республика Саха (Якутия)" },
                { "@type": "State", "name": "Еврейская автономная область" },
                { "@type": "State", "name": "Хабаровский край" },
                { "@type": "State", "name": "Приморский край" }
              ]
            },
            "description": "Вывески под ключ: от дизайна и согласования до изготовления и монтажа. Для бизнеса и госучреждений. Работаем по всему Дальнему Востоку.",
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
                "name": "Вывески под ключ",
                "item": "https://ragrafika.ru/signage-turnkey"
              }
            ]
          }),
      }
    ],
  }),
  component: SignageTurnkey,
});
