import { NextPage } from "next";
import styled from "styled-components";

import { Work } from "@/types";
import { SlateColors, TealColors, EmeraldColors, WhiteColor } from "@/consts/color";
import { FixedSizes, VariableSizes, FontSizes } from "@/consts/size";
import { getMonthsAndYears } from "@/utils/date-utils";

import ProjectItem from "@/components/Works/ProjectItem";

export interface WorkItemProps {
  work: Work;
}

const WorkItemContainer = styled.section`
  position: relative;
  border-radius: ${FixedSizes[16]};
  padding: ${FixedSizes[32]};
  padding-top: ${FixedSizes[48]};
  background-color: ${WhiteColor};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

type TypeProps = {
  type: string;
};

const WorkItemName = styled.h3<TypeProps>`
  color: ${(props) => (props.type === "正社員" ? TealColors[500] : EmeraldColors[500])};
  font-size: ${FontSizes["3xl"]};
  font-weight: bold;
  order: 1;
`;

const WorkItemType = styled.p<TypeProps>`
  padding: ${FixedSizes[12]} ${FixedSizes[24]} ${FixedSizes[12]} ${FixedSizes[48]};
  position: absolute;
  top: -${FixedSizes[16]};
  left: -${FixedSizes[44]};
  width: ${FixedSizes[56]};
  background-color: ${(props) => (props.type === "正社員" ? TealColors[500] : EmeraldColors[500])};
  color: ${WhiteColor};
  font-size: ${FontSizes.sm};
`;

const WorkItemPeriod = styled.p`
  margin-top: ${FixedSizes[24]};
  color: ${SlateColors[400]};
  font-size: ${FontSizes.sm};
  order: 2;
`;

const WorkItemContent = styled.p`
  margin-top: ${FixedSizes[24]};
  order: 3;
  white-space: pre-wrap;
  line-height: 1.5;
`;

const WorkItemProjectContainer = styled.div`
  margin-top: ${FixedSizes[24]};
  width: ${VariableSizes.full};
  display: flex;
  flex-direction: column;
  gap: ${FixedSizes[24]};
  order: 4;
`;

export const WorkItem: NextPage<WorkItemProps> = (props) => {
  const { id, type, name, startDate, endDate, contents, projects } = props.work;
  const startMonthsAndYears = getMonthsAndYears(startDate);
  const endMonthsAndYears = endDate.length > 0 ? getMonthsAndYears(endDate) : "在籍中";
  const period = `${startMonthsAndYears}〜${endMonthsAndYears}`;

  return (
    <WorkItemContainer>
      <WorkItemName type={type}>{name}</WorkItemName>
      <WorkItemType type={type}>{type}</WorkItemType>
      <WorkItemPeriod>{period}</WorkItemPeriod>
      <WorkItemContent>{contents}</WorkItemContent>

      {projects.length > 0 && (
        <WorkItemProjectContainer>
          {projects.map((p, i) => (
            <ProjectItem key={`${id}-project${i}`} project={p} type={type} />
          ))}
        </WorkItemProjectContainer>
      )}
    </WorkItemContainer>
  );
};

export default WorkItem;
