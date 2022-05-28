import { ReactNode } from "react";
import { NextPage } from "next";

export interface HeaderProps {
  children?: ReactNode;
}

export const Header: NextPage<HeaderProps> = (data) => {
  return <div>tset</div>;
};

export default Header;
