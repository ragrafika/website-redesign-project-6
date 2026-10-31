import Icon from "@/components/ui/icon";
import { Link } from "@/lib/router-compat";

const items = [
  {
    icon: "Store",
    title: "Вывески для вашей сферы бизнеса",
    text: "16 направлений: магазины, кафе, аптеки, салоны и другие",
    to: "/industries",
  },
  {
    icon: "Layers",
    title: "Комплектации вывесок и советы по выбору",
    text: "Что входит в цену и на что обратить внимание при заказе",
    to: "/signage-turnkey",
  },
  {
    icon: "BookOpen",
    title: "Все истории наших вывесок",
    text: "Подробные кейсы с фото: от идеи до монтажа",
    to: "/stories",
  },
];

const MoreInfoTeaser = () => (
  <section className="py-16 bg-muted/30 scroll-mt-24">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Хотите узнать подробнее?</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {items.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="group bg-white rounded-xl border-2 p-6 hover:border-primary hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Icon name={item.icon} size={24} className="text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">{item.text}</p>
            <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
              Подробнее
              <Icon name="ArrowRight" size={16} />
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default MoreInfoTeaser;
