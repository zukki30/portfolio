import { CurriculumVitaeResContent } from "@/utils/api";

export class CurriculumVitae {
  constructor(
    public readonly id: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly publishedAt: Date,
    public readonly name: string,
    public readonly period: string | null,
    public readonly isWork: boolean,
    public readonly body: string,
    public readonly projects: Project[]
  ) {}

  public static build(json: CurriculumVitaeResContent) {
    let period: string | null = null;

    if (json.period_start !== undefined) {
      const startDate = new Date(json.period_start);
      const startPeriod = `${startDate.getFullYear()}年${
        startDate.getMonth() + 1
      }月`;
      const endDate =
        json.period_end !== undefined ? new Date(json.period_end) : null;
      let endPeriod = "就業中";

      if (endDate instanceof Date) {
        endPeriod = `${endDate.getFullYear()}年${endDate.getMonth() + 1}月`;
      }

      period = `${startPeriod}〜${endPeriod}`;
    }

    return new CurriculumVitae(
      json.id,
      new Date(json.createdAt),
      new Date(json.updatedAt),
      new Date(json.publishedAt),
      json.name,
      period,
      json.is_work,
      json.body,
      json.project.map(
        (p) =>
          new Project(
            p.fieldId,
            p.title,
            new Date(p.period_start),
            new Date(p.period_end),
            p.experience,
            p.body
          )
      )
    );
  }
}

export class Project {
  constructor(
    public readonly fieldId: string,
    public readonly title: string,
    public readonly periodStart: Date,
    public readonly periodEnd: Date,
    public readonly experience: string[],
    public readonly body: string
  ) {}
}
