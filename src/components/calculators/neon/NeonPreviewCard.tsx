import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRef, useEffect, useState } from "react";
import Icon from "@/components/ui/icon";
import { NEON_FONTS, NEON_COLORS, NEON_BACKINGS } from "./NeonParametersForm";

interface NeonPreviewCardProps {
  signText: string;
  fontId: string;
  colorId: string;
  backingId: string;
  diameter: string;
  width: string;
  height: string;
  withFlicker: boolean;
}

export default function NeonPreviewCard({
  signText,
  fontId,
  colorId,
  backingId,
  diameter,
  width,
  height,
  withFlicker,
}: NeonPreviewCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(500);
  const [isNight, setIsNight] = useState(true);
  const [flickerOn, setFlickerOn] = useState(true);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth);
    };
    update();
    const obs = new ResizeObserver(update);
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!withFlicker) { setFlickerOn(true); return; }
    const flicker = () => {
      setFlickerOn(false);
      setTimeout(() => setFlickerOn(true), 60 + Math.random() * 80);
    };
    const id = setInterval(flicker, 2500 + Math.random() * 2000);
    return () => clearInterval(id);
  }, [withFlicker]);

  const color = NEON_COLORS.find(c => c.id === colorId) || NEON_COLORS[0];
  const font = NEON_FONTS.find(f => f.id === fontId) || NEON_FONTS[0];
  const backing = NEON_BACKINGS.find(b => b.id === backingId) || NEON_BACKINGS[0];
  const d = parseInt(diameter) || 10;

  const w = parseFloat(width) || 60;
  const h = parseFloat(height) || 30;

  const maxW = Math.min(containerWidth - 16, 560);
  const maxH = Math.min(Math.round(maxW * 0.6), 340);
  const aspect = w / h;

  let pvW = maxW;
  let pvH = maxW / aspect;
  if (pvH > maxH) { pvH = maxH; pvW = maxH * aspect; }

  const fontSize = Math.min(pvW / (signText.length || 6) * 1.6, pvH * 0.5, 90);
  const glowSize = Math.round((d / 10) * (isNight ? 18 : 6));
  const glowOpacity = flickerOn ? 1 : 0.15;

  const nightGlow = `
    0 0 ${glowSize}px ${color.glow},
    0 0 ${glowSize * 2}px ${color.glow}88,
    0 0 ${glowSize * 4}px ${color.glow}44
  `;
  const dayGlow = `0 0 ${glowSize}px ${color.glow}88`;
  const textShadow = isNight
    ? (flickerOn ? nightGlow : `0 0 2px ${color.glow}33`)
    : dayGlow;

  const bgStyle: React.CSSProperties =
    backing.id === "transparent"
      ? { background: isNight ? "#111" : "#e8e8e8", border: `2px solid ${backing.border}` }
      : backing.id === "mirror"
      ? {
          background: isNight
            ? "linear-gradient(135deg,#1a1a1a 0%,#2e2e2e 50%,#1a1a1a 100%)"
            : "linear-gradient(135deg,#c0c0c0 0%,#e8e8e8 50%,#c0c0c0 100%)",
          border: `2px solid ${backing.border}`,
        }
      : { background: backing.bg, border: `2px solid ${backing.border}` };

  const ambientBg = isNight
    ? `radial-gradient(ellipse at center, ${color.glow}22 0%, transparent 70%)`
    : "none";

  return (
    <Card className="shadow-xl">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl md:text-2xl text-secondary">Визуализация</CardTitle>
          <div className="flex items-center gap-1 bg-muted rounded-full p-1">
            <button
              onClick={() => setIsNight(false)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                !isNight ? "bg-white shadow text-yellow-600" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon name="Sun" size={14} />
              День
            </button>
            <button
              onClick={() => setIsNight(true)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                isNight ? "bg-slate-800 shadow text-cyan-300" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon name="Moon" size={14} />
              Ночь
            </button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-3 md:p-6">
        <div
          ref={containerRef}
          className="flex items-center justify-center w-full overflow-hidden"
          style={{ minHeight: "200px" }}
        >
          {(!width || !height) ? (
            <div className="flex flex-col items-center gap-2 text-muted-foreground py-10">
              <Icon name="Zap" size={32} className="opacity-30" />
              <span className="text-sm">Введите размеры для предпросмотра</span>
            </div>
          ) : (
            <div
              className="relative overflow-hidden rounded-lg flex items-center justify-center transition-all duration-500"
              style={{
                width: `${pvW}px`,
                height: `${pvH}px`,
                ...bgStyle,
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none transition-all duration-500"
                style={{ background: ambientBg }}
              />

              {backing.id === "transparent" && isNight && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute rounded-full"
                      style={{
                        width: `${20 + i * 15}%`,
                        height: `${30 + i * 10}%`,
                        left: `${20 + i * 8}%`,
                        top: `${20 + i * 5}%`,
                        background: `radial-gradient(circle, ${color.glow}${Math.round(8 - i) * 10} 0%, transparent 70%)`,
                        filter: "blur(8px)",
                        opacity: flickerOn ? 0.5 : 0.05,
                        transition: "opacity 0.05s",
                      }}
                    />
                  ))}
                </div>
              )}

              <div
                className="relative z-10 px-6 text-center transition-all"
                style={{
                  fontFamily: font.style,
                  fontSize: `${fontSize}px`,
                  color: isNight ? color.tube : color.text,
                  textShadow,
                  opacity: glowOpacity,
                  transition: flickerOn ? "opacity 0.05s, text-shadow 0.05s" : "opacity 0.05s",
                  lineHeight: 1.2,
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                  maxWidth: "90%",
                }}
              >
                {signText || "NEON"}
              </div>

              <div className="absolute bottom-2 right-2 text-[9px] font-mono opacity-40 text-white">
                {width}×{height} см · ⌀{diameter}мм
              </div>

              {withFlicker && isNight && (
                <div className="absolute top-2 left-2">
                  <span className="text-[9px] bg-white/10 text-white/60 px-1.5 py-0.5 rounded font-mono">
                    ∿ мерцание
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          {[
            { label: "Шрифт", value: font.label },
            { label: "Цвет", value: color.label },
            { label: "Подложка", value: backing.label },
          ].map(item => (
            <div key={item.label} className="flex items-center gap-1 bg-muted/50 rounded-md px-2.5 py-1 text-xs">
              <span className="text-muted-foreground">{item.label}:</span>
              <span className="font-medium">{item.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
