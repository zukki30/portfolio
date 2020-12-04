export enum API_URLS {
  PROFILE = "profile",
  CURRICULUM_VITAE = "curriculum-vitae",
  OUTPUT = "output",
}

export const API_URL_DATAS: {
  [key: string]: { id: API_URLS; name: string };
} = {
  profile: {
    id: API_URLS.PROFILE,
    name: "プロフィール",
  },
  "curriculum-vitae": {
    id: API_URLS.CURRICULUM_VITAE,
    name: "職務経歴書",
  },
  output: {
    id: API_URLS.OUTPUT,
    name: "アウトプット",
  },
};
