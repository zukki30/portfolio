import { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";

import { Profile } from "@/types";
import { GreenColors } from "@/consts/color";
import { FixedSizes, FontSizes } from "@/consts/size";
import Card from "@/components/Elements/Card";

export interface ProfileItemProps {
  profile: Profile;
}

const ProfileItemContainer = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProfileItemImage = styled.div`
  border-radius: ${FixedSizes[8]};
  overflow: hidden;
`;

const ProfileItemLabel = styled.h2`
  color: ${GreenColors[600]};
  font-size: ${FontSizes["xl"]};
  font-weight: bold;
  line-height: 1.3;

  &:not(:first-child) {
    margin-top: ${FixedSizes[20]};
  }
`;

const ProfileItemText = styled.p`
  margin-top: ${FixedSizes[16]};
  line-height: 1.5;
`;

export const ProfileItem: NextPage<ProfileItemProps> = (props) => {
  const { label, body, image } = props.profile;
  const showImage = image !== null;

  return (
    <Card size='L'>
      <ProfileItemContainer>
        {showImage && (
          <ProfileItemImage>
            <Image src={image.url} width={250} height={250} objectFit='contain' alt='' />
          </ProfileItemImage>
        )}
        <ProfileItemLabel>{label}</ProfileItemLabel>
        <ProfileItemText>{body}</ProfileItemText>
      </ProfileItemContainer>
    </Card>
  );
};

export default ProfileItem;
