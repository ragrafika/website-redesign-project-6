import { createFileRoute } from "@tanstack/react-router";
import Design from "@/pages/services/Design";

export const Route = createFileRoute("/design")({
  head: () => ({
    meta: [
      { title: "Разработка дизайна и согласование вывесок в Благовещенске | Рекламное агентство Графика" },
      { name: "description", content: "Профессиональная разработка дизайна вывесок, создание макетов и согласование в администрации. Полный цикл: от концепции до разрешительных документов. Согласование в подарок при комплексном заказе." },
      { name: "keywords", content: "разработка дизайна вывесок, согласование вывесок Благовещенск, макеты вывесок, фирменный стиль, 3D визуализация вывески, согласование рекламы" },
      { property: "og:title", content: "Разработка дизайна и согласование вывесок | Рекламное агентство Графика" },
      { property: "og:description", content: "Создаём концепции, визуализации и согласовываем вывески в Благовещенске. Полный цикл от идеи до документов." },
      { property: "og:type", content: "website" }
    ],
    links: [
      { rel: "canonical", href: "https://ragrafika.ru/design" }
    ],
    scripts: [

    ],
  }),
  component: Design,
});
