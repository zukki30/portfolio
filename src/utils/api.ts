import fetch from "isomorphic-unfetch";
import { API_URLS } from "@/const/Api";

type Res = OutputRes | ProfileRes | CurriculumVitaeRes;

export interface OutputRes extends DefaultRes {
  contents: OutputResContent[];
}

export interface CurriculumVitaeRes extends DefaultRes {
  contents: CurriculumVitaeResContent[];
}

interface DefaultRes {
  totalCount: number;
  offset: number;
  limit: number;
}

export interface OutputResContent extends ResContent {
  title: string;
  tags: string;
  image: ResImage;
  body: string;
  chapter: ResChapter[];
}

export interface ProfileRes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  last_name: string;
  first_name: string;
  last_kana_name: string;
  first_kana_name: string;
  birthday: string;
  address: string;
  final_education: string;
  graduation_year: string;
  occupation: string;
  skill: string;
  future: string;
  tool: string;
  use_technology: string;
  growth: string;
  sex: string[];
}

export interface CurriculumVitaeResContent extends ResContent {
  name: string;
  period_start: string;
  period_end?: string;
  is_work: boolean;
  body: string;
  project: ResProject[];
}

interface ResContent {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ResImage {
  url: string;
}

interface ResChapter {
  fieldId: string;
  title: string;
  body: string;
}

interface ResProject {
  fieldId: string;
  title: string;
  period_start: string;
  period_end: string;
  experience: string[];
  body: string;
}

export async function getApiData(url: API_URLS): Promise<Res> {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  } as RequestInit;

  const data = await fetch(`${process.env.API_URL}${url}`, key).then((res) =>
    res.json()
  );

  return data as Res;
}
