import { NextPage } from "next";
import styled from "styled-components";

import { FixedSizes } from "@/consts/size";
import Tag from "@/components/Elements/Tag";

export interface TagGroupProps {
  keyId: string;
  labels: string[];
}

const TagGroupContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${FixedSizes[12]};
`;

export const TagGroup: NextPage<TagGroupProps> = (props) => {
  const { keyId, labels } = props;

  return (
    <TagGroupContainer>
      {labels.map((label, i) => (
        <Tag key={`${keyId}-tag${i}`} label={label} />
      ))}
    </TagGroupContainer>
  );
};

export default TagGroup;
