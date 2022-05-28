import { NextPage } from "next";
import styled from "styled-components";

import { DefaultGradient, WhiteColor } from "@/consts/color";
import { FixedSizes, FontSizes } from "@/consts/size";

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${FixedSizes[44]};
  background: ${DefaultGradient};
`;

const CopyRight = styled.small`
  color: ${WhiteColor};
  font-size: ${FontSizes.sm};
`;

export const Footer: NextPage = () => {
  return (
    <FooterContainer>
      <CopyRight>© 2020 Zukki portfolio.</CopyRight>
    </FooterContainer>
  );
};

export default Footer;
