import { ReactNode } from "react";
import { NextPage } from "next";
import styled from "styled-components";

import { ContentSizes, ContentSizeType } from "@/consts/size";

export interface ContentProps {
  children: ReactNode;
  size: ContentSizeType;
}

const Container = styled.div<ContentProps>`
  margin-right: auto;
  margin-left: auto;
  max-width: ${(props) => ContentSizes[props.size]};
`;

export const Content: NextPage<ContentProps> = (props) => {
  const { children, size } = props;

  return <Container size={size}>{children}</Container>;
};

export default Content;
