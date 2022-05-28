import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ProfileHeader from "@/components/Profile/ProfileHeader";

export default {
  title: "compoents/Profile/ProfileHeader",
  component: ProfileHeader,
  argTypes: {},
} as ComponentMeta<typeof ProfileHeader>;

const Template: ComponentStory<typeof ProfileHeader> = (args) => <ProfileHeader {...args} />;

export const Default = Template.bind({});

Default.args = {};
