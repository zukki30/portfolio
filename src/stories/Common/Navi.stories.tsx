import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Navi from "@/components/Common/Navi";

export default {
  title: "compoents/Common/Navi",
  component: Navi,
  argTypes: {},
} as ComponentMeta<typeof Navi>;

const Template: ComponentStory<typeof Navi> = (args) => <Navi {...args} />;

export const Default = Template.bind({});

Default.args = {};
