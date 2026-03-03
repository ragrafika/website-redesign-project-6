import { useState } from "react";
import Icon from "@/components/ui/icon";
import { NatProject } from "./nationalProjectsData";

export default function NationalProjectCard({ project }: { project: NatProject }) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  const allPhotos = [
    ...(project.photo ? [{ url: project.photo, label: project.photoLabel || "" }] : []),
    ...(project.gallery || []),
  ];

  return (
    <>
    {lightbox && (
      <div
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
        onClick={() => setLightbox(null)}
      >
        <button className="absolute top-4 right-4 text-white/70 hover:text-white">
          <Icon name="X" size={28} />
        </button>
        <img
          src={lightbox}
          alt=""
          className="max-w-full max-h-[90vh] rounded-xl object-contain"
          onClick={e => e.stopPropagation()}
        />
      </div>
    )}
    <div
      className={`rounded-2xl border-2 ${project.color} overflow-hidden shadow-sm`}
      id={project.id}
    >
      {/* Шапка */}
      <div className="p-5 md:p-7">
        <div className="flex items-start gap-4">
          <div className={`rounded-xl p-3 flex-shrink-0 ${project.accentColor}`}>
            <Icon name={project.icon as "Building2"} size={24} />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {/* Статус участия */}
              {project.isParticipating ? (
                <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                  <Icon name="CheckCircle2" size={11} />
                  Участвуем
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-500 text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                  <Icon name="Circle" size={11} />
                  Готовы участвовать
                </span>
              )}

              {/* Куратор */}
              {project.curator && (
                <span className="text-[11px] text-gray-400 flex items-center gap-1">
                  <Icon name="Building2" size={11} />
                  {project.curator}
                </span>
              )}
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Описание нацпроекта */}
        <p className="mt-4 text-sm text-gray-600 leading-relaxed bg-white/70 rounded-xl px-4 py-3">
          {project.description}
        </p>

        {/* Наша роль */}
        {project.isParticipating && (
          <div className="mt-4 flex items-start gap-3 rounded-xl px-4 py-3 bg-white/70 border border-current/10">
            <Icon
              name="Star"
              size={15}
              className={`flex-shrink-0 mt-0.5 ${project.tagColor}`}
            />
            <div>
              <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${project.tagColor}`}>
                Наша роль в проекте
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">{project.ourRole}</p>
            </div>
          </div>
        )}

        {!project.isParticipating && (
          <div className="mt-4 flex items-start gap-3 rounded-xl px-4 py-3 bg-white/70 border border-dashed border-gray-200">
            <Icon name="Lightbulb" size={15} className="flex-shrink-0 mt-0.5 text-amber-500" />
            <p className="text-sm text-gray-600 leading-relaxed">{project.ourRole}</p>
          </div>
        )}

        {/* Примеры работ */}
        <div className="mt-4 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 flex items-center gap-1.5">
            <Icon name="Layers" size={11} />
            Что делаем
          </p>
          {project.examples.map((ex, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-white/60 rounded-lg px-3.5 py-2.5"
            >
              <div className={`flex-shrink-0 rounded-md p-1.5 ${project.accentColor}`}>
                <Icon name={ex.icon as "Building"} size={13} />
              </div>
              <p className="text-sm text-gray-700">{ex.text}</p>
            </div>
          ))}
        </div>

        {/* Галерея фотографий */}
        {allPhotos.length > 0 && (
          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-1.5">
              <Icon name="Images" size={11} />
              Наши работы на объектах
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {allPhotos.map((ph, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox(ph.url)}
                  className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-gray-100"
                >
                  <img
                    src={ph.url}
                    alt={ph.label}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {ph.label && (
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end">
                      <p className="text-white text-xs px-2 pb-2 leading-tight opacity-0 group-hover:opacity-100 transition-opacity">
                        {ph.label}
                      </p>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
}