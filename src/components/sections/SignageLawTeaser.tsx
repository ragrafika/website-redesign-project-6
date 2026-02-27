import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const POINTS = [
  {
    icon: "FileCheck",
    title: "Согласование обязательно",
    text: "В Благовещенске вывеска устанавливается только после согласования дизайн-проекта с администрацией",
  },
  {
    icon: "Scale",
    title: "Русский язык — по закону",
    text: "С 1 марта 2026 г. вывески только на иностранном языке нарушают ФЗ № 168-ФЗ",
  },
  {
    icon: "Gift",
    title: "Согласование бесплатно",
    text: "При заказе световой вывески в Благовещенске — согласование дизайн-проекта в администрации за наш счёт",
  },
];

const SignageLawTeaser = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">

        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Полезно знать</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Требования к вывескам</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
            Прежде чем заказать вывеску — стоит убедиться, что она соответствует местным требованиям.
            Мы возьмём это на себя.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {POINTS.map((point) => (
            <div
              key={point.title}
              className="bg-white border-2 border-border rounded-2xl p-6 flex flex-col gap-3"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Icon name={point.icon as "FileCheck"} size={20} className="text-primary" />
              </div>
              <p className="font-bold text-sm">{point.title}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{point.text}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/signage-law"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary font-semibold text-sm px-6 py-3 rounded-xl hover:bg-primary hover:text-white transition-colors"
          >
            Читать о требованиях
            <Icon name="ArrowRight" size={16} />
          </Link>
          <a
            href="/#contacts"
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors"
          >
            Заказать вывеску
            <Icon name="ArrowRight" size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default SignageLawTeaser;
