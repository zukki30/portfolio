import { ReactNode } from "react";
import { NextPage } from "next";
import styled from "styled-components";

import { SlateColors } from "@/consts/color";
import { FixedSizes } from "@/consts/size";

import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";

const LayoutContainer = styled.div`
  min-height: 100vh;
  background-color: ${SlateColors[100]};
  display: flex;
  flex-direction: column;
`;

const LayoutMain = styled.main`
  padding: ${FixedSizes[24]} ${FixedSizes[24]} ${FixedSizes[128]};
  flex: 1;
`;

export interface LayoutProps {
  children?: ReactNode;
}

export const Layout: NextPage<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <LayoutContainer>
      <Header />

      <LayoutMain>{children}</LayoutMain>

      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
