import { outputResResult } from "../_helper/test-util";
import { Output, Chapter } from "@/models/Output";

describe("Output", () => {
  describe("constructor", () => {
    it("Check Output return", async () => {
      const chapterId = "chapter1";
      const chapterTitle = "chapterTitle1";
      const chapterBody = "chapterBody1";

      const chapter1 = new Chapter(chapterId, chapterTitle, chapterBody);

      const id = "id1";
      const createdAt = new Date("2020-11-12T00:00:00.699Z");
      const updatedAt = new Date("2020-11-13T00:00:00.699Z");
      const publishedAt = new Date("2020-11-12T00:00:00.699Z");
      const title = "title1";
      const tags = "tags1";
      const images = "url";
      const body = "body1";
      const chapters = [chapter1];
      const result = new Output(
        id,
        createdAt,
        updatedAt,
        publishedAt,
        title,
        tags,
        images,
        body,
        chapters
      );

      expect(result.id).toBe(id);
      expect(result.createdAt).toBe(createdAt);
      expect(result.updatedAt).toBe(updatedAt);
      expect(result.publishedAt).toBe(publishedAt);
      expect(result.title).toBe(title);
      expect(result.tags).toBe(tags);
      expect(result.imageUrl).toBe(images);
      expect(result.body).toBe(body);
      expect(result.chapters.length).toBe(chapters.length);

      const resultChapters = result.chapters;
      expect(resultChapters[0].fieldId).toBe(chapterId);
      expect(resultChapters[0].title).toBe(chapterTitle);
      expect(resultChapters[0].body).toBe(chapterBody);
    });
  });

  describe("build", () => {
    it("return Output to Output.build", () => {
      const content = outputResResult.contents[0];
      const result = Output.build(content);

      expect(result.id).toBe(content.id);
      expect(result.createdAt).toEqual(new Date(content.createdAt));
      expect(result.updatedAt).toEqual(new Date(content.updatedAt));
      expect(result.publishedAt).toEqual(new Date(content.publishedAt));
      expect(result.title).toBe(content.title);
      expect(result.tags).toBe(content.tags);
      expect(result.imageUrl).toBe(content.images.url);
      expect(result.body).toBe(content.body);

      const chapters = result.chapters;
      expect(chapters.length).toBe(content.chapter.length);
      chapters.forEach((chapter, i) => {
        expect(chapter.fieldId).toBe(content.chapter[i].fieldId);
        expect(chapter.title).toBe(content.chapter[i].title);
        expect(chapter.body).toBe(content.chapter[i].body);
      });
    });
  });
});
