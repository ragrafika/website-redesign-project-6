import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export const portfolioItems = [
  {
    image: "https://cdn.poehali.dev/files/produkti.jpg",
    title: "Павильон ПРОДУКТЫ",
    description: "Световая вывеска для павильона с LED-подсветкой",
    category: "Наружная реклама"
  },
  {
    image: "https://cdn.poehali.dev/files/nto-len60.jpg",
    title: "Павильон овощи фрукты",
    description: "Фасадные вывески для торгового павильона",
    category: "Вывески и световые короба"
  },
  {
    image: "https://cdn.poehali.dev/files/alesha.jpg",
    title: "Магазин мебели Алёша",
    description: "Оформление фасада с объёмными буквами",
    category: "Наружная реклама"
  },
  {
    image: "https://cdn.poehali.dev/files/eapteka.jpg",
    title: "СберЕаптека",
    description: "Объемные буквы с подсветкой на металлокаркасе для аптеки",
    category: "Вывески и световые короба"
  },
  {
    image: "https://cdn.poehali.dev/files/dns-elegant.jpg",
    title: "DNS Элегант",
    description: "Объемные световые буквы на подложке из АКП",
    category: "Наружная реклама"
  },
  {
    image: "https://cdn.poehali.dev/files/koffeina.jpg",
    title: "Кофейня V.I.P.",
    description: "Комплексное оформление фасада. Ремонт фасада, объёмные световые буквы на металлокаркасе, козырек из монолитного поликарбоната",
    category: "Вывески и световые короба"
  },
  {
    image: "https://cdn.poehali.dev/files/baby.jpg",
    title: "Баби Смайл",
    description: "Световая вывеска для детской стоматологии",
    category: "Вывески и световые короба"
  },
  {
    image: "https://cdn.poehali.dev/files/allauto.jpg",
    title: "All auto",
    description: "Объемные буквы на контурной подложке",
    category: "Наружная вывеска"
  },
  {
    image: "https://cdn.poehali.dev/files/domkulturi.jpg",
    title: "Дом культуры",
    description: "Вывеска с LED-подсветкой и прямым монтажем на вентилируемый фасад",
    category: "Наружная реклама"
  },
  {
    image: "https://cdn.poehali.dev/files/mvideo.jpg",
    title: "М.Видео",
    description: "Интерьерная навигация из световых вывесок для М.Видео",
    category: "Интерьерная реклама"
  },
  {
    image: "https://cdn.poehali.dev/files/zeya.jpg",
    title: "Зея Благовещенская кондитерская фабрика",
    description: "Фасадная вывеска для кондитерской фабрики",
    category: "Наружная реклама"
  },
  {
    image: "https://cdn.poehali.dev/files/86cdfc1b-1026-4941-9def-af05d5a94c97.jpg",
    title: "Tarkett",
    description: "Комплексное брендирование фасада торгового центра напольных покрытий",
    category: "Наружная реклама"
  },
  {
    image: "https://cdn.poehali.dev/projects/820f24d3-2a0c-446f-996e-d0f46f8895f8/bucket/dd39487e-3741-4b97-98bb-f351979961bb.jpg",
    title: "Магазин Пчеловодство",
    description: "Фасадная вывеска и круговая консольная вывеска. Фото до монтажа",
    category: "Наружная реклама"
  },
  {
    image: "https://cdn.poehali.dev/projects/820f24d3-2a0c-446f-996e-d0f46f8895f8/bucket/3f78c13c-c979-4385-aaea-6b95591f49a8.JPG",
    title: "Магазин Пчеловодство",
    description: "Световая вывеска и консоль с логотипом. Результат, дневное фото",
    category: "Наружная реклама"
  },
  {
    image: "https://cdn.poehali.dev/projects/820f24d3-2a0c-446f-996e-d0f46f8895f8/bucket/f034a4c9-41e3-4c5b-97ff-7ae91f339933.jpg",
    title: "Магазин Пчеловодство",
    description: "Световая вывеска и консоль с логотипом. Результат, вечернее фото",
    category: "Вывески и световые короба"
  },
  {
    image: "https://cdn.poehali.dev/projects/820f24d3-2a0c-446f-996e-d0f46f8895f8/bucket/bee6b3cb-101d-468b-94c7-a56b230b8a5e.JPG",
    title: "Образовательный центр Школьник",
    description: "Объёмные буквы и логотип на металлокаркасе. Дневное фото",
    category: "Наружная реклама"
  },
  {
    image: "https://cdn.poehali.dev/projects/820f24d3-2a0c-446f-996e-d0f46f8895f8/bucket/fefb8c2a-a1d5-43bf-a8b5-2485fe3a9e5a.jpg",
    title: "Образовательный центр Школьник",
    description: "Объёмные буквы и логотип с контражурной подсветкой. Вечернее фото",
    category: "Вывески и световые короба"
  },
  {
    image: "https://cdn.poehali.dev/projects/820f24d3-2a0c-446f-996e-d0f46f8895f8/bucket/96a5953c-076c-4b06-a640-e78ac6ec90f2.jpg",
    title: "Парикмахерская",
    description: "Фасад до замены вывески",
    category: "Наружная реклама"
  },
  {
    image: "https://cdn.poehali.dev/projects/820f24d3-2a0c-446f-996e-d0f46f8895f8/bucket/d5585b18-4f7c-46f4-8b64-fd0e1124136d.jpg",
    title: "Парикмахерская",
    description: "Объёмные световые буквы на козырьке входной группы. Вечернее фото",
    category: "Вывески и световые короба"
  },
  {
    image: "https://cdn.poehali.dev/projects/820f24d3-2a0c-446f-996e-d0f46f8895f8/bucket/7da5c24b-22b1-4296-900d-292d1c29cc72.jpg",
    title: "Магазин мебели Алёша",
    description: "Фасад с композитными панелями до монтажа вывески",
    category: "Наружная реклама"
  }
];

interface PortfolioGalleryProps {
  category?: string;
  columns?: 2 | 3 | 4;
  showTitle?: boolean;
  limit?: number;
}

export function PortfolioGallery({ 
  category, 
  columns = 3, 
  showTitle = true,
  limit 
}: PortfolioGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof portfolioItems[0] | null>(null);

  let photos = category
    ? portfolioItems.filter(p => p.category === category)
    : portfolioItems;

  if (limit) photos = photos.slice(0, limit);

  if (photos.length === 0) return null;

  return (
    <>
      <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-6`}>
        {photos.map((photo, index) => (
          <Card 
            key={index}
            className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setSelectedPhoto(photo)}
          >
            <CardContent className="p-0">
              <div className="aspect-video relative overflow-hidden bg-muted">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              {showTitle && (photo.title || photo.description) && (
                <div className="p-4">
                  {photo.title && (
                    <h3 className="font-semibold mb-1">{photo.title}</h3>
                  )}
                  {photo.description && (
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {photo.description}
                    </p>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{selectedPhoto?.title || 'Портфолио'}</DialogTitle>
          </DialogHeader>
          {selectedPhoto && (
            <div className="space-y-4">
              <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="object-contain w-full h-full"
                />
              </div>
              {selectedPhoto.description && (
                <p className="text-muted-foreground">{selectedPhoto.description}</p>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}