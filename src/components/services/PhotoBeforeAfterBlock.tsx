import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import PhotoRequestForm from "@/components/services/PhotoRequestForm";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const BEFORE_URL = "https://cdn.poehali.dev/projects/820f24d3-2a0c-446f-996e-d0f46f8895f8/bucket/92ac93c5-8e8b-48e7-9dd8-b5a889183c77.jpg";
const AFTER_URL = "https://cdn.poehali.dev/projects/820f24d3-2a0c-446f-996e-d0f46f8895f8/bucket/7e6c57dd-7e37-46b3-9562-8e4254febb17.jpg";

const PhotoBeforeAfterBlock = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-xl p-4 sm:p-6 md:p-8 mb-8 border-2 border-primary/20">
        <p className="text-gray-700 text-base md:text-lg text-center max-w-3xl mx-auto mb-6">
          Пришлите фото фасада — оценим задачу и подготовим расчёт
        </p>
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="flex flex-col gap-4">
            <div className="relative">
              <img
                src={BEFORE_URL}
                alt="Фото чистого фасада здания без вывесок"
                className="w-full rounded-lg object-cover aspect-[16/10]"
                loading="lazy"
              />
              <span className="absolute top-3 left-3 bg-white/90 text-gray-900 text-xs font-semibold px-3 py-1 rounded-full">
                Ваше фото
              </span>
            </div>
            <Button size="lg" className="w-full" onClick={() => setIsOpen(true)}>
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
                src={AFTER_URL}
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

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Отправьте фото фасада</DialogTitle>
          </DialogHeader>
          <div className="mt-2">
            <PhotoRequestForm onSuccess={() => setIsOpen(false)} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PhotoBeforeAfterBlock;
