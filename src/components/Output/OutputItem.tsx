import { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";

import { Output } from "@/types";
import { SkyColors, SlateColors } from "@/consts/color";
import { FixedSizes, FontSizes } from "@/consts/size";
import { getMonthsAndYears } from "@/utils/date-utils";

import Card from "@/components/Elements/Card";
import Button from "@/components/Elements/Button";
import BlankLinkText from "@/components/Elements/BlankLinkText";

export interface OutputItemProps {
  output: Output;
  onClick: (id: string) => void;
}

const OutputItemInner = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const OutputItemTitle = styled.h2`
  margin-top: ${FixedSizes[16]};
  color: ${SkyColors[500]};
  font-size: ${FontSizes.xl};
  font-weight: bold;
  order: 2;
`;

const OutputItemImage = styled.div`
  order: 1;
`;

const OutputItemPeriod = styled.p`
  margin-top: ${FixedSizes[12]};
  color: ${SlateColors[500]};
  font-size: ${FontSizes.sm};
  order: 3;
`;

const OutputItemLink = styled(BlankLinkText)`
  margin-top: ${FixedSizes[12]};
  order: 4;
`;

const OutputItemButtonContainer = styled.div`
  margin-top: ${FixedSizes[16]};
  order: 5;
`;

export const OutputItem: NextPage<OutputItemProps> = (props) => {
  const { id, title, image, pageUrl, startDate, endDate } = props.output;
  const startMonthsAndYears = getMonthsAndYears(startDate);
  const endMonthsAndYears = endDate.length > 0 ? getMonthsAndYears(endDate) : "継続中";
  const period = `${startMonthsAndYears}〜${endMonthsAndYears}`;

  return (
    <Card>
      <OutputItemInner>
        <OutputItemTitle>{title}</OutputItemTitle>
        <OutputItemImage>
          <Image src={image.url} width={768} height={432} objectFit='cover' />
        </OutputItemImage>
        <OutputItemPeriod>{period}</OutputItemPeriod>
        {pageUrl.length > 0 && <OutputItemLink siteUrl={pageUrl} color={SkyColors[700]} />}

        <OutputItemButtonContainer>
          <Button color='output' label='詳細を確認する' onClick={() => props.onClick(id)} />
        </OutputItemButtonContainer>
      </OutputItemInner>
    </Card>
  );
};

export default OutputItem;
