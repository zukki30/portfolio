import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { MAIN_CONTENT } from "@/const/ElementTag";
import { MainContent, Props } from "@/components/MainContent";

export default {
  title: "Atom/MainContent",
  component: MainContent,
  argTypes: {
    element: {
      control: {
        type: "select",
        options: MAIN_CONTENT,
      },
    },
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <MainContent {...args}>sample text</MainContent>
);

export const Default = Template.bind({});
Default.args = {
  element: MAIN_CONTENT.Div,
};
