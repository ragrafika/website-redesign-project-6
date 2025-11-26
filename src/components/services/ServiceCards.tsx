import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ServiceCards = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <Card className="hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <Icon name="Store" size={32} className="text-primary mb-3" />
          <h3 className="font-semibold text-lg mb-2">Вывески и световые короба</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Световые короба, объемные буквы, панель-кронштейны и другие решения
          </p>
          <Button variant="link" className="p-0 h-auto" asChild>
            <a href="/services/signage">Подробнее →</a>
          </Button>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <Icon name="Clipboard" size={32} className="text-primary mb-3" />
          <h3 className="font-semibold text-lg mb-2">Информационные стенды</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Стенды из ПВХ с карманами для документов и материалов
          </p>
          <Button variant="link" className="p-0 h-auto" asChild>
            <a href="/#calculator#stand">Подробнее →</a>
          </Button>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <Icon name="Palette" size={32} className="text-primary mb-3" />
          <h3 className="font-semibold text-lg mb-2">Дизайн и брендирование</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Разработка макетов, фирменного стиля и визуализация
          </p>
          <Button variant="link" className="p-0 h-auto" asChild>
            <a href="/services/design">Подробнее →</a>
          </Button>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <Icon name="Wrench" size={32} className="text-primary mb-3" />
          <h3 className="font-semibold text-lg mb-2">Монтаж и установка</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Профессиональный монтаж рекламных конструкций любой сложности
          </p>
          <Button variant="link" className="p-0 h-auto" asChild>
            <a href="/services/installation">Подробнее →</a>
          </Button>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <Icon name="Truck" size={32} className="text-primary mb-3" />
          <h3 className="font-semibold text-lg mb-2">Брендирование транспорта</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Оклейка автомобилей пленками и создание мобильной рекламы
          </p>
          <Button variant="link" className="p-0 h-auto" asChild>
            <a href="/services/transport">Подробнее →</a>
          </Button>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <Icon name="PaintBucket" size={32} className="text-primary mb-3" />
          <h3 className="font-semibold text-lg mb-2">Интерьерная печать</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Широкоформатная печать для оформления интерьеров и помещений
          </p>
          <Button variant="link" className="p-0 h-auto" asChild>
            <a href="/services/interior">Подробнее →</a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceCards;
