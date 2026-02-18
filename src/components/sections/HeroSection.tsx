import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HERO_VIDEO_URL =
  "https://cdn.poehali.dev/projects/820f24d3-2a0c-446f-996e-d0f46f8895f8/bucket/video/hero-video.mp4";

const FADE_DURATION = 1.2;

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const timeLeft = video.duration - video.currentTime;
      if (timeLeft <= FADE_DURATION) {
        setOpacity(timeLeft / FADE_DURATION);
      } else if (video.currentTime <= FADE_DURATION) {
        setOpacity(video.currentTime / FADE_DURATION);
      } else {
        setOpacity(1);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[600px] flex items-center bg-secondary">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
        style={{ opacity }}
        src={HERO_VIDEO_URL}
        autoPlay
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 via-secondary/40 to-secondary/60" />
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