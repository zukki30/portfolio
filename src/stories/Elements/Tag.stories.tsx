import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tag from "@/components/Elements/Tag";

export default {
  title: "compoents/Elements/Tag",
  component: Tag,
  argTypes: {},
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Default = Template.bind({});

Default.args = {};
