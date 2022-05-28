import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "@/components/Elements/Button";

export default {
  title: "compoents/Elements/Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {};
