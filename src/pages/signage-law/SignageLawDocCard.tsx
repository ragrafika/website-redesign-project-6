import { useState } from "react";
import Icon from "@/components/ui/icon";
import { DocCard } from "./signageLawData";

function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
      >
        <Icon name="X" size={18} className="text-white" />
      </button>
      <img
        src={src}
        alt="Фото в полном размере"
        className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

export default function SignageLawDocCard({ doc }: { doc: DocCard }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", comment: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("https://functions.poehali.dev/c848bf2f-05f1-42c0-b695-5d345ad19872", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          message: form.comment || "Не указан",
          industry: `${doc.promoButtonLabel} — ${doc.title}`,
        }),
      });
    } finally {
      setLoading(false);
      setSent(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setSent(false);
    setForm({ name: "", phone: "", comment: "" });
  };

  return (
    <>
      {lightboxSrc && <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}
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

          {/* Фото + кнопка */}
          {(doc.promoImage || doc.promoImages) && (
            <div className="mt-5 flex flex-col sm:flex-row gap-4 items-stretch bg-white/70 rounded-xl overflow-hidden border border-white/80">
              {doc.promoImages ? (
                <div className="sm:w-56 flex-shrink-0 grid grid-cols-2 gap-0.5">
                  {doc.promoImages.map((src, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setLightboxSrc(src)}
                      className="overflow-hidden focus:outline-none group relative"
                    >
                      <img src={src} alt={`Пример работы ${i + 1}`} className="w-full h-20 object-cover transition-transform group-hover:scale-105" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <Icon name="ZoomIn" size={18} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="sm:w-44 flex-shrink-0">
                  <button
                    type="button"
                    onClick={() => setLightboxSrc(doc.promoImage!)}
                    className="w-full h-full overflow-hidden focus:outline-none group relative block"
                  >
                    <img src={doc.promoImage} alt="Пример работы" className="w-full h-40 sm:h-full object-cover transition-transform group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <Icon name="ZoomIn" size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </button>
                </div>
              )}
              <div className="flex flex-col justify-center p-4 gap-3">
                {doc.promoDescription && (
                  <p className="text-xs text-gray-500 leading-relaxed">{doc.promoDescription}</p>
                )}
                <button
                  onClick={() => setModalOpen(true)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all w-fit ${doc.accentColor} hover:opacity-80`}
                >
                  <Icon name="ShoppingBag" size={15} />
                  {doc.promoButtonLabel}
                </button>
              </div>
            </div>
          )}

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

        {/* Ссылки на конкретные документы */}
        {doc.links.length > 0 && (
          <div className="border-t border-current/10 px-5 md:px-7 py-4">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1.5">
              <Icon name="ExternalLink" size={11} />
              Первоисточник
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
        )}
      </div>

      {/* Модальное окно */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Icon name="X" size={16} />
            </button>

            {sent ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircle" size={28} className="text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Заявка отправлена!</h3>
                <p className="text-sm text-gray-500">Мы свяжемся с вами в ближайшее время.</p>
                <button
                  onClick={closeModal}
                  className="mt-5 px-6 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
                >
                  Закрыть
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={20} className="text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">Заказать адресный аншлаг</h3>
                    <p className="text-xs text-gray-500">Оставьте заявку — перезвоним и уточним детали</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="text-xs font-medium text-gray-600 block mb-1">Ваше имя</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Иван Иванов"
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-600 block mb-1">Телефон</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-600 block mb-1">Комментарий (необязательно)</label>
                    <textarea
                      rows={3}
                      value={form.comment}
                      onChange={(e) => setForm({ ...form, comment: e.target.value })}
                      placeholder="Адрес объекта, количество, пожелания..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-100 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 text-white py-3 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    <Icon name={loading ? "Loader" : "Send"} size={15} className={loading ? "animate-spin" : ""} />
                    {loading ? "Отправляем..." : "Отправить заявку"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}