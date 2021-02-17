import React, { ReactNode } from "react";
import { NextPage } from "next";

import { HEADLINE_LEVEL } from "@/const/ElementTag";

import { classNames } from "@/utils/components";

import styles from "@/styles/components/MainHeadline.module.scss";

export interface Props {
  text: string;
  level?: HEADLINE_LEVEL;
  children?: ReactNode;
  className?: string;
}

export const MainHeadline: NextPage<Props> = (data) => {
  const parentClass = classNames(styles.mainHeadline, data.className);
  const Tag = data.level ? data.level : HEADLINE_LEVEL.Level1;

  return <Tag className={parentClass}>{data.text}</Tag>;
};

export default MainHeadline;
