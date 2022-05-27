import React from "react";
import { shallow } from "enzyme";
import { API_URLS } from "@/const/Api";
import PageLink from "@/components/home/PageLink";
import Home from "@/pages/index";

describe("Home", () => {
  it("Redering to PageLinks", () => {
    const wrapper = shallow(<Home />);
    const navi = wrapper.find(".home__navi");
    const pageLinks = navi.find(PageLink);

    expect(pageLinks.get(0).props.urlId).toBe(API_URLS.PROFILE);
    expect(pageLinks.get(1).props.urlId).toBe(API_URLS.CURRICULUM_VITAE);
    expect(pageLinks.get(2).props.urlId).toBe(API_URLS.OUTPUT);
    expect(pageLinks.get(2).props.disabled).toBe(true);
  });
});
