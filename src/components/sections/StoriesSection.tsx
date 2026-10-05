import stories from "@/data/stories";
import StoryCard from "./StoryCard";

const StoriesSection = () => (
  <section className="py-20 scroll-mt-24" id="stories">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Реальные истории наших вывесок</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Как мы работаем: от идеи и согласования до монтажа на объекте
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((s) => (
          <StoryCard key={s.title} story={s} />
        ))}
      </div>
    </div>
  </section>
);

export default StoriesSection;
