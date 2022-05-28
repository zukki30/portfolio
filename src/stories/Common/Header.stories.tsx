import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Header from "@/components/Common/Header";

export default {
  title: "compoents/Common/Header",
  component: Header,
  argTypes: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {};
