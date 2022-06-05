import { ReactNode } from "react";
import { NextPage } from "next";
import styled, { keyframes } from "styled-components";

import { OverlayColor, WhiteColor, SlateColors } from "@/consts/color";
import { FixedSizes, ContentSizes, VariableSizes, BoxShadowSizes } from "@/consts/size";

export interface ModalProps {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}

const OverlayFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  height: 100%;
  background-color: ${OverlayColor};
  animation: ${OverlayFadeIn} 0.3s ease 1;
`;

const ContainerFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.7) translate(-${VariableSizes["1/2"]}, -${VariableSizes["1/2"]});
  }
  100% {
    opacity: 1;
    transform: scale(1) translate(-${VariableSizes["1/2"]}, -${VariableSizes["1/2"]});
  }
`;

const ModalContainer = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: ${VariableSizes["1/2"]};
  left: ${VariableSizes["1/2"]};
  z-index: 51;
  padding: 0 ${FixedSizes[20]};
  max-width: ${ContentSizes.lg};
  width: ${VariableSizes.full};
  height: 90vh;
  min-height: ${FixedSizes[112]};
  transform: translate(-${VariableSizes["1/2"]}, -${VariableSizes["1/2"]});
  animation: ${ContainerFadeIn} 0.3s ease 1;
`;

const ModalContent = styled.div`
  box-sizing: border-box;
  padding: ${FixedSizes[36]};
  height: ${VariableSizes.full};
  background-color: ${WhiteColor};
  border-radius: ${FixedSizes[12]};
  box-shadow: ${BoxShadowSizes.lg};
`;

const ModalInner = styled.div`
  height: ${VariableSizes.full};
  overflow-y: auto;
  overflow-x: hidden;
`;

const CloseButton = styled.button`
  position: absolute;
  top: ${FixedSizes[16]};
  right: ${FixedSizes[48]};
  width: ${FixedSizes[48]};
  height: ${FixedSizes[48]};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${WhiteColor};
  border: none;
  border-radius: 50%;
  appearance: none;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${SlateColors[100]};
  }
`;

const CloseButtonInner = styled.span`
  position: relative;
  width: ${FixedSizes[20]};
  height: ${FixedSizes[20]};
  transform: rotate(45deg);

  &::before {
    margin-top: -${FixedSizes[1]};
    position: absolute;
    top: 50%;
    left: 0;
    width: 19px;
    height: ${FixedSizes[1]};
    background-color: ${SlateColors[500]};
    content: "";
  }

  &::after {
    margin-left: -${FixedSizes[1]};
    position: absolute;
    top: 0;
    left: 50%;
    width: ${FixedSizes[1]};
    height: 19px;
    background-color: ${SlateColors[500]};
    display: block;
    content: "";
  }
`;

export const Modal: NextPage<ModalProps> = (props) => {
  const { children, open, onClose } = props;

  return (
    <>
      {open && (
        <>
          <Overlay onClick={onClose} />
          <ModalContainer>
            <ModalContent>
              <ModalInner>{children}</ModalInner>

              <CloseButton onClick={onClose}>
                <CloseButtonInner />
              </CloseButton>
            </ModalContent>
          </ModalContainer>
        </>
      )}
    </>
  );
};

export default Modal;
