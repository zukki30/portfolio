import React from "react";
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

interface Props {
  data: CurriculumVitaeResContent[];
}

const URL = API_URLS.CURRICULUM_VITAE;

const CurriculumVitaePage: NextPage<Props> = (data) => {
  const urlData = API_URL_DATAS[URL];
  const curriculumVitaes = data.data.map((d) => CurriculumVitae.build(d));

  return (
    <>
      <PageHead
        description={"説明"}
        image={"画像"}
        url={"URL"}
        title={urlData.name}
      />

      <MainContent>
        <MainHeadline text={urlData.name} />
      </MainContent>

      <div className={styles.curriculumVitae__container}>
        <nav className={styles.curriculumVitae__navi}>
          <ol className={styles.curriculumVitae__naviInner}>
            {curriculumVitaes.map((curriculumVitae) => (
              <li
                key={curriculumVitae.id}
                className={styles.curriculumVitae__naviItem}
              >
                {curriculumVitae.showPeriod && (
                  <div className={styles.curriculumVitae__naviPeriod}>
                    {curriculumVitae.period}
                  </div>
                )}
                <div className={styles.curriculumVitae__naviName}>
                  {curriculumVitae.name}
                </div>
              </li>
            ))}
          </ol>
        </nav>

        <div className={styles.curriculumVitae__body}>
          {curriculumVitaes.map((curriculumVitae) => (
            <CurriculumVitaeContent
              className={styles.curriculumVitae__content}
              key={curriculumVitae.id}
              curriculumVitae={curriculumVitae}
            />
          ))}
        </div>
      </div>
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
