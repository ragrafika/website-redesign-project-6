import Icon from "@/components/ui/icon";
import { COMPANY_STATS } from "./nationalProjectsData";

export default function NationalProjectsHero() {
  return (
    <div className="mb-10">
      {/* Бейдж */}
      <div className="flex items-center gap-2 mb-4">
        <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
          <Icon name="Shield" size={13} />
          Национальные проекты России 2025–2030
        </span>
      </div>

      {/* Заголовок */}
      <h1 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
        Мы участвуем в&nbsp;реализации<br className="hidden md:block" />
        <span className="text-primary"> национальных проектов</span>
      </h1>

      <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
        Изготовили продукцию для ряда объектов в рамках нацпроектов «Молодёжь и дети»,
        «Семья» и «Культура». Работаем по прямым договорам с заказчиками
        и через генеральных подрядчиков. Более 150 изделий — вывески, навигация,
        интерьерное оформление.
      </p>

      {/* Статистика */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {COMPANY_STATS.map((s, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm px-4 py-4 text-center"
          >
            <div className="text-2xl font-black text-primary">{s.value}</div>
            <div className="text-sm font-semibold text-gray-800">{s.label}</div>
            <div className="text-xs text-gray-400 mt-0.5">{s.sub}</div>
          </div>
        ))}
      </div>

      {/* CTA-блок */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-5 md:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-shrink-0 bg-primary/20 rounded-xl p-3">
          <Icon name="Handshake" size={28} className="text-primary" />
        </div>
        <div className="flex-1">
          <p className="text-white font-bold text-base md:text-lg leading-tight mb-1">
            Ваш объект входит в нацпроект?
          </p>
          <p className="text-slate-300 text-sm leading-relaxed">
            С удовольствием поможем с оформлением — опыт госзаказа, соблюдение стандартов,
            работа в рамках 44-ФЗ и 223-ФЗ.
          </p>
        </div>
        <a
          href="tel:+74162227678"
          className="flex-shrink-0 bg-primary hover:bg-red-600 transition-colors text-white font-bold text-sm px-5 py-3 rounded-xl inline-flex items-center gap-2"
        >
          <Icon name="Phone" size={15} />
          Обсудить задачу
        </a>
      </div>
    </div>
  );
}