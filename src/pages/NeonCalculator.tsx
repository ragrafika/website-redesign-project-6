import { useState } from "react";
import NeonParametersForm from "@/components/calculators/neon/NeonParametersForm";
import NeonPreviewCard from "@/components/calculators/neon/NeonPreviewCard";
import NeonPriceSection from "@/components/calculators/neon/NeonPriceSection";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NeonCalculator() {
  const [signText, setSignText] = useState("Coffee Time");
  const [fontId, setFontId] = useState("script");
  const [colorId, setColorId] = useState("pink");
  const [backingId, setBackingId] = useState("dark");
  const [diameter, setDiameter] = useState("10");
  const [width, setWidth] = useState("80");
  const [height, setHeight] = useState("40");
  const [withDimmer, setWithDimmer] = useState(false);
  const [withRemote, setWithRemote] = useState(false);
  const [withFlicker, setWithFlicker] = useState(false);

  const shared = { signText, fontId, colorId, backingId, diameter, width, height };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">

      <header className="border-b border-white/5 bg-black/40 backdrop-blur-sm sticky top-0 z-20">
        <div className="container mx-auto px-4 py-3 flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" size="sm" className="text-white/60 hover:text-white gap-2">
              <Icon name="ArrowLeft" size={16} />
              На главную
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_8px_#ff2d78]" />
            <span className="text-white/80 text-sm font-medium">Калькулятор гибкого неона</span>
            <span className="bg-amber-500/20 text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-500/30">
              ТЕСТ
            </span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-12">

        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            <Icon name="Zap" size={12} />
            Гибкий неон LED
          </div>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            style={{
              fontFamily: "Impact, sans-serif",
              color: "#fff",
              textShadow: "0 0 20px #ff2d78, 0 0 40px #ff2d7844",
              letterSpacing: "0.02em",
            }}
          >
            NEON SIGN
          </h1>
          <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto">
            Настройте вывеску из гибкого неона и сразу увидите, как она будет выглядеть днём и ночью
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 w-full overflow-hidden mb-8">

          <div className="space-y-6">
            <div className="[&_.card]:bg-slate-900/80 [&_.card]:border-white/10 [&_.card-title]:text-white [&_label]:text-white/70 [&_.input]:bg-slate-800 [&_.input]:border-white/10 [&_.input]:text-white [&_.input]:placeholder:text-white/30 [&_.select-trigger]:bg-slate-800 [&_.select-trigger]:border-white/10 [&_.select-trigger]:text-white">
              <NeonParametersForm
                signText={signText} setSignText={setSignText}
                fontId={fontId} setFontId={setFontId}
                colorId={colorId} setColorId={setColorId}
                backingId={backingId} setBackingId={setBackingId}
                diameter={diameter} setDiameter={setDiameter}
                width={width} setWidth={setWidth}
                height={height} setHeight={setHeight}
                withDimmer={withDimmer} setWithDimmer={setWithDimmer}
                withRemote={withRemote} setWithRemote={setWithRemote}
                withFlicker={withFlicker} setWithFlicker={setWithFlicker}
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="[&_.card]:bg-slate-900/80 [&_.card]:border-white/10 [&_.card-title]:text-white">
              <NeonPreviewCard
                {...shared}
                withFlicker={withFlicker}
              />
            </div>

            <div className="bg-slate-900/80 border border-white/10 rounded-xl p-4 md:p-6">
              <NeonPriceSection
                {...shared}
                withDimmer={withDimmer}
                withRemote={withRemote}
                withFlicker={withFlicker}
              />
            </div>
          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mt-4 text-center">
          {[
            { icon: "Shield", title: "IP65 / IP67", text: "Защита от влаги и пыли" },
            { icon: "Zap", title: "50 000 часов", text: "Ресурс светодиодов" },
            { icon: "Truck", title: "Доставка", text: "По всей России" },
          ].map(item => (
            <div key={item.title} className="flex flex-col items-center gap-2 bg-white/5 rounded-xl p-4 border border-white/5">
              <Icon name={item.icon as "Shield"} size={22} className="text-pink-400" />
              <div className="text-white font-semibold text-sm">{item.title}</div>
              <div className="text-white/40 text-xs">{item.text}</div>
            </div>
          ))}
        </div>

      </main>

    </div>
  );
}
