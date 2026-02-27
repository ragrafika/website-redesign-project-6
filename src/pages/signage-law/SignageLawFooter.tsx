import Icon from "@/components/ui/icon";

const BLAG_CONTACTS = [
  "Отдел архитектуры и градостроительства администрации г. Благовещенска",
  "МФЦ «Мои документы» — подача документов на согласование",
];

const SVOBODNY_CONTACTS = [
  "Отдел градостроительства, архитектуры и капстроительства",
  "ул. 50 лет Октября, д. 14, каб. 314, 408 · 8 (41643) 3-53-37",
];

const FEDERAL_LINKS = [
  { label: 'ФЗ "О рекламе" № 38-ФЗ', url: "https://www.consultant.ru/document/cons_doc_LAW_58968/" },
  { label: "КоАП ст. 14.37 — ответственность", url: "https://www.consultant.ru/document/cons_doc_LAW_34661/" },
  { label: "ФАС России", url: "https://fas.gov.ru" },
  { label: "КонсультантПлюс", url: "https://www.consultant.ru" },
];

export default function SignageLawFooter() {
  return (
    <>
      {/* Куда обращаться */}
      <div className="mt-8 bg-white rounded-2xl border border-gray-200 p-5 md:p-6">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Icon name="PhoneCall" size={16} className="text-slate-500" />
          Куда обращаться по вопросам вывесок
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Благовещенск</p>
            <ul className="space-y-1.5 text-sm text-gray-600">
              {BLAG_CONTACTS.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Icon name="ChevronRight" size={13} className="mt-0.5 flex-shrink-0 text-orange-400" />
                  {item}
                </li>
              ))}
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
              {SVOBODNY_CONTACTS.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Icon name="ChevronRight" size={13} className="mt-0.5 flex-shrink-0 text-green-500" />
                  {item}
                </li>
              ))}
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
          {FEDERAL_LINKS.map(link => (
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
    </>
  );
}
