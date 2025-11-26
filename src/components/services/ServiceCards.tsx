import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface ServiceCardsProps {
  excludeService?: 'signage' | 'design' | 'installation' | 'transport' | 'interior' | 'banners';
}

const ServiceCards = ({ excludeService }: ServiceCardsProps) => {
  const allServices = [
    {
      id: 'signage',
      icon: 'Store',
      title: 'Вывески и световые короба',
      link: '/services/signage'
    },
    {
      id: 'stands',
      icon: 'Clipboard',
      title: 'Информационные стенды',
      link: '/#calculator'
    },
    {
      id: 'design',
      icon: 'Palette',
      title: 'Дизайн и брендирование',
      link: '/services/design'
    },
    {
      id: 'installation',
      icon: 'Wrench',
      title: 'Монтаж и установка',
      link: '/services/installation'
    },
    {
      id: 'transport',
      icon: 'Truck',
      title: 'Брендирование транспорта',
      link: '/services/transport'
    },
    {
      id: 'interior',
      icon: 'PaintBucket',
      title: 'Интерьерная печать',
      link: '/services/interior'
    },
    {
      id: 'banners',
      icon: 'Flag',
      title: 'Баннеры и штендеры',
      link: '/services/banners'
    }
  ];

  const filteredServices = allServices.filter(service => service.id !== excludeService);

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {filteredServices.map(service => (
        <Card key={service.id} className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <Icon name={service.icon} size={32} className="text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-4">{service.title}</h3>
            <Button variant="link" className="p-0 h-auto" asChild>
              <a href={service.link}>Подробнее →</a>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ServiceCards;