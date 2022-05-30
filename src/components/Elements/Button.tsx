import { NextPage } from "next";
import styled from "styled-components";

import { WhiteColor, SlateColors, GreenColors, TealColors, SkyColors } from "@/consts/color";
import { FixedSizes, BasicSizeType, FontSizes } from "@/consts/size";

type ButtonSizeProps = {
  borderRadius: string;
  padding: string;
  height: string;
  fontSize: string;
};

const ButtonSizeS: ButtonSizeProps = {
  borderRadius: FixedSizes[4],
  padding: FixedSizes[12],
  height: FixedSizes[40],
  fontSize: FontSizes.sm,
};

const ButtonSizeM: ButtonSizeProps = {
  borderRadius: FixedSizes[8],
  padding: FixedSizes[16],
  height: FixedSizes[44],
  fontSize: FontSizes.base,
};

const ButtonSizeL: ButtonSizeProps = {
  borderRadius: FixedSizes[12],
  padding: FixedSizes[20],
  height: FixedSizes[48],
  fontSize: FontSizes.lg,
};

const ButtonSizeType = {
  S: ButtonSizeS,
  M: ButtonSizeM,
  L: ButtonSizeL,
} as const;

type ButtonSizeType = typeof ButtonSizeType[keyof typeof ButtonSizeType];

type ButtonColor = "profile" | "works" | "output" | "secondary";

export interface ButtonProps {
  label: string;
  size?: BasicSizeType;
  color?: ButtonColor;
  disabled?: boolean;
  onClick?: () => void;
}

const DisabledBgColor = SlateColors[300];
const DisabledTextColor = SlateColors[500];

const ButtonContainer = styled.button<ButtonProps>`
  padding: ${(props) => (props.size !== undefined ? ButtonSizeType[props.size].padding : ButtonSizeType.M.padding)};
  min-width: ${FixedSizes[128]};
  height: ${(props) => (props.size !== undefined ? ButtonSizeType[props.size].height : ButtonSizeType.M.height)};
  border-radius: ${(props) =>
    props.size !== undefined ? ButtonSizeType[props.size].borderRadius : ButtonSizeType.M.borderRadius};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.disabled ? "text" : "pointer")};
  font-size: ${(props) => (props.size !== undefined ? ButtonSizeType[props.size].fontSize : ButtonSizeType.M.fontSize)};
  border: 1px solid;
  transition: border-color 0.3s ease, background-color 0.3s ease;
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

const ProfileButton = styled(ButtonContainer)<ButtonProps>`
  background-color: ${(props) => (props.disabled ? DisabledBgColor : GreenColors[600])};
  border-color: ${(props) => (props.disabled ? DisabledBgColor : GreenColors[600])};
  color: ${(props) => (props.disabled ? DisabledTextColor : WhiteColor)};

  &:hover {
    background-color: ${GreenColors[500]};
    border-color: ${GreenColors[500]};
  }
`;

const WorksButton = styled(ButtonContainer)<ButtonProps>`
  background-color: ${(props) => (props.disabled ? DisabledBgColor : TealColors[500])};
  border-color: ${(props) => (props.disabled ? DisabledBgColor : TealColors[500])};
  color: ${(props) => (props.disabled ? DisabledTextColor : WhiteColor)};

  &:hover {
    background-color: ${TealColors[400]};
    border-color: ${TealColors[400]};
  }
`;

const OutputButton = styled(ButtonContainer)<ButtonProps>`
  background-color: ${(props) => (props.disabled ? DisabledBgColor : SkyColors[500])};
  border-color: ${(props) => (props.disabled ? DisabledBgColor : SkyColors[500])};
  color: ${(props) => (props.disabled ? DisabledTextColor : WhiteColor)};

  &:hover {
    background-color: ${SkyColors[400]};
    border-color: ${SkyColors[400]};
  }
`;

const SecondaryButton = styled(ButtonContainer)<ButtonProps>`
  background-color: ${(props) => (props.disabled ? DisabledBgColor : WhiteColor)};
  border-color: ${(props) => (props.disabled ? DisabledBgColor : SlateColors[700])};
  color: ${(props) => (props.disabled ? DisabledTextColor : SlateColors[700])};

  &:hover {
    background-color: ${SlateColors[200]};
  }
`;

export const Button: NextPage<ButtonProps> = (props) => {
  const { color, label, disabled } = props;

  if (color === "profile") {
    return (
      <ProfileButton {...props} disabled={disabled}>
        {label}
      </ProfileButton>
    );
  } else if (color === "works") {
    return (
      <WorksButton {...props} disabled={disabled}>
        {label}
      </WorksButton>
    );
  } else if (color === "output") {
    return (
      <OutputButton {...props} disabled={disabled}>
        {label}
      </OutputButton>
    );
  } else if (color === "secondary") {
    return (
      <SecondaryButton {...props} disabled={disabled}>
        {label}
      </SecondaryButton>
    );
  } else {
    return (
      <SecondaryButton {...props} disabled={disabled}>
        {label}
      </SecondaryButton>
    );
  }
};

export default Button;
