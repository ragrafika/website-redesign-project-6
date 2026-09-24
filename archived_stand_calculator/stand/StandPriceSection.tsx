import { Button } from "@/components/ui/button";
import OrderDialog from "../OrderDialog";

interface StandPriceSectionProps {
  calculateStandPrice: () => number;
  standWidth: string;
  standHeight: string;
  standThickness: string;
  standPrinting: string;
  standHeaderText: string;
  pocketsA5: string;
  pocketsA4: string;
  pocketsA3: string;
  pocketsA2: string;
  standImage: string;
  imagePosition: string;
  setStandImage: (value: string) => void;
}

const StandPriceSection = ({
  calculateStandPrice,
  standWidth,
  standHeight,
  standThickness,
  standPrinting,
  standHeaderText,
  pocketsA5,
  pocketsA4,
  pocketsA3,
  pocketsA2,
  standImage,
  imagePosition,
  setStandImage
}: StandPriceSectionProps) => {
  const printingNames: Record<string, string> = {
    interior: 'Печать интерьерная без ламинации',
    exterior: 'Печать интерьерная с ламинацией',
    laminated: 'УФ печать на виниловой пленке'
  };

  const positionNames: Record<string, string> = {
    'fill': 'Растянуть',
    'cover-vertical': 'Выровнять по вертикали',
    'cover-horizontal': 'Выровнять по горизонтали'
  };

  const pocketCounts = {
    a5: parseInt(pocketsA5) || 0,
    a4: parseInt(pocketsA4) || 0,
    a3: parseInt(pocketsA3) || 0,
    a2: parseInt(pocketsA2) || 0
  };

  const pocketsText = Object.entries(pocketCounts)
    .filter(([_, count]) => count > 0)
    .map(([size, count]) => `${size.toUpperCase()}: ${count} шт`)
    .join(', ');

  const basePrice = calculateStandPrice();

  return (
    <div className="bg-muted/30 rounded-lg p-4 md:p-6 lg:p-8">
      <div className="text-center mb-4 md:mb-6">
        <div className="text-lg md:text-2xl font-bold text-secondary mb-2">Предварительная стоимость:</div>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-4 md:mb-6">
        <div className="flex flex-col items-center bg-white rounded-lg p-3 border border-border">
          <span className="text-xs text-muted-foreground mb-1">Эконом</span>
          <span className="text-sm font-semibold text-foreground">
            {basePrice.toLocaleString('ru-RU')} ₽
          </span>
        </div>
        <div className="flex flex-col items-center bg-primary/10 rounded-lg p-3 border-2 border-primary">
          <span className="text-xs text-primary font-medium mb-1">Стандарт</span>
          <span className="text-base font-bold text-primary">
            {Math.round(basePrice * 1.1).toLocaleString('ru-RU')} ₽
          </span>
        </div>
        <div className="flex flex-col items-center bg-white rounded-lg p-3 border border-border">
          <span className="text-xs text-muted-foreground mb-1">Премиум</span>
          <span className="text-sm font-semibold text-foreground">
            {Math.round(basePrice * 1.3).toLocaleString('ru-RU')} ₽
          </span>
        </div>
      </div>
      <p className="text-xs text-muted-foreground text-center mb-4 md:mb-6">
        В стоимость входит изготовление — дизайн, доставку и монтаж менеджер подберёт отдельно под ваш проект
      </p>
      <OrderDialog
        calculatorType="Информационные стенды"
        price={calculateStandPrice()}
        details={{
          "Размер": `${standWidth}×${standHeight} см`,
          "Толщина ПВХ": `${standThickness} мм`,
          "Печать": printingNames[standPrinting] || standPrinting,
          "Заголовок": standHeaderText,
          ...(pocketsText && { "Карманы": pocketsText }),
          ...(standImage && { "Изображение": "Прикреплено", "Положение изображения": positionNames[imagePosition] })
        }}
        imageData={standImage}
        onImageCleanup={() => setStandImage('')}
      >
        <Button className="w-full" size="lg">
          Заказать расчёт
        </Button>
      </OrderDialog>
    </div>
  );
};

export default StandPriceSection;