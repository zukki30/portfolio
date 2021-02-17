import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { createProject } from "@/utils/storybook-util";
import { HEADLINE_LEVEL } from "@/const/ElementTag";
import {
  ProjectContent,
  Props,
} from "@/components/curriculum-vitae/ProjectContent";

export default {
  title: "CurriculumVitae/ProjectContent",
  component: ProjectContent,
  argTypes: {
    index: { control: { min: 0, max: 10, step: 1 } },
    level: {
      control: {
        type: "select",
        options: HEADLINE_LEVEL,
      },
    },
  },
} as Meta;

const Template: Story<Props> = (args) => {
  const project = createProject(1);
  return (
    <ProjectContent project={project} index={args.index} level={args.level} />
  );
};

export const Default = Template.bind({});
Default.args = {
  index: 1,
  level: HEADLINE_LEVEL.Level3,
};
