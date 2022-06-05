import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Profile } from "@/types";
import ProfileItem from "@/components/Profile/ProfileItem";

export default {
  title: "compoents/Profile/ProfileItem",
  component: ProfileItem,
  argTypes: {},
} as ComponentMeta<typeof ProfileItem>;

const Template: ComponentStory<typeof ProfileItem> = (args) => <ProfileItem {...args} />;

export const NotImage = Template.bind({});

NotImage.args = {
  profile: {
    id: "test1",
    label: "プロフィールラベルプロフィールラベルプロフィールラベル",
    body: "サンプルテキストサンプルテキストサンプルテキストサンプルテキスト",
    image: null,
  } as Profile,
};

export const ImageTrue = Template.bind({});

ImageTrue.args = {
  profile: {
    id: "test1",
    label: "プロフィールラベルプロフィールラベルプロフィールラベル",
    body: "サンプルテキストサンプルテキストサンプルテキストサンプルテキスト",
    image: {
      url: "https://placehold.jp/150x150.png",
      width: 150,
      height: 150,
    },
  } as Profile,
};
