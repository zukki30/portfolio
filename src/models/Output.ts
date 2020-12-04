import { OutputResContent } from "@/utils/api";

export class Output {
  constructor(
    public readonly id: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly publishedAt: Date,
    public readonly title: string,
    public readonly tags: string,
    public readonly imageUrl: string,
    public readonly body: string,
    public readonly chapters: Chapter[]
  ) {}

  public static build(json: OutputResContent) {
    return new Output(
      json.id,
      new Date(json.createdAt),
      new Date(json.updatedAt),
      new Date(json.publishedAt),
      json.title,
      json.tags,
      json.image.url,
      json.body,
      json.chapter.map((c) => new Chapter(c.fieldId, c.title, c.body))
    );
  }
}

export class Chapter {
  constructor(
    public readonly fieldId: string,
    public readonly title: string,
    public readonly body: string
  ) {}
}
