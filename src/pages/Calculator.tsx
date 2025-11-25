import Header from "@/components/layout/Header";
import CalculatorSection from "@/components/sections/CalculatorSection";
import Footer from "@/components/Footer";

const Calculator = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />

      <div className="pt-20">
        <div className="bg-gray-50 py-4 border-b">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm">
              <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Главная
              </a>
              <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
              <span className="text-foreground font-medium">Калькуляторы</span>
            </nav>
          </div>
        </div>
        <CalculatorSection />
      </div>

      <Footer />
    </div>
  );
};

export default Calculator;