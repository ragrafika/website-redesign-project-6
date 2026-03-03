import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const SEND_EMAIL_URL = "https://functions.poehali.dev/c848bf2f-05f1-42c0-b695-5d345ad19872";

export default function NationalProjectsContactForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch(SEND_EMAIL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          industry: "Национальные проекты России",
          message: `[Заявка со страницы Национальные проекты]\n\n${formData.message}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", phone: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 6000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 3000);
      }
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 md:p-10">
      <div className="max-w-2xl mx-auto">
        {/* Заголовок */}
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-primary/20 rounded-xl p-2.5">
            <Icon name="Handshake" size={22} className="text-primary" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Запрос на участие в нацпроекте
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-white mb-2 leading-tight">
          Ваш объект входит в нацпроект?
        </h2>
        <p className="text-slate-400 text-sm mb-7 leading-relaxed">
          Оставьте заявку — перезвоним, уточним детали и предложим решение. Работаем по 44-ФЗ и 223-ФЗ.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid sm:grid-cols-2 gap-3">
            <Input
              placeholder="Ваше имя *"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-white/10 border-white/15 text-white placeholder:text-white/40 focus:border-primary"
              required
            />
            <Input
              type="tel"
              placeholder="Телефон *"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-white/10 border-white/15 text-white placeholder:text-white/40 focus:border-primary"
              required
            />
          </div>
          <Textarea
            placeholder="Опишите объект или задачу (необязательно)"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="bg-white/10 border-white/15 text-white placeholder:text-white/40 focus:border-primary min-h-28 resize-none"
          />

          <div className="flex items-start gap-2.5">
            <input
              type="checkbox"
              id="np-consent"
              defaultChecked
              required
              className="mt-1 w-4 h-4 flex-shrink-0 rounded border-white/20 bg-white/10 text-primary focus:ring-primary"
            />
            <label htmlFor="np-consent" className="text-xs text-white/50 leading-relaxed">
              Нажимая «Отправить», я даю согласие на обработку персональных данных в соответствии с{" "}
              <a href="/consent" className="text-primary hover:underline">ФЗ-152</a>
            </label>
          </div>

          {submitStatus === "success" && (
            <div className="bg-green-500/20 border border-green-500/50 text-green-300 p-4 rounded-xl flex items-center gap-3 text-sm">
              <Icon name="CheckCircle2" size={18} />
              Заявка принята! Мы свяжемся с вами в ближайшее время.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="bg-red-500/20 border border-red-500/50 text-red-300 p-4 rounded-xl flex items-center gap-3 text-sm">
              <Icon name="AlertCircle" size={18} />
              Ошибка отправки. Позвоните нам:{" "}
              <a href="tel:+74162227678" className="font-bold hover:underline">+7 (4162) 22-76-78</a>
            </div>
          )}

          <Button
            type="submit"
            size="lg"
            className="w-full bg-primary hover:bg-red-600 transition-colors font-bold"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Icon name="Loader2" size={16} className="animate-spin mr-2" />
                Отправка...
              </>
            ) : (
              <>
                <Icon name="Send" size={16} className="mr-2" />
                Отправить заявку
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
