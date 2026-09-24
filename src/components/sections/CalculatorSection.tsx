import { useState } from "react";
import VolumeLettersCalculator from "@/components/calculators/VolumeLettersCalculator";

const CalculatorSection = () => {
  const [volumeSignText, setVolumeSignText] = useState<string>("");
  const [volumeNeedsBracket, setVolumeNeedsBracket] = useState<boolean>(false);
  const [volumeNeedsInstallation, setVolumeNeedsInstallation] = useState<boolean>(false);
  const [volumeNeedsLighting, setVolumeNeedsLighting] = useState<boolean>(false);

  const calculateVolumeLettersPrice = () => {
    if (!volumeSignText.trim()) return 0;
    
    const letterCount = volumeSignText.replace(/\s/g, '').length;
    const pricePerLetter = volumeNeedsLighting ? 4140 : 2530;
    let price = letterCount * pricePerLetter;
    
    const bracketCost = 20000;
    if (volumeNeedsBracket) price += bracketCost;
    
    if (volumeNeedsInstallation) {
      const installationCost = Math.max((price) * 0.2, 4100);
      price += installationCost;
    }
    
    return Math.round(price);
  };

  return (
    <>
      <section id="calculator" className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Калькулятор</h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
                Рассчитайте стоимость вывески для павильона
              </p>
            </div>
            
            <VolumeLettersCalculator
              signText={volumeSignText}
              setSignText={setVolumeSignText}
              needsBracket={volumeNeedsBracket}
              setNeedsBracket={setVolumeNeedsBracket}
              needsInstallation={volumeNeedsInstallation}
              setNeedsInstallation={setVolumeNeedsInstallation}
              needsLighting={volumeNeedsLighting}
              setNeedsLighting={setVolumeNeedsLighting}
              calculatePrice={calculateVolumeLettersPrice}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CalculatorSection;
