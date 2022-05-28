import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Logo from "@/components/Common/Logo";

export default {
  title: "compoents/Common/Logo",
  component: Logo,
  argTypes: {},
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = () => <Logo />;

export const Default = Template.bind({});

Default.args = {};
