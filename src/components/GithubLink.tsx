import React, { ReactNode } from "react";
import { NextPage } from "next";
import { classNames } from "@/utils/components";

import styles from "@/styles/components/GithubLink.module.scss";

interface Props {
  size: number;
  children?: ReactNode;
  className?: string;
}

const GithubLink: NextPage<Props> = (data) => {
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
      <img src="/github.svg" alt="Github" width={size} height={size} />
    </a>
  );
};

export default GithubLink;
