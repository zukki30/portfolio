import {
  Res,
  OutputResContent,
  ProfileResContent,
  CurriculumVitaeResContent,
} from "@/utils/api";
import { API_URLS } from "@/const/Api";

describe("api", () => {
  describe("getApiData", () => {
    const outputResContent1: OutputResContent = {
      id: "id1",
      createdAt: "2020-11-12T08:05:20.699Z",
      updatedAt: "2020-11-13T03:58:39.352Z",
      publishedAt: "2020-11-12T08:05:20.699Z",
      title: "title1",
      tags: "tag1",
      images: {
        url: "images1",
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
      images: {
        url: "images2",
      },
      body: "body2",
      chapter: [
        {
          fieldId: "chapterId2",
          title: "chapterTitle2",
          body: "chapterBody2",
        },
      ],
    };

    const outputResult: Res = {
      contents: [outputResContent1, outputResContent2],
      totalCount: 2,
      offset: 0,
      limit: 10,
    };

    const profileResult: ProfileResContent = {
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
      project: [],
    };

    const curriculumVitaeContent2: CurriculumVitaeResContent = {
      id: "id2",
      createdAt: "2020-22-12T08:05:20.699Z",
      updatedAt: "2020-22-13T03:58:39.352Z",
      publishedAt: "2020-22-12T08:05:20.699Z",
      name: "name2",
      period_start: "2020-10-01T08:05:20.699Z",
      period_end: "2020-10-30T08:05:20.699Z",
      is_work: false,
      body: "body2",
      project: [],
    };

    const curriculumVitaeResult: Res = {
      contents: [curriculumVitaeContent1, curriculumVitaeContent2],
      totalCount: 2,
      offset: 0,
      limit: 10,
    };

    const getApiData = jest.fn().mockImplementation((url: API_URLS) => {
      if (url === API_URLS.PROFILE) {
        return profileResult;
      } else if (url === API_URLS.CURRICULUM_VITAE) {
        return curriculumVitaeResult;
      } else if (url === API_URLS.OUTPUT) {
        return outputResult;
      }
    });

    afterEach(() => {
      getApiData.mockClear();
    });

    it("return profileResult when argument is API_URLS.PROFILE", async () => {
      getApiData(API_URLS.PROFILE);
      expect(getApiData.mock.calls[0][0]).toBe(API_URLS.PROFILE);
      expect(getApiData.mock.results[0].value).toBe(profileResult);
    });

    it("return curriculumVitaeResult when argument is API_URLS.CURRICULUM_VITAE", async () => {
      getApiData(API_URLS.CURRICULUM_VITAE);
      expect(getApiData.mock.calls[0][0]).toBe(API_URLS.CURRICULUM_VITAE);
      expect(getApiData.mock.results[0].value).toBe(curriculumVitaeResult);
    });

    it("return outputResult when argument is API_URLS.OUTPUT", async () => {
      getApiData(API_URLS.OUTPUT);
      expect(getApiData.mock.calls[0][0]).toBe(API_URLS.OUTPUT);
      expect(getApiData.mock.results[0].value).toBe(outputResult);
    });
  });
});
