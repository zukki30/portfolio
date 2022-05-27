import React from "react";
import { useRouter } from "next/router";
import { AppProps } from "next/app";
import { API_URLS } from "@/const/Api";
import { SITE_NAME } from "@/const/site";
import NaviItem from "@/components/app/NaviItem";
import PageHead from "@/components/PageHead";
import Logo from "@/components/Logo";
import GithubLink from "@/components/GithubLink";

import "@/styles/globals.scss";
import styles from "@/styles/pages/App.module.scss";

export const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const isHome = router.pathname === "/";

  const appPageClass = isHome ? styles["app--home"] : styles["app--default"];
  const appClass = styles.app + " " + appPageClass;

  const appBodyClass = isHome ? "" : styles["app__body"];

  return (
    <div className={appClass}>
      <PageHead description={"ポートフォリオサイトです"} />

      <header className={styles.app__haeder}>
        <div className={styles.app__haederInner}>
          <Logo isHome={isHome} className={styles.app__logo} />
          <GithubLink size={35} />
        </div>

        {!isHome && (
          <nav className={styles.app__navi}>
            <ul className={styles.app__naviInner}>
              <NaviItem
                urlId={API_URLS.PROFILE}
                path={router.pathname}
                className={styles.app__naviItem}
              />
              <NaviItem
                urlId={API_URLS.CURRICULUM_VITAE}
                path={router.pathname}
                className={styles.app__naviItem}
              />
              <NaviItem
                urlId={API_URLS.OUTPUT}
                path={router.pathname}
                disabled={true}
                className={styles.app__naviItem}
              />
            </ul>
          </nav>
        )}
      </header>

      <main className={appBodyClass}>
        <Component {...pageProps} />
      </main>

      <footer className={styles.app__footer}>
        <small className={styles.app__copyRight}>© 2020 {SITE_NAME}.</small>
      </footer>
    </div>
  );
};

export default App;
