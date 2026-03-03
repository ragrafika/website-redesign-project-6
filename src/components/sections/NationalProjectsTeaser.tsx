import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const POINTS = [
  {
    icon: "GraduationCap",
    title: "Молодёжь и дети",
    text: "Оформление детских садов, школ, учреждений допобразования — вывески, навигация, интерьерное оформление.",
  },
  {
    icon: "Heart",
    title: "Семья",
    text: "МФЦ, центры поддержки семьи, соцучреждения — брендирование в едином стиле нацпроекта.",
  },
  {
    icon: "Music",
    title: "Культура",
    text: "Дома культуры, библиотеки, музеи — световые вывески и навигационные системы.",
  },
];

const NationalProjectsTeaser = () => {
  return (
    <section className="py-16 bg-slate-800">
      <div className="container mx-auto px-4">

        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
            Государственный заказ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            Национальные проекты России
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
            Участвуем в реализации нацпроектов — работаем по 44-ФЗ и 223-ФЗ,
            соблюдаем стандарты оформления и сроки.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {POINTS.map((point) => (
            <div
              key={point.title}
              className="bg-slate-700/60 border border-slate-600 rounded-2xl p-6 flex flex-col gap-3"
            >
              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                <Icon name={point.icon as "Heart"} size={20} className="text-primary" />
              </div>
              <p className="font-bold text-sm text-white">{point.title}</p>
              <p className="text-slate-300 text-sm leading-relaxed">{point.text}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/national-projects"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary font-semibold text-sm px-6 py-3 rounded-xl hover:bg-primary hover:text-white transition-colors"
          >
            Смотреть все проекты
            <Icon name="ArrowRight" size={16} />
          </Link>
          <a
            href="/#contacts"
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors"
          >
            Обсудить объект
            <Icon name="ArrowRight" size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default NationalProjectsTeaser;
