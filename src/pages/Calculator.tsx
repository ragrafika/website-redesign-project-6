import Header from "@/components/layout/Header";
import CalculatorSection from "@/components/sections/CalculatorSection";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";

const Calculator = () => {
  return (
    <div className="min-h-screen overflow-x-clip">
      <Header />

      <div className="pt-20">
        <Breadcrumbs fullWidth items={[
          { label: "Главная", path: "/" },
          { label: "Калькулятор" }
        ]} />
        <CalculatorSection />
      </div>

      <Footer />
    </div>
  );
};

export default Calculator;
