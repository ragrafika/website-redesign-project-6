import Header from "@/components/layout/Header";
import CalculatorSection from "@/components/sections/CalculatorSection";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";

const Calculator = () => {
  return (
    <div className="min-h-screen overflow-x-clip">
      <Header />

      <div className="pt-20">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: "Главная", path: "/" },
            { label: "Калькулятор" }
          ]} />
        </div>
        <CalculatorSection />
      </div>

      <Footer />
    </div>
  );
};

export default Calculator;
