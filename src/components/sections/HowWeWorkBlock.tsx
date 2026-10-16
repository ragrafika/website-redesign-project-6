import Icon from "@/components/ui/icon";

const HowWeWorkBlock = () => (
  <section id="how-we-work" className="py-16 bg-white scroll-mt-24">
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">Как мы работаем</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { icon: "MessageSquare", title: "Уточнение задания", text: "Обсуждаем ваши пожелания, замеряем фасад, изучаем требования" },
                { icon: "PenTool", title: "Макет с визуализацией", text: "Разрабатываем дизайн-проект и показываем, как вывеска будет смотреться на здании" },
                { icon: "FileCheck", title: "Согласование", text: "Согласуем дизайн-проект в администрации г. Благовещенск — бесплатно" },
                { icon: "Settings", title: "Изготовление", text: "Производим вывеску на собственном оборудовании из качественных материалов" },
                { icon: "Wrench", title: "Монтаж", text: "Устанавливаем и подключаем вывеску, проверяем работу подсветки" },
              ].map((step, i) => (
                <div key={i} className="bg-muted/30 rounded-xl shadow-md p-5 relative">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                    <Icon name={step.icon} size={20} className="text-primary" />
                  </div>
                  <div className="text-xs font-semibold text-primary mb-1">Шаг {i + 1}</div>
                  <h4 className="font-bold mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
      </div>
    </div>
  </section>
);

export default HowWeWorkBlock;
