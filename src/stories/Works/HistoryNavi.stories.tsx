import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import HistoryNavi from "@/components/Works/HistoryNavi";

export default {
  title: "compoents/Works/HistoryNavi",
  component: HistoryNavi,
  argTypes: {},
} as ComponentMeta<typeof HistoryNavi>;

const Template: ComponentStory<typeof HistoryNavi> = (args) => <HistoryNavi {...args} />;

export const Default = Template.bind({});

Default.args = {};
