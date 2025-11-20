import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CalculatorSection from "@/components/sections/CalculatorSection";

const Calculator = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img 
              src="https://cdn.poehali.dev/files/7cf77388-efea-4dbb-b3ab-3fe7c87d39b8.png" 
              alt="Графика" 
              className="h-12 w-auto"
            />
          </a>
          <nav className="hidden md:flex gap-8">
            <a href="/" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
            <a href="/#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
            <a href="/#portfolio" className="text-sm font-medium hover:text-primary transition-colors">Портфолио</a>
            <a href="/#advantages" className="text-sm font-medium hover:text-primary transition-colors">Преимущества</a>
            <a href="/calculator" className="text-sm font-medium text-primary">Калькуляторы</a>
            <a href="/#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
            <a href="/#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button size="lg" className="hidden sm:flex">
              <Icon name="Phone" size={18} className="mr-2" />
              Позвонить
            </Button>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button size="lg" variant="ghost" className="md:hidden">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <a 
                    href="/" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Главная
                  </a>
                  <a 
                    href="/#services" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Услуги
                  </a>
                  <a 
                    href="/#portfolio" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Портфолио
                  </a>
                  <a 
                    href="/#advantages" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Преимущества
                  </a>
                  <a 
                    href="/calculator" 
                    className="text-lg font-medium text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Калькуляторы
                  </a>
                  <a 
                    href="/#testimonials" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Отзывы
                  </a>
                  <a 
                    href="/#contacts" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Контакты
                  </a>
                  <Button size="lg" className="mt-4">
                    <Icon name="Phone" size={18} className="mr-2" />
                    Позвонить
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <div className="pt-20">
        <CalculatorSection />
      </div>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center">
              <img 
                src="https://cdn.poehali.dev/files/7cf77388-efea-4dbb-b3ab-3fe7c87d39b8.png" 
                alt="Графика" 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <div className="flex gap-8">
              <a href="/" className="text-sm hover:text-primary transition-colors">Главная</a>
              <a href="/#services" className="text-sm hover:text-primary transition-colors">Услуги</a>
              <a href="/#contacts" className="text-sm hover:text-primary transition-colors">Контакты</a>
            </div>
          </div>
          <div className="text-center mt-8 text-sm text-gray-400">
            © 2024 Графика. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Calculator;
