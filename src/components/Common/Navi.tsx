import { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";

import { PageColors } from "@/consts/color";
import { FixedSizes } from "@/consts/size";
import { Router } from "@/consts/router";

export interface NaviProps {
  path: string;
}

const NaviContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: ${FixedSizes[12]};
`;

interface NaviLinkBaseProps {
  current: boolean;
}

const NaviLinkBase = styled.a<NaviLinkBaseProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${FixedSizes[112]};
  height: ${FixedSizes[56]};
  border-radius: ${FixedSizes[2]};
  font-weight: bold;
  cursor: pointer;
  overflow: hidden;
  pointer-events: ${(props) => (props.current ? "none" : "auto")};

  &::after {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: ${FixedSizes[112]};
    height: ${FixedSizes[4]};
    background-color: #111;
    border-radius: ${FixedSizes[4]};
    content: "";
    transform: ${(props) => (props.current ? "translate(-50%, 0) scale(1)" : "translate(-50%, 100%) scale(0.8)")};
    transition: transform 0.3s ease;
  }

  &:hover {
    &::after {
      transform: translate(-50%, 0) scale(1);
    }
  }
`;

const ProfileNaviLink = styled(NaviLinkBase)`
  color: ${PageColors.Profile[500]};

  &::after {
    background-color: ${PageColors.Profile[500]};
  }
`;

const WorksNaviLink = styled(NaviLinkBase)`
  color: ${PageColors.Works[500]};

  &::after {
    background-color: ${PageColors.Works[500]};
  }
`;

const OutputNaviLink = styled(NaviLinkBase)`
  color: ${PageColors.Output[500]};

  &::after {
    background-color: ${PageColors.Output[500]};
  }
`;

export const Navi: NextPage<NaviProps> = (props) => {
  const { path } = props;

  return (
    <NaviContainer>
      <li>
        <Link href={Router.Profile.path}>
          <ProfileNaviLink current={Router.Profile.path === path}>{Router.Profile.id}</ProfileNaviLink>
        </Link>
      </li>
      <li>
        <Link href={Router.Works.path}>
          <WorksNaviLink current={Router.Works.path === path}>{Router.Works.id}</WorksNaviLink>
        </Link>
      </li>
      <li>
        <Link href={Router.Output.path}>
          <OutputNaviLink current={Router.Output.path === path}>{Router.Output.id}</OutputNaviLink>
        </Link>
      </li>
    </NaviContainer>
  );
};

export default Navi;
