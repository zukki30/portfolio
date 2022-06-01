import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Skill } from "@/types";
import SkillItem from "@/components/Profile/SkillItem";

export default {
  title: "compoents/Profile/SkillItem",
  component: SkillItem,
  argTypes: {},
} as ComponentMeta<typeof SkillItem>;

const logo = {
  url: "https://placehold.jp/150x150.png",
  width: 150,
  height: 150,
};

const Template: ComponentStory<typeof SkillItem> = (args) => <SkillItem {...args} />;

export const NotImage = Template.bind({});

NotImage.args = {
  skill: {
    name: "プロフィールラベルプロフィールラベルプロフィールラベル",
    startingYears: "2011-02-28T15:00:00.000Z",
    yearsOfUse: 0,
    logo: null,
  } as Skill,
};

export const ImageTrue = Template.bind({});

ImageTrue.args = {
  skill: {
    name: "プロフィールラベルプロフィールラベルプロフィールラベル",
    startingYears: "2011-02-28T15:00:00.000Z",
    yearsOfUse: 0,
    logo,
  } as Skill,
};

export const NotStartingYears = Template.bind({});

NotStartingYears.args = {
  skill: {
    name: "プロフィールラベルプロフィールラベルプロフィールラベル",
    startingYears: "",
    yearsOfUse: 5,
    logo,
  } as Skill,
};
