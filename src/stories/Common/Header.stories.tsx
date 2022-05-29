import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Router, Routes } from "@/consts/router";
import Header from "@/components/Common/Header";

export default {
  title: "compoents/Common/Header",
  component: Header,
  argTypes: {
    path: {
      control: {
        type: "select",
        options: Routes.map((route) => route.path),
      },
    },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {
  path: Router.Profile.path,
};
