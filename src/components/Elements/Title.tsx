import { ReactNode } from "react";
import { NextPage } from "next";

export interface TitleProps {
  children?: ReactNode;
}

export const Title: NextPage<TitleProps> = (data) => {
  return <div>tset</div>;
};

export default Title;
