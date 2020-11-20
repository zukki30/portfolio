import { Res, ResContent } from "@/utils/api";

describe("api", () => {
  describe("getApiData", () => {
    const content1: ResContent = {
      id: "id1",
      createdAt: "2020-11-12T08:05:20.699Z",
      updatedAt: "2020-11-13T03:58:39.352Z",
      publishedAt: "2020-11-12T08:05:20.699Z",
      title: "title1",
    };

    const content2: ResContent = {
      id: "id2",
      createdAt: "2020-22-12T08:05:20.699Z",
      updatedAt: "2020-22-13T03:58:39.352Z",
      publishedAt: "2020-22-12T08:05:20.699Z",
      title: "title2",
    };

    const result: Res = {
      contents: [content1, content2],
      totalCount: 2,
      offset: 0,
      limit: 10,
    };

    const getApiData = jest.fn();
    getApiData.mockReturnValueOnce(result);

    it("Check the return value of getApiData", async () => {
      expect(getApiData()).toBe(result);
    });
  });
});
