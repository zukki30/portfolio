import { NextPage } from "next";
import styled from "styled-components";

import { FixedSizes, FontSizes } from "@/consts/size";

export interface TitleProps {
  label: string;
  subLabel: string;
}

const TitleContainer = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${FixedSizes[24]};
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
    <TitleContainer>
      <TitleMainLabel>{label}</TitleMainLabel>
      <TitleSubLabel>{subLabel}</TitleSubLabel>
    </TitleContainer>
  );
};

export default Title;
