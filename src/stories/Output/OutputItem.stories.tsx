import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import OutputItem from "@/components/Output/OutputItem";

export default {
  title: "compoents/Output/OutputItem",
  component: OutputItem,
  argTypes: {},
} as ComponentMeta<typeof OutputItem>;

const Template: ComponentStory<typeof OutputItem> = (args) => <OutputItem {...args} />;

export const Default = Template.bind({});

Default.args = {};
