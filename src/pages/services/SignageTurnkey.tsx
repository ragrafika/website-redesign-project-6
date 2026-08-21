import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import ServiceCards from "@/components/services/ServiceCards";
import ServiceContactForm from "@/components/services/ServiceContactForm";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const SignageTurnkey = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Вывески под ключ в Благовещенске | Дизайн, согласование, монтаж | Графика</title>
        <meta name="description" content="Вывески под ключ в Благовещенске: от дизайна и согласования в администрации до изготовления и монтажа. Объемные буквы, световые короба, световая реклама для бизнеса и госучреждений. Гарантия 3 года." />
        <meta name="keywords" content="вывеска под ключ, заказать вывеску, заказать вывеску Благовещенск, объемные буквы, световой короб, световая вывеска, световые буквы, световая реклама, вывеска для госучреждений, вывеска в магазин, вывеска Благовещенск, вывеска Свободный" />
        <link rel="canonical" href="https://ragrafika.ru/signage-turnkey" />
        <meta property="og:title" content="Вывески под ключ в Благовещенске | Дизайн, согласование, монтаж" />
        <meta property="og:description" content="Вывески под ключ в Благовещенске: от дизайна и согласования до монтажа. Для бизнеса и госучреждений. Бесплатный дизайн-проект. Гарантия 3 года." />
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
              "areaServed": {
                "@type": "State",
                "name": "Амурская область"
              }
            },
            "description": "Вывески под ключ в Благовещенске: от дизайна и согласования до изготовления и монтажа. Для бизнеса и госучреждений.",
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

            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Вывески под ключ в Благовещенске
            </h1>

            <p className="text-lg text-gray-700 mb-8 text-justify">
              Берём на себя весь цикл: от разработки макета с визуализацией и согласования в администрации до изготовления и монтажа. Изготавливаем объёмные буквы с подсветкой, световые коробы и световую рекламу любой сложности для бизнеса и госучреждений. Работаем по всей Амурской области, включая г. Свободный.
            </p>

            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Как мы работаем</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {[
                  { icon: "MessageSquare", title: "Уточнение задания", text: "Обсуждаем ваши пожелания, замеряем фасад, изучаем требования" },
                  { icon: "PenTool", title: "Макет с визуализацией", text: "Разрабатываем дизайн-проект и показываем, как вывеска будет смотреться на здании" },
                  { icon: "FileCheck", title: "Согласование", text: "Согласуем дизайн-проект в администрации г. Благовещенск — бесплатно" },
                  { icon: "Settings", title: "Изготовление", text: "Производим вывеску на собственном оборудовании из качественных материалов" },
                  { icon: "Wrench", title: "Монтаж", text: "Устанавливаем и подключаем вывеску, проверяем работу подсветки" },
                ].map((step, i) => (
                  <div key={i} className="bg-white rounded-xl shadow-md p-5 relative">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                      <Icon name={step.icon} size={20} className="text-primary" />
                    </div>
                    <div className="text-xs font-semibold text-primary mb-1">Шаг {i + 1}</div>
                    <h3 className="font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-4 sm:p-6 md:p-8 mb-8 border-2 border-primary/20">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-primary text-primary-foreground rounded-full p-2 sm:p-3 flex-shrink-0">
                  <Icon name="Gift" size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Специальное предложение</h3>
                  <p className="text-gray-700 mb-3">
                    При заказе вывески с подсветкой — <span className="font-semibold text-primary">дизайн-проект и визуализация бесплатно</span>. А <span className="font-semibold text-primary">согласование вывески в администрации г. Благовещенск — бесплатно</span>. Вы увидите, как будет выглядеть вывеска на вашем здании до начала производства.
                  </p>
                  <Button size="default" className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto" onClick={() => setIsModalOpen(true)}>
                    Заказать вывеску под ключ
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 md:p-8 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-lg mb-1">Хотите сначала посмотреть варианты?</h3>
                <p className="text-gray-600 text-sm">Объёмные буквы, световые короба и другие виды вывесок — с примерами наших работ.</p>
              </div>
              <Link to="/signage" className="flex-shrink-0">
                <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto">
                  Виды вывесок
                  <Icon name="ArrowRight" size={18} />
                </Button>
              </Link>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Комплектации уличных вывесок</h2>
              <p className="text-gray-700 mb-8">
                Мы изготавливаем вывески с учётом сложных климатических условий Дальнего Востока: перепадов температур, высокой влажности, ветровых нагрузок и интенсивных осадков. Комплектации отличаются характеристиками материалов, технологией сборки, расчётным сроком эксплуатации и сроком гарантии.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: "Wallet",
                    title: "Эконом",
                    subtitle: "Практичное решение для краткосрочных задач",
                    text: "Подходит для временных торговых точек, сезонных проектов и бизнеса с ограниченным бюджетом. При изготовлении используются доступные материалы и базовая технология сборки, обеспечивающие необходимую надёжность при уличной эксплуатации.",
                    life: "2–4 года",
                    warranty: "12 месяцев",
                    points: [
                      "Оптимальная стоимость",
                      "Базовая защита от климатических воздействий",
                      "Для временного и сезонного размещения",
                    ],
                    highlight: false,
                  },
                  {
                    icon: "Award",
                    title: "Стандарт",
                    subtitle: "Оптимальный баланс стоимости и надёжности",
                    text: "Универсальная комплектация для большинства магазинов, офисов, кафе и других коммерческих объектов. Используются более устойчивые к внешней среде материалы и усиленная технология сборки, рассчитанная на длительную эксплуатацию в климате Дальнего Востока.",
                    life: "3–5 лет",
                    warranty: "24 месяца",
                    points: [
                      "Материалы с повышенной устойчивостью к внешней среде",
                      "Надёжная сборка и защита элементов вывески",
                      "Оптимальный выбор для постоянного бизнеса",
                    ],
                    highlight: true,
                  },
                  {
                    icon: "ShieldCheck",
                    title: "Премиум",
                    subtitle: "Максимальная надёжность и длительный срок службы",
                    text: "Комплектация для объектов, где особенно важны долговечность, стабильная работа и безупречный внешний вид вывески. Применяются материалы с улучшенными характеристиками и наиболее надёжные технологии сборки с повышенной защитой от влаги, перепадов температур и других климатических нагрузок.",
                    life: "5–7 лет",
                    warranty: "36 месяцев",
                    points: [
                      "Материалы с повышенными эксплуатационными характеристиками",
                      "Усиленная конструкция и дополнительная защита",
                      "Для долгосрочного размещения и имиджевых объектов",
                    ],
                    highlight: false,
                  },
                ].map((tier, i) => (
                  <div
                    key={i}
                    className={`relative bg-white rounded-xl shadow-md p-6 flex flex-col ${tier.highlight ? "border-2 border-primary" : "border-2 border-transparent"}`}
                  >
                    {tier.highlight && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">
                        Оптимальный выбор
                      </div>
                    )}
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon name={tier.icon} size={24} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-1">{tier.title}</h3>
                    <p className="text-primary font-medium text-sm mb-3">{tier.subtitle}</p>
                    <p className="text-gray-600 text-sm mb-5 flex-grow text-justify">{tier.text}</p>

                    <div className="grid grid-cols-2 gap-3 mb-5">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-xs text-gray-500 mb-1">Срок эксплуатации</div>
                        <div className="font-bold">{tier.life}</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-xs text-gray-500 mb-1">Гарантия</div>
                        <div className="font-bold">{tier.warranty}</div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {tier.points.map((point, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                          <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant={tier.highlight ? "default" : "outline"}
                      className={tier.highlight ? "w-full bg-primary hover:bg-primary/90 text-white mt-auto" : "w-full mt-auto"}
                      onClick={() => setIsModalOpen(true)}
                    >
                      Получить расчёт
                    </Button>
                  </div>
                ))}
              </div>

              <p className="text-base text-gray-700 mt-6 max-w-3xl">
                Расчётный срок эксплуатации не является гарантийным сроком. Фактический срок службы зависит от типа и места размещения вывески, интенсивности климатических воздействий, соблюдения правил эксплуатации и своевременного обслуживания. Точная комплектация определяется после осмотра объекта и согласования технического задания.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">На что обратить внимание при выборе вывески</h2>
              <p className="text-gray-700 mb-8">
                Вывеска должна не только привлекать внимание, но и сохранять внешний вид, яркость и безопасность в течение всего срока эксплуатации. При выборе рекомендуем учитывать несколько важных факторов.
              </p>

              <div className="grid sm:grid-cols-2 gap-5 mb-6">
                {[
                  { icon: "MapPin", title: "1. Место установки", text: "Фасад, высота размещения, расстояние до дороги и направление основного потока людей влияют на размеры, конструкцию и способ крепления вывески." },
                  { icon: "CloudRain", title: "2. Условия эксплуатации", text: "Климат Дальнего Востока — резкие перепады температур, высокая влажность, сильный ветер, осадки и ультрафиолет. Материалы и крепёж должны быть рассчитаны на такие нагрузки." },
                  { icon: "Type", title: "3. Размер и читаемость", text: "Текст должен легко восприниматься с нужного расстояния и при разной скорости движения. Мелкие буквы и перегруженный макет снижают эффективность вывески." },
                  { icon: "LayoutGrid", title: "4. Тип конструкции", text: "Объёмные буквы, световой короб, панель-кронштейн или несветовая вывеска решают разные задачи в зависимости от объекта и режима работы." },
                  { icon: "Layers", title: "5. Качество материалов", text: "Внешне похожие вывески могут существенно отличаться по сроку службы — важны характеристики пластика, металла, плёнки, светодиодов и блоков питания." },
                  { icon: "Lightbulb", title: "6. Качество подсветки", text: "Подсветка должна быть равномерной, достаточно яркой и заметной в тёмное время суток. Надёжные светодиоды снижают риск потери яркости и ремонта." },
                  { icon: "ShieldCheck", title: "7. Технология сборки и защита", text: "Герметизация соединений, защита электрики от влаги и надёжность креплений часто определяют реальный срок службы конструкции." },
                  { icon: "FileCheck", title: "8. Соответствие требованиям", text: "Перед изготовлением важно проверить правила размещения вывесок и требования собственника здания — это убережёт от переделки или демонтажа." },
                  { icon: "BadgeCheck", title: "9. Гарантия и срок эксплуатации", text: "Гарантийный срок и расчётный срок службы — разные понятия. Уточните, на какие элементы распространяется гарантия и какое нужно обслуживание." },
                  { icon: "Wallet", title: "10. Стоимость владения", text: "Низкая начальная цена не всегда экономия: если вывеска быстро выцветает или требует ремонта, итоговые расходы могут оказаться выше." },
                ].map((tip, i) => (
                  <div key={i} className="bg-white rounded-xl shadow-md p-5 flex gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={tip.icon} size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{tip.title}</h3>
                      <p className="text-sm text-gray-600">{tip.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-5 md:p-6 flex items-start gap-3">
                <Icon name="Sparkles" size={22} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">
                  <span className="font-semibold">Совет от рекламного агентства «Графика»:</span> не выбирайте вывеску только по фотографии и цене. Надёжный результат начинается с осмотра объекта, оценки условий эксплуатации и грамотного подбора конструкции, материалов и комплектующих.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-primary/80 rounded-xl p-6 md:p-8 mb-8 text-white">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Нужна консультация?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Поможем выбрать оптимальный тип вывески под ваш бюджет и задачи
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" asChild>
                    <a href="tel:+74162227678">
                      <Icon name="Phone" size={20} className="mr-2" />
                      Позвонить
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white" asChild>
                    <a href="https://wa.me/79656713170" target="_blank" rel="noopener noreferrer">
                      <Icon name="MessageCircle" size={20} className="mr-2" />
                      Написать в WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Частые вопросы</h2>

              <div className="space-y-4">
                <details className="bg-white rounded-lg shadow-md group">
                  <summary className="cursor-pointer p-6 font-semibold text-lg flex justify-between items-center">
                    Сколько стоит вывеска?
                    <Icon name="ChevronDown" size={20} className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    Стоимость зависит от размера, типа конструкции, материалов и наличия подсветки. Простые объёмные буквы без подсветки — от 15 000 ₽. С подсветкой контражур — от 35 000 ₽. Для точного расчёта позвоните или оставьте заявку — подготовим коммерческое предложение.
                  </div>
                </details>

                <details className="bg-white rounded-lg shadow-md group">
                  <summary className="cursor-pointer p-6 font-semibold text-lg flex justify-between items-center">
                    Как долго изготавливается вывеска?
                    <Icon name="ChevronDown" size={20} className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    Стандартный срок — 7–14 рабочих дней с момента утверждения макета. Сложные конструкции с нестандартными элементами — до 21 дня. Если нужно срочно — отправьте заявку, постараемся помочь.
                  </div>
                </details>

                <details className="bg-white rounded-lg shadow-md group">
                  <summary className="cursor-pointer p-6 font-semibold text-lg flex justify-between items-center">
                    Нужно ли согласовывать вывеску?
                    <Icon name="ChevronDown" size={20} className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    Да, в большинстве случаев требуется согласование с администрацией города. Мы берём это на себя — бесплатно поможем собрать все необходимые документы и получить разрешение. Срок согласования — обычно 2–4 недели.
                  </div>
                </details>

                <details className="bg-white rounded-lg shadow-md group">
                  <summary className="cursor-pointer p-6 font-semibold text-lg flex justify-between items-center">
                    Какую гарантию вы даёте?
                    <Icon name="ChevronDown" size={20} className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    На изготовление и монтаж гарантия 1-3 года. Срок гарантии зависит от выбранного вами бюджета. В течение гарантийного срока бесплатно устраняем любые неисправности, связанные с изготовлением и монтажом вывески.
                  </div>
                </details>

                <details className="bg-white rounded-lg shadow-md group">
                  <summary className="cursor-pointer p-6 font-semibold text-lg flex justify-between items-center">
                    Можно ли установить вывеску зимой?
                    <Icon name="ChevronDown" size={20} className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    Да, мы работаем круглый год. Монтаж возможен при низких температурах. При очень низких температурах можем перенести монтаж, согласовав срок с вами.
                  </div>
                </details>

                <details className="bg-white rounded-lg shadow-md group">
                  <summary className="cursor-pointer p-6 font-semibold text-lg flex justify-between items-center">
                    Сколько служит вывеска?
                    <Icon name="ChevronDown" size={20} className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    При правильной эксплуатации — 5–10 лет. Светодиодная подсветка служит 30 000+ часов (около 7 лет при работе 12 часов в сутки). Рекомендуем раз в год проводить профилактику — мойку и проверку креплений.
                  </div>
                </details>
              </div>
            </div>

            <ServiceCards excludeService="signage" />

            <div className="mt-8" id="contact-form">
              <ServiceContactForm serviceName="Вывески под ключ" />
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              Заказать вывеску под ключ
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <ServiceContactForm
              serviceName="Вывески под ключ"
              compact
              onSuccess={() => setIsModalOpen(false)}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SignageTurnkey;