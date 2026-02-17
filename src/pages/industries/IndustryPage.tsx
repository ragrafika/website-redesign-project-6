import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import ServiceContactForm from "@/components/services/ServiceContactForm";
import { useParams, Navigate } from "react-router-dom";
import { getIndustryBySlug } from "@/data/industries";
import type { IndustryTip } from "@/data/industries";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const TipCard = ({ tip, index }: { tip: IndustryTip; index: number }) => (
  <div className={`bg-white rounded-xl shadow-lg overflow-hidden ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} md:flex`}>
    <div className="p-6 md:p-8 flex-1">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
          <Icon name={tip.icon} size={20} className="text-primary" />
        </div>
        <h3 className="text-xl font-bold">{tip.title}</h3>
      </div>
      <p className="text-gray-700 leading-relaxed">{tip.text}</p>
    </div>
  </div>
);

const IndustryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const industry = getIndustryBySlug(slug || "");

  if (!industry) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{industry.metaTitle}</title>
        <meta name="description" content={industry.metaDescription} />
        <link rel="canonical" href={`https://ragrafika.ru/industries/${industry.slug}`} />
        <meta property="og:title" content={industry.metaTitle} />
        <meta property="og:description" content={industry.metaDescription} />
        <meta property="og:url" content={`https://ragrafika.ru/industries/${industry.slug}`} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": industry.title,
            "serviceType": "Вывески и оформление",
            "provider": {
              "@type": "Organization",
              "name": "Графика",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Благовещенск",
                "addressRegion": "Амурская область",
                "addressCountry": "RU"
              }
            },
            "description": industry.metaDescription
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Главная",
                "item": "https://ragrafika.ru/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": industry.title,
                "item": `https://ragrafika.ru/industries/${industry.slug}`
              }
            ]
          })}
        </script>
      </Helmet>

      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs items={[
              { label: "Главная", path: "/" },
              { label: industry.title }
            ]} />

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Icon name={industry.icon} size={28} className="text-primary" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold">
                {industry.title}
              </h1>
            </div>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {industry.heroText}
            </p>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-4 sm:p-6 md:p-8 mb-12 border-2 border-primary/20">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-primary text-primary-foreground rounded-full p-2 sm:p-3 flex-shrink-0">
                  <Icon name="Gift" size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Бесплатная консультация</h3>
                  <p className="text-gray-700 mb-3">
                    Расскажем, какие решения подойдут именно для вашей {industry.shortTitle.toLowerCase() === "аптеки" ? "аптеки" : industry.shortTitle.toLowerCase() === "банки" ? "организации" : "компании"}, подготовим визуализацию и рассчитаем стоимость. <span className="font-semibold text-primary">Выезд на замер — бесплатно.</span>
                  </p>
                  <Button size="default" className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto" onClick={() => setIsModalOpen(true)}>
                    Получить консультацию
                  </Button>
                </div>
              </div>
            </div>

            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Icon name="Building" size={24} className="text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">Оформление фасада</h2>
                  <p className="text-muted-foreground">Что важно учесть при выборе наружной вывески</p>
                </div>
              </div>

              <div className="grid gap-6">
                {industry.facadeTips.map((tip, index) => (
                  <TipCard key={index} tip={tip} index={index} />
                ))}
              </div>
            </section>

            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Icon name="Armchair" size={24} className="text-amber-600" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">Оформление интерьера</h2>
                  <p className="text-muted-foreground">На что обратить внимание внутри помещения</p>
                </div>
              </div>

              <div className="grid gap-6">
                {industry.interiorTips.map((tip, index) => (
                  <TipCard key={index} tip={tip} index={index} />
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Что мы рекомендуем</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {industry.recommendedProducts.map((product, index) => (
                  <div key={index} className="bg-white border-2 border-gray-100 rounded-xl p-4 flex items-center gap-3 hover:border-primary/30 transition-colors">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={16} className="text-green-600" />
                    </div>
                    <span className="font-medium text-sm">{product}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Как мы работаем</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { step: "1", icon: "Phone", title: "Консультация", text: "Обсуждаем задачи и особенности вашего бизнеса" },
                  { step: "2", icon: "Ruler", title: "Замер и дизайн", text: "Выезжаем на объект, готовим визуализацию" },
                  { step: "3", icon: "Hammer", title: "Производство", text: "Изготавливаем на собственном производстве" },
                  { step: "4", icon: "CheckCircle2", title: "Монтаж", text: "Устанавливаем и даём гарантию на работу" }
                ].map((item, index) => (
                  <div key={index} className="relative bg-white rounded-xl shadow-md p-6 text-center">
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {item.step}
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon name={item.icon} size={24} className="text-primary" />
                    </div>
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Обсудим ваш проект?</h2>
                  <p className="text-gray-700 mb-6">
                    Оставьте заявку — мы перезвоним, обсудим задачи и предложим оптимальное решение для {industry.shortTitle.toLowerCase() === "аптеки" ? "вашей аптеки" : industry.shortTitle.toLowerCase() === "банки" ? "вашей организации" : `сферы «${industry.shortTitle}»`}.
                  </p>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-center gap-3">
                      <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                      <span>Бесплатный выезд на замер</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                      <span>Визуализация до начала производства</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                      <span>Собственное производство в Благовещенске</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                      <span>Гарантия на работы — 3 года</span>
                    </div>
                  </div>
                </div>
                <ServiceContactForm serviceName={industry.title} />
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              Консультация — {industry.shortTitle}
            </DialogTitle>
          </DialogHeader>
          <ServiceContactForm serviceName={industry.title} onSuccess={() => setIsModalOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default IndustryPage;
