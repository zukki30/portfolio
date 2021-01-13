export const HEADLINE_LEVEL = {
  Level1: "h1",
  Level2: "h2",
  Level3: "h3",
  Level4: "h4",
  Level5: "h5",
  Level6: "h6",
} as const;
export type HEADLINE_LEVEL = typeof HEADLINE_LEVEL[keyof typeof HEADLINE_LEVEL];

export const MAIN_CONTENT = {
  Div: "div",
  Section: "section",
  Article: "article",
} as const;
export type MAIN_CONTENT = typeof MAIN_CONTENT[keyof typeof MAIN_CONTENT];
