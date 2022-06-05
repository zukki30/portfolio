import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card, { CardSizeTypeKeys } from "@/components/Elements/Card";

export default {
  title: "compoents/Elements/Card",
  component: Card,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: CardSizeTypeKeys,
      },
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: <div>Card text</div>,
  size: "M",
};
