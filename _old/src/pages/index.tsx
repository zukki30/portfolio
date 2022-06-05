import React from "react";
import { NextPage } from "next";
import { API_URLS } from "@/const/Api";

import PageLink from "@/components/home/PageLink";

import styles from "@/styles/pages/Home.module.scss";

export const Home: NextPage = () => {
  return (
    <>
      <div className={styles.home}>
        <ul className={styles.home__navi}>
          <PageLink
            urlId={API_URLS.PROFILE}
            className={styles.home__naviItem}
          />
          <PageLink
            urlId={API_URLS.CURRICULUM_VITAE}
            className={styles.home__naviItem}
          />
          <PageLink
            urlId={API_URLS.OUTPUT}
            disabled={true}
            className={styles.home__naviItem}
          />
        </ul>
      </div>
    </>
  );
};

export default Home;
