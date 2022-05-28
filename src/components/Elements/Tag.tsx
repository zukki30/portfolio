import { ReactNode } from "react";
import { NextPage } from "next";

export interface TagProps {
  children?: ReactNode;
}

export const Tag: NextPage<TagProps> = (data) => {
  return <div>tset</div>;
};

export default Tag;
