import React from "react";
import { shallow } from "enzyme";
import { GithubLink, Props } from "@/components/GithubLink";

const SIZE = 35;
const PARENT_CLASS = "parentClass";

let props: Props;

describe("GithubLink", () => {
  beforeEach(() => {
    props = {
      size: SIZE,
      className: PARENT_CLASS,
    };
  });

  it("Add parent class to `.githubLink`", () => {
    const wrapper = shallow(<GithubLink {...props} />);

    expect(wrapper.hasClass(PARENT_CLASS)).toBe(true);
  });

  it("Rendering `.githubLink`", () => {
    const wrapper = shallow(<GithubLink {...props} />);
    const wrapperProps = wrapper.props();

    expect(wrapperProps.href).toBe("https://github.com/kk-watanabe");
    expect(wrapperProps.target).toBe("_blank");
    expect(wrapperProps.rel).toBe("noopener noreferrer");
    expect(wrapperProps.style.width).toBe(`${SIZE}px`);
    expect(wrapperProps.style.height).toBe(`${SIZE}px`);
  });
});
