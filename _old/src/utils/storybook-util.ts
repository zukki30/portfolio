import { CurriculumVitae, Project } from "@/models/CurriculumVitae";

export function createProject(index: number): Project {
  return new Project(
    `project${index}`,
    `projectTitle${index}`,
    "2020年11月〜2020年12月",
    ["test1"],
    `projectBody${index}`
  );
}

export function createCurriculumVitae(index: number): CurriculumVitae {
  const id = `id${index}`;
  const createdAt = new Date("2020-11-12T00:00:00.699Z");
  const updatedAt = new Date("2020-11-13T00:00:00.699Z");
  const publishedAt = new Date("2020-11-12T00:00:00.699Z");
  const period = "2020年3月〜2020年10月";
  const name = `name${index}`;
  const body = `body${index}`;
  const project = createProject(index);
  const projects = [project];

  return new CurriculumVitae(
    id,
    createdAt,
    updatedAt,
    publishedAt,
    name,
    period,
    body,
    projects
  );
}
