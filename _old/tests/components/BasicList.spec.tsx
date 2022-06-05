import React from "react";
import { shallow } from "enzyme";
import { BasicList, Props } from "@/components/BasicList";

const ITEMS: string[] = ["item1", "item2", "item3"];
const PARENT_CLASS = "parentClass";

let props: Props;

describe("BasicList", () => {
  beforeEach(() => {
    props = {
      items: ITEMS,
      className: PARENT_CLASS,
    };
  });

  it("Add parent class to `ul` element", () => {
    const wrapper = shallow(<BasicList {...props} />);

    expect(wrapper.hasClass(PARENT_CLASS)).toBe(true);
  });

  it("Rendering `.basicList__item`", () => {
    const wrapper = shallow(<BasicList {...props} />);
    const items = wrapper.find(".basicList__item");

    expect(items.length).toBe(ITEMS.length);

    items.forEach((item, i) => {
      expect(item.text()).toBe(ITEMS[i]);
    });
  });
});
