import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";
import type { Story } from "@/data/stories";

const StoryCard = ({ story }: { story: Story }) => {
  const [active, setActive] = useState(story.photos.length > 1 ? 1 : 0);
  const [hovered, setHovered] = useState(false);
  const startIndex = useRef(story.photos.length > 1 ? 1 : 0);
  const photo = story.photos[active];
  const total = story.photos.length;

  useEffect(() => {
    if (!hovered || total < 2) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 1400);
    return () => clearInterval(id);
  }, [hovered, total]);

  const handleEnter = () => {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      setActive(0);
      setHovered(true);
    }
  };

  const handleLeave = () => {
    setHovered(false);
    setActive(startIndex.current);
  };

  return (
    <article className="bg-background border-2 rounded-2xl overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
      <div
        className="relative aspect-[4/3] bg-muted"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        {photo ? (
          <img
            src={photo.url}
            alt={`${story.title} — ${photo.label}`}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Icon name="Image" size={48} className="text-muted-foreground/40" />
          </div>
        )}
        {story.photos.length > 1 && (
          <div className="absolute bottom-3 left-3 flex gap-1 bg-black/60 rounded-full p-1">
            {story.photos.map((p, i) => (
              <button
                key={p.label}
                onClick={() => setActive(i)}
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
