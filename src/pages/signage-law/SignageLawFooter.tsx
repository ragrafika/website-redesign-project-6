import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const FEDERAL_LINKS = [
  {
    label: 'ФЗ "О рекламе" № 38-ФЗ — КонсультантПлюс',
    url: "https://www.consultant.ru/document/cons_doc_LAW_58968/",
  },
  {
    label: "КоАП РФ ст. 14.37 — ответственность за незаконную рекламную конструкцию",
    url: "https://www.consultant.ru/document/cons_doc_LAW_34661/9b50c426d4e53e37376c06e5875e04f2cb07cd2b/",
  },
];

export default function SignageLawFooter() {
  return (
    <>
      {/* CTA компании */}
      <div className="mt-8 rounded-2xl bg-slate-900 text-white p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="bg-white/10 rounded-xl p-3 flex-shrink-0">
            <Icon name="Zap" size={22} />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-1">Поможем с вывеской, которая пройдёт согласование</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Мы изготавливаем вывески с учётом требований местного законодательства —
              Благовещенск, Свободный и другие города Амурской области. Разработаем
              дизайн-проект, который соответствует нормам и выглядит как надо.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-slate-100 transition-colors"
            >
              Обсудить вывеску
              <Icon name="ArrowRight" size={15} />
            </Link>
          </div>
        </div>
      </div>

      {/* Федеральные ссылки на конкретные статьи */}
      <div className="mt-4 bg-white rounded-2xl border border-gray-200 p-5">
        <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
          <Icon name="BookMarked" size={14} className="text-slate-400" />
          Федеральная правовая база
        </h3>
        <div className="flex flex-col gap-2">
          {FEDERAL_LINKS.map(link => (
            <a
              key={link.label}
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

      <p className="mt-6 text-center text-xs text-gray-400">
        Информация носит справочный характер · Февраль 2026
      </p>
    </>
  );
}
