import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

interface SignageCalculatorProps {
  signageWidth: string;
  setSignageWidth: (value: string) => void;
  signageHeight: string;
  setSignageHeight: (value: string) => void;
  signageType: string;
  setSignageType: (value: string) => void;
  signageMaterial: string;
  setSignageMaterial: (value: string) => void;
  signageLighting: boolean;
  setSignageLighting: (value: boolean) => void;
  signageInstallation: boolean;
  setSignageInstallation: (value: boolean) => void;
  calculateSignagePrice: () => number;
}

const SignageCalculator = ({
  signageWidth,
  setSignageWidth,
  signageHeight,
  setSignageHeight,
  signageType,
  setSignageType,
  signageMaterial,
  setSignageMaterial,
  signageLighting,
  setSignageLighting,
  signageInstallation,
  setSignageInstallation,
  calculateSignagePrice
}: SignageCalculatorProps) => {
  return (
    <Card className="shadow-xl">
      <CardContent className="p-4 md:p-6 lg:p-8">
        <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Наружная реклама</h3>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          <div className="space-y-4 md:space-y-6">
            <div>
              <Label className="block mb-2">Ширина (метры)</Label>
              <Input 
                type="number" 
                placeholder="2.0" 
                value={signageWidth}
                onChange={(e) => setSignageWidth(e.target.value)}
                min="0"
                step="0.1"
              />
            </div>
            <div>
              <Label className="block mb-2">Высота (метры)</Label>
              <Input 
                type="number" 
                placeholder="1.0" 
                value={signageHeight}
                onChange={(e) => setSignageHeight(e.target.value)}
                min="0"
                step="0.1"
              />
            </div>
            <div>
              <Label className="block mb-2">Тип вывески</Label>
              <Select value={signageType} onValueChange={setSignageType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="световой-короб">Световой короб</SelectItem>
                  <SelectItem value="объемные-буквы">Объемные буквы</SelectItem>
                  <SelectItem value="плоская-вывеска">Плоская вывеска</SelectItem>
                  <SelectItem value="неоновая">Неоновая вывеска</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="block mb-2">Материал</Label>
              <Select value={signageMaterial} onValueChange={setSignageMaterial}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="акрил">Акрил</SelectItem>
                  <SelectItem value="композит">Композит</SelectItem>
                  <SelectItem value="пвх">ПВХ</SelectItem>
                  <SelectItem value="металл">Металл</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="lighting" 
                  checked={signageLighting}
                  onCheckedChange={(checked) => setSignageLighting(checked as boolean)}
                />
                <Label htmlFor="lighting" className="cursor-pointer">
                  Подсветка
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="installation" 
                  checked={signageInstallation}
                  onCheckedChange={(checked) => setSignageInstallation(checked as boolean)}
                />
                <Label htmlFor="installation" className="cursor-pointer">
                  Монтаж
                </Label>
              </div>
            </div>
          </div>
          <div className="bg-muted/30 rounded-lg p-4 md:p-6 lg:p-8 flex flex-col justify-center">
            <div className="text-center mb-4 md:mb-6">
              <div className="text-lg md:text-2xl font-bold text-secondary mb-2">Итого:</div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1">
                {calculateSignagePrice().toLocaleString('ru-RU')} ₽
              </div>
            </div>
            <p className="text-xs text-muted-foreground text-center mb-4 md:mb-6">
              Стоимость указана ориентировочно. Точная цена уточняется после осмотра объекта.
            </p>
            <Button className="w-full" size="lg">
              Заказать расчёт
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SignageCalculator;