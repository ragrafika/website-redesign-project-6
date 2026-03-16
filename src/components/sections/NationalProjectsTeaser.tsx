import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const NationalProjectsTeaser = () => {
  return (
    <section className="py-6 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Icon name="Landmark" size={20} className="text-primary" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-0.5">
                Государственный заказ
              </p>
              <p className="text-white font-semibold text-sm">
                Работаем по нацпроектам — 44-ФЗ и 223-ФЗ
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              to="/national-projects"
              className="inline-flex items-center gap-2 border border-slate-500 text-slate-300 font-medium text-sm px-4 py-2 rounded-lg hover:border-primary hover:text-primary transition-colors"
            >
              Подробнее
              <Icon name="ArrowRight" size={14} />
            </Link>
            <a
              href="/#contacts"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Обсудить объект
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NationalProjectsTeaser;
