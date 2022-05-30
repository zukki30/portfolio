import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Title from "@/components/Elements/Title";

export default {
  title: "compoents/Elements/Title",
  component: Title,
  argTypes: {},
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: "Page Title",
  subLabel: "ページタイトル",
};
