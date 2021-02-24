import React from "react";
import { shallow } from "enzyme";
import { HEADLINE_LEVEL } from "@/const/ElementTag";
import { MainHeadline, Props } from "@/components/MainHeadline";

const PARENT_CLASS = "parentClass";
const TEXT = "smaple text";
const LEVEL = HEADLINE_LEVEL.Level3;

let props: Props;

describe("MainHeadline", () => {
  beforeEach(() => {
    props = {
      text: TEXT,
      className: PARENT_CLASS,
    };
  });

  it("Add parent class to `.mainHeadline`", () => {
    const wrapper = shallow(<MainHeadline {...props} />);

    expect(wrapper.hasClass(PARENT_CLASS)).toBe(true);
  });

  it("Rendering text", () => {
    const wrapper = shallow(<MainHeadline {...props} />);

    expect(wrapper.text()).toBe(TEXT);
  });

  it("Rendering when level prop is not exists", () => {
    const wrapper = shallow(<MainHeadline {...props} />);

    expect(wrapper.getElement().type).toBe(HEADLINE_LEVEL.Level1);
  });

  it("Rendering when level prop is exists", () => {
    props = {
      text: TEXT,
      level: LEVEL,
      className: PARENT_CLASS,
    };
    const wrapper = shallow(<MainHeadline {...props} />);

    expect(wrapper.getElement().type).toBe(LEVEL);
  });
});
