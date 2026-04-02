// ─── Базовые ставки: ₽ / 1 см высоты / 1 символ ────────────────────────────
export const LIGHTING_RATES: Record<LightingType, number> = {
  none:              120,
  facade:            180,
  contour:           220,
  facadeAndContour:  260,
  consultation:      200,
};

// ─── Коэффициенты высоты ────────────────────────────────────────────────────
export const HEIGHT_RANGES = [
  { label: 'До 20 см',     calcHeight: 15,  coefficient: 1.30 },
  { label: '20–30 см',     calcHeight: 25,  coefficient: 1.15 },
  { label: '31–50 см',     calcHeight: 40,  coefficient: 1.00 },
  { label: '51–70 см',     calcHeight: 60,  coefficient: 1.10 },
  { label: '71–100 см',    calcHeight: 85,  coefficient: 1.25 },
  { label: 'Более 100 см', calcHeight: 110, coefficient: 1.45 },
];

// ─── Коэффициенты конструкции / основания ───────────────────────────────────
export const BASE_COEFFICIENTS: Record<BaseType, number> = {
  separate:    1.00,
  backing:     1.18,
  metalFrame:  1.22,
  consultation: 1.12,
};

// ─── Коэффициенты срочности ─────────────────────────────────────────────────
export const URGENCY_COEFFICIENTS: Record<UrgencyType, number> = {
  standard:   1.00,
  urgent:     1.20,
  veryUrgent: 1.35,
};

// ─── Монтаж (фиксированные суммы) ───────────────────────────────────────────
export const INSTALLATION_COST: Record<InstallationType, number> = {
  none:         0,
  upTo3m:    8000,
  from3to6m: 15000,
  crane:     25000,
  consultation: 12000,
};

// ─── Логотип ─────────────────────────────────────────────────────────────────
export const LOGO_COEFFICIENT = 1.15;
export const LOGO_MIN_EXTRA   = 5000;

// ─── Подсчёт символов ────────────────────────────────────────────────────────
export const SPACE_COEF = 0.5;
export const PUNCT_COEF = 0.3;

// ─── Диапазон ────────────────────────────────────────────────────────────────
export const RANGE_MIN = 0.95;
export const RANGE_MAX = 1.15;

// ─── Сроки ───────────────────────────────────────────────────────────────────
export const DELIVERY_DAYS: Record<UrgencyType, string> = {
  standard:   '7–10 рабочих дней',
  urgent:     '4–6 рабочих дней',
  veryUrgent: '2–4 рабочих дня',
};

// ─── Типы ────────────────────────────────────────────────────────────────────
export type ProductType    = 'volumeLight' | 'volumeOnBase' | 'volumeOnFrame' | 'complex';
export type LightingType   = 'facade' | 'contour' | 'facadeAndContour' | 'none' | 'consultation';
export type BaseType       = 'separate' | 'backing' | 'metalFrame' | 'consultation';
export type InstallationType = 'none' | 'upTo3m' | 'from3to6m' | 'crane' | 'consultation';
export type UrgencyType    = 'standard' | 'urgent' | 'veryUrgent';

// Тип изделия → базовый тип основания (для автоматического пресета)
export const PRODUCT_BASE_PRESET: Record<ProductType, BaseType> = {
  volumeLight:   'separate',
  volumeOnBase:  'backing',
  volumeOnFrame: 'metalFrame',
  complex:       'separate',
};

// Тип изделия → авто-монтаж для «комплекса»
export const PRODUCT_INSTALL_PRESET: Partial<Record<ProductType, InstallationType>> = {
  complex: 'upTo3m',
};

export interface QuizState {
  productType:  ProductType | null;
  signText:     string;
  hasLogo:      boolean;
  hasLayout:    boolean;
  heightIndex:  number | null;
  lighting:     LightingType | null;
  baseType:     BaseType | null;
  installation: InstallationType | null;
  urgency:      UrgencyType | null;
}

export const initialQuizState: QuizState = {
  productType:  null,
  signText:     '',
  hasLogo:      false,
  hasLayout:    false,
  heightIndex:  null,
  lighting:     null,
  baseType:     null,
  installation: null,
  urgency:      null,
};

// ─── Подсчёт символов ────────────────────────────────────────────────────────
export function countSymbols(text: string): number {
  let count = 0;
  for (const ch of text) {
    if (ch === ' ') {
      count += SPACE_COEF;
    } else if (/[.,!?:;–—-]/.test(ch)) {
      count += PUNCT_COEF;
    } else {
      count += 1;
    }
  }
  return Math.round(count * 10) / 10;
}

// ─── Формула расчёта ─────────────────────────────────────────────────────────
// Стоимость изготовления =
//   Базовая ставка по подсветке × Количество символов × Расчётная высота
//   × Коэффициент высоты × Коэффициент конструкции × Коэффициент срочности
//
// Итоговая стоимость = Стоимость изготовления + Доплата за логотип + Монтаж
//
// Доплата за логотип = max(стоимость_изготовления × 0.15, 5000)
export function calculatePrice(state: QuizState): { min: number; max: number; base: number } | null {
  if (
    !state.productType   ||
    !state.signText.trim() ||
    state.heightIndex === null ||
    !state.lighting      ||
    !state.baseType      ||
    !state.installation  ||
    !state.urgency
  ) return null;

  const symbols   = countSymbols(state.signText);
  const hr        = HEIGHT_RANGES[state.heightIndex];
  const rate      = LIGHTING_RATES[state.lighting];
  const baseCoef  = BASE_COEFFICIENTS[state.baseType];
  const urgCoef   = URGENCY_COEFFICIENTS[state.urgency];

  const manufacturing =
    rate * symbols * hr.calcHeight * hr.coefficient * baseCoef * urgCoef;

  const logoExtra = state.hasLogo
    ? Math.max(manufacturing * (LOGO_COEFFICIENT - 1), LOGO_MIN_EXTRA)
    : 0;

  const installCost = INSTALLATION_COST[state.installation];

  const base = Math.round(manufacturing + logoExtra + installCost);
  const min  = Math.round(base * RANGE_MIN);
  const max  = Math.round(base * RANGE_MAX);

  return { min, max, base };
}

export function getDelivery(urgency: UrgencyType): string {
  return DELIVERY_DAYS[urgency];
}