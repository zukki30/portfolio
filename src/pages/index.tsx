import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import { API_URLS, API_URL_DATAS } from "@/const/Api";
import styles from "@/styles/pages/Home.module.scss";

const Home: NextPage = () => {
  const NaviItem = (prop: { urlId: API_URLS }) => {
    const data = API_URL_DATAS[prop.urlId];
    const id = data.id;
    const name = data.name;

    return (
      <li className={styles.home__item}>
        <Link href={"/" + id}>
          <a className={styles.home__itemInner}>
            <span className={styles.home__text}>{name}</span>
            <span className={styles.home__subText}>{id.toUpperCase()}</span>
          </a>
        </Link>
      </li>
    );
  };

  return (
    <>
      <div className={styles.home}>
        <ul className={styles.home__navi}>
          <NaviItem urlId={API_URLS.PROFILE} />
          <NaviItem urlId={API_URLS.CURRICULUM_VITAE} />
          <NaviItem urlId={API_URLS.OUTPUT} />
        </ul>
      </div>
    </>
  );
};

export default Home;
