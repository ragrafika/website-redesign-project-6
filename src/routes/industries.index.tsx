import { createFileRoute } from "@tanstack/react-router";
import IndustriesPage from "@/pages/IndustriesPage";

export const Route = createFileRoute("/industries/")({
  head: () => ({
    meta: [
      { title: "Вывески для вашей сферы бизнеса | Графика" },
      { name: "description", content: "Вывески для магазинов, кафе, аптек, салонов и других сфер бизнеса в Благовещенске и Амурской области." },
      { property: "og:title", content: "Вывески для вашей сферы бизнеса | Графика" },
      { property: "og:description", content: "Вывески для магазинов, кафе, аптек, салонов и других сфер бизнеса в Благовещенске и Амурской области." },
      { property: "og:url", content: "https://ragrafika.ru/industries" }
    ],
    links: [
      { rel: "canonical", href: "https://ragrafika.ru/industries" }
    ],
  }),
  component: IndustriesPage,
});
