import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { HEADLINE_LEVEL } from "@/const/ElementTag";
import { MainHeadline, Props } from "@/components/MainHeadline";

export default {
  title: "Atom/MainHeadline",
  component: MainHeadline,
  argTypes: {
    text: {
      control: {
        type: "text",
      },
    },
    level: {
      control: {
        type: "select",
        options: HEADLINE_LEVEL,
      },
    },
  },
} as Meta;

const Template: Story<Props> = (args) => <MainHeadline {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "sample text",
  level: HEADLINE_LEVEL.Level1,
};
