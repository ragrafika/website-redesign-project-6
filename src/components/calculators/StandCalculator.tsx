import StandParametersForm from "./stand/StandParametersForm";
import StandPreviewCard from "./stand/StandPreviewCard";
import StandPriceSection from "./stand/StandPriceSection";

interface StandCalculatorProps {
  standWidth: string;
  setStandWidth: (value: string) => void;
  standHeight: string;
  setStandHeight: (value: string) => void;
  standThickness: string;
  setStandThickness: (value: string) => void;
  standPrinting: string;
  setStandPrinting: (value: string) => void;
  standHeaderText: string;
  setStandHeaderText: (value: string) => void;
  standFontFamily: string;
  setStandFontFamily: (value: string) => void;
  standBgColor: string;
  setStandBgColor: (value: string) => void;
  pocketsA5: string;
  setPocketsA5: (value: string) => void;
  pocketsA4: string;
  setPocketsA4: (value: string) => void;
  pocketsA3: string;
  setPocketsA3: (value: string) => void;
  pocketsA2: string;
  setPocketsA2: (value: string) => void;
  standImage: string;
  setStandImage: (value: string) => void;
  imagePosition: string;
  setImagePosition: (value: string) => void;
  calculateStandPrice: () => number;
}

const StandCalculator = ({
  standWidth,
  setStandWidth,
  standHeight,
  setStandHeight,
  standThickness,
  setStandThickness,
  standPrinting,
  setStandPrinting,
  standHeaderText,
  setStandHeaderText,
  standFontFamily,
  setStandFontFamily,
  standBgColor,
  setStandBgColor,
  pocketsA5,
  setPocketsA5,
  pocketsA4,
  setPocketsA4,
  pocketsA3,
  setPocketsA3,
  pocketsA2,
  setPocketsA2,
  standImage,
  setStandImage,
  imagePosition,
  setImagePosition,
  calculateStandPrice
}: StandCalculatorProps) => {
  return (
    <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
      <StandParametersForm
        standWidth={standWidth}
        setStandWidth={setStandWidth}
        standHeight={standHeight}
        setStandHeight={setStandHeight}
        standThickness={standThickness}
        setStandThickness={setStandThickness}
        standPrinting={standPrinting}
        setStandPrinting={setStandPrinting}
        standHeaderText={standHeaderText}
        setStandHeaderText={setStandHeaderText}
        standFontFamily={standFontFamily}
        setStandFontFamily={setStandFontFamily}
        standBgColor={standBgColor}
        setStandBgColor={setStandBgColor}
        pocketsA5={pocketsA5}
        setPocketsA5={setPocketsA5}
        pocketsA4={pocketsA4}
        setPocketsA4={setPocketsA4}
        pocketsA3={pocketsA3}
        setPocketsA3={setPocketsA3}
        pocketsA2={pocketsA2}
        setPocketsA2={setPocketsA2}
        standImage={standImage}
        setStandImage={setStandImage}
        imagePosition={imagePosition}
        setImagePosition={setImagePosition}
      />

      <div className="space-y-6">
        <StandPreviewCard
          standWidth={standWidth}
          standHeight={standHeight}
          standHeaderText={standHeaderText}
          standFontFamily={standFontFamily}
          standBgColor={standBgColor}
          standImage={standImage}
          imagePosition={imagePosition}
          pocketsA5={pocketsA5}
          pocketsA4={pocketsA4}
          pocketsA3={pocketsA3}
          pocketsA2={pocketsA2}
        />

        <StandPriceSection
          calculateStandPrice={calculateStandPrice}
          standWidth={standWidth}
          standHeight={standHeight}
          standThickness={standThickness}
          standPrinting={standPrinting}
          standHeaderText={standHeaderText}
          pocketsA5={pocketsA5}
          pocketsA4={pocketsA4}
          pocketsA3={pocketsA3}
          pocketsA2={pocketsA2}
          standImage={standImage}
          imagePosition={imagePosition}
          setStandImage={setStandImage}
        />
      </div>
    </div>
  );
};

export default StandCalculator;
