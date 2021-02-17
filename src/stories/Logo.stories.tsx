import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Logo, Props } from "@/components/Logo";

export default {
  title: "Atom/Logo",
  component: Logo,
  argTypes: {
    isHome: { control: "boolean" },
  },
} as Meta;

const Template: Story<Props> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  isHome: false,
};
