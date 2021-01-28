import { curriculumVitaeResResult } from "../_helper/test-util";
import { CurriculumVitae, Project } from "@/models/CurriculumVitae";

describe("CurriculumVitae", () => {
  const projectId = "project1";
  const projectTitle = "projectTitle1";
  const projectPeriod = "2020年11月〜2020年12月";
  const projectExperiences = ["test1"];
  const projectBody = "projectBody1";

  const project1 = new Project(
    projectId,
    projectTitle,
    projectPeriod,
    projectExperiences,
    projectBody
  );

  const id = "id1";
  const createdAt = new Date("2020-11-12T00:00:00.699Z");
  const updatedAt = new Date("2020-11-13T00:00:00.699Z");
  const publishedAt = new Date("2020-11-12T00:00:00.699Z");
  const name = "name1";
  const body = "body1";
  const projects = [project1];

  describe("constructor", () => {
    it("return CurriculumVitae when period is string", async () => {
      const period = "2020年3月〜2020年10月";
      const result = new CurriculumVitae(
        id,
        createdAt,
        updatedAt,
        publishedAt,
        name,
        period,
        body,
        projects
      );

      expect(result.id).toBe(id);
      expect(result.createdAt).toBe(createdAt);
      expect(result.updatedAt).toBe(updatedAt);
      expect(result.publishedAt).toBe(publishedAt);
      expect(result.name).toBe(name);
      expect(result.publishedAt).toBe(publishedAt);
      expect(result.period).toBe(period);
      expect(result.body).toBe(body);
      expect(result.projects.length).toBe(projects.length);

      const resultProjects = result.projects;
      expect(resultProjects[0].fieldId).toBe(projectId);
      expect(resultProjects[0].title).toBe(projectTitle);
      expect(resultProjects[0].period).toBe(projectPeriod);
      expect(resultProjects[0].experiences.length).toBe(
        projectExperiences.length
      );
      expect(resultProjects[0].experiences).toBe(projectExperiences);
      expect(resultProjects[0].body).toBe(projectBody);
    });

    it("return CurriculumVitae when period is null", async () => {
      const period = null;

      const result = new CurriculumVitae(
        id,
        createdAt,
        updatedAt,
        publishedAt,
        name,
        period,
        body,
        projects
      );

      expect(result.id).toBe(id);
      expect(result.createdAt).toBe(createdAt);
      expect(result.updatedAt).toBe(updatedAt);
      expect(result.publishedAt).toBe(publishedAt);
      expect(result.name).toBe(name);
      expect(result.publishedAt).toBe(publishedAt);
      expect(result.period).toBe(period);
      expect(result.body).toBe(body);
      expect(result.projects.length).toBe(projects.length);

      const resultProjects = result.projects;
      expect(resultProjects[0].fieldId).toBe(projectId);
      expect(resultProjects[0].title).toBe(projectTitle);
      expect(resultProjects[0].period).toBe(projectPeriod);
      expect(resultProjects[0].experiences.length).toBe(
        projectExperiences.length
      );
      expect(resultProjects[0].experiences).toBe(projectExperiences);
      expect(resultProjects[0].body).toBe(projectBody);
    });
  });

  describe("getters", () => {
    describe("showPeriod", () => {
      it("return true", () => {
        const period = "2020年3月〜2020年10月";
        const result = new CurriculumVitae(
          id,
          createdAt,
          updatedAt,
          publishedAt,
          name,
          period,
          body,
          projects
        );

        expect(result.showPeriod).toBe(true);
      });

      it("return true", () => {
        const period = null;
        const result = new CurriculumVitae(
          id,
          createdAt,
          updatedAt,
          publishedAt,
          name,
          period,
          body,
          projects
        );

        expect(result.showPeriod).toBe(false);
      });
    });
  });

  describe("build", () => {
    it("return CurriculumVitae to CurriculumVitae.build when content.period_start is string and content.period_end is string", () => {
      const content = curriculumVitaeResResult.contents[0];
      const result = CurriculumVitae.build(content);
      const periodStart = new Date(content.period_start as string);
      const periodEnd = new Date(content.period_end as string);
      const period = `${periodStart.getFullYear()}年${
        periodStart.getMonth() + 1
      }月〜${periodEnd.getFullYear()}年${periodEnd.getMonth() + 1}月`;

      expect(result.id).toBe(content.id);
      expect(result.createdAt).toEqual(new Date(content.createdAt));
      expect(result.updatedAt).toEqual(new Date(content.updatedAt));
      expect(result.publishedAt).toEqual(new Date(content.publishedAt));
      expect(result.name).toBe(content.name);
      expect(result.period).toBe(period);
      expect(result.body).toBe(content.body);

      const projects = result.projects;
      expect(projects.length).toBe(content.project.length);
      projects.forEach((project, i) => {
        const periodStart = new Date(content.project[i].period_start);
        const periodEnd = new Date(content.project[i].period_end);
        const period = `${periodStart.getFullYear()}年${
          periodStart.getMonth() + 1
        }月〜${periodEnd.getFullYear()}年${periodEnd.getMonth() + 1}月`;

        expect(project.fieldId).toBe(content.project[i].fieldId);
        expect(project.title).toBe(content.project[i].title);
        expect(project.period).toBe(period);

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
      const periodStart = new Date(content.period_start as string);
      const period = `${periodStart.getFullYear()}年${
        periodStart.getMonth() + 1
      }月〜就業中`;

      expect(result.id).toBe(content.id);
      expect(result.createdAt).toEqual(new Date(content.createdAt));
      expect(result.updatedAt).toEqual(new Date(content.updatedAt));
      expect(result.publishedAt).toEqual(new Date(content.publishedAt));
      expect(result.name).toBe(content.name);
      expect(result.period).toBe(period);
      expect(result.body).toBe(content.body);

      const projects = result.projects;
      expect(projects.length).toBe(content.project.length);
    });

    it("return CurriculumVitae to CurriculumVitae.build when content.period_start is undefined", () => {
      const content = curriculumVitaeResResult.contents[2];
      const result = CurriculumVitae.build(content);
      const period = null;

      expect(result.id).toBe(content.id);
      expect(result.createdAt).toEqual(new Date(content.createdAt));
      expect(result.updatedAt).toEqual(new Date(content.updatedAt));
      expect(result.publishedAt).toEqual(new Date(content.publishedAt));
      expect(result.name).toBe(content.name);
      expect(result.period).toBe(period);
      expect(result.body).toBe(content.body);

      const projects = result.projects;
      expect(projects.length).toBe(content.project.length);
    });
  });
});
