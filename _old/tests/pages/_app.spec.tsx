import React from "react";
import { shallow } from "enzyme";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { API_URLS } from "@/const/Api";
import { SITE_NAME } from "@/const/site";
import NaviItem from "@/components/app/NaviItem";
import PageHead from "@/components/PageHead";
import Logo from "@/components/Logo";
import GithubLink from "@/components/GithubLink";
import App from "@/pages/_app";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "",
      pathname: "",
      query: "",
      asPath: "",
    };
  },
}));

const useRouter = jest.spyOn(require("next/router"), "useRouter");

const PAGE_COMPONENT_CLASS = "pageComponentClass";
const PAGE_COMPONENT_text = "sample text";
const PAGE_COMPONENT: NextPage = () => {
  return <div className={PAGE_COMPONENT_CLASS}>{PAGE_COMPONENT_text}</div>;
};

const PAGE_PROPS = {};

const props = {
  Component: PAGE_COMPONENT,
  pageProps: PAGE_PROPS,
} as AppProps;

describe("App", () => {
  describe("Common subject matter", () => {
    beforeEach(() => {
      useRouter.mockImplementation(() => ({
        route: "/",
        pathname: "/",
        query: "",
        asPath: "",
      }));
    });

    it("Pass to PageHead description", () => {
      const wrapper = shallow(<App {...props} />);
      const pageHead = wrapper.find(PageHead);

      expect(pageHead.props().description).toBe("ポートフォリオサイトです");
    });

    it("Rendering overall order", () => {
      const wrapper = shallow(<App {...props} />);

      const header = wrapper.childAt(1);
      expect(header.exists()).toBe(true);
      expect(header.getElement().type).toBe("header");

      const main = wrapper.childAt(2);
      expect(main.exists()).toBe(true);
      expect(main.getElement().type).toBe("main");

      const footer = wrapper.childAt(3);
      expect(footer.exists()).toBe(true);
      expect(footer.getElement().type).toBe("footer");
    });

    it("Rendering header order", () => {
      const wrapper = shallow(<App {...props} />);
      const haederInner = wrapper.find(".app__haederInner");

      const logo = haederInner.childAt(0);
      expect(logo.exists()).toBe(true);
      expect(logo.getElement().type).toBe(Logo);

      const githubLink = haederInner.childAt(1);
      expect(githubLink.exists()).toBe(true);
      expect(githubLink.getElement().type).toBe(GithubLink);
      expect(githubLink.getElement().props.size).toBe(35);
    });

    it("Rendering main child", () => {
      const wrapper = shallow(<App {...props} />);
      const main = wrapper.find("main");

      const child = main.childAt(0);
      expect(child.exists()).toBe(true);
      expect(child.getElement().type).toBe(PAGE_COMPONENT);
    });

    it("Rendering copyright", () => {
      const wrapper = shallow(<App {...props} />);
      const copyRight = wrapper.find(".app__copyRight");

      expect(copyRight.text()).toBe(`© 2020 ${SITE_NAME}.`);
    });
  });

  describe("Top page", () => {
    beforeEach(() => {
      useRouter.mockImplementation(() => ({
        route: "/",
        pathname: "/",
        query: "",
        asPath: "",
      }));
    });

    it("Add `.app--home` to `.app`", () => {
      const wrapper = shallow(<App {...props} />);

      expect(wrapper.hasClass("app--home")).toBe(true);
      expect(wrapper.hasClass("app--default")).toBe(false);
    });

    it("Pass isHome prop to Logo", () => {
      const wrapper = shallow(<App {...props} />);
      const logo = wrapper.find(Logo);

      expect(logo.props().isHome).toBe(true);
    });

    it("Not exists to `.app__navi`", () => {
      const wrapper = shallow(<App {...props} />);
      const navi = wrapper.find(".app__navi");

      expect(navi.exists()).toBe(false);
    });

    it("Not class to main element", () => {
      const wrapper = shallow(<App {...props} />);
      const main = wrapper.find("main");

      expect(main.hasClass("app__body")).toBe(false);
    });
  });

  describe("Lower page", () => {
    beforeEach(() => {
      useRouter.mockImplementation(() => ({
        route: `/${API_URLS.PROFILE}`,
        pathname: `/${API_URLS.PROFILE}`,
        query: "",
        asPath: "",
      }));
    });

    it("Add `.app--home` to `.app`", () => {
      const wrapper = shallow(<App {...props} />);

      expect(wrapper.hasClass("app--home")).toBe(false);
      expect(wrapper.hasClass("app--default")).toBe(true);
    });

    it("Pass isHome prop to Logo", () => {
      const wrapper = shallow(<App {...props} />);
      const logo = wrapper.find(Logo);

      expect(logo.props().isHome).toBe(false);
    });

    it("Exists to `.app__navi`", () => {
      const wrapper = shallow(<App {...props} />);
      const navi = wrapper.find(".app__navi");

      expect(navi.exists()).toBe(true);
    });

    it("Redering to PageLinks", () => {
      const wrapper = shallow(<App {...props} />);
      const navi = wrapper.find(".app__navi");
      const naviItems = navi.find(NaviItem);

      expect(naviItems.get(0).props.urlId).toBe(API_URLS.PROFILE);
      expect(naviItems.get(1).props.urlId).toBe(API_URLS.CURRICULUM_VITAE);
      expect(naviItems.get(2).props.urlId).toBe(API_URLS.OUTPUT);
      expect(naviItems.get(2).props.disabled).toBe(true);
    });

    it("Add `.app__body` to main element", () => {
      const wrapper = shallow(<App {...props} />);
      const main = wrapper.find("main");

      expect(main.hasClass("app__body")).toBe(true);
    });
  });
});
