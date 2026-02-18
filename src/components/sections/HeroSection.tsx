import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HERO_VIDEO_URL =
  "https://cdn.poehali.dev/projects/820f24d3-2a0c-446f-996e-d0f46f8895f8/bucket/video/hero-video.mp4";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[600px] flex items-center">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={HERO_VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-secondary/70" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Реклама, которая работает на вас
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Изготовление и монтаж наружной и интерьерной рекламы в
            Благовещенске и Амурской области
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-secondary hover:bg-primary hover:text-white transition-colors text-lg px-8 py-6"
              asChild
            >
              <a href="/calculator">Рассчитать стоимость</a>
            </Button>
            <Button
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary text-lg px-8 py-6"
              asChild
            >
              <a href="#portfolio">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть портфолио
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
