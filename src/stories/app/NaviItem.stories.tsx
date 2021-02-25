import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { API_URLS } from "@/const/Api";
import { NaviItem, Props } from "@/components/app/NaviItem";

const paths = [
  `/${API_URLS.PROFILE}`,
  `/${API_URLS.CURRICULUM_VITAE}`,
  `/${API_URLS.OUTPUT}`,
];

export default {
  title: "App/NaviItem",
  component: NaviItem,
  argTypes: {
    urlId: {
      control: {
        type: "select",
        options: API_URLS,
      },
    },
    path: {
      control: {
        type: "select",
        options: paths,
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <ul>
    <NaviItem {...args} />
  </ul>
);

export const Default = Template.bind({});
Default.args = {
  urlId: API_URLS.CURRICULUM_VITAE,
  path: paths[1],
  disabled: false,
};
