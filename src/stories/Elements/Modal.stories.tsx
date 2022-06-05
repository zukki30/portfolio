import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Modal from "@/components/Elements/Modal";

export default {
  title: "compoents/Elements/Modal",
  component: Modal,
  argTypes: {
    open: { control: "boolean" },
    onClose: { action: "closed" },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: (
    <div>
      Modal text
      <br />
      Modal text
      <br />
      Modal text
      <br />
      Modal text
      <br />
      Modal text
      <br />
      Modal text
      <br />
      Modal text
      <br />
      Modal text
      <br />
      Modal text
      <br />
      Modal text
      <br />
      Modal text
      <br />
      Modal text
      <br />
      Modal text
      <br />
      Modal text
      <br />
      Modal text
      <br />
      Modal text
      <br />
      Modal text
      <br />
      Modal text
      <br />
      Modal text
      <br />
      Modal text
      <br />
      Modal text
      <br />
      Modal text
      <br />
      Modal text
      <br />
      Modal text
      <br />
      Modal text
      <br />
      Modal text
      <br />
      Modal text
      <br />
      Modal text
      <br />
      Modal text
      <br />
      Modal text
      <br />
      Modal text
      <br />
      Modal text
      <br />
      Modal text
      <br />
      Modal text
    </div>
  ),
  open: true,
};
