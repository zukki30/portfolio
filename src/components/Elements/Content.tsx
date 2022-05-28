import { ReactNode } from "react";
import { NextPage } from "next";

export interface ContentProps {
  children?: ReactNode;
}

export const Content: NextPage<ContentProps> = (data) => {
  return <div>tset</div>;
};

export default Content;
