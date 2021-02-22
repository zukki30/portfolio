import React from "react";
import { shallow } from "enzyme";
import { PageHead, Props } from "@/components/PageHead";
import { SITE_NAME } from "@/const/site";

const DESCRIPTION = "サンプルテキスト";
const TITLE = "サンプルタイトル";

let props: Props;

describe("PageHead", () => {
  beforeEach(() => {
    props = {
      description: DESCRIPTION,
      title: TITLE,
    };
  });

  it("Rendering title elements when title is true", () => {
    const wrapper = shallow(<PageHead {...props} />);

    expect(wrapper.find("title").text()).toBe(
      `サンプルタイトル | ${SITE_NAME}`
    );
  });

  it("Rendering title elements when title is false", () => {
    props = {
      description: DESCRIPTION,
    };
    const wrapper = shallow(<PageHead {...props} />);

    expect(wrapper.find("title").text()).toBe(SITE_NAME);
  });

  it("Non-title rendering", () => {
    const wrapper = shallow(<PageHead {...props} />);
    const metas = wrapper.find("meta");

    expect(metas.get(0).props.name).toBe("robots");
    expect(metas.get(0).props.content).toBe("none");

    expect(metas.get(1).props.name).toBe("viewport");
    expect(metas.get(1).props.content).toBe(
      "initial-scale=1.0, width=device-width"
    );

    expect(metas.get(2).props.name).toBe("description");
    expect(metas.get(2).props.content).toBe(DESCRIPTION);
  });
});
