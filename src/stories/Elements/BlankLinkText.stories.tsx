import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SkyColors } from "@/consts/color";
import BlankLinkText from "@/components/Elements/BlankLinkText";

export default {
  title: "compoents/Elements/BlankLinkText",
  component: BlankLinkText,
  argTypes: {},
} as ComponentMeta<typeof BlankLinkText>;

const Template: ComponentStory<typeof BlankLinkText> = (args) => <BlankLinkText {...args} />;

export const Default = Template.bind({});

Default.args = {
  siteUrl: "https://www.google.com/?hl=ja",
  color: SkyColors[500],
};
