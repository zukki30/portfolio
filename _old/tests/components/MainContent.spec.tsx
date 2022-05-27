import React from "react";
import { shallow } from "enzyme";
import { MAIN_CONTENT } from "@/const/ElementTag";
import { MainContent, Props } from "@/components/MainContent";

const ELEMENT = MAIN_CONTENT.Article;
const PARENT_CLASS = "parentClass";
const CHILD_CLASS = "childClass";
const CHILD_TEXT = "child text";
const CHILD_ELEMENT = React.createElement(
  "div",
  { className: CHILD_CLASS },
  CHILD_TEXT
);

let props: Props;

describe("MainContent", () => {
  beforeEach(() => {
    props = {
      children: CHILD_ELEMENT,
      className: PARENT_CLASS,
    };
  });

  it("Add parent class to `.mainContent`", () => {
    const wrapper = shallow(<MainContent {...props} />);

    expect(wrapper.hasClass(PARENT_CLASS)).toBe(true);
  });

  it("Rendering children", () => {
    const wrapper = shallow(<MainContent {...props} />);
    const child = wrapper.find(`.${CHILD_CLASS}`);

    expect(child.exists()).toBe(true);
    expect(child.text()).toBe(CHILD_TEXT);
  });

  it("Rendering when element prop is not exists", () => {
    const wrapper = shallow(<MainContent {...props} />);

    expect(wrapper.getElement().type).toBe("div");
  });

  it("Rendering when element prop is not exists", () => {
    props = {
      element: ELEMENT,
      children: CHILD_ELEMENT,
      className: PARENT_CLASS,
    };
    const wrapper = shallow(<MainContent {...props} />);

    expect(wrapper.getElement().type).toBe(ELEMENT);
  });
});
