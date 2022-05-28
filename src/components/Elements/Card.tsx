import { ReactNode } from "react";
import { NextPage } from "next";

export interface CardProps {
  children?: ReactNode;
}

export const Card: NextPage<CardProps> = (data) => {
  return <div>tset</div>;
};

export default Card;
