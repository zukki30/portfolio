import { ReactNode } from "react";
import { NextPage } from "next";

export interface LayoutProps {
  children?: ReactNode;
}

export const Layout: NextPage<LayoutProps> = (data) => {
  return <div>tset</div>;
};

export default Layout;
