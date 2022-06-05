import { useRef, useEffect, ReactNode } from "react";
import { NextPage } from "next";
import styled from "styled-components";

import { VariableSizes } from "@/consts/size";

export type ScrollRevealProps = {
  children: ReactNode;
  move: string;
  delay: number;
};

const ScrollReavealContainer = styled.div`
  width: ${VariableSizes.full};
  height: ${VariableSizes.full};
`;

const ScrollReveal: NextPage<ScrollRevealProps> = (props) => {
  const { children, move, delay } = props;
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function animate() {
      if (sectionRef.current) {
        //Dynamic import
        const sr = (await import("scrollreveal")).default;

        sr().reveal(sectionRef.current, {
          delay: delay,
          opacity: 0,
          origin: move,
          distance: "0px",
          viewFactor: 0,
          scale: 0.7,
        });
      }
    }
    animate();
  }, [sectionRef, delay, move]);

  return <ScrollReavealContainer ref={sectionRef}>{children}</ScrollReavealContainer>;
};

export default ScrollReveal;
