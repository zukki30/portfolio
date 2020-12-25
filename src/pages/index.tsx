import React from "react";
import { NextPage } from "next";
import { API_URLS } from "@/const/Api";

import PageLink from "@/components/home/PageLink";

import styles from "@/styles/pages/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.home}>
        <ul className={styles.home__navi}>
          <PageLink urlId={API_URLS.PROFILE} />
          <PageLink urlId={API_URLS.CURRICULUM_VITAE} />
          <PageLink urlId={API_URLS.OUTPUT} />
        </ul>
      </div>
    </>
  );
};

export default Home;
