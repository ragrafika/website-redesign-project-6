import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface VolumeLettersCalculatorProps {
  signText: string;
  setSignText: (value: string) => void;
  needsBracket: boolean;
  setNeedsBracket: (value: boolean) => void;
  needsInstallation: boolean;
  setNeedsInstallation: (value: boolean) => void;
  needsLighting: boolean;
  setNeedsLighting: (value: boolean) => void;
  calculatePrice: () => number;
}

const VolumeLettersCalculator = ({
  signText,
  setSignText,
  needsBracket,
  setNeedsBracket,
  needsInstallation,
  setNeedsInstallation,
  needsLighting,
  setNeedsLighting,
  calculatePrice,
}: VolumeLettersCalculatorProps) => {
  const [viewMode, setViewMode] = useState<'day' | 'night'>('day');
  
  const displayText = (signText || 'ВВЕДИТЕ ТЕКСТ').toUpperCase();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
        <Card className="shadow-xl">
          <CardContent className="p-6 md:p-8">
            <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Текст вывески</label>
              <Input 
                value={signText}
                onChange={(e) => setSignText(e.target.value)}
                placeholder="Введите текст для вывески"
                className="text-lg uppercase"
              />
              <p className="text-xs text-muted-foreground mt-2">
                Текст будет автоматически преобразован в заглавные буквы
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-muted/30 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <Checkbox 
                    id="bracket" 
                    checked={needsBracket}
                    onCheckedChange={(checked) => setNeedsBracket(checked as boolean)}
                  />
                  <div className="flex-1">
                    <label htmlFor="bracket" className="text-sm font-medium cursor-pointer block mb-1">
                      Требуется панель-кронштейн
                    </label>
                    <p className="text-xs text-muted-foreground">
                      Металлическая несущая конструкция для крепления объёмных букв к фасаду павильона
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <Checkbox 
                    id="lighting" 
                    checked={needsLighting}
                    onCheckedChange={(checked) => setNeedsLighting(checked as boolean)}
                  />
                  <div className="flex-1">
                    <label htmlFor="lighting" className="text-sm font-medium cursor-pointer block mb-1">
                      Вывеска световая
                    </label>
                    <p className="text-xs text-muted-foreground">
                      Буквы с внутренней LED-подсветкой для круглосуточной видимости
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <Checkbox 
                    id="installation" 
                    checked={needsInstallation}
                    onCheckedChange={(checked) => setNeedsInstallation(checked as boolean)}
                  />
                  <div className="flex-1">
                    <label htmlFor="installation" className="text-sm font-medium cursor-pointer block mb-1">
                      Требуется монтаж
                    </label>
                    <p className="text-xs text-muted-foreground">
                      Профессиональная установка вывески на павильон НТО
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-xl p-6 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">Предварительная стоимость:</span>
                <span className="text-2xl font-bold text-primary">
                  {calculatePrice().toLocaleString('ru-RU')} ₽
                </span>
              </div>
              <div className="border-t pt-3 space-y-1 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Объёмные буквы:</span>
                  <span>от 2000 ₽/буква</span>
                </div>
                {needsBracket && (
                  <div className="flex justify-between">
                    <span>Панель-кронштейн:</span>
                    <span>15 000 ₽</span>
                  </div>
                )}
                {needsLighting && (
                  <div className="flex justify-between">
                    <span>Световая подсветка:</span>
                    <span>20 000 ₽</span>
                  </div>
                )}
                {needsInstallation && (
                  <div className="flex justify-between">
                    <span>Монтаж:</span>
                    <span>10 000 ₽</span>
                  </div>
                )}
              </div>
              <p className="text-xs text-muted-foreground border-t pt-3">
                * Итоговая стоимость зависит от размера букв, типа подсветки и сложности монтажа
              </p>
            </div>

            <Button 
              size="lg" 
              className="w-full"
              disabled={!signText.trim()}
              onClick={() => {
                const contactSection = document.getElementById('contacts');
                const nameInput = document.querySelector('input[placeholder="Ваше имя"]') as HTMLInputElement;
                const messageInput = document.querySelector('textarea[placeholder="Ваше сообщение"]') as HTMLTextAreaElement;
                
                if (messageInput) {
                  const details = `Объёмные буквы на павильон НТО:\n- Текст: "${displayText}"\n${needsBracket ? '- Панель-кронштейн: Да\n' : ''}${needsLighting ? '- Вывеска световая: Да\n' : ''}${needsInstallation ? '- Монтаж: Да\n' : ''}\nПредварительная стоимость: ${calculatePrice().toLocaleString('ru-RU')} ₽`;
                  messageInput.value = details;
                }
                
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                  setTimeout(() => {
                    if (nameInput) nameInput.focus();
                  }, 800);
                }
              }}
            >
              <Icon name="Send" size={20} className="mr-2" />
              Отправить заявку
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-xl">
        <CardContent className="p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">Предпросмотр вывески</h3>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant={viewMode === 'day' ? 'default' : 'outline'}
                onClick={() => setViewMode('day')}
                className="gap-2"
              >
                <Icon name="Sun" size={16} />
                День
              </Button>
              <Button
                size="sm"
                variant={viewMode === 'night' ? 'default' : 'outline'}
                onClick={() => setViewMode('night')}
                className="gap-2"
              >
                <Icon name="Moon" size={16} />
                Ночь
              </Button>
            </div>
          </div>
          
          <div 
            className="rounded-xl p-8 md:p-12 min-h-[400px] flex items-center justify-center relative overflow-hidden transition-all duration-500"
            style={{ 
              backgroundColor: viewMode === 'day' ? '#4d5a60' : '#1a1f2e'
            }}
          >
            {viewMode === 'day' && (
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            )}
            
            <div className="relative z-10 flex flex-col items-center gap-8">
              {needsBracket && (
                <div className="relative flex items-center justify-center" style={{ width: '200px', height: '200px' }}>
                  <div 
                    className="absolute inset-0 bg-white rounded-full transition-shadow duration-500"
                    style={{
                      boxShadow: viewMode === 'night' && needsLighting 
                        ? '0 0 40px rgba(255,255,255,0.6), 0 0 80px rgba(255,255,255,0.3)' 
                        : '0 4px 20px rgba(0,0,0,0.2)'
                    }}
                  ></div>
                  <span className="relative text-gray-800 font-bold text-2xl">ЛОГО</span>
                </div>
              )}
              
              <div className="text-center">
                <div 
                  className="text-white font-bold tracking-wide transition-all duration-500"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '92px',
                    lineHeight: '1.2',
                    letterSpacing: '0.05em',
                    textShadow: viewMode === 'night' && needsLighting
                      ? '0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.5), 0 0 60px rgba(255,255,255,0.3)'
                      : viewMode === 'day'
                      ? '0 2px 8px rgba(0,0,0,0.3)'
                      : '0 2px 8px rgba(0,0,0,0.5)',
                    filter: viewMode === 'night' && needsLighting ? 'brightness(1.3)' : 'brightness(1)',
                    opacity: viewMode === 'night' && !needsLighting ? 0.6 : 1
                  }}
                >
                  {displayText}
                </div>
                <p 
                  className="text-sm mt-4 transition-colors duration-500"
                  style={{ 
                    color: viewMode === 'day' ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.5)' 
                  }}
                >
                  Высота букв: 23 см | Шрифт: Geometria Bold | Фон: RAL 7024
                </p>
              </div>
            </div>
          </div>
          
          <p className="text-xs text-muted-foreground text-center mt-4">
            Предпросмотр вывески на павильоне НТО. Итоговый вид может отличаться.
          </p>
        </CardContent>
      </Card>
      </div>
    </div>
  );
};

export default VolumeLettersCalculator;
