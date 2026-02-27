import Icon from "@/components/ui/icon";

const QUICK_ANSWERS = [
  {
    q: "Нужно ли согласовывать вывеску?",
    a: "В Благовещенске — да, обязательно до установки. Постановление № 1812.",
    icon: "HelpCircle",
    id: "blag-1812",
  },
  {
    q: "Что изменилось с 1 марта 2026?",
    a: "На вывесках обязателен русский язык. ФЗ № 168-ФЗ от 24.06.2025.",
    icon: "CalendarClock",
    id: "rf-2026",
  },
  {
    q: "Где взять правила для г. Свободного?",
    a: "На svob.amurobl.ru скачать PDF или позвонить 8(41643)3-53-37.",
    icon: "Download",
    id: "svobodny",
  },
];

export default function SignageLawHero() {
  return (
    <>
      {/* Hero */}
      <div className="mb-8 rounded-2xl overflow-hidden bg-slate-900 text-white">
        <div className="p-6 md:p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-white/10 rounded-xl p-3 flex-shrink-0">
              <Icon name="BookOpen" size={26} />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold leading-tight">
                Что важно знать о вывесках
              </h2>
              <p className="text-slate-300 text-sm mt-1">
                Амурская область: Благовещенск, Свободный — и федеральные нормы России
              </p>
            </div>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
            Справочник собирает нормативные акты из официальных источников. Здесь — не инструкция
            по согласованию, а понимание правовой среды: какие законы действуют, что они означают
            для владельцев бизнеса и что грозит за нарушения.
          </p>
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { n: "4", label: "документа" },
              { n: "2", label: "города" },
              { n: "2026", label: "год: новый ФЗ" },
              { n: "PDF", label: "скрины-источники" },
            ].map(item => (
              <div key={item.label} className="bg-white/8 rounded-xl px-3 py-2.5 text-center">
                <p className="text-lg font-bold">{item.n}</p>
                <p className="text-xs text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Важный дисклеймер */}
      <div className="mb-6 flex items-start gap-3 bg-amber-50 border border-amber-300 rounded-xl px-4 py-3.5">
        <Icon name="AlertTriangle" size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-amber-800 leading-relaxed">
          <strong>Справочная информация.</strong> Законодательство меняется. Для принятия юридически
          значимых решений — запрашивайте актуальные тексты документов в органах местного самоуправления
          или на официальных правовых порталах.
        </p>
      </div>

      {/* Навигационные блоки — быстрые ответы */}
      <div className="mb-7 grid sm:grid-cols-3 gap-3">
        {QUICK_ANSWERS.map(item => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="bg-white rounded-xl border border-gray-200 hover:border-gray-400 hover:shadow-sm transition-all p-4 block"
          >
            <div className="flex items-center gap-2 mb-2">
              <Icon name={item.icon as "HelpCircle"} size={15} className="text-slate-500" />
              <p className="text-xs font-semibold text-gray-700">{item.q}</p>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">{item.a}</p>
            <p className="text-xs text-blue-500 mt-2 flex items-center gap-0.5">
              Подробнее <Icon name="ArrowDown" size={11} />
            </p>
          </a>
        ))}
      </div>
    </>
  );
}
