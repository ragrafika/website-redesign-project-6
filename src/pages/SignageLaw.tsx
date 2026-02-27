import { Link } from "react-router-dom";
import { useState } from "react";
import Icon from "@/components/ui/icon";

// ─── Типы ───────────────────────────────────────────────────────────────────

interface DocSource {
  label: string;
  url?: string;
}

interface Requirement {
  text: string;
}

interface DocCard {
  id: string;
  region: string;
  regionCode: string;
  title: string;
  subtitle: string;
  docType: "постановление" | "регламент" | "федеральный закон" | "решение";
  date: string;
  number?: string;
  summary: string;
  requirements: Requirement[];
  sources: DocSource[];
  important?: string;
  color: string;
  accentColor: string;
  icon: string;
}

// ─── Данные ─────────────────────────────────────────────────────────────────

const DOCS: DocCard[] = [
  {
    id: "blag-132",
    region: "Благовещенск",
    regionCode: "АМУРСКАЯ ОБЛ.",
    title: "Постановление № 132",
    subtitle: "Правила размещения аншлагов и вывесок",
    docType: "постановление",
    date: "2009",
    number: "132",
    summary:
      "Основной муниципальный акт г. Благовещенска, регулирующий размещение аншлагов на зданиях и сооружениях. Устанавливает требования к внешнему виду, габаритам, способу крепления и оформлению вывесок организаций.",
    requirements: [
      { text: "Аншлаги (адресные таблички) обязательны на каждом здании и строении" },
      { text: "Размер аншлага: не менее 20×30 см, единый стиль в пределах одного здания" },
      { text: "Размещение: на фасаде здания на высоте 2,5–3,5 м от уровня земли" },
      { text: "Материал: антивандальный, устойчивый к атмосферным воздействиям" },
      { text: "Информация: наименование улицы, номер дома, номера квартир (для жилых)" },
      { text: "Освещение: рекомендуется для зданий в зонах с пониженной видимостью" },
      { text: "Содержание в чистоте и исправном состоянии — ответственность собственника" },
    ],
    sources: [
      {
        label: "Официальный портал администрации г. Благовещенска",
        url: "https://www.blagov.ru",
      },
      {
        label: "Муниципальная правовая база Амурской области",
        url: "https://pravo.minjust.ru",
      },
    ],
    important: "Штраф за нарушение — до 5 000 ₽ для граждан, до 50 000 ₽ для организаций (КоАП Амурской области)",
    color: "bg-blue-50 border-blue-200",
    accentColor: "text-blue-700 bg-blue-100",
    icon: "MapPin",
  },
  {
    id: "blag-reglament",
    region: "Благовещенск",
    regionCode: "АМУРСКАЯ ОБЛ.",
    title: "Административный регламент",
    subtitle: "Согласование дизайн-проекта размещения вывески",
    docType: "регламент",
    date: "актуален",
    summary:
      "Муниципальная услуга «Установка информационной вывески, согласование дизайн-проекта размещения вывески». Установка информационных конструкций (вывесок) в г. Благовещенске осуществляется только после прохождения процедуры согласования.",
    requirements: [
      { text: "Любая вывеска организации требует предварительного согласования с администрацией" },
      { text: "Необходимо разработать дизайн-проект: эскиз, материалы, способ крепления" },
      { text: "Документы: заявление, правоустанавливающие документы на помещение, дизайн-проект" },
      { text: "Срок рассмотрения заявления — до 30 рабочих дней" },
      { text: "При несоответствии требованиям — мотивированный отказ с возможностью доработки" },
      { text: "Согласованная вывеска должна строго соответствовать утверждённому дизайн-проекту" },
      { text: "Размещение без согласования — основание для демонтажа за счёт владельца" },
    ],
    sources: [
      {
        label: "Портал госуслуг г. Благовещенска",
        url: "https://www.gosuslugi.ru",
      },
      {
        label: "МФЦ «Мои документы» г. Благовещенска",
        url: "https://mfc28.ru",
      },
      {
        label: "Отдел архитектуры и градостроительства администрации Благовещенска",
        url: "https://www.blagov.ru",
      },
    ],
    important: "Услуга оказывается бесплатно. Подать документы можно через МФЦ или портал госуслуг.",
    color: "bg-orange-50 border-orange-200",
    accentColor: "text-orange-700 bg-orange-100",
    icon: "FileCheck",
  },
  {
    id: "rf-2026",
    region: "Вся Россия",
    regionCode: "ФЕДЕРАЛЬНЫЙ",
    title: "Изменения с 1 марта 2026 г.",
    subtitle: "Новые федеральные требования к информационным конструкциям",
    docType: "федеральный закон",
    date: "01.03.2026",
    summary:
      "С 1 марта 2026 года вступают в силу обновлённые требования к вывескам и информационным конструкциям на территории РФ. Изменения касаются разграничения понятий «вывеска» и «реклама», а также порядка согласования и размещения.",
    requirements: [
      { text: "Вывеска — не реклама: информация о наименовании, адресе и режиме работы организации не является рекламой (ч. 2 ст. 2 Закона о рекламе)" },
      { text: "Вывеска НЕ требует разрешения на распространение рекламы — это разные правовые категории" },
      { text: "Размещение вывески на арендуемом помещении — требуется согласие собственника здания" },
      { text: "Запрещено: размещение информации, вводящей потребителей в заблуждение" },
      { text: "Требования к размеру и виду — устанавливаются муниципальными актами (у каждого города свои)" },
      { text: "Конструкции на объектах культурного наследия — особый порядок, согласование с органами охраны ОКН" },
      { text: "Ответственность: незаконная рекламная конструкция — штраф до 500 000 ₽ для юрлиц (ст. 14.37 КоАП)" },
    ],
    sources: [
      {
        label: 'Федеральный закон № 38-ФЗ "О рекламе"',
        url: "https://www.consultant.ru/document/cons_doc_LAW_58968/",
      },
      {
        label: "КоАП РФ ст. 14.37 (незаконная рекламная конструкция)",
        url: "https://www.consultant.ru/document/cons_doc_LAW_34661/",
      },
      {
        label: "Разъяснения ФАС России по вывескам",
        url: "https://fas.gov.ru",
      },
    ],
    important: "Ключевой принцип: вывеска = информация об организации на месте её нахождения. Реклама = привлечение внимания к товарам/услугам. Это разные вещи с разными требованиями.",
    color: "bg-red-50 border-red-200",
    accentColor: "text-red-700 bg-red-100",
    icon: "Scale",
  },
  {
    id: "svobodny",
    region: "Свободный",
    regionCode: "АМУРСКАЯ ОБЛ.",
    title: "Правила размещения вывесок",
    subtitle: "Муниципальные требования г. Свободного",
    docType: "решение",
    date: "актуален",
    summary:
      "Г. Свободный Амурской области устанавливает собственные требования к вывескам в рамках «Правил благоустройства территории городского округа». Размещение вывесок регулируется отделом архитектуры администрации города.",
    requirements: [
      { text: "Вывески размещаются строго в пределах занимаемого организацией помещения (по горизонтали)" },
      { text: "Запрещено перекрывать окна, балконы и архитектурные элементы здания" },
      { text: "Высота вывески: как правило, не более 0,5 м; длина — по согласованию" },
      { text: "Подсветка: допускается внутренняя или контурная; мигающая и слепящая — запрещена" },
      { text: "Цветовое решение: не должно резко контрастировать с фасадом (для зданий в исторической части)" },
      { text: "Крепление: только к несущим конструкциям; запрещено к оконным рамам и козырькам" },
      { text: "Обязательное согласование в отделе архитектуры до установки" },
    ],
    sources: [
      {
        label: "Администрация г. Свободного — официальный сайт",
        url: "https://www.svobodny-city.ru",
      },
      {
        label: "Правила благоустройства г. Свободного (запрос в администрации)",
        url: "https://www.svobodny-city.ru",
      },
    ],
    important: "Для получения актуального текста правил рекомендуем обратиться напрямую в отдел архитектуры и градостроительства администрации г. Свободного.",
    color: "bg-green-50 border-green-200",
    accentColor: "text-green-700 bg-green-100",
    icon: "Building2",
  },
];

// ─── Типы иконок документов ─────────────────────────────────────────────────
const DOC_TYPE_ICONS: Record<string, string> = {
  постановление: "Stamp",
  регламент: "ClipboardList",
  "федеральный закон": "Scale",
  решение: "Gavel",
};

// ─── Компонент карточки документа ───────────────────────────────────────────
function DocCardComponent({ doc }: { doc: DocCard }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`rounded-2xl border-2 ${doc.color} overflow-hidden shadow-sm hover:shadow-md transition-shadow`}>
      {/* Шапка */}
      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 flex-1 min-w-0">
            <div className={`rounded-xl p-3 flex-shrink-0 ${doc.accentColor}`}>
              <Icon name={doc.icon as "MapPin"} size={22} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className={`text-[11px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md ${doc.accentColor}`}>
                  {doc.regionCode}
                </span>
                <span className="text-[11px] text-muted-foreground uppercase tracking-wide flex items-center gap-1">
                  <Icon name={DOC_TYPE_ICONS[doc.docType] as "Stamp"} size={11} />
                  {doc.docType}
                </span>
                {doc.date && (
                  <span className="text-[11px] text-muted-foreground">{doc.date}</span>
                )}
              </div>
              <h2 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">{doc.title}</h2>
              <p className="text-sm text-gray-500 mt-0.5">{doc.subtitle}</p>
            </div>
          </div>
        </div>

        <p className="mt-4 text-sm text-gray-700 leading-relaxed">{doc.summary}</p>

        {doc.important && (
          <div className="mt-3 flex items-start gap-2 bg-white/70 rounded-lg px-3 py-2 border border-current/10">
            <Icon name="AlertCircle" size={14} className="mt-0.5 flex-shrink-0 text-amber-600" />
            <p className="text-xs text-gray-700 leading-relaxed">{doc.important}</p>
          </div>
        )}
      </div>

      {/* Требования (сворачиваемые) */}
      <div className="border-t border-current/10">
        <button
          onClick={() => setOpen(v => !v)}
          className="w-full flex items-center justify-between px-5 md:px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-white/40 transition-colors"
        >
          <span className="flex items-center gap-2">
            <Icon name="ListChecks" size={15} />
            Основные требования ({doc.requirements.length})
          </span>
          <Icon name={open ? "ChevronUp" : "ChevronDown"} size={16} />
        </button>

        {open && (
          <div className="px-5 md:px-6 pb-5 space-y-2">
            {doc.requirements.map((req, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <div className={`mt-1 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold ${doc.accentColor}`}>
                  {i + 1}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{req.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Источники */}
      <div className="border-t border-current/10 px-5 md:px-6 py-4">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1.5">
          <Icon name="ExternalLink" size={11} />
          Источники и ссылки
        </p>
        <div className="flex flex-col gap-1.5">
          {doc.sources.map((src, i) => (
            src.url ? (
              <a
                key={i}
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1 transition-colors"
              >
                <Icon name="Link" size={11} />
                {src.label}
              </a>
            ) : (
              <p key={i} className="text-xs text-gray-500 flex items-center gap-1">
                <Icon name="Link" size={11} />
                {src.label}
              </p>
            )
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Страница ────────────────────────────────────────────────────────────────

const REGIONS = ["Все регионы", "Благовещенск", "Свободный", "Вся Россия"];

export default function SignageLaw() {
  const [activeRegion, setActiveRegion] = useState("Все регионы");

  const filtered = activeRegion === "Все регионы"
    ? DOCS
    : DOCS.filter(d => d.region === activeRegion);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Шапка */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors flex-shrink-0"
          >
            <Icon name="ArrowLeft" size={18} />
            <span className="text-sm hidden sm:inline">На главную</span>
          </Link>
          <div className="flex-1 min-w-0">
            <h1 className="text-lg md:text-xl font-bold text-gray-900 leading-tight truncate">
              Правовые требования к вывескам
            </h1>
            <p className="text-xs text-gray-500 hidden sm:block">Благовещенск · Свободный · Россия</p>
          </div>
          <div className="flex-shrink-0 flex items-center gap-1 text-xs text-amber-600 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
            <Icon name="AlertTriangle" size={12} />
            <span className="hidden sm:inline">Консультация</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">

        {/* Hero */}
        <div className="mb-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 text-white p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="bg-white/10 rounded-xl p-3 flex-shrink-0">
              <Icon name="BookOpen" size={28} />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-2">Справочник по законодательству о вывесках</h2>
              <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                Актуальные требования федерального и муниципального законодательства по размещению
                информационных вывесок и аншлагов. Амурская область: Благовещенск, Свободный и другие города.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  { icon: "FileText", text: "4 документа" },
                  { icon: "MapPin", text: "2 города" },
                  { icon: "RefreshCw", text: "Обновляется" },
                ].map(item => (
                  <div key={item.text} className="flex items-center gap-1.5 bg-white/10 rounded-lg px-3 py-1.5 text-sm">
                    <Icon name={item.icon as "FileText"} size={13} />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Дисклеймер */}
        <div className="mb-6 flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
          <Icon name="Info" size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-amber-800 leading-relaxed">
            Информация носит справочный характер. Законодательство регулярно обновляется.
            Для принятия юридически значимых решений рекомендуем запрашивать актуальные тексты
            документов напрямую в органах местного самоуправления или на официальных правовых порталах.
          </p>
        </div>

        {/* Фильтр по регионам */}
        <div className="mb-6 flex flex-wrap gap-2">
          {REGIONS.map(region => (
            <button
              key={region}
              onClick={() => setActiveRegion(region)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeRegion === region
                  ? "bg-slate-800 text-white shadow-sm"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-gray-400"
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Карточки */}
        <div className="space-y-5">
          {filtered.map(doc => (
            <DocCardComponent key={doc.id} doc={doc} />
          ))}
        </div>

        {/* Блок "Нет вашего города" */}
        <div className="mt-8 rounded-2xl border-2 border-dashed border-gray-300 bg-white p-6 md:p-8 text-center">
          <Icon name="MapPin" size={32} className="mx-auto mb-3 text-gray-300" />
          <h3 className="font-semibold text-gray-700 mb-1">Не нашли свой город?</h3>
          <p className="text-sm text-gray-500 mb-4 max-w-md mx-auto">
            Требования к вывескам устанавливаются на муниципальном уровне. Уточнить правила
            для конкретного города можно в отделе архитектуры местной администрации.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "ФАС России (реклама и вывески)", url: "https://fas.gov.ru" },
              { label: "КонсультантПлюс", url: "https://www.consultant.ru" },
              { label: "Закон о рекламе № 38-ФЗ", url: "https://www.consultant.ru/document/cons_doc_LAW_58968/" },
            ].map(link => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors"
              >
                <Icon name="ExternalLink" size={13} />
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Ссылки на общие законы */}
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2 text-sm">
              <Icon name="Scale" size={15} className="text-blue-600" />
              Федеральная правовая база
            </h3>
            <ul className="space-y-2">
              {[
                { label: 'ФЗ "О рекламе" № 38-ФЗ', url: "https://www.consultant.ru/document/cons_doc_LAW_58968/" },
                { label: "Статья 14.37 КоАП — ответственность", url: "https://www.consultant.ru/document/cons_doc_LAW_34661/" },
                { label: 'ФЗ "О защите прав потребителей"', url: "https://www.consultant.ru/document/cons_doc_LAW_305/" },
              ].map(item => (
                <li key={item.label}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:underline flex items-center gap-1">
                    <Icon name="ChevronRight" size={11} />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2 text-sm">
              <Icon name="Building" size={15} className="text-green-600" />
              Куда обращаться
            </h3>
            <ul className="space-y-2 text-xs text-gray-600">
              {[
                "Отдел архитектуры администрации города",
                "МФЦ «Мои документы» — подача документов",
                "ФАС России — нарушения рекламного законодательства",
                "Жилищная инспекция — нарушения на фасадах МКД",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <Icon name="ChevronRight" size={11} className="mt-0.5 flex-shrink-0 text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-gray-400">
          Страница носит информационный характер · Последнее обновление: февраль 2026
        </p>
      </div>
    </div>
  );
}