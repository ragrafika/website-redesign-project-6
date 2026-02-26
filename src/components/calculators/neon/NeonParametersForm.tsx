import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface NeonFont {
  id: string;
  label: string;
  style: string;
  preview: string;
}

export interface NeonColor {
  id: string;
  label: string;
  glow: string;
  tube: string;
  text: string;
}

export interface NeonBackingColor {
  id: string;
  label: string;
  bg: string;
  border: string;
}

export const NEON_FONTS: NeonFont[] = [
  { id: "bad-script", label: "Рукописный", style: "'Bad Script', cursive", preview: "Текст" },
  { id: "dancing", label: "Каллиграфия", style: "'Dancing Script', cursive", preview: "Текст" },
  { id: "russo", label: "Блочный (рус/лат)", style: "'Russo One', sans-serif", preview: "ТЕКСТ" },
  { id: "oswald", label: "Узкий капслок", style: "'Oswald', sans-serif", preview: "ТЕКСТ" },
  { id: "montserrat", label: "Гротеск тонкий", style: "'Montserrat', sans-serif", preview: "ТЕКСТ" },
  { id: "comfortaa", label: "Округлый мягкий", style: "'Comfortaa', cursive", preview: "Текст" },
  { id: "unbounded", label: "Технологичный", style: "'Unbounded', sans-serif", preview: "АВС" },
  { id: "marck", label: "Маркер / граффити", style: "'Marck Script', cursive", preview: "Текст" },
];

export const NEON_COLORS: NeonColor[] = [
  { id: "red", label: "Красный", glow: "#ff2020", tube: "#ff6060", text: "#ff2020" },
  { id: "pink", label: "Розовый", glow: "#ff2d78", tube: "#ff6fa8", text: "#ff2d78" },
  { id: "blue", label: "Синий", glow: "#2066ff", tube: "#60a0ff", text: "#2066ff" },
  { id: "cyan", label: "Голубой", glow: "#00e5ff", tube: "#80f0ff", text: "#00e5ff" },
  { id: "green", label: "Зелёный", glow: "#00ff66", tube: "#60ff99", text: "#00ff66" },
  { id: "yellow", label: "Жёлтый", glow: "#ffe600", tube: "#fff080", text: "#ffe600" },
  { id: "orange", label: "Оранжевый", glow: "#ff8000", tube: "#ffb060", text: "#ff8000" },
  { id: "purple", label: "Фиолетовый", glow: "#cc00ff", tube: "#e060ff", text: "#cc00ff" },
  { id: "white", label: "Тёплый белый", glow: "#fff5e0", tube: "#ffffff", text: "#ffe8a0" },
];

export const NEON_BACKINGS: NeonBackingColor[] = [
  { id: "black", label: "Чёрный", bg: "#111111", border: "#333333" },
  { id: "dark", label: "Тёмно-серый", bg: "#1e1e2e", border: "#2e2e4e" },
  { id: "wood", label: "Дерево (тёмное)", bg: "#2d1a0e", border: "#4a2e1a" },
  { id: "white", label: "Белый акрил", bg: "#f5f5f5", border: "#dddddd" },
  { id: "mirror", label: "Зеркальный", bg: "#c0c0c0", border: "#e0e0e0" },
  { id: "transparent", label: "Прозрачный", bg: "transparent", border: "#aaaaaa" },
];

export const TUBE_DIAMETERS = [
  { id: "6", label: "6 мм — ультратонкий" },
  { id: "8", label: "8 мм — тонкий" },
  { id: "10", label: "10 мм — стандарт" },
  { id: "12", label: "12 мм — толстый" },
  { id: "16", label: "16 мм — максимальный" },
];

interface NeonParametersFormProps {
  signText: string;
  setSignText: (v: string) => void;
  fontId: string;
  setFontId: (v: string) => void;
  colorId: string;
  setColorId: (v: string) => void;
  backingId: string;
  setBackingId: (v: string) => void;
  diameter: string;
  setDiameter: (v: string) => void;
  width: string;
  setWidth: (v: string) => void;
  height: string;
  setHeight: (v: string) => void;
  withDimmer: boolean;
  setWithDimmer: (v: boolean) => void;
  withRemote: boolean;
  setWithRemote: (v: boolean) => void;
  withFlicker: boolean;
  setWithFlicker: (v: boolean) => void;
}

const GOOGLE_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Bad+Script&family=Dancing+Script:wght@600&family=Russo+One&family=Oswald:wght@500&family=Montserrat:wght@300;400&family=Comfortaa:wght@500&family=Unbounded:wght@600&family=Marck+Script&display=swap";

export default function NeonParametersForm({
  signText, setSignText,
  fontId, setFontId,
  colorId, setColorId,
  backingId, setBackingId,
  diameter, setDiameter,
  width, setWidth,
  height, setHeight,
  withDimmer, setWithDimmer,
  withRemote, setWithRemote,
  withFlicker, setWithFlicker,
}: NeonParametersFormProps) {
  useEffect(() => {
    const existing = document.getElementById("neon-gfonts");
    if (!existing) {
      const link = document.createElement("link");
      link.id = "neon-gfonts";
      link.rel = "stylesheet";
      link.href = GOOGLE_FONTS_URL;
      document.head.appendChild(link);
    }
  }, []);

  return (
    <Card className="shadow-xl">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl text-secondary">Параметры вывески</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5 p-4 md:p-6">

        <div>
          <Label className="mb-1.5 block">Текст вывески</Label>
          <Textarea
            value={signText}
            onChange={e => setSignText(e.target.value)}
            placeholder="Например: Coffee Time"
            className="resize-none"
            rows={2}
          />
        </div>

        <div>
          <Label className="mb-2 block">Шрифт</Label>
          <div className="grid grid-cols-2 gap-2">
            {NEON_FONTS.map(f => (
              <button
                key={f.id}
                onClick={() => setFontId(f.id)}
                className={`flex flex-col items-start gap-0.5 rounded-lg px-3 py-2 border-2 text-left transition-all ${
                  fontId === f.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/40"
                }`}
              >
                <span
                  className="text-lg leading-tight truncate w-full"
                  style={{ fontFamily: f.style }}
                >
                  {f.preview}
                </span>
                <span className="text-[10px] text-muted-foreground leading-tight">{f.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <Label className="mb-1.5 block">Цвет неона</Label>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
            {NEON_COLORS.map(c => (
              <button
                key={c.id}
                onClick={() => setColorId(c.id)}
                className={`flex flex-col items-center gap-1 rounded-lg p-2 border-2 transition-all ${
                  colorId === c.id
                    ? "border-primary scale-105 bg-primary/5"
                    : "border-border hover:border-primary/40"
                }`}
              >
                <span
                  className="w-7 h-7 rounded-full block"
                  style={{
                    background: c.tube,
                    boxShadow: colorId === c.id ? `0 0 10px 3px ${c.glow}` : "none",
                  }}
                />
                <span className="text-[10px] text-center leading-tight text-muted-foreground">{c.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <Label className="mb-1.5 block">Подложка</Label>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {NEON_BACKINGS.map(b => (
              <button
                key={b.id}
                onClick={() => setBackingId(b.id)}
                className={`flex flex-col items-center gap-1 rounded-lg p-2 border-2 transition-all ${
                  backingId === b.id
                    ? "border-primary scale-105"
                    : "border-border hover:border-primary/40"
                }`}
              >
                <span
                  className="w-7 h-7 rounded block border"
                  style={{ background: b.bg, borderColor: b.border }}
                />
                <span className="text-[10px] text-center leading-tight text-muted-foreground">{b.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <Label className="mb-1.5 block">Диаметр трубки</Label>
          <Select value={diameter} onValueChange={setDiameter}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {TUBE_DIAMETERS.map(d => (
                <SelectItem key={d.id} value={d.id}>{d.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label className="mb-1.5 block">Ширина (см)</Label>
            <Input
              type="number"
              min="10"
              max="400"
              value={width}
              onChange={e => setWidth(e.target.value)}
              placeholder="60"
            />
          </div>
          <div>
            <Label className="mb-1.5 block">Высота (см)</Label>
            <Input
              type="number"
              min="5"
              max="200"
              value={height}
              onChange={e => setHeight(e.target.value)}
              placeholder="30"
            />
          </div>
        </div>

        <div>
          <Label className="mb-2 block">Дополнительные опции</Label>
          <div className="space-y-2">
            {[
              { label: "Диммер (регулировка яркости)", value: withDimmer, set: setWithDimmer },
              { label: "Пульт дистанционного управления", value: withRemote, set: setWithRemote },
              { label: "Эффект мерцания / анимации", value: withFlicker, set: setWithFlicker },
            ].map(opt => (
              <label
                key={opt.label}
                className="flex items-center gap-3 cursor-pointer p-2.5 rounded-lg border border-border hover:bg-muted/40 transition-colors"
              >
                <input
                  type="checkbox"
                  checked={opt.value}
                  onChange={e => opt.set(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary flex-shrink-0"
                />
                <span className="text-sm">{opt.label}</span>
              </label>
            ))}
          </div>
        </div>

      </CardContent>
    </Card>
  );
}