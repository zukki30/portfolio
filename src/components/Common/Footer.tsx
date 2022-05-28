import { ReactNode } from "react";
import { NextPage } from "next";

export interface FooterProps {
  children?: ReactNode;
}

export const Footer: NextPage<FooterProps> = (data) => {
  return <div>tset</div>;
};

export default Footer;
