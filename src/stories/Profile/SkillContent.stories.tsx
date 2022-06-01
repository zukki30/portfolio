import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SkillData } from "@/types";
import SkillContent from "@/components/Profile/SkillContent";

export default {
  title: "compoents/Profile/SkillContent",
  component: SkillContent,
  argTypes: {},
} as ComponentMeta<typeof SkillContent>;

const Template: ComponentStory<typeof SkillContent> = (args) => <SkillContent {...args} />;

export const Default = Template.bind({});

const logo = {
  url: "https://placehold.jp/150x150.png",
  width: 150,
  height: 150,
};

const skill = {
  name: "プロフィールラベルプロフィールラベルプロフィールラベル",
  startingYears: "2011-02-28T15:00:00.000Z",
  yearsOfUse: 0,
  logo,
};

const keys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

Default.args = {
  data: {
    label: "スキル",
    body: "サンプルテキストサンプルテキスト サンプルテキストサンプルテキスト サンプルテキストサンプルテキスト サンプルテキストサンプルテキスト サンプルテキストサンプルテキスト",
    skills: keys.map((k) => skill),
  } as SkillData,
};
