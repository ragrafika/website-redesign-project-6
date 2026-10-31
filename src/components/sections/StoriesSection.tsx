import stories from "@/data/stories";
import StoryCard from "./StoryCard";
import { Link } from "@/lib/router-compat";
import Icon from "@/components/ui/icon";

const StoriesSection = ({ limit, standalone = false }: { limit?: number; standalone?: boolean }) => {
  const shown = limit ? stories.slice(0, limit) : stories;
  return (
    <section className="py-20 scroll-mt-24" id="stories">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {standalone ? (
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Реальные истории наших вывесок</h1>
          ) : (
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Реальные истории наших вывесок</h2>
          )}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Как мы работаем: от идеи и согласования до монтажа на объекте
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map((s) => (
            <StoryCard key={s.title} story={s} />
          ))}
        </div>
        {limit && stories.length > limit && (
          <div className="text-center mt-10">
            <Link
              to="/stories"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary py-3 px-8 rounded-xl font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Все истории ({stories.length})
              <Icon name="ArrowRight" size={20} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default StoriesSection;
