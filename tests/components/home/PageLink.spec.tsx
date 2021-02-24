import React from "react";
import { shallow } from "enzyme";
import { API_URLS, API_URL_DATAS } from "@/const/Api";
import { PageLink, Props } from "@/components/home/PageLink";

const PARENT_CLASS = "parentClass";
const URL_ID = API_URLS.OUTPUT;
const DISABLED = true;
const API_URL_DATA = API_URL_DATAS[URL_ID];

let props: Props;

describe("PageLink", () => {
  beforeEach(() => {
    props = {
      urlId: URL_ID,
      className: PARENT_CLASS,
    };
  });

  it("Add parent class to `.pageLink`", () => {
    const wrapper = shallow(<PageLink {...props} />);

    expect(wrapper.hasClass(PARENT_CLASS)).toBe(true);
  });

  it("Rendering `.pageLink__link`", () => {
    const wrapper = shallow(<PageLink {...props} />);
    const linkProps = wrapper.find(".pageLink__link").props();

    expect(linkProps.href).toBe(`/${API_URL_DATA.id}`);
  });

  it("Add class to `.pageLink__link` when disabled is true", () => {
    props = {
      urlId: URL_ID,
      disabled: DISABLED,
      className: PARENT_CLASS,
    };
    const wrapper = shallow(<PageLink {...props} />);
    const link = wrapper.find(".pageLink__link");

    expect(link.hasClass("pageLink__link--disabled")).toBe(true);
  });

  it("Rendering `.pageLink__bg`", () => {
    const wrapper = shallow(<PageLink {...props} />);
    const bgProps = wrapper.find(".pageLink__bg").props();

    expect(bgProps.width).toBe("100%");
    expect(bgProps.height).toBe("100%");
    expect(bgProps.xmlns).toBe("http://www.w3.org/2000/svg");
    expect(bgProps.version).toBe("1.1");

    const itemBgProps = wrapper.find(".pageLink__itemBg").props();
    expect(itemBgProps.cx).toBe("50%");
    expect(itemBgProps.cy).toBe("50%");
    expect(itemBgProps.r).toBe("30%");
  });

  it("Rendering `.pageLink__text`", () => {
    const wrapper = shallow(<PageLink {...props} />);
    const text = wrapper.find(".pageLink__text");
    const mainText = text.find(".pageLink__mainText");

    expect(mainText.text()).toBe(API_URL_DATA.name);

    const subText = text.find(".pageLink__subText");

    expect(subText.text()).toBe(API_URL_DATA.id.toUpperCase());
  });
});
