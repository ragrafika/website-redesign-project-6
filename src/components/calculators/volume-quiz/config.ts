export const CALC_CONFIG = {
  baseRates: {
    volumeLight: 4200,
    volumeOnBase: 3600,
    volumeWithLogo: 4800,
    complex: 5000,
  },

  spaceCoefficient: 0.5,
  punctuationCoefficient: 0.3,

  heightRanges: [
    { label: '20–30 см', calcHeight: 25, coefficient: 0.85 },
    { label: '31–50 см', calcHeight: 40, coefficient: 1.0 },
    { label: '51–70 см', calcHeight: 60, coefficient: 1.3 },
    { label: '71–100 см', calcHeight: 85, coefficient: 1.7 },
    { label: 'Более 100 см', calcHeight: 110, coefficient: 2.2 },
  ],

  productTypeCoefficients: {
    volumeLight: 1.0,
    volumeOnBase: 0.9,
    volumeWithLogo: 1.15,
    complex: 1.2,
  },

  lightingCoefficients: {
    facade: 1.0,
    contour: 1.1,
    facadeAndContour: 1.25,
    none: 0.6,
    consultation: 1.0,
  },

  baseTypeAddon: {
    separate: 0,
    backing: 8000,
    metalFrame: 14000,
    consultation: 6000,
  },

  installationAddon: {
    none: 0,
    upTo3m: 5000,
    from3to6m: 9000,
    crane: 18000,
    consultation: 7000,
  },

  logoAddon: 7000,

  urgencyCoefficients: {
    standard: 1.0,
    urgent: 1.25,
    veryUrgent: 1.5,
  },

  rangeMin: 0.95,
  rangeMax: 1.15,

  deliveryDays: {
    standard: '7–10 рабочих дней',
    urgent: '4–6 рабочих дней',
    veryUrgent: '2–4 рабочих дня',
  },
};

export type ProductType = 'volumeLight' | 'volumeOnBase' | 'volumeWithLogo' | 'complex';
export type LightingType = 'facade' | 'contour' | 'facadeAndContour' | 'none' | 'consultation';
export type BaseType = 'separate' | 'backing' | 'metalFrame' | 'consultation';
export type InstallationType = 'none' | 'upTo3m' | 'from3to6m' | 'crane' | 'consultation';
export type UrgencyType = 'standard' | 'urgent' | 'veryUrgent';

export interface QuizState {
  productType: ProductType | null;
  signText: string;
  hasLogo: boolean;
  hasLayout: boolean;
  heightIndex: number | null;
  lighting: LightingType | null;
  baseType: BaseType | null;
  installation: InstallationType | null;
  urgency: UrgencyType | null;
}

export const initialQuizState: QuizState = {
  productType: null,
  signText: '',
  hasLogo: false,
  hasLayout: false,
  heightIndex: null,
  lighting: null,
  baseType: null,
  installation: null,
  urgency: null,
};

export function countSymbols(text: string): number {
  let count = 0;
  for (const ch of text) {
    if (ch === ' ') {
      count += CALC_CONFIG.spaceCoefficient;
    } else if (/[.,!?:;-]/.test(ch)) {
      count += CALC_CONFIG.punctuationCoefficient;
    } else {
      count += 1;
    }
  }
  return Math.round(count * 10) / 10;
}

export function calculatePrice(state: QuizState): { min: number; max: number; base: number } | null {
  if (
    !state.productType ||
    !state.signText.trim() ||
    state.heightIndex === null ||
    !state.lighting ||
    !state.baseType ||
    !state.installation ||
    !state.urgency
  ) {
    return null;
  }

  const symbols = countSymbols(state.signText);
  const heightRange = CALC_CONFIG.heightRanges[state.heightIndex];
  const baseRate = CALC_CONFIG.baseRates[state.productType];

  const letterCost =
    baseRate *
    symbols *
    (heightRange.calcHeight / 40) *
    CALC_CONFIG.productTypeCoefficients[state.productType] *
    CALC_CONFIG.lightingCoefficients[state.lighting] *
    heightRange.coefficient *
    CALC_CONFIG.urgencyCoefficients[state.urgency];

  const logoAddon = state.hasLogo ? CALC_CONFIG.logoAddon : 0;
  const baseAddon = CALC_CONFIG.baseTypeAddon[state.baseType];
  const installAddon = CALC_CONFIG.installationAddon[state.installation];

  const base = Math.round(letterCost + logoAddon + baseAddon + installAddon);
  const min = Math.round(base * CALC_CONFIG.rangeMin);
  const max = Math.round(base * CALC_CONFIG.rangeMax);

  return { min, max, base };
}

export function getDelivery(urgency: UrgencyType): string {
  return CALC_CONFIG.deliveryDays[urgency];
}
