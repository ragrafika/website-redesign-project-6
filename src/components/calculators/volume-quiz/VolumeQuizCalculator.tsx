import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import { OptionCard, StepHeader } from './StepCard';
import {
  HEIGHT_RANGES,
  QuizState,
  initialQuizState,
  calculatePrice,
  countSymbols,
  getDelivery,
  ProductType,
  LightingType,
  BaseType,
  InstallationType,
  UrgencyType,
  PRODUCT_BASE_PRESET,
  PRODUCT_INSTALL_PRESET,
} from './config';

const TOTAL_STEPS = 6;

const MOTIVATIONAL = [
  '',
  'Отлично! Тип изделия выбран.',
  'Готово! Текст зафиксирован.',
  'Хорошо! Размер определён.',
  'Супер! Осталось 2 шага.',
  'Почти готово! Последний шаг.',
  '',
];

const productOptions: { value: ProductType; label: string; icon: string; desc: string }[] = [
  { value: 'volumeLight',   label: 'Объёмные световые буквы',             icon: 'Zap',        desc: 'Прямое крепление каждой буквы к фасаду' },
  { value: 'volumeOnBase',  label: 'Световые буквы на подложке',           icon: 'LayoutPanel', desc: 'Буквы смонтированы на общей панели' },
  { value: 'volumeOnFrame', label: 'Световые буквы на металлической раме', icon: 'Frame',       desc: 'Жёсткая рамная конструкция' },
  { value: 'complex',       label: 'Объёмные буквы без подсветки',         icon: 'Type',        desc: 'Без светодиодов, только форма' },
];

const lightingOptions: { value: LightingType; label: string; icon: string; desc: string }[] = [
  { value: 'facade',          label: 'Подсветка лица',       icon: 'Sun',         desc: 'Светится лицевая часть буквы' },
  { value: 'contour',         label: 'Контражур (контурная)', icon: 'Circle',      desc: 'Световой ореол за буквами' },
  { value: 'facadeAndContour', label: 'Лицо + контражур',    icon: 'Sparkles',    desc: 'Максимальный световой эффект' },
  { value: 'consultation',    label: 'Нужна консультация',   icon: 'MessageCircle', desc: 'Подберём оптимальный вариант' },
];

const baseOptions: { value: BaseType; label: string; icon: string; desc: string }[] = [
  { value: 'separate',     label: 'Каждая буква отдельно', icon: 'AlignLeft',   desc: 'Прямое крепление к стене' },
  { value: 'backing',      label: 'На подложке',           icon: 'Square',      desc: 'Буквы на общей панели' },
  { value: 'metalFrame',   label: 'На металлической раме', icon: 'Frame',       desc: 'Жёсткая сварная конструкция или алюминиевые профили' },
  { value: 'consultation', label: 'Нужна консультация',    icon: 'MessageCircle', desc: 'Поможем выбрать крепление' },
];

const installOptions: { value: InstallationType; label: string; icon: string; desc: string }[] = [
  { value: 'none',         label: 'Монтаж не нужен',      icon: 'PackageCheck', desc: 'Установим самостоятельно' },
  { value: 'upTo3m',       label: 'Нужен, высота до 3 м', icon: 'ArrowUpFromLine', desc: 'Стандартный монтаж' },
  { value: 'from3to6m',    label: 'Нужен, высота 3–6 м',  icon: 'TrendingUp',   desc: 'Монтаж с подъёмом' },
  { value: 'crane',        label: 'Нужен с автовышкой',   icon: 'Construction', desc: 'Высотный монтаж' },
  { value: 'consultation', label: 'Нужна консультация',   icon: 'MessageCircle', desc: 'Оценим условия монтажа' },
];

const urgencyOptions: { value: UrgencyType; label: string; icon: string; desc: string; days: string }[] = [
  { value: 'standard',   label: 'Стандартный срок', icon: 'CalendarDays', desc: 'Без доплаты',       days: '7–10 рабочих дней' },
  { value: 'urgent',     label: 'Срочно',           icon: 'Zap',         desc: '+20% к стоимости', days: '4–6 рабочих дней' },
  { value: 'veryUrgent', label: 'Очень срочно',     icon: 'Flame',       desc: '+35% к стоимости', days: '2–4 рабочих дня' },
];

const productLabels: Record<ProductType, string> = {
  volumeLight:   'Объёмные световые буквы',
  volumeOnBase:  'Световые буквы на подложке',
  volumeOnFrame: 'Световые буквы на металлической раме',
  complex:       'Объёмные буквы без подсветки',
};
const lightingLabels: Record<LightingType, string> = {
  facade:          'Подсветка лица',
  contour:         'Контражур',
  facadeAndContour: 'Лицо + контражур',
  none:            'Без подсветки',
  consultation:    'По консультации',
};
const baseLabels: Record<BaseType, string> = {
  separate: 'Каждая буква отдельно',
  backing: 'На подложке',
  metalFrame: 'На металлической раме',
  consultation: 'По консультации',
};
const installLabels: Record<InstallationType, string> = {
  none: 'Не требуется',
  upTo3m: 'До 3 м',
  from3to6m: '3–6 м',
  crane: 'С автовышкой',
  consultation: 'По консультации',
};
const heightLabels = HEIGHT_RANGES.map((r) => r.label);

export default function VolumeQuizCalculator() {
  const [step, setStep] = useState<'start' | number | 'result'>('start');
  const [quiz, setQuiz] = useState<QuizState>(initialQuizState);
  const [form, setForm] = useState({ name: '', phone: '', messenger: '', comment: '', consent: false });
  const [files, setFiles] = useState<File[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  const scrollTop = () => setTimeout(() => topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);

  const goNext = () => {
    setStep((s) => {
      const next = typeof s === 'number' ? s + 1 : 1;
      return next > TOTAL_STEPS ? 'result' : next;
    });
    scrollTop();
  };
  const goBack = () => {
    setStep((s) => {
      if (s === 'result') return TOTAL_STEPS;
      if (typeof s === 'number' && s > 1) return s - 1;
      return 'start';
    });
    scrollTop();
  };

  const price = calculatePrice(quiz);
  const symbols = countSymbols(quiz.signText);

  const canNext = () => {
    if (step === 1) return !!quiz.productType;
    if (step === 2) return quiz.signText.trim().length > 0;
    if (step === 3) return quiz.heightIndex !== null;
    if (step === 4) return !!quiz.lighting;
    if (step === 5) return !!quiz.baseType && !!quiz.installation;
    if (step === 6) return !!quiz.urgency;
    return false;
  };

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const allowed = ['jpg', 'jpeg', 'png', 'pdf', 'ai', 'cdr', 'eps', 'svg'];
    const maxSize = 10 * 1024 * 1024;
    const selected = Array.from(e.target.files || []).filter((f) => {
      const ext = f.name.split('.').pop()?.toLowerCase() || '';
      return allowed.includes(ext) && f.size <= maxSize;
    });
    setFiles((prev) => [...prev, ...selected].slice(0, 5));
  };

  const removeFile = (i: number) => setFiles((prev) => prev.filter((_, idx) => idx !== i));

  const handleSubmit = async () => {
    if (!form.phone || !form.consent) return;
    setSubmitting(true);
    setSubmitError('');

    const details: Record<string, string> = {
      'Тип изделия': quiz.productType ? productLabels[quiz.productType] : '',
      'Текст вывески': quiz.signText,
      'Количество символов': String(symbols),
      'Есть логотип': quiz.hasLogo ? 'да' : 'нет',
      'Есть макет': quiz.hasLayout ? 'да' : 'нет',
      'Высота букв': quiz.heightIndex !== null ? heightLabels[quiz.heightIndex] : '',
      'Подсветка': quiz.lighting ? lightingLabels[quiz.lighting] : '',
      'Основание': quiz.baseType ? baseLabels[quiz.baseType] : '',
      'Монтаж': quiz.installation ? installLabels[quiz.installation] : '',
      'Срок': quiz.urgency ? urgencyOptions.find((o) => o.value === quiz.urgency)?.label || '' : '',
      'Предварительная стоимость': price ? `от ${price.min.toLocaleString('ru-RU')} до ${price.max.toLocaleString('ru-RU')} ₽` : '',
      'Мессенджер': form.messenger,
      'Комментарий': form.comment,
    };

    let imageData: string | undefined;
    if (files.length > 0) {
      const file = files[0];
      imageData = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target?.result as string);
        reader.readAsDataURL(file);
      });
    }

    try {
      const resp = await fetch('https://functions.poehali.dev/c848bf2f-05f1-42c0-b695-5d345ad19872', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name || 'Не указано',
          phone: form.phone,
          calculatorType: 'Объёмные буквы (квиз)',
          price: price?.base || 0,
          details,
          imageData,
        }),
      });
      if (resp.ok) {
        setSubmitted(true);
      } else {
        setSubmitError('Не удалось отправить. Позвоните нам: +7 (4162) 77-07-78');
      }
    } catch {
      setSubmitError('Ошибка сети. Позвоните нам: +7 (4162) 77-07-78');
    } finally {
      setSubmitting(false);
    }
  };

  const progressValue = step === 'start' ? 0 : step === 'result' ? 100 : ((step as number) / TOTAL_STEPS) * 100;

  return (
    <div ref={topRef} className="w-full">
      {step !== 'start' && (
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-muted-foreground font-medium">
              {step === 'result' ? 'Расчёт завершён' : `Шаг ${step} из ${TOTAL_STEPS}`}
            </span>
            <span className="text-xs text-muted-foreground font-medium">
              {Math.round(progressValue)}%
            </span>
          </div>
          <Progress value={progressValue} className="h-2" />
          {typeof step === 'number' && MOTIVATIONAL[step] && (
            <p className="text-xs text-primary font-medium mt-2">{MOTIVATIONAL[step]}</p>
          )}
        </div>
      )}

      {step === 'start' && (
        <div className="text-center py-8 px-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
            <Icon name="Calculator" size={32} className="text-primary" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
            Рассчитайте стоимость световой вывески с объёмными буквами
            <span className="text-primary"> за 1 минуту</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-xl mx-auto">
            Узнайте предварительную цену и сроки изготовления — получите точный расчёт по фото фасада или макету
          </p>
          <Button size="lg" onClick={() => { setStep(1); scrollTop(); }} className="text-base px-8 py-6 h-auto">
            <Icon name="Play" size={20} className="mr-2" />
            Рассчитать стоимость
          </Button>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {[
              { icon: 'Factory',    text: 'Собственное производство' },
              { icon: 'Timer',      text: 'Расчёт за 1 минуту' },
              { icon: 'ScanLine',   text: 'Точный расчёт по фото фасада' },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name={icon} size={16} className="text-primary" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 1 && (
        <div>
          <StepHeader stepNum={1} totalSteps={TOTAL_STEPS} question="Что нужно рассчитать?" />
          <div className="grid sm:grid-cols-2 gap-3">
            {productOptions.map((opt) => (
              <OptionCard
                key={opt.value}
                selected={quiz.productType === opt.value}
                onClick={() => {
                  setQuiz((q) => ({
                    ...q,
                    productType: opt.value,
                    baseType: PRODUCT_BASE_PRESET[opt.value],
                    installation: PRODUCT_INSTALL_PRESET[opt.value] ?? q.installation,
                  }));
                }}
                icon={opt.icon}
                description={opt.desc}
              >
                {opt.label}
              </OptionCard>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <StepHeader stepNum={2} totalSteps={TOTAL_STEPS} question="Введите текст вывески" hint="Укажите название — подсчитаем количество символов автоматически" />
          <div className="space-y-4">
            <div>
              <Input
                value={quiz.signText}
                onChange={(e) => setQuiz((q) => ({ ...q, signText: e.target.value }))}
                placeholder="Например: ПРОДУКТЫ или КОФЕ"
                className="text-lg h-14 uppercase"
                autoFocus
              />
              {quiz.signText && (
                <div className="mt-2 flex gap-4 text-sm text-muted-foreground">
                  <span>Символов: <strong className="text-foreground">{symbols}</strong></span>
                  <span className="text-xs">(пробелы = 0,5 символа)</span>
                </div>
              )}
              {!quiz.signText && (
                <p className="text-xs text-destructive mt-2">Поле обязательно для расчёта</p>
              )}
            </div>
            <div className="space-y-3 pt-2">
              <label className="flex items-start gap-3 cursor-pointer p-3 rounded-xl border border-border hover:border-primary/30 transition-colors">
                <Checkbox
                  checked={quiz.hasLogo}
                  onCheckedChange={(v) => setQuiz((q) => ({ ...q, hasLogo: v as boolean }))}
                  className="mt-0.5"
                />
                <div>
                  <div className="font-medium text-sm">Есть логотип / фирменный знак</div>
                  <div className="text-xs text-muted-foreground">Добавим к расчёту стоимость изготовления логотипа</div>
                </div>
              </label>
              <label className="flex items-start gap-3 cursor-pointer p-3 rounded-xl border border-border hover:border-primary/30 transition-colors">
                <Checkbox
                  checked={quiz.hasLayout}
                  onCheckedChange={(v) => setQuiz((q) => ({ ...q, hasLayout: v as boolean }))}
                  className="mt-0.5"
                />
                <div>
                  <div className="font-medium text-sm">Есть свой макет</div>
                  <div className="text-xs text-muted-foreground">Можно загрузить на экране с результатом</div>
                </div>
              </label>
            </div>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <StepHeader stepNum={3} totalSteps={TOTAL_STEPS} question="Какая высота букв вам нужна?" hint="От высоты зависит стоимость и видимость вывески" />
          <div className="grid sm:grid-cols-2 gap-3">
            {HEIGHT_RANGES.map((range, i) => (
              <OptionCard
                key={i}
                selected={quiz.heightIndex === i}
                onClick={() => setQuiz((q) => ({ ...q, heightIndex: i }))}
                icon={i < 2 ? '🔡' : i < 4 ? '🔠' : '🏢'}
                description={`Расчётная высота: ${range.calcHeight} см`}
              >
                {range.label}
              </OptionCard>
            ))}
          </div>
        </div>
      )}

      {step === 4 && (
        <div>
          <StepHeader stepNum={4} totalSteps={TOTAL_STEPS} question="Какой тип подсветки нужен?" />
          <div className="grid sm:grid-cols-2 gap-3">
            {lightingOptions.map((opt) => (
              <OptionCard
                key={opt.value}
                selected={quiz.lighting === opt.value}
                onClick={() => setQuiz((q) => ({ ...q, lighting: opt.value }))}
                icon={opt.icon}
                description={opt.desc}
              >
                {opt.label}
              </OptionCard>
            ))}
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="space-y-8">
          <div>
            <StepHeader stepNum={5} totalSteps={TOTAL_STEPS} question="Основание и монтаж" hint="Два вопроса на одном экране" />
            <p className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">Как будет крепиться вывеска?</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {baseOptions.map((opt) => (
                <OptionCard
                  key={opt.value}
                  selected={quiz.baseType === opt.value}
                  onClick={() => setQuiz((q) => ({ ...q, baseType: opt.value }))}
                  icon={opt.icon}
                  description={opt.desc}
                >
                  {opt.label}
                </OptionCard>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">Нужен ли монтаж?</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {installOptions.map((opt) => (
                <OptionCard
                  key={opt.value}
                  selected={quiz.installation === opt.value}
                  onClick={() => setQuiz((q) => ({ ...q, installation: opt.value }))}
                  icon={opt.icon}
                  description={opt.desc}
                >
                  {opt.label}
                </OptionCard>
              ))}
            </div>
          </div>
        </div>
      )}

      {step === 6 && (
        <div>
          <StepHeader stepNum={6} totalSteps={TOTAL_STEPS} question="Когда нужна вывеска?" />
          <div className="grid sm:grid-cols-3 gap-3">
            {urgencyOptions.map((opt) => (
              <OptionCard
                key={opt.value}
                selected={quiz.urgency === opt.value}
                onClick={() => setQuiz((q) => ({ ...q, urgency: opt.value }))}
                icon={opt.icon}
                description={`${opt.desc} · ${opt.days}`}
              >
                {opt.label}
              </OptionCard>
            ))}
          </div>
        </div>
      )}

      {step === 'result' && (
        <div className="space-y-8">
          {price && (
            <div className="bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl p-6 sm:p-8 text-white">
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Calculator" size={20} className="text-primary" />
                <span className="text-sm font-medium text-white/70">Предварительная стоимость</span>
              </div>
              <div className="text-3xl sm:text-4xl font-bold mb-1">
                от {price.min.toLocaleString('ru-RU')} ₽
              </div>
              <div className="text-lg text-white/80 mb-4">
                до {price.max.toLocaleString('ru-RU')} ₽
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Icon name="Clock" size={16} />
                <span>Ориентировочный срок: {quiz.urgency ? getDelivery(quiz.urgency) : ''}</span>
              </div>
              <p className="text-xs text-white/50 mt-3">
                Точная стоимость зависит от шрифта, материалов, размера логотипа и условий монтажа.
              </p>
            </div>
          )}

          <div className="bg-muted/40 rounded-xl p-5">
            <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
              <Icon name="CheckCircle" size={16} className="text-primary" />
              Что учтено в расчёте
            </h4>
            <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {[
                ['Тип изделия', quiz.productType ? productLabels[quiz.productType] : ''],
                ['Текст', quiz.signText],
                ['Символов', String(symbols)],
                ['Логотип', quiz.hasLogo ? 'Да' : 'Нет'],
                ['Высота букв', quiz.heightIndex !== null ? heightLabels[quiz.heightIndex] : ''],
                ['Подсветка', quiz.lighting ? lightingLabels[quiz.lighting] : ''],
                ['Основание', quiz.baseType ? baseLabels[quiz.baseType] : ''],
                ['Монтаж', quiz.installation ? installLabels[quiz.installation] : ''],
                ['Срок', quiz.urgency ? urgencyOptions.find((o) => o.value === quiz.urgency)?.label || '' : ''],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-2 py-1 border-b border-border/50 last:border-0">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="font-medium text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {!submitted ? (
            <div className="bg-white rounded-2xl border-2 border-border p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-1">Получите точный расчёт и визуализацию</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Оставьте контакты — подготовим точный расчёт для вашего объекта
              </p>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Имя</label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">
                    Телефон <span className="text-destructive">*</span>
                  </label>
                  <Input
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    placeholder="+7 (___) ___-__-__"
                    type="tel"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">WhatsApp / Telegram</label>
                  <Input
                    value={form.messenger}
                    onChange={(e) => setForm((f) => ({ ...f, messenger: e.target.value }))}
                    placeholder="Ник или номер в мессенджере"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Комментарий</label>
                  <textarea
                    value={form.comment}
                    onChange={(e) => setForm((f) => ({ ...f, comment: e.target.value }))}
                    placeholder="Дополнительные пожелания или вопросы"
                    rows={3}
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Прикрепить файлы (фото фасада, логотип, макет)
                  </label>
                  <div
                    onClick={() => fileRef.current?.click()}
                    className="border-2 border-dashed border-border rounded-xl p-4 text-center cursor-pointer hover:border-primary/50 transition-colors"
                  >
                    <Icon name="Upload" size={20} className="mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      JPG, PNG, PDF, AI, CDR, EPS, SVG · до 10 МБ · до 5 файлов
                    </p>
                    <input
                      ref={fileRef}
                      type="file"
                      multiple
                      accept=".jpg,.jpeg,.png,.pdf,.ai,.cdr,.eps,.svg"
                      onChange={handleFiles}
                      className="hidden"
                    />
                  </div>
                  {files.length > 0 && (
                    <ul className="mt-3 space-y-1">
                      {files.map((f, i) => (
                        <li key={i} className="flex items-center justify-between text-sm bg-muted/40 rounded-lg px-3 py-1.5">
                          <span className="truncate mr-2">{f.name}</span>
                          <button
                            type="button"
                            onClick={() => removeFile(i)}
                            className="text-muted-foreground hover:text-destructive flex-shrink-0"
                          >
                            <Icon name="X" size={14} />
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <Checkbox
                    checked={form.consent}
                    onCheckedChange={(v) => setForm((f) => ({ ...f, consent: v as boolean }))}
                    className="mt-0.5"
                  />
                  <span className="text-xs text-muted-foreground leading-relaxed">
                    Согласен(а) на обработку персональных данных в соответствии с{' '}
                    <a href="/privacy" className="underline hover:text-primary" target="_blank">политикой конфиденциальности</a>
                  </span>
                </label>

                {submitError && (
                  <p className="text-sm text-destructive bg-destructive/10 rounded-lg p-3">{submitError}</p>
                )}

                <Button
                  size="lg"
                  className="w-full h-14 text-base"
                  disabled={!form.phone || !form.consent || submitting}
                  onClick={handleSubmit}
                >
                  {submitting ? (
                    <>
                      <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                      Отправляем...
                    </>
                  ) : (
                    <>
                      <Icon name="Send" size={20} className="mr-2" />
                      Получить точный расчёт
                    </>
                  )}
                </Button>

                <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground pt-1">
                  <span className="flex items-center gap-1.5"><Icon name="Clock" size={13} />Ответим за 30 минут в рабочее время</span>
                  <span className="flex items-center gap-1.5"><Icon name="Image" size={13} />Можно приложить фото фасада</span>
                  <span className="flex items-center gap-1.5"><Icon name="Palette" size={13} />Визуализация — по запросу</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border-2 border-primary/20 p-8 text-center shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Icon name="CheckCircle" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Заявка отправлена!</h3>
              <p className="text-muted-foreground">
                Мы получили ваши контакты и параметры вывески. Свяжемся с вами в течение 30 минут в рабочее время.
              </p>
              <p className="text-sm text-muted-foreground mt-3">
                Или позвоните сами:{' '}
                <a href="tel:+74162770778" className="text-primary font-semibold hover:underline">
                  +7 (4162) 77-07-78
                </a>
              </p>
            </div>
          )}
        </div>
      )}

      {step !== 'start' && step !== 'result' && (
        <div className="flex gap-3 mt-8">
          <Button variant="outline" onClick={goBack} className="flex-shrink-0">
            <Icon name="ArrowLeft" size={18} className="mr-2" />
            Назад
          </Button>
          <Button
            className="flex-1"
            disabled={!canNext()}
            onClick={goNext}
          >
            {step === TOTAL_STEPS ? 'Посмотреть результат' : 'Далее'}
            <Icon name="ArrowRight" size={18} className="ml-2" />
          </Button>
        </div>
      )}

      {step === 'result' && !submitted && (
        <div className="flex gap-3 mt-4">
          <Button variant="outline" onClick={goBack}>
            <Icon name="ArrowLeft" size={18} className="mr-2" />
            Изменить параметры
          </Button>
        </div>
      )}
    </div>
  );
}