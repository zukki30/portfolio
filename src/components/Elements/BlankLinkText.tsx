import { NextPage } from "next";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { FixedSizes } from "@/consts/size";

export interface BlankLinkTextProps {
  siteUrl: string;
  color: string;
}

const BlankLinkTextContainer = styled.div<BlankLinkTextProps>`
  display: flex;
  gap: ${FixedSizes[6]};
  align-items: center;
  order: 3;

  &::before {
    content: "URL";
  }

  a {
    color: ${(props) => props.color};
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`;

export const BlankLinkText: NextPage<BlankLinkTextProps> = (props) => {
  const { siteUrl, color } = props;

  return (
    <BlankLinkTextContainer {...props}>
      <a href={siteUrl} target='_blank'>
        {siteUrl}
      </a>

      <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='sm' />
    </BlankLinkTextContainer>
  );
};

export default BlankLinkText;
