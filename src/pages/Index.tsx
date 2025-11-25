import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import HeroSection from "@/components/sections/HeroSection";
import ContentSections from "@/components/sections/ContentSections";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center flex-shrink-0">
            <img 
              src="https://cdn.poehali.dev/files/7cf77388-efea-4dbb-b3ab-3fe7c87d39b8.png" 
              alt="Графика" 
              className="h-10 md:h-12 w-auto"
            />
          </div>
          <div className="flex items-center gap-3 md:gap-4 flex-1 justify-end">
            <a 
              href="https://wa.me/74162227678" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full flex items-center justify-center transition-all hover:scale-110"
              title="Написать в WhatsApp"
            >
              <Icon name="MessageCircle" size={20} />
            </a>
            <a 
              href="https://t.me/ragrafika" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#0088cc] hover:bg-[#006699] text-white rounded-full flex items-center justify-center transition-all hover:scale-110"
              title="Написать в Telegram"
            >
              <Icon name="Send" size={20} />
            </a>
            <a 
              href="https://max.app/?phone=74162227678" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#FF4D00] hover:bg-[#E64400] text-white rounded-full flex items-center justify-center transition-all hover:scale-110"
              title="Написать в МАХ"
            >
              <Icon name="MessageSquare" size={20} />
            </a>
            <a 
              href="tel:+74162227678"
              className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors whitespace-nowrap"
            >
              <Icon name="Phone" size={18} />
              8 (4162) 22-76-78
            </a>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button size="lg" variant="ghost">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <a 
                    href="#services" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Услуги
                  </a>
                  <a 
                    href="#calculators" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Калькуляторы
                  </a>
                  <a 
                    href="#portfolio" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Портфолио
                  </a>
                  <a 
                    href="#advantages" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Преимущества
                  </a>
                  <a 
                    href="#testimonials" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Отзывы
                  </a>
                  <a 
                    href="#contacts" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Контакты
                  </a>
                  <Button size="lg" className="mt-4" asChild>
                    <a href="tel:+74162227678">
                      <Icon name="Phone" size={18} className="mr-2" />
                      +7 (4162) 22-76-78
                    </a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <HeroSection />
      <ContentSections />
      <ContactSection />
    </div>
  );
};

export default Index;