import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import OutputBeforeInfo from "@/components/OutputDetail/OutputBeforeInfo";

export default {
  title: "compoents/OutputDetail/OutputBeforeInfo",
  component: OutputBeforeInfo,
  argTypes: {},
} as ComponentMeta<typeof OutputBeforeInfo>;

const Template: ComponentStory<typeof OutputBeforeInfo> = (args) => <OutputBeforeInfo {...args} />;

export const Default = Template.bind({});

Default.args = {};
