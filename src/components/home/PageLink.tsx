import React, { ReactNode } from "react";
import { NextPage } from "next";
import Link from "next/link";
import { API_URLS, API_URL_DATAS } from "@/const/Api";
import { classNames } from "@/utils/components";

import styles from "@/styles/components/home/PageLink.module.scss";

export interface Props {
  urlId: API_URLS;
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
}

export const PageLink: NextPage<Props> = (data) => {
  const parentClass = classNames(styles.pageLink, data.className);
  const ankerClass = styles.pageLink__link;
  const ankerClasses = data.disabled
    ? classNames(ankerClass, styles["pageLink__link--disabled"])
    : ankerClass;
  const apiUrlData = API_URL_DATAS[data.urlId];
  const id = apiUrlData.id;
  const name = apiUrlData.name;
  const href = `/${id}`;

  return (
    <li className={parentClass}>
      <Link href={href}>
        <a href={href} className={ankerClasses}>
          <svg
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            className={styles.pageLink__bg}
          >
            <circle
              cx="50%"
              cy="50%"
              r="30%"
              className={styles.pageLink__itemBg}
            />
          </svg>

          <div className={styles.pageLink__text}>
            <span className={styles.pageLink__mainText}>{name}</span>
            <span className={styles.pageLink__subText}>{id.toUpperCase()}</span>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PageLink;
