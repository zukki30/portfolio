import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ProjectItem from "@/components/Works/ProjectItem";

export default {
  title: "compoents/Works/ProjectItem",
  component: ProjectItem,
  argTypes: {},
} as ComponentMeta<typeof ProjectItem>;

const Template: ComponentStory<typeof ProjectItem> = (args) => <ProjectItem {...args} />;

export const Default = Template.bind({});

Default.args = {};
