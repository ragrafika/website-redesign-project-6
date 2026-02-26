import { Button } from "@/components/ui/button";
import OrderDialog from "../OrderDialog";
import Icon from "@/components/ui/icon";
import { NEON_FONTS, NEON_COLORS, NEON_BACKINGS } from "./NeonParametersForm";

interface NeonPriceSectionProps {
  signText: string;
  fontId: string;
  colorId: string;
  backingId: string;
  diameter: string;
  width: string;
  height: string;
  withDimmer: boolean;
  withRemote: boolean;
  withFlicker: boolean;
}

function calcNeonPrice(
  width: string, height: string, diameter: string,
  colorId: string, backingId: string,
  withDimmer: boolean, withRemote: boolean, withFlicker: boolean
) {
  const w = parseFloat(width) || 0;
  const h = parseFloat(height) || 0;
  if (!w || !h) return 0;

  const area = (w / 100) * (h / 100);
  const perimeter = (w + h) * 2;
  const d = parseInt(diameter) || 10;

  const diamCoef = d <= 6 ? 1.2 : d <= 8 ? 1.1 : d <= 10 ? 1.0 : d <= 12 ? 1.15 : 1.35;

  const pricePer10cm = 450;
  const neonLen = perimeter * 0.6;
  const neonBase = (neonLen / 10) * pricePer10cm * diamCoef;

  const colorPrices: Record<string, number> = {
    white: 0, cyan: 200, blue: 200, green: 300, yellow: 300,
    red: 400, pink: 500, orange: 500, purple: 700,
  };
  const colorExtra = colorPrices[colorId] ?? 0;

  const backingPrices: Record<string, number> = {
    transparent: 0, black: 1500, dark: 1800, wood: 2500, white: 2000, mirror: 3500,
  };
  const backingBase = backingPrices[backingId] ?? 0;
  const backingArea = area * 1500;
  const backingTotal = backingBase + backingArea;

  let extras = 0;
  if (withDimmer) extras += 1200;
  if (withRemote) extras += 2500;
  if (withFlicker) extras += 1800;

  const minPrice = 4500;
  const total = Math.max(neonBase + colorExtra + backingTotal + extras, minPrice);
  return Math.round(total / 100) * 100;
}

const TIERS = [
  {
    id: "eco",
    label: "Эконом",
    mult: 1,
    highlight: false,
    badge: null,
    description: "Типовые материалы, стандартный монтаж",
    items: ["Стандартный гибкий неон", "Акриловая подложка", "Базовый блок питания", "Доставка по договорённости"],
  },
  {
    id: "std",
    label: "Стандарт",
    mult: 1.25,
    highlight: true,
    badge: "Популярный",
    description: "Оптимальное соотношение цены и качества",
    items: ["Неон повышенной яркости", "Усиленная подложка 10 мм", "Защита IP65", "Гарантия 2 года", "Доставка включена"],
  },
  {
    id: "prem",
    label: "Премиум",
    mult: 1.65,
    highlight: false,
    badge: null,
    description: "Максимальное качество и долговечность",
    items: ["Профессиональный неон LED", "Дизайнерская подложка", "Защита IP67", "Монтаж в подарок", "Гарантия 5 лет"],
  },
];

export default function NeonPriceSection({
  signText, fontId, colorId, backingId, diameter,
  width, height, withDimmer, withRemote, withFlicker,
}: NeonPriceSectionProps) {
  const basePrice = calcNeonPrice(width, height, diameter, colorId, backingId, withDimmer, withRemote, withFlicker);

  const font = NEON_FONTS.find(f => f.id === fontId);
  const color = NEON_COLORS.find(c => c.id === colorId);
  const backing = NEON_BACKINGS.find(b => b.id === backingId);

  const details: Record<string, string> = {
    "Текст": signText || "(не указан)",
    "Размер": width && height ? `${width}×${height} см` : "—",
    "Шрифт": font?.label || "—",
    "Цвет неона": color?.label || "—",
    "Подложка": backing?.label || "—",
    "Диаметр трубки": `${diameter} мм`,
    ...(withDimmer && { "Диммер": "Да" }),
    ...(withRemote && { "Пульт ДУ": "Да" }),
    ...(withFlicker && { "Мерцание": "Да" }),
  };

  if (!basePrice) {
    return (
      <div className="bg-muted/30 rounded-xl p-6 flex flex-col items-center gap-3 text-center text-muted-foreground">
        <Icon name="Calculator" size={36} className="opacity-30" />
        <p className="text-sm">Введите размеры вывески, чтобы увидеть стоимость</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="text-center">
        <div className="text-lg md:text-xl font-bold text-secondary mb-1">Предварительная стоимость</div>
        <p className="text-xs text-muted-foreground">Финальная цена зависит от сложности дизайна и монтажа</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {TIERS.map(tier => {
          const price = Math.round((basePrice * tier.mult) / 100) * 100;
          return (
            <div
              key={tier.id}
              className={`relative rounded-xl border-2 p-4 flex flex-col gap-2 transition-all ${
                tier.highlight
                  ? "border-primary bg-primary/5 shadow-lg"
                  : "border-border bg-white"
              }`}
            >
              {tier.badge && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full whitespace-nowrap">
                  {tier.badge}
                </span>
              )}
              <div className="text-center pt-1">
                <div className={`text-xs font-semibold mb-0.5 ${tier.highlight ? "text-primary" : "text-muted-foreground"}`}>
                  {tier.label}
                </div>
                <div className={`text-2xl font-bold ${tier.highlight ? "text-primary" : "text-foreground"}`}>
                  {price.toLocaleString("ru-RU")} ₽
                </div>
                <div className="text-[10px] text-muted-foreground mt-0.5">{tier.description}</div>
              </div>
              <ul className="space-y-1 mt-1">
                {tier.items.map(item => (
                  <li key={item} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                    <Icon name="Check" size={12} className="mt-0.5 flex-shrink-0 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-2">
                <OrderDialog
                  calculatorType={`Гибкий неон — ${tier.label}`}
                  price={price}
                  details={details}
                >
                  <Button
                    className="w-full"
                    variant={tier.highlight ? "default" : "outline"}
                    size="sm"
                  >
                    Заказать расчёт
                  </Button>
                </OrderDialog>
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-[11px] text-muted-foreground text-center">
        В стоимость входит изготовление. Дизайн, доставка и монтаж — по договорённости с менеджером.
      </p>
    </div>
  );
}
