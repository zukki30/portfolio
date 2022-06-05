import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DevEnvItem from "@/components/OutputDetail/DevEnvItem";

export default {
  title: "compoents/OutputDetail/DevEnvItem",
  component: DevEnvItem,
  argTypes: {},
} as ComponentMeta<typeof DevEnvItem>;

const Template: ComponentStory<typeof DevEnvItem> = (args) => <DevEnvItem {...args} />;

export const Default = Template.bind({});

const data = {
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
};

Default.args = {
  label: "フロントエンド",
  data,
};
