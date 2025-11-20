import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import BannerCalculator from "@/components/BannerCalculator";
import Icon from "@/components/ui/icon";

const CalculatorSection = () => {
  const [selectedCalculator, setSelectedCalculator] = useState<string>("stand");

  const [standWidth, setStandWidth] = useState<string>("100");
  const [standHeight, setStandHeight] = useState<string>("100");
  const [standThickness, setStandThickness] = useState<string>("3");
  const [standPrinting, setStandPrinting] = useState<string>("interior");
  const [standHeaderText, setStandHeaderText] = useState<string>("ИНФОРМАЦИЯ");
  const [standFontFamily, setStandFontFamily] = useState<string>("sans-serif");
  const [standBgColor, setStandBgColor] = useState<string>("white");
  const [pocketsA5, setPocketsA5] = useState<string>("0");
  const [pocketsA4, setPocketsA4] = useState<string>("4");
  const [pocketsA3, setPocketsA3] = useState<string>("0");
  const [pocketsA2, setPocketsA2] = useState<string>("0");

  const calculateStandPrice = () => {
    const width = parseFloat(standWidth) / 100;
    const height = parseFloat(standHeight) / 100;
    
    if (!width || !height || width <= 0 || height <= 0) return 0;
    
    const area = width * height;
    
    const thicknessPrices: Record<string, number> = {
      "3": 1200,
      "5": 1800,
      "10": 2500
    };
    
    const printingPrices: Record<string, number> = {
      "interior": 800,
      "exterior": 1200,
      "laminated": 1500
    };
    
    const pocketPrices: Record<string, number> = {
      "A5": 150,
      "A4": 200,
      "A3": 300,
      "A2": 400
    };
    
    let price = area * thicknessPrices[standThickness];
    
    price += area * printingPrices[standPrinting];
    
    price += parseInt(pocketsA5) * pocketPrices["A5"];
    price += parseInt(pocketsA4) * pocketPrices["A4"];
    price += parseInt(pocketsA3) * pocketPrices["A3"];
    price += parseInt(pocketsA2) * pocketPrices["A2"];
    
    return Math.round(price);
  };

  const renderStandPreview = () => {
    const width = parseFloat(standWidth) || 100;
    const height = parseFloat(standHeight) || 100;
    
    const maxDisplayWidth = 400;
    const maxDisplayHeight = 500;
    
    const scale = Math.min(
      maxDisplayWidth / width,
      maxDisplayHeight / height,
      4
    );
    
    const displayWidth = width * scale;
    const displayHeight = height * scale;
    
    const headerHeight = Math.max(displayHeight * 0.15, 30);
    const fontSize = Math.max(headerHeight * 0.5, 14);
    
    const bgColors: Record<string, string> = {
      "white": "linear-gradient(to right bottom, #ffffff, #f3f4f6)",
      "blue": "linear-gradient(to right bottom, #dbeafe, #bfdbfe)",
      "gray": "linear-gradient(to right bottom, #f3f4f6, #e5e7eb)",
      "beige": "linear-gradient(to right bottom, #fef3c7, #fde68a)"
    };
    
    const fontFamilies: Record<string, string> = {
      "sans-serif": "Arial, sans-serif",
      "serif": "Georgia, serif",
      "monospace": "Courier New, monospace"
    };
    
    const pocketSizes: Record<string, { width: number; height: number }> = {
      "A5": { width: (148 + 16) / 10, height: (210 + 8) / 10 },
      "A4": { width: (210 + 16) / 10, height: (297 + 8) / 10 },
      "A3": { width: (297 + 16) / 10, height: (420 + 8) / 10 },
      "A2": { width: (420 + 16) / 10, height: (594 + 8) / 10 }
    };
    
    const pockets = [];
    
    for (let i = 0; i < parseInt(pocketsA5); i++) {
      pockets.push({ format: "A5", ...pocketSizes["A5"] });
    }
    for (let i = 0; i < parseInt(pocketsA4); i++) {
      pockets.push({ format: "A4", ...pocketSizes["A4"] });
    }
    for (let i = 0; i < parseInt(pocketsA3); i++) {
      pockets.push({ format: "A3", ...pocketSizes["A3"] });
    }
    for (let i = 0; i < parseInt(pocketsA2); i++) {
      pockets.push({ format: "A2", ...pocketSizes["A2"] });
    }
    
    return (
      <div 
        className="border-4 border-primary/20 shadow-lg relative overflow-hidden"
        style={{
          width: `${displayWidth}px`,
          height: `${displayHeight}px`,
          margin: "0 auto",
          background: bgColors[standBgColor]
        }}
      >
        <div 
          className="absolute top-0 left-0 right-0 flex items-center justify-center text-secondary font-bold px-4"
          style={{ 
            height: `${headerHeight}px`
          }}
        >
          <div style={{
            fontSize: `${fontSize}px`,
            fontFamily: fontFamilies[standFontFamily],
            textAlign: "center"
          }}>
            {standHeaderText}
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-wrap justify-center items-end gap-2">
          {pockets.map((pocket, index) => (
            <div 
              key={index}
              className="bg-white/80 border-2 border-gray-300 flex items-center justify-center text-xs font-medium text-gray-600"
              style={{
                width: `${pocket.width}px`,
                height: `${pocket.height}px`
              }}
            >
              {pocket.format}
            </div>
          ))}
        </div>
        
        <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 text-xs font-medium text-muted-foreground">
          {standWidth}×{standHeight} см
        </div>
      </div>
    );
  };

  return (
    <>
      <section id="calculator" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Калькуляторы</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Выберите тип калькулятора для расчёта стоимости
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Button 
                  size="lg"
                  variant={selectedCalculator === "banner" ? "default" : "outline"}
                  onClick={() => setSelectedCalculator("banner")}
                  className="min-w-[200px]"
                >
                  <Icon name="Image" size={20} className="mr-2" />
                  Баннеры
                </Button>
                <Button 
                  size="lg"
                  variant={selectedCalculator === "stand" ? "default" : "outline"}
                  onClick={() => setSelectedCalculator("stand")}
                  className="min-w-[200px]"
                >
                  <Icon name="PanelTop" size={20} className="mr-2" />
                  Инфостенды
                </Button>
              </div>
            </div>
            
            {selectedCalculator === "stand" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl">Параметры стенда</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="width">Ширина (см)</Label>
                        <Input 
                          id="width"
                          type="number" 
                          placeholder="100" 
                          value={standWidth}
                          onChange={(e) => setStandWidth(e.target.value)}
                          min="10"
                          max="500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="height">Высота (см)</Label>
                        <Input 
                          id="height"
                          type="number" 
                          placeholder="100" 
                          value={standHeight}
                          onChange={(e) => setStandHeight(e.target.value)}
                          min="10"
                          max="500"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="thickness">Толщина ПВХ</Label>
                      <Select value={standThickness} onValueChange={setStandThickness}>
                        <SelectTrigger id="thickness">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="3">3 мм</SelectItem>
                          <SelectItem value="5">5 мм</SelectItem>
                          <SelectItem value="10">10 мм</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="printing">Изображение</Label>
                      <Select value={standPrinting} onValueChange={setStandPrinting}>
                        <SelectTrigger id="printing">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="interior">Печать интерьерная без ламинации</SelectItem>
                          <SelectItem value="exterior">Печать для улицы</SelectItem>
                          <SelectItem value="laminated">Печать с ламинацией</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="headerText">Текст заголовка</Label>
                      <Input 
                        id="headerText"
                        type="text"
                        placeholder="ИНФОРМАЦИЯ"
                        value={standHeaderText}
                        onChange={(e) => setStandHeaderText(e.target.value)}
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="font">Шрифт</Label>
                        <Select value={standFontFamily} onValueChange={setStandFontFamily}>
                          <SelectTrigger id="font">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sans-serif">Без засечек</SelectItem>
                            <SelectItem value="serif">С засечками</SelectItem>
                            <SelectItem value="monospace">Моноширинный</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bgColor">Цвет фона</Label>
                        <Select value={standBgColor} onValueChange={setStandBgColor}>
                          <SelectTrigger id="bgColor">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="white">Белый</SelectItem>
                            <SelectItem value="blue">Голубой</SelectItem>
                            <SelectItem value="gray">Серый</SelectItem>
                            <SelectItem value="beige">Бежевый</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Label>Карманы (опционально)</Label>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="a5" className="text-sm">А5</Label>
                          <Input 
                            id="a5"
                            type="number" 
                            placeholder="0"
                            value={pocketsA5}
                            onChange={(e) => setPocketsA5(e.target.value)}
                            min="0"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="a4" className="text-sm">А4</Label>
                          <Input 
                            id="a4"
                            type="number" 
                            placeholder="0"
                            value={pocketsA4}
                            onChange={(e) => setPocketsA4(e.target.value)}
                            min="0"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="a3" className="text-sm">А3</Label>
                          <Input 
                            id="a3"
                            type="number" 
                            placeholder="0"
                            value={pocketsA3}
                            onChange={(e) => setPocketsA3(e.target.value)}
                            min="0"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="a2" className="text-sm">А2</Label>
                          <Input 
                            id="a2"
                            type="number" 
                            placeholder="0"
                            value={pocketsA2}
                            onChange={(e) => setPocketsA2(e.target.value)}
                            min="0"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t">
                      <div className="flex justify-between items-center text-3xl font-bold mb-4">
                        <span className="text-secondary">Итого:</span>
                        <span className="text-primary">
                          {calculateStandPrice().toLocaleString('ru-RU')} ₽
                          <sup className="text-lg">*</sup>
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 text-center">
                        * Стоимость без учета макета, монтажа и других доп. услуг. Менеджер уточнит все требования и особенности заказа.
                      </p>
                      <Button className="w-full">
                        Отправить заявку с расчетом
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl">Визуализация</CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-center justify-center min-h-[500px] p-6">
                    {renderStandPreview()}
                  </CardContent>
                </Card>
              </div>
            )}
            
            {selectedCalculator === "banner" && <BannerCalculator />}
          </div>
        </div>
      </section>
    </>
  );
};

export default CalculatorSection;