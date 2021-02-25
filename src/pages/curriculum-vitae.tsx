import React, { useState, useRef, useEffect } from "react";
import { NextPage } from "next";
import { API_URLS, API_URL_DATAS } from "@/const/Api";
import {
  getApiData,
  CurriculumVitaeRes,
  CurriculumVitaeResContent,
} from "@/utils/api";
import { CurriculumVitae } from "@/models/CurriculumVitae";

import PageHead from "@/components/PageHead";
import MainHeadline from "@/components/MainHeadline";
import MainContent from "@/components/MainContent";
import CurriculumVitaeContent from "@/components/curriculum-vitae/CurriculumVitaeContent";

import styles from "@/styles/pages/CurriculumVitae.module.scss";

export interface Props {
  data: CurriculumVitaeResContent[];
}

type curriculumVitaeData = {
  id: string;
  ref: React.RefObject<HTMLDivElement>;
  data: CurriculumVitae;
};

const URL = API_URLS.CURRICULUM_VITAE;

export const CurriculumVitaePage: NextPage<Props> = (data) => {
  const urlData = API_URL_DATAS[URL];
  const curriculumVitaes: curriculumVitaeData[] = data.data.map((d, i) => {
    return {
      id: `curriculumVitae${i}`,
      ref: useRef<HTMLDivElement>(null),
      data: CurriculumVitae.build(d),
    };
  });

  const [
    currentCurriculumVitaeId,
    setCurrentCurriculumVitaeId,
  ] = useState<string>("curriculumVitae0");

  const naviItemClick = (data: curriculumVitaeData) => {
    setCurrentCurriculumVitaeId(data.id);

    const current = data.ref.current;

    if (current !== null) {
      current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getNaviItemClass = (id: string): string => {
    const naviItemClass = styles.curriculumVitae__naviItem;

    return currentCurriculumVitaeId === id
      ? `${naviItemClass} ${styles["curriculumVitae__naviItem--current"]}`
      : naviItemClass;
  };

  const onScroll = () => {
    const scrollTop = window.scrollY;
    const curriculumVitae = curriculumVitaes
      .filter((v) => {
        const current = v.ref.current;

        if (current !== null && scrollTop >= current.offsetTop) {
          return v;
        }
      })
      .pop();

    if (curriculumVitae !== undefined) {
      setCurrentCurriculumVitaeId(curriculumVitae.id);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <>
      <PageHead description={"職務経歴書ページです"} title={urlData.name} />

      <MainContent>
        <MainHeadline text={urlData.name} />

        <div className={styles.curriculumVitae__container}>
          <nav className={styles.curriculumVitae__navi}>
            <ol className={styles.curriculumVitae__naviInner}>
              {curriculumVitaes.map((curriculumVitae) => (
                <li
                  key={curriculumVitae.id}
                  className={getNaviItemClass(curriculumVitae.id)}
                  onClick={() => naviItemClick(curriculumVitae)}
                >
                  {curriculumVitae.data.showPeriod && (
                    <div className={styles.curriculumVitae__naviPeriod}>
                      {curriculumVitae.data.period}
                    </div>
                  )}
                  <div className={styles.curriculumVitae__naviName}>
                    {curriculumVitae.data.name}
                  </div>
                </li>
              ))}
            </ol>
          </nav>

          <div className={styles.curriculumVitae__body}>
            {curriculumVitaes.map((curriculumVitae) => (
              <div
                key={curriculumVitae.id}
                id={curriculumVitae.id}
                ref={curriculumVitae.ref}
                className={styles.curriculumVitae__content}
              >
                <CurriculumVitaeContent
                  curriculumVitae={curriculumVitae.data}
                />
              </div>
            ))}
          </div>
        </div>
      </MainContent>
    </>
  );
};

export const getStaticProps = async () => {
  const data = (await getApiData(
    API_URLS.CURRICULUM_VITAE
  )) as CurriculumVitaeRes;

  return {
    props: {
      data: data.contents,
    },
  };
};

export default CurriculumVitaePage;
