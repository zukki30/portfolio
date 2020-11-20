import fetch from "isomorphic-unfetch";
import { API_URLS } from "@/const/Api";

export interface Res {
  contents: ResContent[];
  totalCount: number;
  offset: number;
  limit: number;
}

export interface ResContent {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  [key: string]: string | ResImage | ResChapter[];
}

export interface ResImage {
  url: string;
}

export interface ResChapter {
  fieldId: string;
  title: string;
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
