import Icon from "@/components/ui/icon";

const InstallationTypes = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Виды монтажных работ</h2>
      
      <div className="grid gap-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/5">
              <img 
                src="https://cdn.poehali.dev/files/montage.jpg" 
                alt="Фасадный монтаж световой вывески автомойки FoamTime на кирпичной стене"
                className="w-full h-64 md:h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6 md:w-3/5">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="Building" size={24} className="text-primary" />
                <h3 className="text-xl font-bold">Фасадный монтаж вывесок</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Установка вывесок, объёмных букв и световых коробов на фасадах зданий. Используем прочные крепления с усилением. Подбираем крепёж под материал стены (кирпич, бетон, сэндвич-панели). Вывеска надёжно держится даже при сильном ветре.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                  <span>Прочные крепления</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                  <span>Подбор под тип стены</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                  <span>Ветроустойчивость</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex md:flex-row-reverse">
            <div className="md:w-2/5">
              <img 
                src="https://cdn.poehali.dev/files/visota.jpg" 
                alt="Высотные работы по монтажу вывески на многоэтажном здании"
                className="w-full h-64 md:h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6 md:w-3/5">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="TrendingUp" size={24} className="text-primary" />
                <h3 className="text-xl font-bold">Высотные работы</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Монтаж на высоких зданиях с использованием специальных автовышек и кранов. Используем страховочное оборудование. Огораживаем рабочую зону внизу. Работаем безопасно и быстро.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                  <span>Монтаж с вышек 15-50 м</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                  <span>Страховочное оборудование</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                  <span>Спецтехника</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/5">
              <img 
                src="https://cdn.poehali.dev/files/electromontage.jpg" 
                alt="Электромонтаж и установка вывески у входа в здание"
                className="w-full h-64 md:h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6 md:w-3/5">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="Zap" size={24} className="text-primary" />
                <h3 className="text-xl font-bold">Электромонтаж и подсветка</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Подключение подсветки вывесок и световых коробов к электросети. Прокладываем кабель скрыто или в кабель-каналах. Устанавливаем защиту от влаги и короткого замыкания. Можем установить таймер или фотореле для автоматического включения/выключения. Работы по электрике выполняют опытные электрики.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                  <span>Скрытая прокладка кабеля</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                  <span>Влагозащита IP65</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                  <span>Автоматическое управление</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallationTypes;
