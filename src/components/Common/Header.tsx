import { NextPage } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";

import { WhiteColor } from "@/consts/color";
import { FixedSizes, VariableSizes, BoxShadowSizes } from "@/consts/size";
import { Router } from "@/consts/router";

import Logo from "@/components/Common/Logo";
import Navi from "@/components/Common/Navi";

const HeaderContainer = styled.header`
  padding: 0 ${FixedSizes[16]};
  height: ${FixedSizes[56]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${WhiteColor};
  box-shadow: ${BoxShadowSizes.base};
`;

const HeaderLogo = styled.div`
  width: ${FixedSizes[224]};

  svg {
    width: ${VariableSizes.full};
    height: "auto";
  }
`;

const HeaderTopLogo = HeaderLogo.withComponent("h1");

const HeaderLogoContainer = ({ isHome }: { isHome: boolean }) => {
  if (isHome) {
    return (
      <HeaderTopLogo>
        <Logo />
      </HeaderTopLogo>
    );
  } else {
    return (
      <HeaderLogo>
        <Logo />
      </HeaderLogo>
    );
  }
};

export const Header: NextPage = () => {
  const router = useRouter();

  return (
    <HeaderContainer>
      <HeaderLogoContainer isHome={Router.Profile.path === router.pathname} />
      <Navi path={router.pathname} />
    </HeaderContainer>
  );
};

export default Header;
