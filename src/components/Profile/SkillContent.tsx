import { NextPage } from "next";
import styled from "styled-components";

import { SkillData } from "@/types";
import { GreenColors, SlateColors } from "@/consts/color";
import { FixedSizes, VariableSizes, FontSizes } from "@/consts/size";
import Card from "@/components/Elements/Card";
import SkillItem from "@/components/Profile/SkillItem";

export interface SkillContentProps {
  data: SkillData;
}

const SkillContentLabel = styled.h2`
  color: ${GreenColors[600]};
  font-size: ${FontSizes["2xl"]};
  font-weight: bold;
  line-height: 1.3;

  &:not(:first-child) {
    margin-top: ${FixedSizes[20]};
  }
`;

const SkillContentText = styled.p`
  margin-top: ${FixedSizes[24]};
  line-height: 1.75;
  white-space: pre-wrap;
`;

const SkillContentContainer = styled.div`
  margin-top: ${FixedSizes[32]};
  padding: ${FixedSizes[24]};
  background-color: ${SlateColors[100]};
  border-radius: ${FixedSizes[4]};
  display: flex;
  flex-wrap: wrap;
  gap: ${FixedSizes[20]};
`;

const SkillItemContainer = styled.div`
  width: calc(${VariableSizes["1/4"]} - ${FixedSizes[16]});
`;

export const SkillContent: NextPage<SkillContentProps> = (props) => {
  const { label, body, skills } = props.data;

  return (
    <Card size='XL'>
      <section>
        <SkillContentLabel>{label}</SkillContentLabel>
        <SkillContentText>{body}</SkillContentText>
        {skills.length > 0 && (
          <SkillContentContainer>
            {skills.map((skill, i) => (
              <SkillItemContainer key={`skill${i}`}>
                <SkillItem skill={skill} />
              </SkillItemContainer>
            ))}
          </SkillContentContainer>
        )}
      </section>
    </Card>
  );
};

export default SkillContent;
