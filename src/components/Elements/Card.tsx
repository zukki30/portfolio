import { ReactNode } from "react";
import { NextPage } from "next";
import styled from "styled-components";

import { WhiteColor } from "@/consts/color";
import { FixedSizes, BoxShadowSizes, BasicSizeType } from "@/consts/size";

type CardSizeProps = {
  borderRadius: string;
  padding: string;
};

const CardSizeS: CardSizeProps = {
  borderRadius: FixedSizes[4],
  padding: FixedSizes[12],
};

const CardSizeM: CardSizeProps = {
  borderRadius: FixedSizes[8],
  padding: FixedSizes[16],
};

const CardSizeL: CardSizeProps = {
  borderRadius: FixedSizes[12],
  padding: FixedSizes[20],
};

const CardSizeXL: CardSizeProps = {
  borderRadius: FixedSizes[12],
  padding: FixedSizes[32],
};

const CardSizeType = {
  S: CardSizeS,
  M: CardSizeM,
  L: CardSizeL,
  XL: CardSizeXL,
} as const;

type CardSizeType = typeof CardSizeType[keyof typeof CardSizeType];

export const CardSizeTypeKeys = Object.keys(CardSizeType);

export interface CardProps {
  children: ReactNode;
  size?: BasicSizeType;
}

const CardContainer = styled.div<CardProps>`
  padding: ${(props) => (props.size !== undefined ? CardSizeType[props.size].padding : CardSizeType.M.padding)};
  background-color: ${WhiteColor};
  border-radius: ${(props) =>
    props.size !== undefined ? CardSizeType[props.size].borderRadius : CardSizeType.M.borderRadius};
  box-shadow: ${BoxShadowSizes.base};
`;

export const Card: NextPage<CardProps> = (props) => {
  const { children, size } = props;

  return <CardContainer size={size}>{children}</CardContainer>;
};

export default Card;
