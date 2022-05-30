import { ReactNode } from "react";
import { NextPage } from "next";
import styled from "styled-components";

import { FixedSizes } from "@/consts/size";

import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: ${FixedSizes[24]};
`;

const LayoutMain = styled.main`
  padding: 0 ${FixedSizes[24]};
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
