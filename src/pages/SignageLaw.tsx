import { Link } from "react-router-dom";
import { useState } from "react";
import Icon from "@/components/ui/icon";
import { DOCS } from "./signage-law/signageLawData";
import SignageLawDocCard from "./signage-law/SignageLawDocCard";
import SignageLawHero from "./signage-law/SignageLawHero";
import SignageLawFooter from "./signage-law/SignageLawFooter";

const REGIONS = [
  { label: "Все", value: "all" },
  { label: "Благовещенск", value: "Благовещенск" },
  { label: "Свободный", value: "Свободный" },
  { label: "Россия (федеральный)", value: "Россия" },
];

export default function SignageLaw() {
  const [activeRegion, setActiveRegion] = useState("all");

  const filtered = activeRegion === "all"
    ? DOCS
    : DOCS.filter(d => d.region === activeRegion);

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
            Правовые требования к вывескам
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">

        <SignageLawHero />

        {/* Фильтр */}
        <div className="mb-5 flex flex-wrap gap-2">
          {REGIONS.map(r => (
            <button
              key={r.value}
              onClick={() => setActiveRegion(r.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeRegion === r.value
                  ? "bg-slate-800 text-white shadow-sm"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-gray-400"
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>

        {/* Карточки документов */}
        <div className="space-y-6">
          {filtered.map(doc => (
            <SignageLawDocCard key={doc.id} doc={doc} />
          ))}
        </div>

        <SignageLawFooter />

      </div>
    </div>
  );
}
