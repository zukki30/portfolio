import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { createCurriculumVitae } from "@/utils/storybook-util";
import { HEADLINE_LEVEL } from "@/const/ElementTag";
import {
  CurriculumVitaeContent,
  Props,
} from "@/components/curriculum-vitae/CurriculumVitaeContent";

export default {
  title: "CurriculumVitae/CurriculumVitaeContent",
  component: CurriculumVitaeContent,
  argTypes: {
    level: {
      control: {
        type: "select",
        options: HEADLINE_LEVEL,
      },
    },
  },
} as Meta;

const Template: Story<Props> = (args) => {
  const curriculumVitae = createCurriculumVitae(1);
  return (
    <CurriculumVitaeContent
      curriculumVitae={curriculumVitae}
      level={args.level}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  level: HEADLINE_LEVEL.Level2,
};
