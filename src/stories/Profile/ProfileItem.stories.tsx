import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ProfileItem from "@/components/Profile/ProfileItem";

export default {
  title: "compoents/Profile/ProfileItem",
  component: ProfileItem,
  argTypes: {},
} as ComponentMeta<typeof ProfileItem>;

const Template: ComponentStory<typeof ProfileItem> = (args) => <ProfileItem {...args} />;

export const Default = Template.bind({});

Default.args = {};
