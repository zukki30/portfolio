import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Layout from "@/components/Layout/Layout";

export default {
  title: "compoents/Layout/Layout",
  component: Layout,
  argTypes: {},
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: <div>main text</div>,
};
