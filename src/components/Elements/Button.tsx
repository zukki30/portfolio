import { ReactNode } from "react";
import { NextPage } from "next";

export interface ButtonProps {
  children?: ReactNode;
}

export const Button: NextPage<ButtonProps> = (data) => {
  return <div>tset</div>;
};

export default Button;
