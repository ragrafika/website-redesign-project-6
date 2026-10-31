import { createFileRoute } from "@tanstack/react-router";
import StoriesPage from "@/pages/StoriesPage";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "Реальные истории наших вывесок | Графика" },
      { name: "description", content: "Подробные истории изготовления и монтажа вывесок в Благовещенске: от идеи и согласования до установки на объекте." },
      { property: "og:title", content: "Реальные истории наших вывесок | Графика" },
      { property: "og:description", content: "Подробные истории изготовления и монтажа вывесок в Благовещенске: от идеи и согласования до установки на объекте." },
      { property: "og:url", content: "https://ragrafika.ru/stories" }
    ],
    links: [
      { rel: "canonical", href: "https://ragrafika.ru/stories" }
    ],
  }),
  component: StoriesPage,
});
