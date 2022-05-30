// px = 固定サイズ
export const FixedSizes = {
  0: "0px",
  1: "1px",
  2: "2px",
  4: "4px",
  6: "6px",
  8: "8px",
  10: "10px",
  12: "12px",
  14: "14px",
  16: "16px",
  20: "20px",
  24: "24px",
  28: "28px",
  32: "32px",
  36: "36px",
  40: "40px",
  44: "44px",
  48: "48px",
  56: "56px",
  64: "64px",
  80: "80px",
  96: "96px",
  112: "112px",
  128: "128px",
  144: "144px",
  160: "160px",
  176: "176px",
  192: "192px",
  208: "208px",
  224: "224px",
  240: "240px",
  256: "256px",
  288: "288px",
  320: "320px",
  384: "384px",
};

// % = 可変サイズ
export const VariableSizes = {
  "1/2": "50%",
  "1/3": "33.333333%",
  "2/3": "66.666667%",
  "1/4": "25%",
  "2/4": "50%",
  "3/4": "75%",
  "1/5": "20%",
  "2/5": "40%",
  "3/5": "60%",
  "4/5": "80%",
  "1/6": "16.666667%",
  "2/6": "33.333333%",
  "3/6": "50%",
  "4/6": "66.666667%",
  "5/6": "83.333333%",
  full: "100%",
};

export const FontSizes = {
  xs: "0.75rem" /* 12px */,
  sm: "0.875rem" /* 14px */,
  base: "1rem" /* 16px */,
  lg: "1.125rem" /* 18px */,
  xl: "1.25rem" /* 20px */,
  "2xl": "1.5rem" /* 24px */,
  "3xl": "1.875rem" /* 30px */,
  "4xl": "2.25rem" /* 36px */,
  "5xl": "3rem" /* 48px */,
  "6xl": "3.75rem" /* 60px */,
  "7xl": "4.5rem" /* 72px */,
  "8xl": "6rem" /* 96px */,
  "9xl": "8rem" /* 128px */,
};

export const BoxShadowSizes = {
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  base: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  lg: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  xl: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
};

export const ContentSizes = {
  none: "auto",
  xs: "640px",
  sm: "768px",
  base: "800px",
  lg: "1024px",
  xl: "1280px",
};

export type ContentSizeType = "none" | "xs" | "sm" | "base" | "lg" | "xl";
