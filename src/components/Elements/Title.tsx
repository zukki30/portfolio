import { NextPage } from "next";
import styled from "styled-components";

import { FixedSizes, FontSizes } from "@/consts/size";
import { PageColors } from "@/consts/color";

type TitleColor = "profile" | "works" | "output";

const TitleColors = {
  profile: PageColors.Profile[500],
  works: PageColors.Works[500],
  output: PageColors.Output[500],
};

export interface TitleProps {
  label: string;
  subLabel: string;
  color: TitleColor;
}

const TitleContainer = styled.h1<TitleProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${FixedSizes[24]};
  color: ${(props) => TitleColors[props.color]};
  font-weight: bold;
`;

const TitleMainLabel = styled.span`
  display: block;
  font-size: ${FontSizes["6xl"]};
`;

const TitleSubLabel = styled.span`
  display: block;
  font-size: ${FontSizes["2xl"]};
`;

export const Title: NextPage<TitleProps> = (props) => {
  const { label, subLabel } = props;

  return (
    <TitleContainer {...props}>
      <TitleMainLabel>{label}</TitleMainLabel>
      <TitleSubLabel>{subLabel}</TitleSubLabel>
    </TitleContainer>
  );
};

export default Title;
