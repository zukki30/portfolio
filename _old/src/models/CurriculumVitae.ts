import { CurriculumVitaeResContent } from "@/utils/api";

export class CurriculumVitae {
  constructor(
    public readonly id: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly publishedAt: Date,
    public readonly name: string,
    public readonly period: string | null,
    public readonly body: string,
    public readonly projects: Project[]
  ) {}

  get showPeriod(): boolean {
    return this.period !== null;
  }

  public static build(json: CurriculumVitaeResContent) {
    let period: string | null = null;

    if (json.period_start !== undefined) {
      const startDate = new Date(json.period_start);
      const startPeriod = `${startDate.getFullYear()}年${
        startDate.getMonth() + 1
      }月`;
      const endDate =
        json.period_end !== undefined ? new Date(json.period_end) : null;
      const endPeriod =
        endDate === null
          ? "就業中"
          : `${endDate.getFullYear()}年${endDate.getMonth() + 1}月`;

      period = `${startPeriod}〜${endPeriod}`;
    }

    return new CurriculumVitae(
      json.id,
      new Date(json.createdAt),
      new Date(json.updatedAt),
      new Date(json.publishedAt),
      json.name,
      period,
      json.body,
      json.project.map((p) => {
        const startDate = new Date(p.period_start);
        const startPeriod = `${startDate.getFullYear()}年${
          startDate.getMonth() + 1
        }月`;
        const endDate = new Date(p.period_end);
        const endPeriod = `${endDate.getFullYear()}年${
          endDate.getMonth() + 1
        }月`;

        const period = `${startPeriod}〜${endPeriod}`;

        return new Project(p.fieldId, p.title, period, p.experience, p.body);
      })
    );
  }
}

export class Project {
  constructor(
    public readonly fieldId: string,
    public readonly title: string,
    public readonly period: string,
    public readonly experiences: string[],
    public readonly body: string
  ) {}
}
