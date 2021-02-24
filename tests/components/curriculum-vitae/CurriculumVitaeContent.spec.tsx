import React from "react";
import { shallow } from "enzyme";
import { HEADLINE_LEVEL } from "@/const/ElementTag";
import { CurriculumVitae, Project } from "@/models/CurriculumVitae";
import ProjectContent from "@/components/curriculum-vitae/ProjectContent";
import {
  CurriculumVitaeContent,
  Props,
} from "@/components/curriculum-vitae/CurriculumVitaeContent";

const PARENT_CLASS = "parentClass";
const CURRICULUM_VITAE_ALL = new CurriculumVitae(
  "id1",
  new Date("2020-11-12T00:00:00.699Z"),
  new Date("2020-11-13T00:00:00.699Z"),
  new Date("2020-11-12T00:00:00.699Z"),
  "name1",
  "2020年3月〜2020年10月",
  "body1",
  [
    new Project(
      "project1",
      "projectTitle1",
      "2020年11月〜2020年12月",
      ["test1", "test2"],
      "projectBody1"
    ),
  ]
);
const CURRICULUM_VITAE_NOT_ENOUGH = new CurriculumVitae(
  "id1",
  new Date("2020-11-12T00:00:00.699Z"),
  new Date("2020-11-13T00:00:00.699Z"),
  new Date("2020-11-12T00:00:00.699Z"),
  "name1",
  null,
  "body1",
  []
);
const LEVEL = HEADLINE_LEVEL.Level1;

let props: Props;

describe("CurriculumVitaeContent", () => {
  beforeEach(() => {
    props = {
      curriculumVitae: CURRICULUM_VITAE_ALL,
      className: PARENT_CLASS,
    };
  });

  it("Add parent class to wrapper", () => {
    const wrapper = shallow(<CurriculumVitaeContent {...props} />);

    expect(wrapper.hasClass(PARENT_CLASS)).toBe(true);
  });

  it("Rendering `.curriculumVitaeContent__title` when level prop is not exists", () => {
    const wrapper = shallow(<CurriculumVitaeContent {...props} />);
    const title = wrapper.find(".curriculumVitaeContent__title");

    expect(title.getElement().type).toBe(HEADLINE_LEVEL.Level2);
  });

  it("Rendering `.curriculumVitaeContent__title` when level prop is exists", () => {
    props = {
      curriculumVitae: CURRICULUM_VITAE_ALL,
      level: LEVEL,
      className: PARENT_CLASS,
    };
    const wrapper = shallow(<CurriculumVitaeContent {...props} />);
    const title = wrapper.find(".curriculumVitaeContent__title");

    expect(title.getElement().type).toBe(LEVEL);
  });

  it("Rendering each text when `.curriculumVitaeContent__project` is exists", () => {
    const wrapper = shallow(<CurriculumVitaeContent {...props} />);

    const title = wrapper.find(".curriculumVitaeContent__title");
    const period = title.find(".curriculumVitaeContent__period");
    expect(period.text()).toBe(CURRICULUM_VITAE_ALL.period);

    const name = title.find(".curriculumVitaeContent__name");
    expect(name.text()).toBe(CURRICULUM_VITAE_ALL.name);

    const body = wrapper.find(".curriculumVitaeContent__body");
    const explanation = body.find(".curriculumVitaeContent__explanation");
    expect(explanation.render().text()).toBe(CURRICULUM_VITAE_ALL.body);

    const project = body.find(".curriculumVitaeContent__project");
    expect(project.exists()).toBe(true);

    const projectItems = project.find(ProjectContent);
    expect(projectItems.length).toBe(CURRICULUM_VITAE_ALL.projects.length);

    const projectItemProp = projectItems.first().props();
    expect(projectItemProp.project).toBe(CURRICULUM_VITAE_ALL.projects[0]);
    expect(projectItemProp.index).toBe(0);
  });

  it("Not rendering `.curriculumVitaeContent__period` and `.curriculumVitaeContent__project`", () => {
    props = {
      curriculumVitae: CURRICULUM_VITAE_NOT_ENOUGH,
      className: PARENT_CLASS,
    };
    const wrapper = shallow(<CurriculumVitaeContent {...props} />);

    const period = wrapper.find(".curriculumVitaeContent__period");
    expect(period.exists()).toBe(false);

    const project = wrapper.find(".curriculumVitaeContent__project");
    expect(project.exists()).toBe(false);
  });
});
