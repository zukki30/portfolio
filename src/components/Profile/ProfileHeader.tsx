import { NextPage } from "next";
import styled from "styled-components";

import { SlateColors, GreenColors, WhiteColor } from "@/consts/color";
import { FixedSizes, FontSizes } from "@/consts/size";

const ProfileHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${FixedSizes[32]};
`;

const ProfileHeaderLabel = styled.div`
  flex: 1;
  color: ${SlateColors[700]};
  font-size: ${FontSizes.lg};
  font-weight: bold;
  line-height: 1.3;

  &:first-child {
    text-align: right;
  }
`;

const ProfileHeaderName = styled.span`
  color: ${GreenColors[600]};
`;

const ProfileHeaderLink = styled.a`
  color: ${GreenColors[700]};
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

const ProfileHeaderImage = styled.img`
  width: ${FixedSizes[208]};
  height: auto;
  border: 5px solid ${WhiteColor};
  border-radius: 50%;
  overflow: hidden;
`;

export const ProfileHeader: NextPage = () => {
  return (
    <ProfileHeaderContainer>
      <ProfileHeaderLabel>
        <ProfileHeaderName>kk-watanabe</ProfileHeaderName>
      </ProfileHeaderLabel>

      <ProfileHeaderImage
        src='https://avatars.githubusercontent.com/u/11853136?v=4'
        alt=''
        width={500}
        height={500}
        loading='lazy'
      />

      <ProfileHeaderLabel>
        Github
        <br />
        <ProfileHeaderLink href='https://github.com/kk-watanabe' target={"_blank"}>
          https://github.com/kk-watanabe
        </ProfileHeaderLink>
      </ProfileHeaderLabel>
    </ProfileHeaderContainer>
  );
};

export default ProfileHeader;
