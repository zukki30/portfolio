import { NextPage } from "next";

import { GreenColors, TealColors, SkyColors } from "@/consts/color";

export const Logo: NextPage = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 127.22 17.31'>
      <defs>
        <linearGradient id='Gradient1'>
          <stop offset='0%' stopColor={GreenColors[500]} />
          <stop offset='50%' stopColor={TealColors[500]} />
          <stop offset='100%' stopColor={SkyColors[500]} />
        </linearGradient>
        <text id='label'>
          <tspan font-weight='bold'>Zukki portfolio</tspan>
        </text>
      </defs>

      <use href='#label' x='0' y='16' fill='url(#Gradient1)' />
    </svg>
  );
};

export default Logo;
