import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { BasicList, Props } from "@/components/BasicList";

export default {
  title: "Atom/BasicList",
  component: BasicList,
  argTypes: {
    items: { control: { separator: "," } },
  },
} as Meta;

const Template: Story<Props> = (args) => <BasicList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    "item1",
    "item2",
    "item3",
    "item4",
    "item5 item5 item5 item5 item5 item5 item5 item5 item5",
    "item6",
  ],
};
