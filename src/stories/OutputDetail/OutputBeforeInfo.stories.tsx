import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { OutputUpdate } from "@/types";
import OutputBeforeInfo from "@/components/OutputDetail/OutputBeforeInfo";

export default {
  title: "compoents/OutputDetail/OutputBeforeInfo",
  component: OutputBeforeInfo,
  argTypes: {},
} as ComponentMeta<typeof OutputBeforeInfo>;

const Template: ComponentStory<typeof OutputBeforeInfo> = (args) => <OutputBeforeInfo {...args} />;

export const Default = Template.bind({});

const data = {
  title: "アップデートタイトル",
  content:
    "サンプルテキストサンプルテキストサンプルテキストサンプルテキスト\nサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト",
  skills: ["NuxtJS", "Vue.js", "HTML", "CSS", "Sass/SCSS", "JavaScript", "TypeScript", "Storybook"],
} as OutputUpdate;

Default.args = {
  data,
};
