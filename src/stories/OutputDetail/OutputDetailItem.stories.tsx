import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import OutputDetailItem from "@/components/OutputDetail/OutputDetailItem";

export default {
  title: "compoents/OutputDetail/OutputDetailItem",
  component: OutputDetailItem,
  argTypes: {},
} as ComponentMeta<typeof OutputDetailItem>;

const Template: ComponentStory<typeof OutputDetailItem> = (args) => <OutputDetailItem {...args} />;

export const Default = Template.bind({});

Default.args = {};
