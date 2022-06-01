import { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";

import { Skill } from "@/types";
import { GreenColors } from "@/consts/color";
import { FixedSizes, FontSizes } from "@/consts/size";
import Card from "@/components/Elements/Card";

export interface SkillItemProps {
  skill: Skill;
}

const SkillItemContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillItemLabel = styled.h3`
  color: ${GreenColors[600]};
  font-weight: bold;
  line-height: 1.3;

  &:not(:first-child) {
    margin-top: ${FixedSizes[20]};
  }
`;

const SkillItemText = styled.p`
  margin-top: ${FixedSizes[12]};
  font-size: ${FontSizes.sm};
  line-height: 1.5;
`;

const getYearsFromStartToPresent = (startingYears: string) => {
  const startingDate = new Date(startingYears);
  const year = new Date().getFullYear();

  return year - startingDate.getFullYear();
};

export const SkillItem: NextPage<SkillItemProps> = (props) => {
  const { name, logo, startingYears, yearsOfUse } = props.skill;
  const showImage = logo !== null;
  const yearsOfUseNumber = startingYears.length > 0 ? getYearsFromStartToPresent(startingYears) : yearsOfUse;

  return (
    <Card>
      <SkillItemContainer>
        {showImage && <Image src={logo.url} width={logo.width} height={logo.height} />}
        <SkillItemLabel>{name}</SkillItemLabel>
        <SkillItemText>使用経験年数: {yearsOfUseNumber}年</SkillItemText>
      </SkillItemContainer>
    </Card>
  );
};

export default SkillItem;
