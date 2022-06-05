import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { API_URLS } from "@/const/Api";
import { PageLink, Props } from "@/components/home/PageLink";

export default {
  title: "Home/PageLink",
  component: PageLink,
  argTypes: {
    urlId: {
      control: {
        type: "select",
        options: API_URLS,
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
    <PageLink {...args} />
  </ul>
);

export const Default = Template.bind({});
Default.args = {
  urlId: API_URLS.CURRICULUM_VITAE,
  disabled: false,
};
