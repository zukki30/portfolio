import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Content from "@/components/Elements/Content";

export default {
  title: "compoents/Elements/Content",
  component: Content,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["none", "xs", "sm", "base", "lg", "xl"],
      },
    },
  },
} as ComponentMeta<typeof Content>;

const Template: ComponentStory<typeof Content> = (args) => <Content {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: (
    <div>
      Smaple text Smaple text Smaple text Smaple text Smaple text Smaple text Smaple text Smaple text Smaple text Smaple
      text Smaple text Smaple text
    </div>
  ),
  size: "base",
};
