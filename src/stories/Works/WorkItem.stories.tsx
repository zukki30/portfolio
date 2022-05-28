import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import WorkItem from "@/components/Works/WorkItem";

export default {
  title: "compoents/Works/WorkItem",
  component: WorkItem,
  argTypes: {},
} as ComponentMeta<typeof WorkItem>;

const Template: ComponentStory<typeof WorkItem> = (args) => <WorkItem {...args} />;

export const Default = Template.bind({});

Default.args = {};
