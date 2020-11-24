import { curriculumVitaeResResult } from "../_helper/test-util";
import { CurriculumVitae, Project } from "@/models/CurriculumVitae";

describe("CurriculumVitae", () => {
  describe("constructor", () => {
    it("Check CurriculumVitae return", async () => {
      const projectId = "project1";
      const projectTitle = "projectTitle1";
      const projectPeriodStart = new Date("2020-11-12T00:00:00.699Z");
      const projectPeriodEnd = new Date("2020-11-22T00:00:00.699Z");
      const projectExperience = ["test1"];
      const projectBody = "projectBody1";

      const project1 = new Project(
        projectId,
        projectTitle,
        projectPeriodStart,
        projectPeriodEnd,
        projectExperience,
        projectBody
      );

      const id = "id1";
      const createdAt = new Date("2020-11-12T00:00:00.699Z");
      const updatedAt = new Date("2020-11-13T00:00:00.699Z");
      const publishedAt = new Date("2020-11-12T00:00:00.699Z");
      const name = "name1";
      const periodStart = new Date("2020-10-12T00:00:00.699Z");
      const periodEnd = new Date("2020-10-22T00:00:00.699Z");
      const isWork = false;
      const body = "body1";
      const projects = [project1];
      const result = new CurriculumVitae(
        id,
        createdAt,
        updatedAt,
        publishedAt,
        name,
        periodStart,
        periodEnd,
        isWork,
        body,
        projects
      );

      expect(result.id).toBe(id);
      expect(result.createdAt).toBe(createdAt);
      expect(result.updatedAt).toBe(updatedAt);
      expect(result.publishedAt).toBe(publishedAt);
      expect(result.name).toBe(name);
      expect(result.publishedAt).toBe(publishedAt);
      expect(result.periodEnd).toBe(periodEnd);
      expect(result.isWork).toBe(isWork);
      expect(result.body).toBe(body);
      expect(result.projects.length).toBe(projects.length);

      const resultProjects = result.projects;
      expect(resultProjects[0].fieldId).toBe(projectId);
      expect(resultProjects[0].title).toBe(projectTitle);
      expect(resultProjects[0].periodStart).toBe(projectPeriodStart);
      expect(resultProjects[0].periodEnd).toBe(projectPeriodEnd);
      expect(resultProjects[0].experience.length).toBe(
        projectExperience.length
      );
      expect(resultProjects[0].experience).toBe(projectExperience);
      expect(resultProjects[0].body).toBe(projectBody);
    });
  });

  describe("build", () => {
    it("return CurriculumVitae to CurriculumVitae.build", () => {
      const content = curriculumVitaeResResult.contents[0];
      const result = CurriculumVitae.build(content);

      expect(result.id).toBe(content.id);
      expect(result.createdAt).toEqual(new Date(content.createdAt));
      expect(result.updatedAt).toEqual(new Date(content.updatedAt));
      expect(result.publishedAt).toEqual(new Date(content.publishedAt));
      expect(result.name).toBe(content.name);
      expect(result.periodStart).toEqual(new Date(content.period_start));
      expect(result.periodEnd).toEqual(new Date(content.period_end as string));
      expect(result.isWork).toBe(content.is_work);
      expect(result.body).toBe(content.body);

      const projects = result.projects;
      expect(projects.length).toBe(content.project.length);
      projects.forEach((project, i) => {
        expect(project.fieldId).toBe(content.project[i].fieldId);
        expect(project.title).toBe(content.project[i].title);
        expect(project.periodStart).toEqual(
          new Date(content.project[i].period_start)
        );
        expect(project.periodEnd).toEqual(
          new Date(content.project[i].period_end)
        );

        const experience = project.experience;
        expect(experience.length).toBe(content.project[i].experience.length);
        experience.forEach((e, index) => {
          expect(e).toBe(content.project[i].experience[index]);
        });

        expect(project.body).toBe(content.project[i].body);
      });
    });

    it("return CurriculumVitae to CurriculumVitae.build when content.period_end is undefined", () => {
      const content = curriculumVitaeResResult.contents[1];
      const result = CurriculumVitae.build(content);

      expect(result.id).toBe(content.id);
      expect(result.createdAt).toEqual(new Date(content.createdAt));
      expect(result.updatedAt).toEqual(new Date(content.updatedAt));
      expect(result.publishedAt).toEqual(new Date(content.publishedAt));
      expect(result.name).toBe(content.name);
      expect(result.periodStart).toEqual(new Date(content.period_start));
      expect(result.periodEnd).toEqual(null);
      expect(result.isWork).toBe(content.is_work);
      expect(result.body).toBe(content.body);

      const projects = result.projects;
      expect(projects.length).toBe(content.project.length);
    });
  });
});
