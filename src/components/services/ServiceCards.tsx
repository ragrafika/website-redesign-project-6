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
      title: 'Вывески под ключ',
      link: '/signage-turnkey'
    },
    {
      id: 'interior',
      icon: 'Home',
      title: 'Интерьерная реклама',
      link: '/interior'
    },
    {
      id: 'transport',
      icon: 'Truck',
      title: 'Брендирование транспорта',
      link: '/transport'
    },
    {
      id: 'banners',
      icon: 'Flag',
      title: 'Баннеры и штендеры',
      link: '/banners'
    },
    {
      id: 'design',
      icon: 'PenTool',
      title: 'Разработка дизайна',
      link: '/design'
    },
    {
      id: 'installation',
      icon: 'Wrench',
      title: 'Монтаж и установка',
      link: '/installation'
    }
  ];

  const handleCardClick = (link: string, isCurrentPage: boolean) => {
    if (isCurrentPage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = link;
    }
  };

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {allServices.map(service => {
        const isCurrentPage = service.id === excludeService;
        return (
          <Card 
            key={service.id} 
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => handleCardClick(service.link, isCurrentPage)}
          >
            <CardContent className="p-6">
              <Icon name={service.icon} size={32} className="text-primary mb-3" />
              <h3 className="font-semibold text-lg mb-4">{service.title}</h3>
              <Button variant="link" className="p-0 h-auto pointer-events-none">
                Подробнее →
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default ServiceCards;