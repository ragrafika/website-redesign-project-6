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
        Изготовили продукцию для 8–10 объектов в рамках нацпроектов «Молодёжь и дети»,
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

      {/* Галерея работ */}
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-1.5">
          <Icon name="Images" size={12} />
          Наши реализованные объекты
        </p>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 snap-x snap-mandatory">
          {[
            {
              url: "https://cdn.poehali.dev/files/ee0ddc7b-d2e5-4ecd-b02a-66033522690a.jpg",
              label: "Библиотека нового поколения",
              tag: "Культура",
            },
            {
              url: "https://cdn.poehali.dev/files/03a0bbb4-82ad-49ab-9e7f-586537773c4e.jpg",
              label: "Городская поликлиника №1",
              tag: "Семья",
            },
            {
              url: "https://cdn.poehali.dev/files/35fcab5e-e586-4e61-b96c-f488e8b78865.jpg",
              label: "Детская библиотека",
              tag: "Молодёжь и дети",
            },
            {
              url: "https://cdn.poehali.dev/files/a20bc55a-f64b-4bdd-913f-b6ad2d7cc61d.jpg",
              label: "Детская библиотека — зал",
              tag: "Культура",
            },
            {
              url: "https://cdn.poehali.dev/files/6962e723-ea6d-4954-b875-cea984478cbd.jpg",
              label: "Интерьерная инсталляция",
              tag: "Культура",
            },
            {
              url: "https://cdn.poehali.dev/files/350fea77-2f03-4ce7-80c4-b77522b2438a.jpg",
              label: "Зимнее оформление",
              tag: "Культура",
            },
          ].map((photo, i) => (
            <div
              key={i}
              className="flex-shrink-0 snap-start w-52 md:w-64 rounded-xl overflow-hidden shadow-sm border border-gray-100 bg-white"
            >
              <div className="h-36 md:h-44 overflow-hidden">
                <img
                  src={photo.url}
                  alt={photo.label}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="px-3 py-2.5">
                <span className="text-[10px] font-bold uppercase tracking-wide text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  {photo.tag}
                </span>
                <p className="text-xs font-medium text-gray-700 mt-1.5 leading-snug">{photo.label}</p>
              </div>
            </div>
          ))}
        </div>
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
          href="tel:+74162000000"
          className="flex-shrink-0 bg-primary hover:bg-red-600 transition-colors text-white font-bold text-sm px-5 py-3 rounded-xl inline-flex items-center gap-2"
        >
          <Icon name="Phone" size={15} />
          Обсудить задачу
        </a>
      </div>
    </div>
  );
}