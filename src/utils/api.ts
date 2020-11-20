import fetch from "isomorphic-unfetch";
import { API_URLS } from "@/const/Api";

export interface Res {
  contents: ResContents;
  totalCount: number;
  offset: number;
  limit: number;
}

type ResContents =
  | OutputResContent[]
  | ProfileResContent
  | CurriculumVitaeResContent[];

export interface OutputResContent extends ResContent {
  title: string;
  tags: string;
  images: ResImage;
  body: string;
  chapter: ResChapter[];
}

export interface ProfileResContent {
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
  slill: string;
  future: string;
  tool: string;
  use_technology: string;
  growth: string;
  sex: string[];
}

export interface CurriculumVitaeResContent extends ResContent {
  name: string;
  period_start: string;
  period_end?: undefined;
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
