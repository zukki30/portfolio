import React from "react";
import { shallow } from "enzyme";
import { curriculumVitaeResResult } from "@test/test-util";
import { API_URLS, API_URL_DATAS } from "@/const/Api";
import { CurriculumVitae } from "@/models/CurriculumVitae";

import PageHead from "@/components/PageHead";
import MainHeadline from "@/components/MainHeadline";
import MainContent from "@/components/MainContent";
import CurriculumVitaeContent from "@/components/curriculum-vitae/CurriculumVitaeContent";
import { CurriculumVitaePage, Props } from "@/pages/curriculum-vitae";

const URL_DATA = API_URL_DATAS[API_URLS.CURRICULUM_VITAE];
const CURRICULUM_VITAES = [
  CurriculumVitae.build(curriculumVitaeResResult.contents[0]),
  CurriculumVitae.build(curriculumVitaeResResult.contents[1]),
  CurriculumVitae.build(curriculumVitaeResResult.contents[2]),
];

let props: Props;

describe("CurriculumVitae", () => {
  beforeEach(() => {
    props = {
      data: curriculumVitaeResResult.contents,
    };
  });

  it("Pass to PageHead description & title", () => {
    const wrapper = shallow(<CurriculumVitaePage {...props} />);
    const pageHead = wrapper.find(PageHead);

    expect(pageHead.props().description).toBe("職務経歴書ページです");
    expect(pageHead.props().title).toBe(URL_DATA.name);
  });

  it("Pass to MainHeadline text", () => {
    const wrapper = shallow(<CurriculumVitaePage {...props} />);
    const mainHeadline = wrapper.find(MainHeadline);

    expect(mainHeadline.props().text).toBe(URL_DATA.name);
  });

  it("Redering order", () => {
    const wrapper = shallow(<CurriculumVitaePage {...props} />);
    const container = wrapper.find(".curriculumVitae__container");

    const navi = container.childAt(0);
    expect(navi.exists()).toBe(true);
    expect(navi.getElement().type).toBe("nav");
    expect(navi.hasClass("curriculumVitae__navi")).toBe(true);

    const body = container.childAt(1);
    expect(body.exists()).toBe(true);
    expect(body.getElement().type).toBe("div");
    expect(body.hasClass("curriculumVitae__body")).toBe(true);
  });

  it("Redering navi order", () => {
    const wrapper = shallow(<CurriculumVitaePage {...props} />);
    const navi = wrapper.find(".curriculumVitae__navi");
    const items = navi.find(".curriculumVitae__naviItem");

    expect(items.length).toBe(CURRICULUM_VITAES.length);

    expect(items.at(0).hasClass("curriculumVitae__naviItem--current")).toBe(
      true
    );
    expect(items.at(0).find(".curriculumVitae__naviPeriod").text()).toBe(
      CURRICULUM_VITAES[0].period
    );
    expect(items.at(0).find(".curriculumVitae__naviName").text()).toBe(
      CURRICULUM_VITAES[0].name
    );

    expect(items.at(1).hasClass("curriculumVitae__naviItem--current")).toBe(
      false
    );
    expect(items.at(1).find(".curriculumVitae__naviPeriod").text()).toBe(
      CURRICULUM_VITAES[1].period
    );
    expect(items.at(1).find(".curriculumVitae__naviName").text()).toBe(
      CURRICULUM_VITAES[1].name
    );

    expect(items.at(2).hasClass("curriculumVitae__naviItem--current")).toBe(
      false
    );
    expect(items.at(2).find(".curriculumVitae__naviPeriod").exists()).toBe(
      false
    );
    expect(items.at(2).find(".curriculumVitae__naviName").text()).toBe(
      CURRICULUM_VITAES[2].name
    );
  });

  it("Redering navi order", () => {
    const wrapper = shallow(<CurriculumVitaePage {...props} />);
    const body = wrapper.find(".curriculumVitae__body");
    const items = body.find(".curriculumVitae__content");

    expect(items.length).toBe(CURRICULUM_VITAES.length);

    items.forEach((item, i) => {
      expect(item.props().id).toBe(`curriculumVitae${i}`);
      expect(item.find(CurriculumVitaeContent).props().curriculumVitae).toEqual(
        CURRICULUM_VITAES[i]
      );
    });
  });

  it("Click `.curriculumVitae__naviItem`", async () => {
    const wrapper = shallow(<CurriculumVitaePage {...props} />);
    const items = wrapper.find(".curriculumVitae__naviItem");

    expect(items.at(0).hasClass("curriculumVitae__naviItem--current")).toBe(
      true
    );

    items.at(1).simulate("click");

    const updateItems = wrapper.find(".curriculumVitae__naviItem");
    expect(
      updateItems.at(0).hasClass("curriculumVitae__naviItem--current")
    ).toBe(false);
    expect(
      updateItems.at(1).hasClass("curriculumVitae__naviItem--current")
    ).toBe(true);
  });
});
