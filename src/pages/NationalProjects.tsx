import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { PROJECTS } from "./national-projects/nationalProjectsData";
import NationalProjectsHero from "./national-projects/NationalProjectsHero";
import NationalProjectCard from "./national-projects/NationalProjectCard";
import NationalProjectsContactForm from "./national-projects/NationalProjectsContactForm";
import Footer from "@/components/Footer";

const FILTERS = [
  { label: "Все проекты", value: "all" },
  { label: "Участвуем", value: "participating" },
  { label: "Готовы участвовать", value: "ready" },
];

export default function NationalProjects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? PROJECTS
      : activeFilter === "participating"
      ? PROJECTS.filter((p) => p.isParticipating)
      : PROJECTS.filter((p) => !p.isParticipating);

  const participatingCount = PROJECTS.filter((p) => p.isParticipating).length;

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Верхняя навигация */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-gray-500 hover:text-gray-800 transition-colors flex-shrink-0 text-sm"
          >
            <Icon name="ArrowLeft" size={17} />
            <span className="hidden sm:inline">На главную</span>
          </Link>
          <div className="w-px h-5 bg-gray-200" />
          <h1 className="text-base md:text-lg font-bold text-gray-900 truncate">
            Национальные проекты России
          </h1>
          <div className="ml-auto flex-shrink-0">
            <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full">
              {participatingCount} из {PROJECTS.length} — участвуем
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">

        <NationalProjectsHero />

        {/* Фильтр */}
        <div className="mb-6 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === f.value
                  ? "bg-slate-800 text-white shadow-sm"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-gray-400"
              }`}
            >
              {f.label}
              {f.value === "participating" && (
                <span className="ml-1.5 bg-emerald-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {participatingCount}
                </span>
              )}
              {f.value === "ready" && (
                <span className="ml-1.5 bg-slate-400 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {PROJECTS.length - participatingCount}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Карточки проектов */}
        <div className="space-y-6">
          {filtered.map((project) => (
            <NationalProjectCard key={project.id} project={project} />
          ))}
        </div>

        <NationalProjectsContactForm />

      </div>

      <Footer />
    </div>
  );
}