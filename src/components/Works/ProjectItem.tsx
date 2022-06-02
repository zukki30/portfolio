import { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import dompurify from "dompurify";

import { Project } from "@/types";
import { SlateColors, GreenColors, WhiteColor } from "@/consts/color";
import { FixedSizes, FontSizes } from "@/consts/size";
import { getMonthsAndYears } from "@/utils/date-utils";

import Tag from "@/components/Elements/Tag";

export interface ProjectItemProps {
  project: Project;
}

const sanitizer = dompurify.sanitize;

const ProjectItemContainer = styled.section`
  padding: ${FixedSizes[36]};
  background-color: ${SlateColors[100]};
  border-radius: ${FixedSizes[12]};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ProjectItemTitle = styled.h3`
  margin-top: ${FixedSizes[20]};
  color: ${GreenColors[600]};
  font-size: ${FontSizes["2xl"]};
  font-weight: bold;
  order: 2;
`;

const ProjectItemPeriod = styled.p`
  padding: ${FixedSizes[8]} ${FixedSizes[12]};
  background-color: ${GreenColors[600]};
  order: 1;
  color: ${WhiteColor};
  font-size: ${FontSizes.xs};
`;

const ProjectItemLink = styled.p`
  margin-top: ${FixedSizes[16]};
  order: 3;

  &::before {
    margin-right: ${FixedSizes[12]};
    content: "URL :";
  }

  a {
    color: ${GreenColors[900]};
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`;

const ProjectItemInfo = styled.dl`
  margin-top: ${FixedSizes[36]};
  order: 4;
`;

const ProjectItemInfoTitle = styled.dt`
  color: ${GreenColors[700]};
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

const ProjectItemList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${FixedSizes[12]};
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
      <ProjectItemTitle>{title}</ProjectItemTitle>
      <ProjectItemPeriod>プロジェクト期間: {period}</ProjectItemPeriod>
      {siteUrl.length > 0 && (
        <ProjectItemLink>
          <a href={siteUrl} target='_blank'>
            {siteUrl}
          </a>
        </ProjectItemLink>
      )}

      <ProjectItemInfo>
        <ProjectItemInfoTitle>担当職種</ProjectItemInfoTitle>
        <ProjectItemInfoDetail>{typeOfOccupation.join(", ")}</ProjectItemInfoDetail>

        <ProjectItemInfoTitle>チーム人数</ProjectItemInfoTitle>
        <ProjectItemInfoDetail>{numberOfTeams}人</ProjectItemInfoDetail>

        <ProjectItemInfoTitle>経験</ProjectItemInfoTitle>
        <ProjectItemInfoDetail>
          <ProjectItemList>
            {experiences.map((e, i) => (
              <Tag key={`experience${i}`} label={e} />
            ))}
          </ProjectItemList>
        </ProjectItemInfoDetail>

        <ProjectItemInfoTitle>使用スキル</ProjectItemInfoTitle>
        <ProjectItemInfoDetail>
          <ProjectItemList>
            {skills.map((s, i) => (
              <Tag key={`skill${i}`} label={s} />
            ))}
          </ProjectItemList>
        </ProjectItemInfoDetail>

        <ProjectItemInfoTitle>プロジェクト概要</ProjectItemInfoTitle>
        <ProjectItemInfoDetail>
          <ProjectItemContent
            dangerouslySetInnerHTML={{
              __html: sanitizer(content),
            }}
          />
        </ProjectItemInfoDetail>
      </ProjectItemInfo>
    </ProjectItemContainer>
  );
};

export default ProjectItem;
