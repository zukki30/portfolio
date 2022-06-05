import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Footer from "@/components/Common/Footer";

export default {
  title: "compoents/Common/Footer",
  component: Footer,
  argTypes: {},
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Default = Template.bind({});

Default.args = {};
