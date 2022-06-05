import { NextPage } from "next";
import styled from "styled-components";

import { DevEnv } from "@/types";
import { SkyColors, SlateColors } from "@/consts/color";
import { FixedSizes, FontSizes } from "@/consts/size";

import BlankLinkText from "@/components/Elements/BlankLinkText";
import TagGroup from "@/components/Elements/TagGroup";
import OutputBeforeInfo from "@/components/OutputDetail/OutputBeforeInfo";

export interface DevEnvItemProps {
  label: string;
  data: DevEnv;
}

const DevEnvItemContainer = styled.section`
  padding: ${FixedSizes[16]};
  background-color: ${SlateColors[100]};
  border-radius: ${FixedSizes[12]};
`;

const DevEnvItemTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: ${FixedSizes[12]};
  color: ${SlateColors[600]};
  font-size: ${FontSizes.lg};
  font-weight: bold;

  &::before {
    width: ${FixedSizes[16]};
    height: ${FixedSizes[4]};
    background-color: ${SkyColors[500]};
    display: block;
    content: "";
  }
`;

const DevEnvLink = styled(BlankLinkText)`
  margin-top: ${FixedSizes[16]};
`;

const DevEnvContent = styled.p`
  margin: ${FixedSizes[20]} 0;
  white-space: pre-wrap;
  line-height: 1.5;
`;

const DevEnvUpdates = styled.section`
  margin-top: ${FixedSizes[32]};
`;

const DevEnvUpdatesTitle = styled.h4`
  color: ${SkyColors[500]};
  font-weight: bold;
`;

const DevEnvUpdatesItem = styled.div`
  margin-left: ${FixedSizes[16]};
  padding: ${FixedSizes[8]} 0 ${FixedSizes[8]} ${FixedSizes[16]};
  border-left: ${FixedSizes[4]} solid ${SlateColors[200]};

  &:not(:first-child) {
    margin-top: ${FixedSizes[16]};
  }
`;

export const DevEnvItem: NextPage<DevEnvItemProps> = (props) => {
  const label = props.label;
  const { repositoryUrl, content, skills, beforeUpdates } = props.data;

  return (
    <DevEnvItemContainer>
      <DevEnvItemTitle>{label}</DevEnvItemTitle>
      {repositoryUrl.length > 0 && <DevEnvLink siteUrl={repositoryUrl} color={SkyColors[700]} />}
      <DevEnvContent>{content}</DevEnvContent>
      <TagGroup keyId={`${label}-skill`} labels={skills} />

      {beforeUpdates.length > 0 && (
        <DevEnvUpdates>
          <DevEnvUpdatesTitle>以前の更新</DevEnvUpdatesTitle>

          {beforeUpdates.map((u, i) => (
            <DevEnvUpdatesItem key={`${label}-update${i}`}>
              <OutputBeforeInfo data={u} />
            </DevEnvUpdatesItem>
          ))}
        </DevEnvUpdates>
      )}
    </DevEnvItemContainer>
  );
};

export default DevEnvItem;
