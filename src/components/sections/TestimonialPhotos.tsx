import { useState } from "react";
import Icon from "@/components/ui/icon";

interface TestimonialPhotosProps {
  photo?: string;
  photoAlt?: string;
  extraPhotos?: string[];
}

const TestimonialPhotos = ({ photo, photoAlt, extraPhotos = [] }: TestimonialPhotosProps) => {
  const [active, setActive] = useState(0);

  if (!photo) {
    return (
      <div className="mb-4 mt-auto">
        <div className="w-full aspect-[4/3] rounded-lg border-2 border-dashed border-muted-foreground/20 bg-gradient-to-br from-muted/60 to-muted flex flex-col items-center justify-center gap-2 text-muted-foreground/60">
          <Icon name="ImageOff" size={32} />
          <span className="text-sm font-medium">Отзыв без фото</span>
        </div>
      </div>
    );
  }

  const all = [photo, ...extraPhotos];

  return (
    <div
      className="mb-4 mt-auto relative aspect-[4/3] rounded-lg overflow-hidden bg-muted"
      onMouseLeave={() => setActive(0)}
    >
      {all.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={photoAlt || "Фото объекта"}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {all.length > 1 && (
        <div className="absolute inset-x-0 bottom-0 flex justify-center gap-1.5 p-2 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          {all.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`Фото ${i + 1}`}
              onMouseEnter={() => setActive(i)}
              onClick={(e) => {
                e.stopPropagation();
                setActive(i);
              }}
              className={`h-9 w-12 rounded overflow-hidden border-2 transition-all ${
                i === active ? "border-white scale-105" : "border-white/40 opacity-80"
              }`}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
      {all.length > 1 && (
        <div className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-black/50 px-2 py-0.5 text-xs text-white group-hover:opacity-0 transition-opacity">
          <Icon name="Images" size={12} />
          {all.length}
        </div>
      )}
    </div>
  );
};

export default TestimonialPhotos;
