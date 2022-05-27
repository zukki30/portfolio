import {
  outputResResult,
  profileResResult,
  curriculumVitaeResResult,
} from "../_helper/test-util";
import { API_URLS } from "@/const/Api";

describe("api", () => {
  describe("getApiData", () => {
    const getApiData = jest.fn().mockImplementation((url: API_URLS) => {
      if (url === API_URLS.PROFILE) {
        return profileResResult;
      } else if (url === API_URLS.CURRICULUM_VITAE) {
        return curriculumVitaeResResult;
      } else if (url === API_URLS.OUTPUT) {
        return outputResResult;
      }
    });

    afterEach(() => {
      getApiData.mockClear();
    });

    it("return profileResult when argument is API_URLS.PROFILE", async () => {
      getApiData(API_URLS.PROFILE);
      expect(getApiData.mock.calls[0][0]).toBe(API_URLS.PROFILE);
      expect(getApiData.mock.results[0].value).toBe(profileResResult);
    });

    it("return curriculumVitaeResult when argument is API_URLS.CURRICULUM_VITAE", async () => {
      getApiData(API_URLS.CURRICULUM_VITAE);
      expect(getApiData.mock.calls[0][0]).toBe(API_URLS.CURRICULUM_VITAE);
      expect(getApiData.mock.results[0].value).toBe(curriculumVitaeResResult);
    });

    it("return outputResult when argument is API_URLS.OUTPUT", async () => {
      getApiData(API_URLS.OUTPUT);
      expect(getApiData.mock.calls[0][0]).toBe(API_URLS.OUTPUT);
      expect(getApiData.mock.results[0].value).toBe(outputResResult);
    });
  });
});
