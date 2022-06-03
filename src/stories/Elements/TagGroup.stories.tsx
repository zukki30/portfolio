import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TagGroup from "@/components/Elements/TagGroup";

export default {
  title: "compoents/Elements/TagGroup",
  component: TagGroup,
  argTypes: {},
} as ComponentMeta<typeof TagGroup>;

const Template: ComponentStory<typeof TagGroup> = (args) => <TagGroup {...args} />;

export const Default = Template.bind({});

Default.args = {
  keyId: "key-id",
  labels: [
    "ラベル1",
    "ラベル2ラベル2ラベル2ラベル2",
    "ラベル3",
    "ラベル4ラベル4ラベル4",
    "ラベル5ラベル5ラベル5ラベル5ラベル5ラベル5",
  ],
};
