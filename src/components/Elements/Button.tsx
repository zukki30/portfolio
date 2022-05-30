import { ReactNode } from "react";
import { NextPage } from "next";

export interface ButtonProps {
  children?: ReactNode;
}

export const Button: NextPage<ButtonProps> = (props) => {
  return <div>tset</div>;
};

export default Button;
