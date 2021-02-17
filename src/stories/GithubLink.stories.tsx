import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { GithubLink, Props } from "@/components/GithubLink";

export default {
  title: "Atom/GithubLink",
  component: GithubLink,
  argTypes: {
    size: { control: { min: 0, max: 500, step: 1 } },
  },
} as Meta;

const Template: Story<Props> = (args) => <GithubLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 32,
};
