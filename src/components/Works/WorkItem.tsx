import { ReactNode } from "react";
import { NextPage } from "next";

export interface WorkItemProps {
  children?: ReactNode;
}

export const WorkItem: NextPage<WorkItemProps> = (props) => {
  return <div>tset</div>;
};

export default WorkItem;
