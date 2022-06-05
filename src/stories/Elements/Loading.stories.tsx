import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Loading from "@/components/Elements/Loading";

export default {
  title: "compoents/Elements/Loading",
  component: Loading,
  argTypes: {},
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = () => <Loading />;

export const Default = Template.bind({});

Default.args = {};
