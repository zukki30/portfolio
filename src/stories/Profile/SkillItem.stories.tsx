import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SkillItem from "@/components/Profile/SkillItem";

export default {
  title: "compoents/Profile/SkillItem",
  component: SkillItem,
  argTypes: {},
} as ComponentMeta<typeof SkillItem>;

const Template: ComponentStory<typeof SkillItem> = (args) => <SkillItem {...args} />;

export const Default = Template.bind({});

Default.args = {};
