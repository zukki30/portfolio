import React from "react";
import { shallow } from "enzyme";
import { HEADLINE_LEVEL } from "@/const/ElementTag";
import { Project } from "@/models/CurriculumVitae";
import {
  ProjectContent,
  Props,
} from "@/components/curriculum-vitae/ProjectContent";

const PARENT_CLASS = "parentClass";
const INDEX = 3;
const PROJECT_NOT_EXPERIENCES = new Project(
  `project${INDEX}`,
  `projectTitle${INDEX}`,
  "2020年11月〜2020年12月",
  [],
  `projectBody${INDEX}`
);
const PROJECT_EXPERIENCES = new Project(
  `project${INDEX}`,
  `projectTitle${INDEX}`,
  "2020年11月〜2020年12月",
  ["test1", "test2"],
  `projectBody${INDEX}`
);
const LEVEL = HEADLINE_LEVEL.Level1;

let props: Props;

describe("ProjectContent", () => {
  beforeEach(() => {
    props = {
      project: PROJECT_EXPERIENCES,
      index: INDEX,
      className: PARENT_CLASS,
    };
  });

  it("Add parent class to wrapper", () => {
    const wrapper = shallow(<ProjectContent {...props} />);

    expect(wrapper.hasClass(PARENT_CLASS)).toBe(true);
  });

  it("Rendering `.projectContent__title` when level prop is not exists", () => {
    const wrapper = shallow(<ProjectContent {...props} />);
    const title = wrapper.find(".projectContent__title");

    expect(title.getElement().type).toBe(HEADLINE_LEVEL.Level3);
  });

  it("Rendering `.projectContent__title` when level prop is exists", () => {
    props = {
      project: PROJECT_EXPERIENCES,
      index: INDEX,
      level: LEVEL,
      className: PARENT_CLASS,
    };
    const wrapper = shallow(<ProjectContent {...props} />);
    const title = wrapper.find(".projectContent__title");

    expect(title.getElement().type).toBe(LEVEL);
  });

  it("Rendering each text when `.projectContent__experiences` is exists", () => {
    const wrapper = shallow(<ProjectContent {...props} />);

    const title = wrapper.find(".projectContent__title");
    expect(title.text()).toBe(
      `プロジェクト${INDEX + 1}: ${PROJECT_EXPERIENCES.title}`
    );

    const firstRow = wrapper.find("tr:first-child");
    expect(firstRow.find(".projectContent__headCell").text()).toBe("期間");
    expect(firstRow.find(".projectContent__cell").text()).toBe(
      PROJECT_EXPERIENCES.period
    );

    const secondRow = wrapper.find("tr:last-child");
    expect(secondRow.find(".projectContent__headCell").text()).toBe("経験");

    const experiences = secondRow
      .find(".projectContent__cell")
      .find(".projectContent__experiences");
    expect(experiences.exists()).toBe(true);

    const experienceList = experiences.find(".projectContent__experiencesItem");
    expect(experienceList.length).toBe(PROJECT_EXPERIENCES.experiences.length);
    experienceList.forEach((e, i) => {
      expect(e.text()).toBe(PROJECT_EXPERIENCES.experiences[i]);
    });

    const detail = wrapper.find(".projectContent__detail");
    expect(detail.render().text()).toBe(PROJECT_EXPERIENCES.body);
  });

  it("Not rendering `.projectContent__experiences`", () => {
    props = {
      project: PROJECT_NOT_EXPERIENCES,
      index: INDEX,
      className: PARENT_CLASS,
    };
    const wrapper = shallow(<ProjectContent {...props} />);
    const experiences = wrapper.find(".projectContent__experiences");

    expect(experiences.exists()).toBe(false);
  });
});
