import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import PhotoRequestForm from "@/components/services/PhotoRequestForm";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const CalculateBlock = () => {
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div id="calculate" className="scroll-mt-28 bg-white rounded-xl p-4 sm:p-6 md:p-8 border-2 border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary text-center mb-2">Рассчитаем вывеску</h3>
            <p className="text-gray-700 text-base md:text-lg text-center max-w-3xl mx-auto mb-6">
              Пришлите фото фасада — оценим задачу и подготовим расчёт
            </p>
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <img
                    src="https://cdn.poehali.dev/projects/820f24d3-2a0c-446f-996e-d0f46f8895f8/bucket/660b2a01-6d77-41f8-8684-46050d85cd2c.jpg"
                    alt="Фото чистого фасада здания без вывесок"
                    className="w-full rounded-lg object-cover aspect-[16/10]"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 text-gray-900 text-xs font-semibold px-3 py-1 rounded-full">
                    Ваше фото
                  </span>
                </div>
                <Button size="lg" className="w-full" onClick={() => setIsPhotoOpen(true)}>
                  <Icon name="Camera" size={20} className="mr-2" />
                  Отправить фото
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Снимите фасад прямо, целиком, при дневном свете
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <img
                    src="https://cdn.poehali.dev/projects/820f24d3-2a0c-446f-996e-d0f46f8895f8/bucket/ab18bc6c-da6e-4bc8-841c-7c8caeab460f.jpg"
                    alt="Фотопривязка вывески к фасаду здания"
                    className="w-full rounded-lg object-cover aspect-[16/10]"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Фотопривязка
                  </span>
                </div>
                <p className="text-sm text-gray-700">
                  Визуализацию вывески вы увидите до запуска в работу.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dialog open={isPhotoOpen} onOpenChange={setIsPhotoOpen}>
        <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Отправьте фото фасада</DialogTitle>
          </DialogHeader>
          <div className="mt-2">
            <PhotoRequestForm onSuccess={() => setIsPhotoOpen(false)} />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CalculateBlock;
