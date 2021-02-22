import React from "react";
import Link from "next/link";

import { useRouter } from "next/router";
import { AppProps } from "next/app";

import { API_URLS, API_URL_DATAS } from "@/const/Api";

import PageHead from "@/components/PageHead";
import Logo from "@/components/Logo";
import GithubLink from "@/components/GithubLink";

import "@/styles/globals.scss";
import styles from "@/styles/pages/App.module.scss";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const isHome = router.pathname === "/";

  const appPageClass = isHome ? styles["app--home"] : styles["app--default"];
  const appClass = styles.app + " " + appPageClass;

  const appBodyClass = !isHome ? styles["app__body"] : "";

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
    <div className={appClass}>
      <PageHead description={"説明"} />

      <header className={styles.app__haeder}>
        <div className={styles.app__haederInner}>
          <Logo isHome={isHome} className={styles.app__logo} />
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

      <main className={appBodyClass}>
        <Component {...pageProps} />
      </main>

      <footer className={styles.app__footer}>
        <small className={styles.app__copyRight}>
          © 2020 {process.env.SITE_NAME}.
        </small>
      </footer>
    </div>
  );
};

export default App;
