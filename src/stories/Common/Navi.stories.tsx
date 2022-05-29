import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Router, Routes } from "@/consts/router";
import Navi from "@/components/Common/Navi";

export default {
  title: "compoents/Common/Navi",
  component: Navi,
  argTypes: {
    path: {
      control: {
        type: "select",
        options: Routes.map((route) => route.path),
      },
    },
  },
} as ComponentMeta<typeof Navi>;

const Template: ComponentStory<typeof Navi> = (args) => <Navi {...args} />;

export const Default = Template.bind({});

Default.args = {
  path: Router.Profile.path,
};
