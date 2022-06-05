import { NextPage } from "next";
import styled from "styled-components";

import { SlateColors } from "@/consts/color";
import { FixedSizes } from "@/consts/size";

export interface TagProps {
  label: string;
}

const TagContainer = styled.span`
  padding: 0 ${FixedSizes[12]};
  height: ${FixedSizes[24]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${SlateColors[200]};
  border-radius: ${FixedSizes[4]};
  color: ${SlateColors[500]};
  font-size: ${FixedSizes[12]};
`;

export const Tag: NextPage<TagProps> = (props) => {
  const { label } = props;

  return <TagContainer>{label}</TagContainer>;
};

export default Tag;
