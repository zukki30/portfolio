import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SkillContent from "@/components/Profile/SkillContent";

export default {
  title: "compoents/Profile/SkillContent",
  component: SkillContent,
  argTypes: {},
} as ComponentMeta<typeof SkillContent>;

const Template: ComponentStory<typeof SkillContent> = (args) => <SkillContent {...args} />;

export const Default = Template.bind({});

Default.args = {};
