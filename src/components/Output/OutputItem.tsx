import { ReactNode } from "react";
import { NextPage } from "next";

export interface OutputItemProps {
  children?: ReactNode;
}

export const OutputItem: NextPage<OutputItemProps> = (data) => {
  return <div>tset</div>;
};

export default OutputItem;