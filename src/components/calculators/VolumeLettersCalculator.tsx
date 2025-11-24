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
            className="rounded-xl min-h-[400px] flex items-center justify-center relative overflow-hidden transition-all duration-500"
            style={{ 
              backgroundColor: viewMode === 'day' ? '#4d5a60' : '#1a1f2e'
            }}
          >
            {viewMode === 'day' && (
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_70%)]" />
            )}
            
            {viewMode === 'night' && (
              <>
                <div className="absolute top-10 right-10 w-16 h-16 bg-yellow-100 rounded-full blur-sm opacity-60" />
                <div className="absolute top-32 left-16 w-2 h-2 bg-white rounded-full opacity-80" />
                <div className="absolute top-20 right-32 w-1.5 h-1.5 bg-white rounded-full opacity-60" />
                <div className="absolute bottom-24 left-24 w-1 h-1 bg-white rounded-full opacity-70" />
              </>
            )}

            <div className="relative w-full px-8 py-12 flex items-center justify-center">
              <div className="relative w-full max-w-4xl">
                <div 
                  className="bg-gradient-to-b from-gray-700 to-gray-800 rounded-t-lg py-4 mb-3 shadow-lg"
                  style={{
                    borderBottom: '3px solid #3a4a52'
                  }}
                >
                  <div className="text-center">
                    <span 
                      className="text-white tracking-[0.3em] inline-block px-8"
                      style={{
                        fontFamily: "'Geometria', sans-serif",
                        fontWeight: 700,
                        fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                        textTransform: 'uppercase',
                        textShadow: viewMode === 'night' && needsLighting 
                          ? '0 0 20px rgba(255,255,255,0.8), 0 0 30px rgba(255,255,255,0.6), 0 0 40px rgba(255,255,255,0.4)'
                          : '2px 2px 4px rgba(0,0,0,0.3)',
                        filter: viewMode === 'night' && needsLighting ? 'brightness(1.3)' : 'none',
                        letterSpacing: '0.1em'
                      }}
                    >
                      {displayText}
                    </span>
                  </div>
                </div>

                <img 
                  src="https://cdn.poehali.dev/files/def77a71-bbcd-4e4c-833e-8632dae4b1e1.png"
                  alt="Павильон НТО"
                  className="w-full h-auto rounded-b-lg shadow-xl"
                  style={{
                    filter: viewMode === 'night' ? 'brightness(0.7) contrast(1.1)' : 'none'
                  }}
                />

                {needsBracket && (
                  <div 
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent"
                    style={{
                      boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
                    }}
                  />
                )}
              </div>
            </div>

            {needsLighting && viewMode === 'night' && (
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
            )}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div className="bg-muted/30 rounded-lg p-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Ruler" size={16} />
                <span>Размер букв: 200-300 мм</span>
              </div>
            </div>
            <div className="bg-muted/30 rounded-lg p-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Box" size={16} />
                <span>Глубина: 50-80 мм</span>
              </div>
            </div>
            <div className="bg-muted/30 rounded-lg p-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Layers" size={16} />
                <span>Материал: акрил/ПВХ</span>
              </div>
            </div>
            <div className="bg-muted/30 rounded-lg p-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Zap" size={16} />
                <span>{needsLighting ? 'LED-подсветка' : 'Без подсветки'}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex gap-3">
              <Icon name="Info" size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-blue-900">
                <p className="font-medium mb-1">Технические особенности:</p>
                <ul className="space-y-1 text-blue-800">
                  <li>• Шрифт: Geometria Bold</li>
                  <li>• Крепление: на панель-кронштейн или напрямую к фасаду</li>
                  <li>• Срок изготовления: 5-7 рабочих дней</li>
                  <li>• Гарантия: 12 месяцев</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
  );
};

export default VolumeLettersCalculator;
