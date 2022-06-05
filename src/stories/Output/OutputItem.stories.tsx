import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import OutputItem from "@/components/Output/OutputItem";

export default {
  title: "compoents/Output/OutputItem",
  component: OutputItem,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof OutputItem>;

const Template: ComponentStory<typeof OutputItem> = (args) => <OutputItem {...args} />;

export const Default = Template.bind({});

const output = {
  id: "testId",
  title: "アウトプットタイトル",
  image: {
    url: "https://placehold.jp/1354x960.png",
    width: 1354,
    height: 960,
  },
  pageUrl: "https://www.google.com/?hl=ja",
  startDate: "2019-12-31T15:00:00.000Z",
  endDate: "",
  content: "サンプルテキストサンプルテキスト\nサンプルテキストサンプルテキストサンプルテキストサンプルテキスト\n",
  frontEndInfo: {
    repositoryUrl: "https://www.google.com/?hl=ja",
    skills: ["NuxtJS", "Vue.js", "HTML", "CSS", "Sass/SCSS", "JavaScript", "TypeScript", "Storybook"],
    content:
      "サンプルテキストサンプルテキスト\nサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト\nサンプルテキストサンプルテキストサンプルテキストサンプルテキスト",
    beforeUpdates: [
      {
        title: "サイト公開",
        content:
          "サンプルテキストサンプルテキストサンプルテキストサンプルテキスト\nサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト",
        skills: ["NuxtJS", "Vue.js", "HTML", "CSS", "Sass/SCSS", "JavaScript", "TypeScript", "Storybook"],
      },
    ],
  },
  backEndInfo: {
    repositoryUrl: "https://www.google.com/?hl=ja",
    skills: ["WordPress"],
    content: "nサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト",
    beforeUpdates: [],
  },
};

Default.args = {
  output,
};
