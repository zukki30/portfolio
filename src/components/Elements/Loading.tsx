import { NextPage } from "next";
import styled, { keyframes } from "styled-components";

import { GreenColors, TealColors, SkyColors } from "@/consts/color";
import { FixedSizes } from "@/consts/size";

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingDotContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${FixedSizes[12]};
`;

const SlideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  16% {
    opacity: 0;
    transform: translateX(-100%);
  }
  32% {
    opacity: 1;
    transform: translateX(0);
  }
  68% {
    opacity: 1;
    transform: translateX(0);
  }
  84% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 0;
    transform: translateX(100%);
  }
`;

const LoadingDot = styled.div`
  width: ${FixedSizes[12]};
  height: ${FixedSizes[12]};
  border-radius: 50%;
  opacity: 0;
  transform: translateX(-100%);
  animation-name: ${SlideIn};
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
`;

const FirstLoadingDot = styled(LoadingDot)`
  background-color: ${GreenColors[500]};
`;

const SecondLoadingDot = styled(LoadingDot)`
  background-color: ${TealColors[500]};
  animation-delay: 0.5s;
`;

const ThaadLoadingDot = styled(LoadingDot)`
  background-color: ${SkyColors[500]};
  animation-delay: 1s;
`;

export const Loading: NextPage = () => {
  return (
    <LoadingOverlay>
      <LoadingDotContainer>
        <FirstLoadingDot />
        <SecondLoadingDot />
        <ThaadLoadingDot />
      </LoadingDotContainer>
    </LoadingOverlay>
  );
};

export default Loading;
