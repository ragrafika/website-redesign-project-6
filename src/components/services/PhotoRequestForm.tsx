import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";

interface PhotoRequestFormProps {
  onSuccess?: () => void;
}

const SEND_URL = "https://functions.poehali.dev/c848bf2f-05f1-42c0-b695-5d345ad19872";

const resizeImage = (file: File, maxSize = 1600): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("read"));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error("image"));
      img.onload = () => {
        const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        canvas.getContext("2d")?.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.85));
      };
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  });

const PhotoRequestForm = ({ onSuccess }: PhotoRequestFormProps) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [consent, setConsent] = useState(true);
  const [photo, setPhoto] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;
    setPhoto(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || !consent || !photo) return;
    setSubmitting(true);
    setStatus("idle");
    try {
      const imageData = await resizeImage(photo);
      const resp = await fetch(SEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name || "Не указано",
          phone,
          calculatorType: "Вывески под ключ — фото фасада",
          requestSource: "site_button",
          price: 0,
          details: { "Комментарий": comment },
          imageData,
        }),
      });
      if (resp.ok) {
        setStatus("success");
        setTimeout(() => onSuccess?.(), 2500);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-6">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-3">
          <Icon name="CheckCircle" size={28} className="text-primary" />
        </div>
        <h4 className="text-lg font-bold mb-1">Фото отправлено!</h4>
        <p className="text-sm text-muted-foreground">Рассчитаем стоимость и свяжемся с вами.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div
        onClick={() => fileRef.current?.click()}
        className="border-2 border-dashed border-border rounded-xl p-4 text-center cursor-pointer hover:border-primary/50 transition-colors"
      >
        {preview ? (
          <img src={preview} alt="Фото фасада" className="max-h-48 mx-auto rounded-lg object-contain" />
        ) : (
          <>
            <Icon name="Camera" size={24} className="mx-auto mb-2 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Нажмите, чтобы выбрать фото фасада</p>
          </>
        )}
        <input ref={fileRef} type="file" accept="image/*" onChange={handleFile} className="hidden" />
      </div>
      {preview && (
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className="text-xs text-primary underline"
        >
          Выбрать другое фото
        </button>
      )}
      <Input placeholder="Ваше имя" value={name} onChange={(e) => setName(e.target.value)} />
      <Input placeholder="Телефон" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Комментарий (необязательно)"
        rows={2}
        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
      />
      <label className="flex items-start gap-3 cursor-pointer">
        <Checkbox checked={consent} onCheckedChange={(v) => setConsent(v as boolean)} className="mt-0.5" />
        <span className="text-xs text-muted-foreground leading-relaxed">
          Согласен(а) на обработку персональных данных в соответствии с{" "}
          <a href="/privacy" className="underline hover:text-primary" target="_blank">политикой конфиденциальности</a>
        </span>
      </label>
      {status === "error" && (
        <p className="text-sm text-destructive bg-destructive/10 rounded-lg p-3">
          Не удалось отправить. Позвоните нам: +7 (4162) 22-76-78
        </p>
      )}
      <Button type="submit" size="lg" className="w-full" disabled={!phone || !consent || !photo || submitting}>
        {submitting ? (
          <>
            <Icon name="Loader2" size={18} className="mr-2 animate-spin" />
            Отправляем...
          </>
        ) : (
          <>
            <Icon name="Send" size={18} className="mr-2" />
            Отправить фото
          </>
        )}
      </Button>
    </form>
  );
};

export default PhotoRequestForm;
