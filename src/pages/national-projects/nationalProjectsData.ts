export interface NatProject {
  id: string;
  title: string;
  shortTitle: string;
  icon: string;
  color: string;
  accentColor: string;
  tagColor: string;
  isParticipating: boolean;
  description: string;
  ourRole: string;
  areas: string[];
  examples: { icon: string; text: string }[];
  curator?: string;
  photo?: string;
  photoLabel?: string;
}

export const PROJECTS: NatProject[] = [
  {
    id: "infrastruktura",
    title: "Инфраструктура для жизни",
    shortTitle: "Инфраструктура для жизни",
    icon: "Building2",
    color: "bg-blue-50 border-blue-200",
    accentColor: "bg-blue-100 text-blue-700",
    tagColor: "text-blue-600",
    isParticipating: false,
    description:
      "Строительство и капитальный ремонт жилья, дорог, объектов ЖКХ, общественных пространств. Один из крупнейших нацпроектов по объёму финансирования.",
    ourRole:
      "Готовы выполнять наружное и интерьерное оформление объектов: фасадные вывески, навигация, информационные стенды на жилых комплексах и инфраструктурных объектах.",
    areas: ["Вывески и навигация на объектах", "Информационные стенды", "Оформление фасадов"],
    examples: [
      { icon: "Building", text: "Навигационные системы для жилых комплексов" },
      { icon: "MapPin", text: "Адресные таблички и указатели" },
      { icon: "Info", text: "Информационные стенды ЖКХ и УК" },
    ],
    curator: "Минстрой России",
  },
  {
    id: "molodezh",
    title: "Молодёжь и дети",
    shortTitle: "Молодёжь и дети",
    icon: "Users",
    color: "bg-violet-50 border-violet-200",
    accentColor: "bg-violet-100 text-violet-700",
    tagColor: "text-violet-600",
    isParticipating: true,
    description:
      "Создание условий для развития, воспитания, образования и занятости молодёжи. Оборудование образовательных пространств, молодёжных центров, патриотических площадок.",
    ourRole:
      "Выполняем интерьерное и наружное оформление молодёжных центров, школ, детских садов, спортивных объектов: брендирование, навигация, тематическое оформление.",
    areas: ["Интерьерное оформление учреждений", "Брендирование пространств", "Наружные вывески"],
    examples: [
      { icon: "School", text: "Оформление образовательных учреждений" },
      { icon: "Flag", text: "Патриотическое оформление залов и фасадов" },
      { icon: "Palette", text: "Дизайн-оформление молодёжных пространств" },
    ],
    curator: "Росмолодёжь",
    photo: "https://cdn.poehali.dev/files/35fcab5e-e586-4e61-b96c-f488e8b78865.jpg",
    photoLabel: "Детская библиотека — интерьерное оформление",
  },
  {
    id: "ekonomika-dannykh",
    title: "Экономика данных",
    shortTitle: "Экономика данных",
    icon: "Database",
    color: "bg-cyan-50 border-cyan-200",
    accentColor: "bg-cyan-100 text-cyan-700",
    tagColor: "text-cyan-600",
    isParticipating: false,
    description:
      "Развитие цифровой инфраструктуры, центров обработки данных, внедрение ИИ в государственное управление и бизнес. Строительство технопарков и ЦОД.",
    ourRole:
      "Готовы участвовать в наружном и интерьерном оформлении технопарков, ЦОД и объектов цифровой инфраструктуры.",
    areas: ["Навигация в технопарках", "Фасадное оформление", "Интерьерный дизайн"],
    examples: [
      { icon: "Monitor", text: "Оформление дата-центров и технопарков" },
      { icon: "Signpost", text: "Навигационные системы в бизнес-кластерах" },
    ],
    curator: "Минцифры России",
  },
  {
    id: "semya",
    title: "Семья",
    shortTitle: "Семья",
    icon: "Heart",
    color: "bg-rose-50 border-rose-200",
    accentColor: "bg-rose-100 text-rose-700",
    tagColor: "text-rose-600",
    isParticipating: true,
    description:
      "Поддержка рождаемости, строительство детских садов, поликлиник, МФЦ и социальных объектов. Создание доступной среды для семей с детьми.",
    ourRole:
      "Оформляем социальные объекты: детские поликлиники, МФЦ, перинатальные центры. Навигация, информационные стенды, брендинг в едином стиле учреждения.",
    areas: ["Оформление медицинских учреждений", "МФЦ и соцобъекты", "Навигация для маломобильных"],
    examples: [
      { icon: "Hospital", text: "Навигация в детских поликлиниках и больницах" },
      { icon: "ClipboardList", text: "Информационные стенды в МФЦ" },
      { icon: "Accessibility", text: "Доступная среда: указатели и тактильные элементы" },
    ],
    curator: "Минтруд России",
    photo: "https://cdn.poehali.dev/files/03a0bbb4-82ad-49ab-9e7f-586537773c4e.jpg",
    photoLabel: "Городская поликлиника №1 — навигационная вывеска",
  },
  {
    id: "kultura",
    title: "Культура",
    shortTitle: "Культура",
    icon: "Landmark",
    color: "bg-amber-50 border-amber-200",
    accentColor: "bg-amber-100 text-amber-700",
    tagColor: "text-amber-600",
    isParticipating: true,
    description:
      "Реставрация и строительство культурных объектов: театры, дома культуры, библиотеки, музеи. Создание современной культурной среды в малых городах.",
    ourRole:
      "Участвуем в оформлении домов культуры, театров, библиотек, музеев: фасадные конструкции, интерьерное оформление, выставочные системы, афишные стенды.",
    areas: ["Фасадные конструкции", "Выставочные системы", "Афишные стенды и навигация"],
    examples: [
      { icon: "Music", text: "Оформление залов и фойе домов культуры" },
      { icon: "BookOpen", text: "Навигация и зонирование библиотек" },
      { icon: "Image", text: "Выставочные конструкции для музеев" },
    ],
    curator: "Минкультуры России",
    photo: "https://cdn.poehali.dev/files/ee0ddc7b-d2e5-4ecd-b02a-66033522690a.jpg",
    photoLabel: "Библиотека нового поколения — стойка регистрации",
  },
  {
    id: "zdravookhranenie",
    title: "Продолжительная и активная жизнь",
    shortTitle: "Здравоохранение",
    icon: "Activity",
    color: "bg-green-50 border-green-200",
    accentColor: "bg-green-100 text-green-700",
    tagColor: "text-green-600",
    isParticipating: false,
    description:
      "Строительство и оснащение больниц, ФАПов, центров первичной медико-санитарной помощи. Развитие системы охраны здоровья граждан.",
    ourRole:
      "Готовы выполнять оформление медицинских учреждений: вывески, навигация, информационные системы.",
    areas: ["Наружные вывески больниц", "Навигация в учреждениях", "Информационные стенды"],
    examples: [
      { icon: "Cross", text: "Вывески и навигация в медучреждениях" },
      { icon: "Map", text: "Указатели отделений и схемы этажей" },
    ],
    curator: "Минздрав России",
  },
  {
    id: "sport",
    title: "Спорт",
    shortTitle: "Спорт",
    icon: "Trophy",
    color: "bg-orange-50 border-orange-200",
    accentColor: "bg-orange-100 text-orange-700",
    tagColor: "text-orange-600",
    isParticipating: false,
    description:
      "Строительство спортивных объектов шаговой доступности, стадионов, бассейнов, ФОКов. Популяризация здорового образа жизни.",
    ourRole:
      "Готовы оформлять спортивные объекты: наружные вывески, брендирование арен и залов, тематическое интерьерное оформление, навигация.",
    areas: ["Брендирование спортобъектов", "Интерьерное оформление залов", "Наружные вывески"],
    examples: [
      { icon: "Dumbbell", text: "Оформление ФОКов и спортивных залов" },
      { icon: "Flag2", text: "Брендирование стадионов и арен" },
      { icon: "Navigation", text: "Навигация на спортивных объектах" },
    ],
    curator: "Минспорт России",
  },
  {
    id: "tourism",
    title: "Туризм и гостеприимство",
    shortTitle: "Туризм",
    icon: "Compass",
    color: "bg-teal-50 border-teal-200",
    accentColor: "bg-teal-100 text-teal-700",
    tagColor: "text-teal-600",
    isParticipating: false,
    description:
      "Развитие туристической инфраструктуры: кемпинги, туристические кластеры, центры притяжения. Продвижение внутреннего туризма.",
    ourRole:
      "Готовы участвовать в оформлении туристических объектов: навигационные схемы, указатели, информационные стенды, оформление точек притяжения.",
    areas: ["Навигация на туробъектах", "Информационные стенды", "Оформление точек притяжения"],
    examples: [
      { icon: "MapPin", text: "Туристическая навигация и указатели" },
      { icon: "Info", text: "Информационные стенды и карты маршрутов" },
    ],
    curator: "Ростуризм / Минэкономразвития",
  },
];

export const COMPANY_STATS = [
  { value: "3", label: "Нацпроекта", sub: "уже участвуем" },
  { value: "150+", label: "Изделий", sub: "изготовлено" },
  { value: "8+", label: "Объектов", sub: "в рамках нацпроектов" },
  { value: "ДФО", label: "Регион", sub: "присутствия" },
];