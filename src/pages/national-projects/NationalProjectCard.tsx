import Icon from "@/components/ui/icon";
import { NatProject } from "./nationalProjectsData";

export default function NationalProjectCard({ project }: { project: NatProject }) {
  return (
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
      </div>
    </div>
  );
}
