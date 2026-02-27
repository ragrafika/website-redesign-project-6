import { Link } from "react-router-dom";
import { useState } from "react";
import Icon from "@/components/ui/icon";

// ─── Типы ───────────────────────────────────────────────────────────────────

interface DocCard {
  id: string;
  region: string;
  regionCode: string;
  title: string;
  subtitle: string;
  docType: string;
  docTypeIcon: string;
  date: string;
  color: string;
  accentColor: string;
  headerIcon: string;
  screenshot?: { url: string; caption: string }[];
  keyPoints: { icon: string; title: string; text: string }[];
  contacts?: { label: string; value: string; icon: string }[];
  links: { label: string; url: string }[];
  note?: string;
}

// ─── Данные (только из скринов) ─────────────────────────────────────────────

const DOCS: DocCard[] = [
  {
    id: "blag-132",
    region: "Благовещенск",
    regionCode: "БЛАГОВЕЩЕНСК",
    title: "Постановление № 132",
    subtitle: "Об упорядочении размещения указателей наименований улиц и номерных знаков зданий",
    docType: "Постановление администрации",
    docTypeIcon: "Stamp",
    date: "27.07.2009",
    color: "bg-blue-50 border-blue-200",
    accentColor: "text-blue-700 bg-blue-100",
    headerIcon: "MapPin",
    screenshot: [
      {
        url: "https://cdn.poehali.dev/files/0301e381-3752-4b4b-abca-a414c4ac7c15.jpg",
        caption: "Постановление администрации г. Благовещенска № 132 от 27.07.2009",
      },
    ],
    keyPoints: [
      {
        icon: "Info",
        title: "О чём этот документ",
        text: "Документ регулирует размещение АНШЛАГОВ — адресных указателей с наименованием улицы и номером дома. Это не про вывески организаций, а про обязательные номерные знаки на зданиях.",
      },
      {
        icon: "Building2",
        title: "Кто обязан выполнять",
        text: "Собственники зданий и строений обязаны содержать аншлаги в исправном состоянии. Ответственность за размещение и сохранность лежит на владельце здания.",
      },
      {
        icon: "AlertCircle",
        title: "Важно знать",
        text: "Постановление принято в том числе в целях подготовки к Всероссийской переписи населения 2010 года и развития туризма. Аншлаг (адресная табличка) — это не коммерческая вывеска и регулируется отдельно.",
      },
    ],
    links: [
      { label: "Официальный сайт администрации Благовещенска", url: "https://admblag.ru" },
    ],
    note: "Постановление № 132 касается исключительно адресных табличек (аншлагов) — указателей улиц и номеров домов. Для вывесок организаций действует другой документ — Постановление № 1812.",
  },
  {
    id: "blag-1812",
    region: "Благовещенск",
    regionCode: "БЛАГОВЕЩЕНСК",
    title: "Постановление № 1812",
    subtitle: "Согласование дизайн-проекта размещения вывески",
    docType: "Постановление администрации",
    docTypeIcon: "FileCheck",
    date: "14.04.2023",
    color: "bg-orange-50 border-orange-200",
    accentColor: "text-orange-700 bg-orange-100",
    headerIcon: "FileCheck",
    screenshot: [
      {
        url: "https://cdn.poehali.dev/files/9eff50b2-a420-4c6a-84bd-c51c50e9741b.jpg",
        caption: "Официальный сайт admblag.ru — раздел «Согласование дизайн-проекта размещения вывески»",
      },
    ],
    keyPoints: [
      {
        icon: "AlertCircle",
        title: "Главное правило",
        text: "Установка информационных конструкций (вывесок) в Благовещенске осуществляется только ПОСЛЕ согласования по административному регламенту муниципальной услуги «Установка информационной вывески, согласование дизайн-проекта размещения вывески».",
      },
      {
        icon: "FileText",
        title: "Основание",
        text: "Административный регламент утверждён Постановлением администрации города Благовещенска № 1812 от 14.04.2023. Раздел на официальном сайте: Градостроительство → Архитектурный облик → Согласование дизайн-проекта размещения вывески.",
      },
      {
        icon: "Info",
        title: "Что это означает для бизнеса",
        text: "Любая вывеска на фасаде — будь то световой короб, объёмные буквы, баннер или таблица — требует предварительного согласования с администрацией города до её физической установки.",
      },
    ],
    links: [
      {
        label: "admblag.ru — Согласование дизайн-проекта размещения вывески",
        url: "https://admblag.ru/gradostroitelstvo/arxitekturnyj-oblik/soglasovanie-dizajn-proekta-razmeshheniya-vyiveski/",
      },
      { label: "Официальный сайт администрации Благовещенска", url: "https://admblag.ru" },
    ],
  },
  {
    id: "rf-2026",
    region: "Россия",
    regionCode: "ФЕДЕРАЛЬНЫЙ",
    title: "ФЗ № 168-ФЗ от 24.06.2025",
    subtitle: "Русский язык на вывесках — обязательно с 1 марта 2026 г.",
    docType: "Федеральный закон",
    docTypeIcon: "Scale",
    date: "01.03.2026 — вступает в силу",
    color: "bg-red-50 border-red-200",
    accentColor: "text-red-700 bg-red-100",
    headerIcon: "Scale",
    screenshot: [
      {
        url: "https://cdn.poehali.dev/files/71a9fdfc-0cef-4738-a5ce-ad87a9269f08.jpg",
        caption: "Федеральный закон от 24.06.2025 № 168-ФЗ — действует с 1 марта 2026 года",
      },
    ],
    keyPoints: [
      {
        icon: "AlertCircle",
        title: "Суть закона",
        text: "С 1 марта 2026 года в России действует Федеральный закон № 168-ФЗ «О внесении изменений в отдельные законодательные акты Российской Федерации». Закон устанавливает: информация для публичного ознакомления (любая надпись, обращённая к неопределённому кругу лиц) должна быть на русском языке как государственном.",
      },
      {
        icon: "Globe",
        title: "Иностранные слова на вывесках",
        text: "Использование иностранных слов, латиницы и заимствованных названий на вывесках допускается только при наличии русскоязычного текста. Размещение вывески только на иностранном языке — нарушение закона.",
      },
      {
        icon: "ShieldCheck",
        title: "Кого касается",
        text: "Требование распространяется на все организации и ИП, осуществляющие деятельность на территории РФ. Вывески, меню, указатели, информационные таблички — всё это должно быть продублировано на русском языке.",
      },
    ],
    links: [
      { label: "КонсультантПлюс — ФЗ «О рекламе» № 38-ФЗ", url: "https://www.consultant.ru/document/cons_doc_LAW_58968/" },
      { label: "ФАС России — разъяснения по вывескам", url: "https://fas.gov.ru" },
    ],
    note: "Важно разграничивать: вывеска с названием и адресом организации — это не реклама (ФЗ «О рекламе» не применяется). Реклама — это когда привлекают внимание к товарам/услугам. Это разные правовые категории с разными требованиями.",
  },
  {
    id: "svobodny",
    region: "Свободный",
    regionCode: "Г. СВОБОДНЫЙ",
    title: "Решение горсовета № 218",
    subtitle: "Правила благоустройства: требования к средствам наружной информации",
    docType: "Решение городского совета",
    docTypeIcon: "Gavel",
    date: "12.10.2017 (ред. 19.05.2022)",
    color: "bg-green-50 border-green-200",
    accentColor: "text-green-700 bg-green-100",
    headerIcon: "Building2",
    screenshot: [
      {
        url: "https://cdn.poehali.dev/files/3bd53e95-a2fa-4c63-9c7b-ca0d4c1e932c.jpg",
        caption: "Сайт svob.amurobl.ru — услуга согласования вывески и скачивание документов",
      },
      {
        url: "https://cdn.poehali.dev/files/586f84a2-972d-47f0-b2ab-584b335df30d.jpg",
        caption: "П. 9.4 Правил благоустройства г. Свободного — требования к наружной информации",
      },
    ],
    keyPoints: [
      {
        icon: "FileText",
        title: "Документ (п. 9.4 Правил благоустройства)",
        text: "Правила благоустройства территории муниципального образования «город Свободный», утверждённые решением городского совета народных депутатов от 12.10.2017 № 218 (ред. от 19.05.2022). Пункт 9.4 — Требования к размещению и содержанию средств наружной информации.",
      },
      {
        icon: "AlertCircle",
        title: "Ключевые запреты (п. 9.4.1.5)",
        text: "Запрещается установка вывесок, перекрывающих архитектурные детали и элементы фасада: знаки адресации, оконные и дверные проёмы, витрины, балконы, лоджии, колонны, лестничные перила, парапеты, цокольную часть, подпорные стенки.",
      },
      {
        icon: "Building",
        title: "Требования к конструкции (п. 9.4.1.4)",
        text: "Объект наружной информации должен быть безопасен для людей, удобен в эксплуатации и ремонте. Конструкции должны соответствовать техническим регламентам, строительным нормам, государственным стандартам и не нарушать архитектурный облик города.",
      },
      {
        icon: "Home",
        title: "МКД — встроенные нежилые помещения (п. 9.4.1.7)",
        text: "Для нежилых помещений в многоквартирных жилых домах размещение вывесок осуществляется исключительно в границах стен нежилых помещений с учётом требований жилищного законодательства.",
      },
      {
        icon: "Calendar",
        title: "Здания после 2015 года (п. 9.4.1.6)",
        text: "Размещение конструкций вывесок на зданиях, введённых в эксплуатацию после 2015 года, осуществляется в соответствии с проектным решением, входящим в состав проектной документации заказчика (застройщика).",
      },
      {
        icon: "PaintBucket",
        title: "Запрет на покраску и наклейки (п. 9.4.1.8)",
        text: "Размещение объектов наружной информации непосредственно на фасадах методом покраски, наклейки и иными подобными методами не допускается.",
      },
    ],
    contacts: [
      { icon: "MapPin", label: "Адрес", value: "676450, г. Свободный, ул. 50 лет Октября, д. 14, каб. 314, 408" },
      { icon: "Phone", label: "Телефон", value: "8 (41643) 3-53-37" },
      { icon: "Mail", label: "Email", value: "3-53-37@mail.ru" },
      { icon: "Clock", label: "Приёмные дни", value: "Понедельник – среда, 08:00–12:00" },
    ],
    links: [
      {
        label: "svob.amurobl.ru — Установка информационной вывески (скачать PDF правил)",
        url: "https://svob.amurobl.ru",
      },
    ],
    note: "На сайте svob.amurobl.ru доступны для скачивания: «Правила благоустройства (требования к размещению средств наружной информации)» — PDF 2.08 МБ, и «Перечень документов для согласования вывески» — PDF 270.66 КБ.",
  },
];

// ─── Компонент карточки ──────────────────────────────────────────────────────

function DocCardComponent({ doc }: { doc: DocCard }) {
  const [screenshotIndex, setScreenshotIndex] = useState<number | null>(null);

  return (
    <div className={`rounded-2xl border-2 ${doc.color} overflow-hidden shadow-sm`} id={doc.id}>
      {/* Шапка карточки */}
      <div className="p-5 md:p-7">
        <div className="flex items-start gap-4">
          <div className={`rounded-xl p-3 flex-shrink-0 ${doc.accentColor}`}>
            <Icon name={doc.headerIcon as "MapPin"} size={22} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className={`text-[11px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md ${doc.accentColor}`}>
                {doc.regionCode}
              </span>
              <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                <Icon name={doc.docTypeIcon as "Stamp"} size={11} />
                {doc.docType}
              </span>
              <span className="text-[11px] text-muted-foreground">{doc.date}</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">{doc.title}</h2>
            <p className="text-sm text-gray-500 mt-1 leading-relaxed">{doc.subtitle}</p>
          </div>
        </div>

        {/* Ключевые пункты */}
        <div className="mt-5 space-y-4">
          {doc.keyPoints.map((point, i) => (
            <div key={i} className="flex items-start gap-3 bg-white/60 rounded-xl p-3.5">
              <div className={`mt-0.5 flex-shrink-0 rounded-lg p-1.5 ${doc.accentColor}`}>
                <Icon name={point.icon as "Info"} size={14} />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-0.5">{point.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{point.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Примечание */}
        {doc.note && (
          <div className="mt-4 flex items-start gap-2 border border-amber-200 bg-amber-50 rounded-xl px-4 py-3">
            <Icon name="Lightbulb" size={15} className="text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-amber-800 leading-relaxed">{doc.note}</p>
          </div>
        )}
      </div>

      {/* Скрины документов */}
      {doc.screenshot && doc.screenshot.length > 0 && (
        <div className="border-t border-current/10 px-5 md:px-7 py-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-1.5">
            <Icon name="Image" size={11} />
            Скрины документов
          </p>
          <div className="flex flex-wrap gap-3">
            {doc.screenshot.map((sc, i) => (
              <button
                key={i}
                onClick={() => setScreenshotIndex(screenshotIndex === i ? null : i)}
                className="group relative rounded-xl overflow-hidden border-2 border-gray-200 hover:border-gray-400 transition-all"
                style={{ width: 120, height: 80 }}
              >
                <img
                  src={sc.url}
                  alt={sc.caption}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Icon name="ZoomIn" size={20} className="text-white" />
                </div>
              </button>
            ))}
          </div>

          {/* Раскрытый скрин */}
          {screenshotIndex !== null && doc.screenshot[screenshotIndex] && (
            <div className="mt-3">
              <div className="relative rounded-xl overflow-hidden border-2 border-gray-300">
                <img
                  src={doc.screenshot[screenshotIndex].url}
                  alt={doc.screenshot[screenshotIndex].caption}
                  className="w-full object-contain max-h-[500px]"
                />
                <button
                  onClick={() => setScreenshotIndex(null)}
                  className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 transition-colors"
                >
                  <Icon name="X" size={14} />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1.5 italic">{doc.screenshot[screenshotIndex].caption}</p>
            </div>
          )}
        </div>
      )}

      {/* Контакты (только для Свободного) */}
      {doc.contacts && doc.contacts.length > 0 && (
        <div className="border-t border-current/10 px-5 md:px-7 py-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-1.5">
            <Icon name="Phone" size={11} />
            Куда обращаться в г. Свободном
          </p>
          <div className="grid sm:grid-cols-2 gap-2">
            {doc.contacts.map((c, i) => (
              <div key={i} className="flex items-start gap-2.5 bg-white/60 rounded-lg px-3 py-2">
                <Icon name={c.icon as "MapPin"} size={14} className="flex-shrink-0 mt-0.5 text-green-600" />
                <div>
                  <p className="text-[11px] text-gray-400 uppercase tracking-wide">{c.label}</p>
                  <p className="text-sm font-medium text-gray-800">{c.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Ссылки */}
      <div className="border-t border-current/10 px-5 md:px-7 py-4">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1.5">
          <Icon name="ExternalLink" size={11} />
          Ссылки на первоисточники
        </p>
        <div className="flex flex-col gap-1.5">
          {doc.links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1.5 transition-colors"
            >
              <Icon name="ArrowUpRight" size={12} className="flex-shrink-0" />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Главная страница ────────────────────────────────────────────────────────

const REGIONS = [
  { label: "Все", value: "all" },
  { label: "Благовещенск", value: "Благовещенск" },
  { label: "Свободный", value: "Свободный" },
  { label: "Россия (федеральный)", value: "Россия" },
];

export default function SignageLaw() {
  const [activeRegion, setActiveRegion] = useState("all");

  const filtered = activeRegion === "all"
    ? DOCS
    : DOCS.filter(d => d.region === activeRegion);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Верхняя навигация */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-gray-500 hover:text-gray-800 transition-colors flex-shrink-0 text-sm"
          >
            <Icon name="ArrowLeft" size={17} />
            <span className="hidden sm:inline">На главную</span>
          </Link>
          <div className="w-px h-5 bg-gray-200" />
          <h1 className="text-base md:text-lg font-bold text-gray-900 truncate">
            Правовые требования к вывескам
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">

        {/* Hero */}
        <div className="mb-8 rounded-2xl overflow-hidden bg-slate-900 text-white">
          <div className="p-6 md:p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-white/10 rounded-xl p-3 flex-shrink-0">
                <Icon name="BookOpen" size={26} />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold leading-tight">
                  Что важно знать о вывесках
                </h2>
                <p className="text-slate-300 text-sm mt-1">
                  Амурская область: Благовещенск, Свободный — и федеральные нормы России
                </p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
              Справочник собирает нормативные акты из официальных источников. Здесь — не инструкция
              по согласованию, а понимание правовой среды: какие законы действуют, что они означают
              для владельцев бизнеса и что грозит за нарушения.
            </p>
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { n: "4", label: "документа" },
                { n: "2", label: "города" },
                { n: "2026", label: "год: новый ФЗ" },
                { n: "PDF", label: "скрины-источники" },
              ].map(item => (
                <div key={item.label} className="bg-white/8 rounded-xl px-3 py-2.5 text-center">
                  <p className="text-lg font-bold">{item.n}</p>
                  <p className="text-xs text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Важный дисклеймер */}
        <div className="mb-6 flex items-start gap-3 bg-amber-50 border border-amber-300 rounded-xl px-4 py-3.5">
          <Icon name="AlertTriangle" size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800 leading-relaxed">
            <strong>Справочная информация.</strong> Законодательство меняется. Для принятия юридически
            значимых решений — запрашивайте актуальные тексты документов в органах местного самоуправления
            или на официальных правовых порталах.
          </p>
        </div>

        {/* Навигационные блоки — быстрые ответы */}
        <div className="mb-7 grid sm:grid-cols-3 gap-3">
          {[
            {
              q: "Нужно ли согласовывать вывеску?",
              a: "В Благовещенске — да, обязательно до установки. Постановление № 1812.",
              icon: "HelpCircle",
              id: "blag-1812",
            },
            {
              q: "Что изменилось с 1 марта 2026?",
              a: "На вывесках обязателен русский язык. ФЗ № 168-ФЗ от 24.06.2025.",
              icon: "CalendarClock",
              id: "rf-2026",
            },
            {
              q: "Где взять правила для г. Свободного?",
              a: "На svob.amurobl.ru скачать PDF или позвонить 8(41643)3-53-37.",
              icon: "Download",
              id: "svobodny",
            },
          ].map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="bg-white rounded-xl border border-gray-200 hover:border-gray-400 hover:shadow-sm transition-all p-4 block"
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon name={item.icon as "HelpCircle"} size={15} className="text-slate-500" />
                <p className="text-xs font-semibold text-gray-700">{item.q}</p>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">{item.a}</p>
              <p className="text-xs text-blue-500 mt-2 flex items-center gap-0.5">
                Подробнее <Icon name="ArrowDown" size={11} />
              </p>
            </a>
          ))}
        </div>

        {/* Фильтр */}
        <div className="mb-5 flex flex-wrap gap-2">
          {REGIONS.map(r => (
            <button
              key={r.value}
              onClick={() => setActiveRegion(r.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeRegion === r.value
                  ? "bg-slate-800 text-white shadow-sm"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-gray-400"
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>

        {/* Карточки документов */}
        <div className="space-y-6">
          {filtered.map(doc => (
            <DocCardComponent key={doc.id} doc={doc} />
          ))}
        </div>

        {/* Нижний блок — куда обращаться */}
        <div className="mt-8 bg-white rounded-2xl border border-gray-200 p-5 md:p-6">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Icon name="PhoneCall" size={16} className="text-slate-500" />
            Куда обращаться по вопросам вывесок
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Благовещенск</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <Icon name="ChevronRight" size={13} className="mt-0.5 flex-shrink-0 text-orange-400" />
                  Отдел архитектуры и градостроительства администрации г. Благовещенска
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="ChevronRight" size={13} className="mt-0.5 flex-shrink-0 text-orange-400" />
                  МФЦ «Мои документы» — подача документов на согласование
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="ChevronRight" size={13} className="mt-0.5 flex-shrink-0 text-orange-400" />
                  <a href="https://admblag.ru" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    admblag.ru → Градостроительство → Архитектурный облик
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Свободный</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <Icon name="ChevronRight" size={13} className="mt-0.5 flex-shrink-0 text-green-500" />
                  Отдел градостроительства, архитектуры и капстроительства
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="ChevronRight" size={13} className="mt-0.5 flex-shrink-0 text-green-500" />
                  ул. 50 лет Октября, д. 14, каб. 314, 408 · 8 (41643) 3-53-37
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="ChevronRight" size={13} className="mt-0.5 flex-shrink-0 text-green-500" />
                  <a href="https://svob.amurobl.ru" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    svob.amurobl.ru (скачать PDF правил и перечня документов)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Федеральные ресурсы */}
        <div className="mt-4 bg-white rounded-2xl border border-gray-200 p-5 md:p-6">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2 text-sm">
            <Icon name="Globe" size={15} className="text-slate-500" />
            Федеральные правовые ресурсы
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'ФЗ "О рекламе" № 38-ФЗ', url: "https://www.consultant.ru/document/cons_doc_LAW_58968/" },
              { label: "КоАП ст. 14.37 — ответственность", url: "https://www.consultant.ru/document/cons_doc_LAW_34661/" },
              { label: "ФАС России", url: "https://fas.gov.ru" },
              { label: "КонсультантПлюс", url: "https://www.consultant.ru" },
            ].map(link => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors"
              >
                <Icon name="ExternalLink" size={12} />
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          Справочная страница · Данные из официальных источников · Обновлено: февраль 2026
        </p>
      </div>
    </div>
  );
}
