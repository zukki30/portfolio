import { NextPage } from "next";
import styled from "styled-components";

import { OutputUpdate } from "@/types";
import { SkyColors, SlateColors, WhiteColor } from "@/consts/color";
import { FixedSizes, FontSizes } from "@/consts/size";

import Tag from "@/components/Elements/Tag";

export interface OutputBeforeInfoProps {
  data: OutputUpdate;
}

const OutputBeforeInfoContainer = styled.section`
  background-color: ${WhiteColor};
  border-radius: ${FixedSizes[8]};
`;

const OutputBeforeInfoTitle = styled.h4`
  padding: ${FixedSizes[14]} ${FixedSizes[16]} ${FixedSizes[12]};
  border-bottom: 1px solid ${SlateColors[200]};
  color: ${SkyColors[800]};
  line-height: 1.3;
`;

const OutputBeforeInfoBody = styled.div`
  padding: ${FixedSizes[14]} ${FixedSizes[16]} ${FixedSizes[12]};
`;

const OutputBeforeInfoText = styled.p`
  font-size: ${FontSizes.sm};
  white-space: pre-wrap;
  line-height: 1.5;
`;

const OutputBeforeInfoSkills = styled.div`
  margin-top: ${FixedSizes[16]};
  display: flex;
  flex-wrap: wrap;
  gap: ${FixedSizes[12]};
`;

export const OutputBeforeInfo: NextPage<OutputBeforeInfoProps> = (props) => {
  const { title, content, skills } = props.data;

  return (
    <OutputBeforeInfoContainer>
      <OutputBeforeInfoTitle>{title}</OutputBeforeInfoTitle>
      <OutputBeforeInfoBody>
        <OutputBeforeInfoText>{content}</OutputBeforeInfoText>

        <OutputBeforeInfoSkills>
          {skills.map((s, i) => (
            <Tag key={`skill${i}`} label={s} />
          ))}
        </OutputBeforeInfoSkills>
      </OutputBeforeInfoBody>
    </OutputBeforeInfoContainer>
  );
};

export default OutputBeforeInfo;
