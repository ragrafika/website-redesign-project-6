import { Button } from "@/components/ui/button";
import OrderDialog from "@/components/calculators/OrderDialog";

const CDN = "https://cdn.poehali.dev/projects/820f24d3-2a0c-446f-996e-d0f46f8895f8/bucket/";

const examples = [
  {
    title: "Кофе",
    type: "Световой фигурный короб (стандарт)",
    size: "220×130×10 см",
    light: "Светодиоды ELFLED",
    price: 69650,
    image: `${CDN}2b782cc4-158f-4c82-bc58-d1000bafbb53.jpg`,
  },
  {
    title: "Мастер",
    type: "Объёмная вывеска на металлокаркасе (стандарт)",
    size: "340×60×12 см",
    light: "Без подсветки",
    price: 58650,
    image: `${CDN}d3720a46-77a2-4b4f-b603-2a4f1bb7b106.jpg`,
  },
  {
    title: "Цветы",
    type: "Объёмная вывеска на металлокаркасе (стандарт)",
    size: "300×60×12 см",
    light: "Светодиоды ELFLED",
    price: 68200,
    image: `${CDN}d88eb13a-cfc5-4dfc-8eca-adb1821a51f7.jpg`,
  },
  {
    title: "Маркет",
    type: "Объёмная вывеска на подложке (стандарт)",
    size: "450×90×13 см",
    light: "Светодиоды ELFLED",
    price: 112600,
    image: `${CDN}13e04a9a-ee4c-4587-a29a-c14dade373ef.jpg`,
  },
  {
    title: "Кофейня",
    type: "Объёмные световые буквы на подложке",
    size: "150×40×10 см",
    light: "Светодиоды ELFLED",
    price: 30600,
    tiers: { "Эконом": 29100, "Стандарт": 30600, "Премиум": 39900 },
    included: "Изготовление, доставка в черте Благовещенска, монтаж",
    image: `${CDN}05b4e140-2100-4781-bb7e-a7b747014541.jpg`,
  },
  {
    title: "Барбершоп",
    type: "Объёмные буквы с прямым монтажом на фасад",
    size: "300×38×7 см",
    light: "Светодиоды ELFLED",
    price: 58500,
    tiers: { "Эконом": 53850, "Стандарт": 58500, "Премиум": 69300 },
    included: "Изготовление, доставка в черте Благовещенска, монтаж",
    image: `${CDN}5b27c35e-8bae-4a32-9838-360fcd9fe505.jpg`,
  },
];

const included = "Изготовление, доставка в черте города, монтаж с автовышки";

const SignageExamplesSection = () => {
  return (
    <section id="signage-examples" className="py-20 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Примеры вывесок с ценой под ключ</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Шесть вариантов с указанными размерами и комплектацией. Выберите подходящий — рассчитаем стоимость для вашего фасада.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((ex) => (
            <article key={ex.title} className="bg-background border-2 rounded-2xl overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
              <div className="relative aspect-square bg-muted">
                <img src={ex.image} alt={`${ex.title} — визуализация типовой вывески`} loading="lazy" className="w-full h-full object-cover" />
                <span className="absolute bottom-3 left-3 bg-black/60 text-white text-xs font-medium px-3 py-1 rounded-full">
                  Визуализация типовой вывески
                </span>
              </div>
              <div className="p-5 flex flex-col gap-3 flex-1">
                <h3 className="text-xl font-bold">{ex.title}</h3>
                <p className="text-sm font-medium">{ex.type}</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Размер: {ex.size}</li>
                  <li>Подсветка: {ex.light}</li>
                  <li>В стоимость включено: {(ex.included ?? included).toLowerCase()}</li>
                </ul>
                <div className="mt-auto pt-2">
                  {ex.tiers ? (
                    <ul className="mb-3 space-y-1">
                      {Object.entries(ex.tiers).map(([name, value]) => (
                        <li key={name} className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{name}</span>
                          <span className={`font-bold ${name === "Стандарт" ? "text-primary text-lg" : ""}`}>{value.toLocaleString("ru-RU")} ₽</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-2xl font-bold text-primary mb-3">{ex.price.toLocaleString("ru-RU")} ₽</p>
                  )}
                  <OrderDialog
                    allowPhoto
                    calculatorType={`Пример вывески «${ex.title}» — рассчитать для моего фасада`}
                    price={ex.price}
                    details={{
                      "Вывеска": ex.title,
                      "Тип": ex.type,
                      "Размер": ex.size,
                      "Подсветка": ex.light,
                      "В стоимость включено": ex.included ?? included,
                      ...(ex.tiers ? Object.fromEntries(Object.entries(ex.tiers).map(([k, v]) => [`Цена (${k})`, `${v.toLocaleString("ru-RU")} ₽`])) : {}),
                    }}
                  >
                    <Button className="w-full">Рассчитать для моего фасада</Button>
                  </OrderDialog>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignageExamplesSection;
