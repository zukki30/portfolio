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

interface Props {
  data: CurriculumVitaeResContent[];
}

const URL = API_URLS.CURRICULUM_VITAE;

const CurriculumVitaePage: NextPage<Props> = (data) => {
  const urlData = API_URL_DATAS[URL];
  const curriculumVitaes = data.data.map((d) => CurriculumVitae.build(d));

  console.log(curriculumVitaes);
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

      <div className="curriculumVitaes__container">
        <nav className="curriculumVitaes__navi">
          <ol className="curriculumVitaes__inner">
            {curriculumVitaes.map((curriculumVitae) => (
              <li key={curriculumVitae.id} className="curriculumVitaes__item">
                {curriculumVitae.showPeriod && (
                  <div className="curriculumVitaes__period">
                    {curriculumVitae.period}
                  </div>
                )}
                <div className="curriculumVitaes__name">
                  {curriculumVitae.name}
                </div>
              </li>
            ))}
          </ol>
        </nav>

        <div className="curriculumVitaes__body">
          {curriculumVitaes.map((curriculumVitae) => (
            <CurriculumVitaeContent
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
