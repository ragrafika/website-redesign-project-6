import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRef, useEffect, useState, useCallback } from "react";
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

// Рисует неоновую трубку: только контур буквы, толщина = диаметр трубки
function drawNeon(
  canvas: HTMLCanvasElement,
  text: string,
  fontStyle: string,
  glowColor: string,
  tubeColor: string,
  diameterPx: number,
  isNight: boolean,
  flickerOn: boolean,
  bgStyle: { bg: string; mirror?: boolean },
  pvW: number,
  pvH: number,
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const dpr = window.devicePixelRatio || 1;
  canvas.width = pvW * dpr;
  canvas.height = pvH * dpr;
  canvas.style.width = `${pvW}px`;
  canvas.style.height = `${pvH}px`;
  ctx.scale(dpr, dpr);

  // Фон
  if (bgStyle.mirror) {
    const grad = ctx.createLinearGradient(0, 0, pvW, pvH);
    grad.addColorStop(0, isNight ? "#1a1a1a" : "#c0c0c0");
    grad.addColorStop(0.5, isNight ? "#2e2e2e" : "#e8e8e8");
    grad.addColorStop(1, isNight ? "#1a1a1a" : "#c0c0c0");
    ctx.fillStyle = grad;
  } else if (bgStyle.bg === "transparent") {
    ctx.fillStyle = isNight ? "#111111" : "#e8e8e8";
  } else {
    ctx.fillStyle = bgStyle.bg;
  }
  ctx.fillRect(0, 0, pvW, pvH);

  if (!text) return;

  // Подбираем размер шрифта, чтобы текст вписывался
  const lines = text.split("\n");
  const maxLineLen = Math.max(...lines.map(l => l.length), 1);

  let fontSize = Math.min(
    (pvW * 0.85) / (maxLineLen * 0.6),
    pvH * 0.55 / lines.length,
    100,
  );
  fontSize = Math.max(fontSize, 18);

  ctx.font = `${fontSize}px ${fontStyle}`;

  // Уточняем по реальной ширине самой длинной строки
  for (let iter = 0; iter < 5; iter++) {
    const maxMeasured = Math.max(...lines.map(l => ctx.measureText(l).width));
    if (maxMeasured > pvW * 0.88) {
      fontSize *= (pvW * 0.88) / maxMeasured;
      ctx.font = `${fontSize}px ${fontStyle}`;
    } else break;
  }

  const lineH = fontSize * 1.25;
  const totalH = lineH * lines.length;
  const startY = (pvH - totalH) / 2 + fontSize * 0.85;

  const opacity = flickerOn ? 1 : 0.12;

  ctx.globalAlpha = opacity;

  // Ambient glow под весь текст (только ночью)
  if (isNight) {
    const cx = pvW / 2;
    const cy = pvH / 2;
    const radGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, pvW * 0.55);
    radGrad.addColorStop(0, glowColor + "30");
    radGrad.addColorStop(1, "transparent");
    ctx.fillStyle = radGrad;
    ctx.fillRect(0, 0, pvW, pvH);
  }

  lines.forEach((line, i) => {
    const y = startY + i * lineH;
    const x = pvW / 2;

    ctx.textAlign = "center";
    ctx.textBaseline = "alphabetic";
    ctx.font = `${fontSize}px ${fontStyle}`;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    if (isNight) {
      // Внешнее широкое свечение (атмосфера)
      ctx.shadowColor = glowColor;
      ctx.shadowBlur = diameterPx * 5;
      ctx.strokeStyle = glowColor + "55";
      ctx.lineWidth = diameterPx * 2.5;
      ctx.strokeText(line, x, y);

      // Среднее свечение
      ctx.shadowBlur = diameterPx * 2.5;
      ctx.strokeStyle = glowColor + "99";
      ctx.lineWidth = diameterPx * 1.4;
      ctx.strokeText(line, x, y);

      // Сама трубка — яркая линия по контуру буквы
      ctx.shadowBlur = diameterPx * 1.2;
      ctx.shadowColor = tubeColor;
      ctx.strokeStyle = tubeColor;
      ctx.lineWidth = diameterPx;
      ctx.strokeText(line, x, y);

      // Блик на трубке (белая нить внутри)
      ctx.shadowBlur = 0;
      ctx.strokeStyle = "rgba(255,255,255,0.6)";
      ctx.lineWidth = diameterPx * 0.25;
      ctx.strokeText(line, x, y);
    } else {
      // Дневной вид: трубка видна без свечения
      ctx.shadowBlur = diameterPx * 0.8;
      ctx.shadowColor = glowColor + "88";
      ctx.strokeStyle = tubeColor;
      ctx.lineWidth = diameterPx;
      ctx.strokeText(line, x, y);

      // Блик
      ctx.shadowBlur = 0;
      ctx.strokeStyle = "rgba(255,255,255,0.5)";
      ctx.lineWidth = diameterPx * 0.2;
      ctx.strokeText(line, x, y);
    }
  });

  ctx.globalAlpha = 1;

  // Подпись размеров
  ctx.font = "10px monospace";
  ctx.fillStyle = "rgba(255,255,255,0.35)";
  ctx.textAlign = "right";
  ctx.textBaseline = "bottom";
  ctx.shadowBlur = 0;
  ctx.fillText(`${pvW > 0 ? text.length : ""}`, pvW - 8, pvH - 6);
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
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [containerWidth, setContainerWidth] = useState(500);
  const [isNight, setIsNight] = useState(true);
  const [flickerOn, setFlickerOn] = useState(true);

  const color = NEON_COLORS.find(c => c.id === colorId) || NEON_COLORS[0];
  const font = NEON_FONTS.find(f => f.id === fontId) || NEON_FONTS[0];
  const backing = NEON_BACKINGS.find(b => b.id === backingId) || NEON_BACKINGS[0];

  const d = parseInt(diameter) || 10;
  const w = parseFloat(width) || 60;
  const h = parseFloat(height) || 30;

  // Масштаб: реальные см → пиксели превью
  // диаметр трубки тоже в реальных см (6мм = 0.6см), масштабируем пропорционально
  const maxW = Math.min(containerWidth - 8, 560);
  const maxH = Math.min(Math.round(maxW * 0.65), 320);
  const aspect = w / h;
  let pvW = maxW;
  let pvH = maxW / aspect;
  if (pvH > maxH) { pvH = maxH; pvW = maxH * aspect; }
  pvW = Math.round(Math.max(pvW, 100));
  pvH = Math.round(Math.max(pvH, 80));

  // Диаметр трубки в пикселях превью (пропорционально масштабу)
  const pxPerCm = pvW / w;
  const diameterPx = Math.max((d / 10) * pxPerCm * 1.2, 3);

  const bgStyle = {
    bg: backing.bg,
    mirror: backing.id === "mirror",
  };

  const render = useCallback(() => {
    if (!canvasRef.current) return;
    drawNeon(
      canvasRef.current,
      signText || "NEON",
      font.style,
      color.glow,
      color.tube,
      diameterPx,
      isNight,
      flickerOn,
      bgStyle,
      pvW,
      pvH,
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signText, font.style, color.glow, color.tube, diameterPx, isNight, flickerOn, pvW, pvH, backing.id, backing.bg]);

  useEffect(() => { render(); }, [render]);

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

  // Подсказка о физике неона
  const tubeCmW = d / 10;
  const charWidthEst = w / Math.max((signText || "NEON").replace(/\s/g, "").length, 1);
  const isContour = charWidthEst > tubeCmW * 3;

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
          style={{ minHeight: "160px" }}
        >
          {(!width || !height) ? (
            <div className="flex flex-col items-center gap-2 text-muted-foreground py-10">
              <Icon name="Zap" size={32} className="opacity-30" />
              <span className="text-sm">Введите размеры для предпросмотра</span>
            </div>
          ) : (
            <div className="relative rounded-lg overflow-hidden" style={{ width: pvW, height: pvH }}>
              <canvas
                ref={canvasRef}
                style={{ display: "block", borderRadius: "8px", border: `2px solid ${backing.border}` }}
              />
              <div className="absolute bottom-2 right-2 text-[9px] font-mono text-white/40">
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

        {/* Физическая подсказка */}
        {width && height && (
          <div className="mt-3 rounded-lg bg-muted/40 border border-border px-3 py-2 text-xs text-muted-foreground flex items-start gap-2">
            <Icon name="Info" size={13} className="mt-0.5 flex-shrink-0 text-primary/60" />
            <span>
              Трубка ⌀{diameter}мм — {isContour
                ? `контурное исполнение: гибкий неон огибает каждую букву по контуру. Ширина буквы (~${charWidthEst.toFixed(0)} см) значительно больше трубки — заливки нет.`
                : `заполняющее исполнение: трубка закрывает большую часть ширины буквы (~${charWidthEst.toFixed(0)} см).`
              }
            </span>
          </div>
        )}

        <div className="mt-3 flex flex-wrap gap-2 justify-center">
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
