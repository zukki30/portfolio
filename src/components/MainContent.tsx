import React, { ReactNode } from "react";
import { NextPage } from "next";

import { MAIN_CONTENT } from "@/const/ElementTag";

import { classNames } from "@/utils/components";

import styles from "@/styles/components/MainContent.module.scss";

export interface Props {
  element?: MAIN_CONTENT;
  children?: ReactNode;
  className?: string;
}

export const MainContent: NextPage<Props> = (data) => {
  const parentClass = classNames(styles.mainContent, data.className);
  const Tag = data.element ? data.element : MAIN_CONTENT.Div;

  return <Tag className={parentClass}>{data.children}</Tag>;
};

export default MainContent;
