import React from "react";
import { shallow } from "enzyme";
import { Logo, Props } from "@/components/Logo";

const IS_HOME = false;

let props: Props;

describe("Logo", () => {
  beforeEach(() => {
    props = {
      isHome: IS_HOME,
    };
  });

  it("Rendering of elements in a `.logo`", () => {
    const wrapper = shallow(<Logo {...props} />);
    const link = wrapper.find(".logo__link");

    expect(link.props().href).toBe("/");
    expect(link.text()).toBe("site name");
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
