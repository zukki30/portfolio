import React from "react";
import { shallow } from "enzyme";
import { API_URLS, API_URL_DATAS } from "@/const/Api";
import { NaviItem, Props } from "@/components/app/NaviItem";

const PARENT_CLASS = "parentClass";
const URL_ID = API_URLS.OUTPUT;
const PATH = `/${URL_ID}`;
const DISABLED = true;
const API_URL_DATA = API_URL_DATAS[URL_ID];

let props: Props;

describe("NaviItem", () => {
  beforeEach(() => {
    props = {
      urlId: URL_ID,
      path: "",
      className: PARENT_CLASS,
    };
  });

  it("Add parent class to `.naviItem`", () => {
    const wrapper = shallow(<NaviItem {...props} />);

    expect(wrapper.hasClass(PARENT_CLASS)).toBe(true);
  });

  it("Rendering `.naviItem__text`", () => {
    const wrapper = shallow(<NaviItem {...props} />);
    const linkProps = wrapper.find(".naviItem__text").props();

    expect(linkProps.href).toBe(`/${API_URL_DATA.id}`);
  });

  it("Add class to `.naviItem__text--current`", () => {
    props = {
      urlId: URL_ID,
      path: PATH,
      className: PARENT_CLASS,
    };
    const wrapper = shallow(<NaviItem {...props} />);
    const link = wrapper.find(".naviItem__text");

    expect(link.hasClass("naviItem__text--current")).toBe(true);
  });

  it("Add class to `.naviItem__text--disabled` when disabled is true", () => {
    props = {
      urlId: URL_ID,
      path: "",
      disabled: DISABLED,
      className: PARENT_CLASS,
    };
    const wrapper = shallow(<NaviItem {...props} />);
    const link = wrapper.find(".naviItem__text");

    expect(link.hasClass("naviItem__text--disabled")).toBe(true);
  });

  it("Rendering `.naviItem__text`", () => {
    const wrapper = shallow(<NaviItem {...props} />);
    const link = wrapper.find(".naviItem__text");

    expect(link.props().href).toBe(`/${API_URL_DATA.id}`);
    expect(link.text()).toBe(API_URL_DATA.name);
  });
});
