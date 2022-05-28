import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Content from "@/components/Elements/Content";

export default {
  title: "compoents/Elements/Content",
  component: Content,
  argTypes: {},
} as ComponentMeta<typeof Content>;

const Template: ComponentStory<typeof Content> = (args) => <Content {...args} />;

export const Default = Template.bind({});

Default.args = {};
