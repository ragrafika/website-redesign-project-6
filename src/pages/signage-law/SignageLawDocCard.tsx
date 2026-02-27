import Icon from "@/components/ui/icon";
import { DocCard } from "./signageLawData";

export default function SignageLawDocCard({ doc }: { doc: DocCard }) {
  return (
    <div className={`rounded-2xl border-2 ${doc.color} overflow-hidden shadow-sm`} id={doc.id}>
      {/* Шапка карточки */}
      <div className="p-5 md:p-7">
        <div className="flex items-start gap-4">
          <div className={`rounded-xl p-3 flex-shrink-0 ${doc.accentColor}`}>
            <Icon name={doc.headerIcon as "MapPin"} size={22} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className={`text-[11px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md ${doc.accentColor}`}>
                {doc.regionCode}
              </span>
              <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                <Icon name={doc.docTypeIcon as "Stamp"} size={11} />
                {doc.docType}
              </span>
              <span className="text-[11px] text-muted-foreground">{doc.date}</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">{doc.title}</h2>
            <p className="text-sm text-gray-500 mt-1 leading-relaxed">{doc.subtitle}</p>
          </div>
        </div>

        {/* Ключевые пункты */}
        <div className="mt-5 space-y-4">
          {doc.keyPoints.map((point, i) => (
            <div key={i} className="flex items-start gap-3 bg-white/60 rounded-xl p-3.5">
              <div className={`mt-0.5 flex-shrink-0 rounded-lg p-1.5 ${doc.accentColor}`}>
                <Icon name={point.icon as "Info"} size={14} />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-0.5">{point.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{point.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Примечание */}
        {doc.note && (
          <div className="mt-4 flex items-start gap-2 border border-amber-200 bg-amber-50 rounded-xl px-4 py-3">
            <Icon name="Lightbulb" size={15} className="text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-amber-800 leading-relaxed">{doc.note}</p>
          </div>
        )}
      </div>

      {/* Ссылки на конкретные документы */}
      {doc.links.length > 0 && (
        <div className="border-t border-current/10 px-5 md:px-7 py-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1.5">
            <Icon name="ExternalLink" size={11} />
            Первоисточник
          </p>
          <div className="flex flex-col gap-1.5">
            {doc.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1.5 transition-colors"
              >
                <Icon name="ArrowUpRight" size={12} className="flex-shrink-0" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
