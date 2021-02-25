import React from "react";
import { shallow } from "enzyme";
import { profileResResult } from "../_helper/test-util";
import { API_URLS, API_URL_DATAS } from "@/const/Api";
import { Profile } from "@/models/Profile";
import PageHead from "@/components/PageHead";
import MainHeadline from "@/components/MainHeadline";
import BasicList from "@/components/BasicList";
import { ProfilePage, Props } from "@/pages/profile";

const URL_DATA = API_URL_DATAS[API_URLS.PROFILE];
const PROFILE = Profile.build(profileResResult);

let props: Props;

describe("Profile", () => {
  beforeEach(() => {
    props = {
      data: profileResResult,
    };
  });

  it("Pass to PageHead description & title", () => {
    const wrapper = shallow(<ProfilePage {...props} />);
    const pageHead = wrapper.find(PageHead);

    expect(pageHead.props().description).toBe("プロフィールページです");
    expect(pageHead.props().title).toBe(URL_DATA.name);
  });

  it("Pass to MainHeadline text", () => {
    const wrapper = shallow(<ProfilePage {...props} />);
    const mainHeadline = wrapper.find(MainHeadline);

    expect(mainHeadline.props().text).toBe(URL_DATA.name);
  });

  it("Redering order", () => {
    const wrapper = shallow(<ProfilePage {...props} />);
    const items = wrapper.find(".propfile__item");

    expect(items.length).toBe(11);

    expect(items.at(0).find(".propfile__title").text()).toBe(
      "名前（フリガナ）"
    );
    expect(items.at(0).find(".propfile__content").text()).toBe(
      `${PROFILE.fullName}（${PROFILE.fullKanaName}）`
    );

    expect(items.at(1).find(".propfile__title").text()).toBe("生年月日");
    expect(items.at(1).find(".propfile__content").text()).toBe(
      `${PROFILE.birthday}（${PROFILE.age}歳）`
    );

    expect(items.at(2).find(".propfile__title").text()).toBe("性別");
    expect(items.at(2).find(".propfile__content").text()).toBe(
      `${PROFILE.sex}`
    );

    expect(items.at(3).find(".propfile__title").text()).toBe("現在住");
    expect(items.at(3).find(".propfile__content").text()).toBe(
      `${PROFILE.address}`
    );

    expect(items.at(4).find(".propfile__title").text()).toBe(
      "最終学歴（卒業年）"
    );
    expect(items.at(4).find(".propfile__content").text()).toBe(
      `${PROFILE.finalEducation}（${PROFILE.graduationYear}卒業）`
    );

    expect(items.at(5).find(".propfile__title").text()).toBe("職種");
    expect(
      items.at(5).find(".propfile__content").find(BasicList).props().items
    ).toEqual(PROFILE.occupation);

    expect(items.at(6).find(".propfile__title").text()).toBe("スキル");
    const skillItem = items
      .at(6)
      .find(".propfile__content")
      .find(".propfile__skillListItem");
    expect(skillItem.length).toBe(PROFILE.skill.length);
    skillItem.forEach((item, i) => {
      expect(item.text()).toBe(PROFILE.skill[i]);
    });

    expect(items.at(7).find(".propfile__title").text()).toBe(
      "使用経験のあるツール"
    );
    expect(
      items.at(7).find(".propfile__content").find(BasicList).props().items
    ).toEqual(PROFILE.tool);

    expect(items.at(8).find(".propfile__title").text()).toBe(
      "やってみたいこと"
    );
    expect(items.at(8).find(".propfile__content").render().text()).toBe(
      PROFILE.future
    );

    expect(items.at(9).find(".propfile__title").text()).toBe(
      "使ってみたい技術"
    );
    expect(
      items.at(9).find(".propfile__content").find(BasicList).props().items
    ).toEqual(PROFILE.useTechnology);

    expect(items.at(10).find(".propfile__title").text()).toBe(
      "伸ばしてみたいスキル"
    );
    expect(items.at(10).find(".propfile__content").text()).toBe(
      `${PROFILE.growth}`
    );
  });
});
