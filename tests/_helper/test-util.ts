import {
  OutputRes,
  ProfileRes,
  CurriculumVitaeRes,
  OutputResContent,
  CurriculumVitaeResContent,
} from "@/utils/api";

const outputResContent1: OutputResContent = {
  id: "id1",
  createdAt: "2020-11-12T08:05:20.699Z",
  updatedAt: "2020-11-13T03:58:39.352Z",
  publishedAt: "2020-11-12T08:05:20.699Z",
  title: "title1",
  tags: "tag1",
  image: {
    url: "image1",
  },
  body: "body1",
  chapter: [
    {
      fieldId: "chapterId1",
      title: "chapterTitle1",
      body: "chapterBody1",
    },
  ],
};

const outputResContent2: OutputResContent = {
  id: "id2",
  createdAt: "2020-11-13T08:05:20.699Z",
  updatedAt: "2020-11-14T03:58:39.352Z",
  publishedAt: "2020-11-13T08:05:20.699Z",
  title: "title2",
  tags: "tag2",
  image: {
    url: "image2",
  },
  body: "body2",
  chapter: [
    {
      fieldId: "chapterId2",
      title: "chapterTitle2",
      body: "chapterBody2",
    },
    {
      fieldId: "chapterId3",
      title: "chapterTitle3",
      body: "chapterBody3",
    },
  ],
};

export const outputResResult: OutputRes = {
  contents: [outputResContent1, outputResContent2],
  totalCount: 2,
  offset: 0,
  limit: 10,
};

export const profileResResult: ProfileRes = {
  createdAt: "2020-11-12T08:05:20.699Z",
  updatedAt: "2020-11-13T03:58:39.352Z",
  publishedAt: "2020-11-12T08:05:20.699Z",
  last_name: "姓",
  first_name: "名",
  last_kana_name: "セイ",
  first_kana_name: "メイ",
  birthday: "1987-11-12T08:05:20.699Z",
  address: "誕生日",
  final_education: "最終学歴",
  graduation_year: "2000-11-12T08:05:20.699Z",
  occupation: "職種",
  skill: "スキル",
  future: "やってみたいこと",
  tool: "使用経験のあるツール",
  use_technology: "使ってみたい技術",
  growth: "伸ばしたいスキル",
  sex: ["性別"],
};

const curriculumVitaeContent1: CurriculumVitaeResContent = {
  id: "id1",
  createdAt: "2020-11-12T08:05:20.699Z",
  updatedAt: "2020-11-13T03:58:39.352Z",
  publishedAt: "2020-11-12T08:05:20.699Z",
  name: "name1",
  period_start: "2020-10-01T08:05:20.699Z",
  period_end: "2020-10-30T08:05:20.699Z",
  is_work: false,
  body: "body1",
  project: [
    {
      fieldId: "fieldId1",
      title: "title1",
      period_start: "2020-10-01T08:05:20.699Z",
      period_end: "2020-10-05T08:05:20.699Z",
      experience: ["test1", "test2"],
      body: "body1",
    },
  ],
};

const curriculumVitaeContent2: CurriculumVitaeResContent = {
  id: "id2",
  createdAt: "2020-12-12T08:05:20.699Z",
  updatedAt: "2020-12-13T03:58:39.352Z",
  publishedAt: "2020-12-12T08:05:20.699Z",
  name: "name2",
  period_start: "2020-10-01T08:05:20.699Z",
  period_end: undefined,
  is_work: false,
  body: "body2",
  project: [],
};

const curriculumVitaeContent3: CurriculumVitaeResContent = {
  id: "id3",
  createdAt: "2020-12-12T08:05:20.699Z",
  updatedAt: "2020-12-13T03:58:39.352Z",
  publishedAt: "2020-12-12T08:05:20.699Z",
  name: "name3",
  period_start: undefined,
  period_end: undefined,
  is_work: false,
  body: "body3",
  project: [],
};

export const curriculumVitaeResResult: CurriculumVitaeRes = {
  contents: [
    curriculumVitaeContent1,
    curriculumVitaeContent2,
    curriculumVitaeContent3,
  ],
  totalCount: 3,
  offset: 0,
  limit: 10,
};

/**
 * new Dateを渡されたdateでmockする
 *
 * @param date
 */
export function mockDate(date: Date) {
  const originalDate = Date;
  // @ts-ignore
  jest.spyOn(global, "Date").mockImplementation((arg) => {
    return arg ? new originalDate(arg) : new Date(date.getTime());
  });
}
