import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "@/components/Elements/Button";

export default {
  title: "compoents/Elements/Button",
  component: Button,
  argTypes: {
    size: {
      options: ["S", "M", "L"],
      control: { type: "radio" },
    },
    color: {
      options: ["profile", "works", "output", "secondary"],
      control: { type: "radio" },
    },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: "Button label",
  size: "M",
  color: "profile",
  disabled: false,
};
