import { ReactNode } from "react";
import { NextPage } from "next";

export interface OutputBeforeInfoProps {
  children?: ReactNode;
}

export const OutputBeforeInfo: NextPage<OutputBeforeInfoProps> = (data) => {
  return <div>tset</div>;
};

export default OutputBeforeInfo;
