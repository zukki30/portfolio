import React, { ReactNode } from "react";
import { NextPage } from "next";
import { classNames } from "@/utils/components";
import GithubIcon from "@/img/github.svg";

import styles from "@/styles/components/GithubLink.module.scss";

export interface Props {
  size: number;
  children?: ReactNode;
  className?: string;
}

export const GithubLink: NextPage<Props> = (data) => {
  const parentClass = classNames(styles.githubLink, data.className);
  const size = data.size;
  const style = {
    width: size + "px",
    height: size + "px",
  };

  return (
    <a
      className={parentClass}
      href="https://github.com/kk-watanabe"
      target="_blank"
      rel="noopener noreferrer"
      style={style}
    >
      <GithubIcon />
    </a>
  );
};

export default GithubLink;
