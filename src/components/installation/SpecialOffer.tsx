import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface SpecialOfferProps {
  onOpenDialog: () => void;
}

const SpecialOffer = ({ onOpenDialog }: SpecialOfferProps) => {
  return (
    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-4 sm:p-6 md:p-8 mb-8 border-2 border-primary/20">
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="bg-primary text-primary-foreground rounded-full p-2 sm:p-3 flex-shrink-0">
          <Icon name="Gift" size={20} className="sm:w-6 sm:h-6" />
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-2">Специальное предложение</h3>
          <p className="text-gray-700 mb-4">
            При заказе полного цикла (производство + монтаж) — <span className="font-semibold text-primary">бесплатно установим фотореле "день/ночь"</span>. Установим качественно и безопасно.
          </p>
          <Button size="default" className="shadow-lg w-full sm:w-auto" onClick={onOpenDialog}>
            Получить расчет
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
