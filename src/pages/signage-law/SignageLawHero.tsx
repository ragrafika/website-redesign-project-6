import Icon from "@/components/ui/icon";

const QUESTIONS = [
  {
    q: "Нужно ли согласовывать вывеску в Благовещенске?",
    a: "Да, до установки — по Постановлению № 1812 от 14.04.2023.",
    icon: "HelpCircle",
    id: "blag-1812",
  },
  {
    q: "Что изменилось с 1 марта 2026 года?",
    a: "Вывески только на иностранном языке — нарушение ФЗ № 168-ФЗ, если название не является зарегистрированным товарным знаком.",
    icon: "CalendarClock",
    id: "rf-2026",
  },
  {
    q: "Можно ли вешать вывеску поверх окон или балконов?",
    a: "Нет. Это прямо запрещено правилами благоустройства г. Свободного.",
    icon: "Ban",
    id: "svobodny",
  },
];

export default function SignageLawHero() {
  return (
    <>
      {/* Hero */}
      <div className="mb-8 rounded-2xl bg-slate-900 text-white p-6 md:p-8">
        <div className="flex items-start gap-4 mb-4">
          <div className="bg-white/10 rounded-xl p-3 flex-shrink-0">
            <Icon name="Scale" size={26} />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold leading-tight">
              Законодательство о вывесках
            </h2>
            <p className="text-slate-300 text-sm mt-1">
              Благовещенск · Свободный · Федеральные нормы России
            </p>
          </div>
        </div>
        <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
          Прежде чем заказывать вывеску, стоит убедиться, что она не противоречит
          местным правилам и федеральному законодательству. Мы помогаем разобраться
          в требованиях и берёмся за изготовление вывесок, которые пройдут согласование.
        </p>
      </div>

      {/* Частые вопросы — навигация по карточкам */}
      <div className="mb-7 grid sm:grid-cols-3 gap-3">
        {QUESTIONS.map(item => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="bg-white rounded-xl border border-gray-200 hover:border-gray-400 hover:shadow-sm transition-all p-4 block group"
          >
            <div className="flex items-start gap-2 mb-2">
              <Icon name={item.icon as "HelpCircle"} size={14} className="text-slate-400 flex-shrink-0 mt-0.5" />
              <p className="text-xs font-semibold text-gray-700 leading-snug">{item.q}</p>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">{item.a}</p>
            <p className="text-xs text-blue-500 mt-2 flex items-center gap-0.5 group-hover:gap-1 transition-all">
              Читать подробнее <Icon name="ArrowDown" size={11} />
            </p>
          </a>
        ))}
      </div>
    </>
  );
}