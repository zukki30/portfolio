import React from "react";
import { shallow } from "enzyme";
import { Logo, Props } from "@/components/Logo";
import { SITE_NAME } from "@/const/site";

const PARENT_CLASS = "parentClass";
const IS_HOME = false;

let props: Props;

describe("Logo", () => {
  beforeEach(() => {
    props = {
      isHome: IS_HOME,
      className: PARENT_CLASS,
    };
  });

  it("Add parent class to `.logo`", () => {
    const wrapper = shallow(<Logo {...props} />);

    expect(wrapper.hasClass(PARENT_CLASS)).toBe(true);
  });

  it("Rendering of elements in a `.logo`", () => {
    const wrapper = shallow(<Logo {...props} />);
    const link = wrapper.find(".logo__link");

    expect(link.props().href).toBe("/");
    expect(link.text()).toBe(SITE_NAME);
  });

  it("Rendering of the elements in `.logo` when isHome is false", () => {
    const wrapper = shallow(<Logo {...props} />);

    expect(wrapper.getElement().type).toBe("div");
  });

  it("Rendering of the elements in `.logo` when isHome is true", () => {
    props = {
      isHome: !IS_HOME,
    };
    const wrapper = shallow(<Logo {...props} />);

    expect(wrapper.getElement().type).toBe("h1");
  });
});
