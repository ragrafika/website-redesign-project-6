import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import ServiceCards from "@/components/services/ServiceCards";
import ServiceContactForm from "@/components/services/ServiceContactForm";
import SignageTurnkeySection from "@/components/sections/SignageTurnkeySection";

const SignageTurnkey = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Вывески под ключ в Благовещенске | Дизайн, согласование, монтаж | Графика</title>
        <meta name="description" content="Вывески под ключ в Благовещенске: от дизайна и согласования в администрации до изготовления и монтажа. Объемные буквы, световые короба, световая реклама для бизнеса и госучреждений. Работаем в Амурской области, Якутии, ЕАО, Хабаровском и Приморском краях. Гарантия 3 года." />
        <meta name="keywords" content="вывеска под ключ, заказать вывеску, заказать вывеску Благовещенск, объемные буквы, световой короб, световая вывеска, световые буквы, световая реклама, вывеска для госучреждений, вывеска в магазин, вывеска Благовещенск, вывеска Свободный, вывеска Якутск, вывеска Хабаровск, вывеска Владивосток, вывеска Биробиджан, изготовление вывесок Дальний Восток" />
        <link rel="canonical" href="https://ragrafika.ru/signage-turnkey" />
        <meta property="og:title" content="Вывески под ключ в Благовещенске | Дизайн, согласование, монтаж" />
        <meta property="og:description" content="Вывески под ключ: от дизайна и согласования до монтажа. Работаем по всему Дальнему Востоку — Амурская область, Якутия, ЕАО, Хабаровский и Приморский края. Бесплатный дизайн-проект. Гарантия 3 года." />
        <meta property="og:url" content="https://ragrafika.ru/signage-turnkey" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Вывески под ключ",
            "serviceType": "Вывески под ключ: дизайн, согласование, изготовление, монтаж",
            "provider": {
              "@type": "Organization",
              "name": "Графика",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Благовещенск",
                "addressRegion": "Амурская область",
                "addressCountry": "RU"
              },
              "areaServed": [
                { "@type": "State", "name": "Амурская область" },
                { "@type": "State", "name": "Республика Саха (Якутия)" },
                { "@type": "State", "name": "Еврейская автономная область" },
                { "@type": "State", "name": "Хабаровский край" },
                { "@type": "State", "name": "Приморский край" }
              ]
            },
            "description": "Вывески под ключ: от дизайна и согласования до изготовления и монтажа. Для бизнеса и госучреждений. Работаем по всему Дальнему Востоку.",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock"
            }
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
                "name": "Вывески под ключ",
                "item": "https://ragrafika.ru/signage-turnkey"
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
              { label: "Вывески под ключ" }
            ]} />
          </div>
        </div>

        <SignageTurnkeySection />

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ServiceCards excludeService="signage" />

            <div className="mt-8" id="contact-form">
              <ServiceContactForm serviceName="Вывески под ключ" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SignageTurnkey;
