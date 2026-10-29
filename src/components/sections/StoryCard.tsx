import { useState } from "react";
import Icon from "@/components/ui/icon";
import type { Story } from "@/data/stories";

const StoryCard = ({ story }: { story: Story }) => {
  const [active, setActive] = useState(story.photos.length > 1 ? 1 : 0);
  const startIndex = story.photos.length > 1 ? 1 : 0;
  const total = story.photos.length;

  const [touched, setTouched] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (total < 2) return;
    setTouched(true);
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    setActive(Math.min(total - 1, Math.max(0, Math.floor(ratio * total))));
  };

  const handleLeave = () => {
    setActive(startIndex);
  };

  return (
    <article className="bg-background border-2 rounded-2xl overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
      <div
        className="relative aspect-[4/3] bg-muted"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        onTouchStart={() => setTouched(true)}
      >
        {total > 0 ? (
          story.photos.map((p, i) => (
            <img
              key={p.label}
              src={p.url}
              alt={`${story.title} — ${p.label}`}
              loading="lazy"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ))
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Icon name="Image" size={48} className="text-muted-foreground/40" />
          </div>
        )}
        {story.photos.length > 1 && !touched && (
          <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 bg-black/60 text-white text-xs font-medium rounded-full px-3 py-1.5 animate-pulse pointer-events-none">
            <Icon name="MousePointerClick" size={14} />
            Наведите или нажмите
          </div>
        )}
        {story.photos.length > 1 && (
          <div className="absolute bottom-3 left-3 z-10 flex gap-1 bg-black/60 rounded-full p-1">
            {story.photos.map((p, i) => (
              <button
                key={p.label}
                onClick={() => { setTouched(true); setActive(i); }}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${
                  i === active ? "bg-primary text-white" : "text-white hover:bg-white/20"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col gap-2">
        <h3 className="text-xl font-bold">{story.title}</h3>
        <p className="flex items-center gap-1.5 text-sm text-primary font-medium">
          <Icon name="MapPin" size={14} />
          {story.address}
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">{story.text}</p>
      </div>
    </article>
  );
};

export default StoryCard;
