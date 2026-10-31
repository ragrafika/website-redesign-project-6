import { Link } from "@/lib/router-compat";
import { Button } from '@/components/ui/button';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import Icon from '@/components/ui/icon';
import VolumeQuizCalculator from '@/components/calculators/volume-quiz/VolumeQuizCalculator';

export default function VolumeLettersCalculatorPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-white sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 h-[72px] md:h-20 flex items-center justify-between">
          <Link to="/" className="font-bold text-lg tracking-tight">
            <span className="text-primary">РА</span> Графика
          </Link>
          <a
            href="tel:+74162770778"
            className="flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-primary transition-colors"
          >
            <Icon name="Phone" size={16} />
            <span className="hidden sm:inline">+7 (4162) 77-07-78</span>
            <span className="sm:hidden">Позвонить</span>
          </a>
        </div>
      </header>

      <Breadcrumbs fullWidth items={[
        { label: "Главная", path: "/" },
        { label: "Калькулятор объёмных букв" }
      ]} />

      <main className="container mx-auto px-4 pb-8 sm:pb-12 max-w-2xl">
        <VolumeQuizCalculator />
      </main>

      <footer className="border-t bg-muted/30 mt-16">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <p>
            <a href="tel:+74162770778" className="text-foreground font-semibold hover:text-primary">
              +7 (4162) 77-07-78
            </a>
            {' · '}
            <a href="mailto:ragrafika.info@mail.ru" className="hover:text-primary">
              ragrafika.info@mail.ru
            </a>
          </p>
          <p className="mt-1">г. Благовещенск, ул. Пушкина 1, оф. 23 · Пн–Пт 9:00–18:00</p>
          <div className="flex justify-center gap-4 mt-3 text-xs">
            <Link to="/privacy" className="hover:text-primary">Политика конфиденциальности</Link>
            <Link to="/consent" className="hover:text-primary">Согласие на обработку данных</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
