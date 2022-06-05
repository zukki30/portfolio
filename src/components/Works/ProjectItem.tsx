import { NextPage } from "next";
import styled from "styled-components";
import sanitizeHtml from "sanitize-html";

import { Project } from "@/types";
import { SlateColors, TealColors, EmeraldColors, WhiteColor } from "@/consts/color";
import { FixedSizes, FontSizes } from "@/consts/size";
import { getMonthsAndYears } from "@/utils/date-utils";

import BlankLinkText from "@/components/Elements/BlankLinkText";
import TagGroup from "@/components/Elements/TagGroup";

export interface ProjectItemProps {
  project: Project;
  type: string;
}

const ProjectItemContainer = styled.section`
  padding: ${FixedSizes[24]};
  background-color: ${SlateColors[100]};
  border-radius: ${FixedSizes[12]};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ProjectItemTitle = styled.h4<ProjectItemProps>`
  margin-top: ${FixedSizes[20]};
  color: ${(props) => (props.type === "正社員" ? TealColors[500] : EmeraldColors[500])};
  font-size: ${FontSizes["2xl"]};
  font-weight: bold;
  order: 2;
`;

const ProjectItemPeriod = styled.p<ProjectItemProps>`
  padding: ${FixedSizes[8]} ${FixedSizes[12]};
  background-color: ${(props) => (props.type === "正社員" ? TealColors[500] : EmeraldColors[500])};
  order: 1;
  color: ${WhiteColor};
  font-size: ${FontSizes.xs};
`;

const ProjectItemLink = styled(BlankLinkText)`
  margin-top: ${FixedSizes[16]};
`;

const ProjectItemInfo = styled.dl`
  margin-top: ${FixedSizes[36]};
  order: 4;
`;

const ProjectItemInfoTitle = styled.dt<ProjectItemProps>`
  color: ${(props) => (props.type === "正社員" ? TealColors[500] : EmeraldColors[500])};
  font-size: ${FontSizes.lg};
  font-weight: bold;

  &:not(:first-child) {
    margin-top: ${FixedSizes[24]};
  }
`;

const ProjectItemInfoDetail = styled.dd`
  margin-top: ${FixedSizes[16]};
  line-height: 1.5;
`;

const ProjectItemContent = styled.div`
  > * {
    &:first-child {
      margin-top: ${FixedSizes[16]};
    }
  }
`;

export const ProjectItem: NextPage<ProjectItemProps> = (props) => {
  const { title, siteUrl, startDate, endDate, experiences, typeOfOccupation, numberOfTeams, skills, content } =
    props.project;
  const startMonthsAndYears = getMonthsAndYears(startDate);
  const endMonthsAndYears = getMonthsAndYears(endDate);
  const period = `${startMonthsAndYears}〜${endMonthsAndYears}`;

  return (
    <ProjectItemContainer>
      <ProjectItemTitle {...props}>{title}</ProjectItemTitle>
      <ProjectItemPeriod {...props}>プロジェクト期間: {period}</ProjectItemPeriod>
      {siteUrl.length > 0 && (
        <ProjectItemLink siteUrl={siteUrl} color={props.type === "正社員" ? TealColors[700] : EmeraldColors[700]} />
      )}

      <ProjectItemInfo>
        <ProjectItemInfoTitle {...props}>担当職種</ProjectItemInfoTitle>
        <ProjectItemInfoDetail>{typeOfOccupation.join(", ")}</ProjectItemInfoDetail>

        <ProjectItemInfoTitle {...props}>チーム人数</ProjectItemInfoTitle>
        <ProjectItemInfoDetail>{numberOfTeams}人</ProjectItemInfoDetail>

        <ProjectItemInfoTitle {...props}>経験</ProjectItemInfoTitle>
        <ProjectItemInfoDetail>
          <TagGroup keyId='experience' labels={experiences} />
        </ProjectItemInfoDetail>

        <ProjectItemInfoTitle {...props}>使用スキル</ProjectItemInfoTitle>
        <ProjectItemInfoDetail>
          <TagGroup keyId='skill' labels={skills} />
        </ProjectItemInfoDetail>

        <ProjectItemInfoTitle {...props}>プロジェクト概要</ProjectItemInfoTitle>
        <ProjectItemInfoDetail>
          <ProjectItemContent
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(content),
            }}
          />
        </ProjectItemInfoDetail>
      </ProjectItemInfo>
    </ProjectItemContainer>
  );
};

export default ProjectItem;
