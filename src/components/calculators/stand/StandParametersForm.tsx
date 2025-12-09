import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface StandParametersFormProps {
  standWidth: string;
  setStandWidth: (value: string) => void;
  standHeight: string;
  setStandHeight: (value: string) => void;
  standThickness: string;
  setStandThickness: (value: string) => void;
  standPrinting: string;
  setStandPrinting: (value: string) => void;
  standHeaderText: string;
  setStandHeaderText: (value: string) => void;
  standFontFamily: string;
  setStandFontFamily: (value: string) => void;
  standBgColor: string;
  setStandBgColor: (value: string) => void;
  pocketsA5: string;
  setPocketsA5: (value: string) => void;
  pocketsA4: string;
  setPocketsA4: (value: string) => void;
  pocketsA3: string;
  setPocketsA3: (value: string) => void;
  pocketsA2: string;
  setPocketsA2: (value: string) => void;
  standImage: string;
  setStandImage: (value: string) => void;
  imagePosition: string;
  setImagePosition: (value: string) => void;
}

const StandParametersForm = ({
  standWidth,
  setStandWidth,
  standHeight,
  setStandHeight,
  standThickness,
  setStandThickness,
  standPrinting,
  setStandPrinting,
  standHeaderText,
  setStandHeaderText,
  standFontFamily,
  setStandFontFamily,
  standBgColor,
  setStandBgColor,
  pocketsA5,
  setPocketsA5,
  pocketsA4,
  setPocketsA4,
  pocketsA3,
  setPocketsA3,
  pocketsA2,
  setPocketsA2,
  standImage,
  setStandImage,
  imagePosition,
  setImagePosition,
}: StandParametersFormProps) => {
  const [isUploading, setIsUploading] = useState(false);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert('Файл слишком большой. Максимальный размер 5 МБ');
      return;
    }

    setIsUploading(true);
    const reader = new FileReader();
    reader.onloadend = () => {
      setStandImage(reader.result as string);
      setIsUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setStandImage('');
  };

  return (
    <Card className="shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl text-secondary">Параметры стенда</CardTitle>
      </CardHeader>
      <CardContent className="p-4 md:p-6 lg:p-8">
        <div className="space-y-4 md:space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label className="block mb-2">Ширина стенда (см)</Label>
              <Input 
                type="number" 
                placeholder="100" 
                value={standWidth}
                onChange={(e) => setStandWidth(e.target.value)}
                onClick={(e) => e.currentTarget.select()}
                min="10"
                max="500"
              />
            </div>
            <div>
              <Label className="block mb-2">Высота стенда (см)</Label>
              <Input 
                type="number" 
                placeholder="100" 
                value={standHeight}
                onChange={(e) => setStandHeight(e.target.value)}
                onClick={(e) => e.currentTarget.select()}
                min="10"
                max="500"
              />
            </div>
          </div>

          <div>
            <Label className="block mb-2">Толщина ПВХ</Label>
            <Select value={standThickness} onValueChange={setStandThickness}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3">3 мм</SelectItem>
                <SelectItem value="5">5 мм</SelectItem>
                <SelectItem value="8">8 мм</SelectItem>
                <SelectItem value="10">10 мм</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="block mb-2">Изображение</Label>
            <Select value={standPrinting} onValueChange={setStandPrinting}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="interior">Печать интерьерная без ламинации</SelectItem>
                <SelectItem value="laminated">Печать интерьерная с ламинацией</SelectItem>
                <SelectItem value="uv">УФ печать на виниловой пленке</SelectItem>
                <SelectItem value="oracal">Аппликация Оракал 641 (фон и текст)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="block mb-2">Текст заголовка</Label>
            <Input 
              type="text" 
              placeholder="ИНФОРМАЦИЯ" 
              value={standHeaderText}
              onChange={(e) => setStandHeaderText(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="block mb-2">Шрифт</Label>
              <Select value={standFontFamily} onValueChange={setStandFontFamily}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sans-serif">Без засечек</SelectItem>
                  <SelectItem value="serif">С засечками</SelectItem>
                  <SelectItem value="monospace">Моноширинный</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="block mb-2">Цвет фона</Label>
              <Select value={standBgColor} onValueChange={setStandBgColor}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="white">Белый</SelectItem>
                  <SelectItem value="blue">Синий</SelectItem>
                  <SelectItem value="green">Зеленый</SelectItem>
                  <SelectItem value="yellow">Желтый</SelectItem>
                  <SelectItem value="red">Красный</SelectItem>
                  <SelectItem value="gray">Серый</SelectItem>
                  <SelectItem value="beige">Бежевый</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label className="block mb-2">Загрузить свое изображение</Label>
            <div className="space-y-3">
              {!standImage ? (
                <div className="relative">
                  <input
                    type="file"
                    accept="image/webp,image/jpeg,image/jpg,image/png,image/gif,image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                    disabled={isUploading}
                  />
                  <label
                    htmlFor="image-upload"
                    className="flex items-center justify-center gap-2 w-full p-4 border-2 border-dashed border-muted-foreground/30 rounded-lg hover:border-primary/50 cursor-pointer transition-colors bg-muted/30"
                  >
                    <Icon name={isUploading ? "Loader2" : "Upload"} size={20} className={isUploading ? "animate-spin" : ""} />
                    <span className="text-sm text-muted-foreground">
                      {isUploading ? 'Загрузка...' : 'Нажмите для загрузки (макс. 5 МБ)'}
                    </span>
                  </label>
                </div>
              ) : (
                <div className="relative p-3 border border-muted-foreground/30 rounded-lg bg-muted/20">
                  <div className="flex items-center gap-3">
                    <img src={standImage} alt="Preview" className="w-16 h-16 object-cover rounded" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Изображение загружено</p>
                      <p className="text-xs text-muted-foreground">Выберите положение ниже</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={removeImage}
                      className="text-destructive hover:text-destructive"
                    >
                      <Icon name="X" size={16} />
                    </Button>
                  </div>
                </div>
              )}
              
              {standImage && (
                <div>
                  <Label className="block mb-2 text-sm">Положение изображения</Label>
                  <Select value={imagePosition} onValueChange={setImagePosition}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fill">Растянуть</SelectItem>
                      <SelectItem value="cover-vertical">Выровнять по вертикали</SelectItem>
                      <SelectItem value="cover-horizontal">Выровнять по горизонтали</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
          </div>

          <div>
            <Label className="block mb-2">Карманы для материалов</Label>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label className="block mb-1 text-sm">A5</Label>
                <Input 
                  type="number" 
                  placeholder="0" 
                  value={pocketsA5}
                  onChange={(e) => setPocketsA5(e.target.value)}
                  onClick={(e) => e.currentTarget.select()}
                  min="0"
                />
              </div>
              <div>
                <Label className="block mb-1 text-sm">A4</Label>
                <Input 
                  type="number" 
                  placeholder="0" 
                  value={pocketsA4}
                  onChange={(e) => setPocketsA4(e.target.value)}
                  onClick={(e) => e.currentTarget.select()}
                  min="0"
                />
              </div>
              <div>
                <Label className="block mb-1 text-sm">A3</Label>
                <Input 
                  type="number" 
                  placeholder="0" 
                  value={pocketsA3}
                  onChange={(e) => setPocketsA3(e.target.value)}
                  onClick={(e) => e.currentTarget.select()}
                  min="0"
                />
              </div>
              <div>
                <Label className="block mb-1 text-sm">A2</Label>
                <Input 
                  type="number" 
                  placeholder="0" 
                  value={pocketsA2}
                  onChange={(e) => setPocketsA2(e.target.value)}
                  onClick={(e) => e.currentTarget.select()}
                  min="0"
                />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StandParametersForm;