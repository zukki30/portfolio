import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import YearTitle from "@/components/Works/YearTitle";

export default {
  title: "compoents/Works/YearTitle",
  component: YearTitle,
  argTypes: {},
} as ComponentMeta<typeof YearTitle>;

const Template: ComponentStory<typeof YearTitle> = (args) => <YearTitle {...args} />;

export const Default = Template.bind({});

Default.args = {};
