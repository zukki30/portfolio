import { ReactNode } from "react";
import { NextPage } from "next";

export interface ProjectItemProps {
  children?: ReactNode;
}

export const ProjectItem: NextPage<ProjectItemProps> = (data) => {
  return <div>tset</div>;
};

export default ProjectItem;
