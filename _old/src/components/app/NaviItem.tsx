import React, { ReactNode } from "react";
import { NextPage } from "next";
import Link from "next/link";
import { API_URLS, API_URL_DATAS } from "@/const/Api";
import { classNames } from "@/utils/components";

import styles from "@/styles/components/app/NaviItem.module.scss";

export interface Props {
  urlId: API_URLS;
  path: string;
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
}

export const NaviItem: NextPage<Props> = (data) => {
  const url = API_URL_DATAS[data.urlId];
  const href = "/" + url.id;
  const name = url.name;
  const parentClass = classNames(styles.naviItem, data.className);
  const textClass = styles.naviItem__text;
  let textClasses = textClass;

  if (data.disabled) {
    textClasses = classNames(textClass, styles["naviItem__text--disabled"]);
  } else if (href === data.path) {
    textClasses = classNames(textClass, styles["naviItem__text--current"]);
  }

  return (
    <li className={parentClass}>
      <Link href={href}>
        <a href={href} className={textClasses}>
          {name}
        </a>
      </Link>
    </li>
  );
};

export default NaviItem;
