import { CurriculumVitaeResContent } from "@/utils/api";

export class CurriculumVitae {
  constructor(
    public readonly id: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly publishedAt: Date,
    public readonly name: string,
    public readonly periodStart: Date,
    public readonly periodEnd: Date | null,
    public readonly isWork: boolean,
    public readonly body: string,
    public readonly projects: Project[]
  ) {}

  public static build(json: CurriculumVitaeResContent) {
    return new CurriculumVitae(
      json.id,
      new Date(json.createdAt),
      new Date(json.updatedAt),
      new Date(json.publishedAt),
      json.name,
      new Date(json.period_start),
      json.period_end !== undefined ? new Date(json.period_end) : null,
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
