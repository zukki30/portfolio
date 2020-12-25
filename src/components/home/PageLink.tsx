import React, { ReactNode } from "react";
import { NextPage } from "next";
import Link from "next/link";
import { API_URLS, API_URL_DATAS } from "@/const/Api";

import styles from "@/styles/components/home/PageLink.module.scss";

interface Props {
  urlId: API_URLS;
  children?: ReactNode;
  className?: string;
}

const PageLink: NextPage<Props> = (data) => {
  const apiUrlData = API_URL_DATAS[data.urlId];
  const id = apiUrlData.id;
  const name = apiUrlData.name;

  return (
    <li className={styles.pageLink__item}>
      <Link href={"/" + id}>
        <a className={styles.pageLink__link}>
          <svg
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
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
