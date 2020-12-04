import React from "react";
import Head from "next/head";
import Link from "next/link";

import { useRouter } from "next/router";
import { AppProps } from "next/app";

import { API_URLS, API_URL_DATAS } from "@/const/Api";

import Logo from "@/components/Logo";
import GithubLink from "@/components/GithubLink";

import "@/styles/globals.scss";
import styles from "@/styles/pages/App.module.scss";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const siteName = "Zukki portfolio";
  const isHome = router.pathname === "/";

  const bodyClass = isHome ? styles["app__body--home"] : styles.app__body;

  const NaviItem = (prop: { urlId: API_URLS }) => {
    const data = API_URL_DATAS[prop.urlId];
    const href = "/" + data.id;
    const name = data.name;

    let textClasses = styles.app__naviText;

    if (href === router.pathname) {
      textClasses += " " + styles["app__naviText--current"];
    }

    return (
      <li className={styles.app__naviItem}>
        <Link href={href}>
          <a className={textClasses}>{name}</a>
        </Link>
      </li>
    );
  };

  return (
    <div className={styles.app}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>{siteName}</title>
      </Head>

      <header className={styles.app__haeder}>
        <div className={styles.app__haederInner}>
          <Logo
            isHome={isHome}
            siteName={siteName}
            className={styles.app__logo}
          />
          <GithubLink size={35} />
        </div>

        {!isHome && (
          <nav className={styles.app__navi}>
            <ul className={styles.app__naviInner}>
              <NaviItem urlId={API_URLS.PROFILE} />
              <NaviItem urlId={API_URLS.CURRICULUM_VITAE} />
              <NaviItem urlId={API_URLS.OUTPUT} />
            </ul>
          </nav>
        )}
      </header>

      <main className={bodyClass}>
        <Component {...pageProps} />
      </main>

      <footer className={styles.app__footer}>
        <small className={styles.app__copyRight}>© 2020 {siteName}.</small>
      </footer>
    </div>
  );
};

export default App;
