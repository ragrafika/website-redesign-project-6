import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const POINTS = [
  {
    icon: "FileCheck",
    title: "Постановление № 1812",
    text: "Любая вывеска в Благовещенске требует согласования до установки",
  },
  {
    icon: "Scale",
    title: "ФЗ № 168-ФЗ с 1 марта 2026",
    text: "Вывески только на иностранном языке — нарушение федерального закона",
  },
  {
    icon: "Ban",
    title: "Правила г. Свободного",
    text: "Нельзя перекрывать окна, балконы и архитектурные элементы фасада",
  },
];

const SignageLawTeaser = () => {
  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-10">

          {/* Левая колонка — заголовок */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-lg mb-4">
              <Icon name="Shield" size={12} />
              Законодательство
            </div>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-3">
              Согласование вывесок — это закон
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Перед заказом важно знать несколько требований, которые действуют
              в Благовещенске и по всей России.
            </p>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                to="/signage-law"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-slate-100 transition-colors"
              >
                Читать подробнее
                <Icon name="ArrowRight" size={15} />
              </Link>
              <Link
                to="/#contacts"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-white/10 transition-colors"
              >
                <Icon name="Gift" size={14} className="text-amber-400" />
                Согласование бесплатно
              </Link>
            </div>
          </div>

          {/* Правая колонка — карточки */}
          <div className="flex-1 grid sm:grid-cols-3 gap-4 w-full">
            {POINTS.map((point) => (
              <div
                key={point.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors"
              >
                <div className="bg-white/10 rounded-xl w-9 h-9 flex items-center justify-center mb-3">
                  <Icon name={point.icon as "FileCheck"} size={16} className="text-white" />
                </div>
                <p className="text-sm font-semibold text-white mb-1.5">{point.title}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{point.text}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Оффер-бейдж */}
        <div className="mt-8 border border-amber-400/30 bg-amber-400/10 rounded-2xl px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <Icon name="Zap" size={18} className="text-amber-400 flex-shrink-0" />
          <p className="text-sm text-amber-100 leading-relaxed flex-1">
            <span className="font-bold text-amber-400">Спецпредложение:</span> при заказе световой вывески в Благовещенске — согласование дизайн-проекта в администрации бесплатно.
          </p>
          <Link
            to="/#contacts"
            className="flex-shrink-0 inline-flex items-center gap-1.5 bg-amber-400 text-slate-900 font-semibold text-xs px-4 py-2 rounded-lg hover:bg-amber-300 transition-colors"
          >
            Узнать подробнее
            <Icon name="ArrowRight" size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignageLawTeaser;
