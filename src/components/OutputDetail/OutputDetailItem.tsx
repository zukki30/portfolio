import { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";

import { Output } from "@/types";
import { SkyColors, SlateColors, WhiteColor } from "@/consts/color";
import { FixedSizes, FontSizes } from "@/consts/size";
import { getMonthsAndYears } from "@/utils/date-utils";

import Button from "@/components/Elements/Button";
import BlankLinkText from "@/components/Elements/BlankLinkText";
import DevEnvItem from "@/components/OutputDetail/DevEnvItem";

export interface OutputDetailItemProps {
  output: Output;
  onClose: () => void;
}

const OutputDetailItemInner = styled.section`
  display: flex;
  flex-direction: column;
`;

const OutputDetailItemTitle = styled.h2`
  color: ${SkyColors[500]};
  font-size: ${FontSizes["3xl"]};
  font-weight: bold;
  order: 1;
`;

const OutputDetailItemImage = styled.div`
  margin-top: ${FixedSizes[20]};
  order: 4;
`;

const OutputDetailItemPeriod = styled.p`
  margin-top: ${FixedSizes[16]};
  color: ${SlateColors[500]};
  font-size: ${FontSizes.sm};
  order: 2;
`;

const OutputDetailItemLink = styled(BlankLinkText)`
  margin-top: ${FixedSizes[16]};
  order: 3;
`;

const OutputDetailItemContent = styled.p`
  margin-top: ${FixedSizes[24]};
  white-space: pre-wrap;
  line-height: 1.5;
  order: 5;
`;

const OutputDetailIteDevEnvContainer = styled.div`
  margin-top: ${FixedSizes[36]};
  order: 6;
`;

const OutputDetailItemButtonContainer = styled.div`
  margin-top: ${FixedSizes[16]};
  display: flex;
  align-items: center;
  justify-content: center;
  order: 7;
`;

export const OutputDetailItem: NextPage<OutputDetailItemProps> = (props) => {
  const { title, image, pageUrl, startDate, endDate, content, frontEndInfo, backEndInfo } = props.output;
  const startMonthsAndYears = getMonthsAndYears(startDate);
  const endMonthsAndYears = endDate.length > 0 ? getMonthsAndYears(endDate) : "継続中";
  const period = `${startMonthsAndYears}〜${endMonthsAndYears}`;
  const showFrontEndInfo = frontEndInfo.content.length > 0 && frontEndInfo.skills.length > 0;
  const showBackEndInfo = backEndInfo.content.length > 0 && backEndInfo.skills.length > 0;

  return (
    <OutputDetailItemInner>
      <OutputDetailItemTitle>{title}</OutputDetailItemTitle>
      <OutputDetailItemImage>
        <Image src={image.url} width={image.width} height={image.height} objectFit='cover' />
      </OutputDetailItemImage>
      <OutputDetailItemPeriod>{period}</OutputDetailItemPeriod>
      {pageUrl.length > 0 && <OutputDetailItemLink siteUrl={pageUrl} color={SkyColors[700]} />}

      <OutputDetailItemContent>{content}</OutputDetailItemContent>

      {showFrontEndInfo && (
        <OutputDetailIteDevEnvContainer>
          <DevEnvItem label='フロントエンド環境' data={frontEndInfo} />
        </OutputDetailIteDevEnvContainer>
      )}

      {showBackEndInfo && (
        <OutputDetailIteDevEnvContainer>
          <DevEnvItem label='バックエンド環境' data={backEndInfo} />
        </OutputDetailIteDevEnvContainer>
      )}

      <OutputDetailItemButtonContainer>
        <Button color='output' size='L' label='閉じる' onClick={props.onClose} />
      </OutputDetailItemButtonContainer>
    </OutputDetailItemInner>
  );
};

export default OutputDetailItem;
