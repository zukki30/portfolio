import React from "react";
import Head from "next/head";
import { NextPage } from "next";
import { API_URLS } from "@/const/Api";
import {
  getApiData,
  CurriculumVitaeRes,
  CurriculumVitaeResContent,
} from "@/utils/api";
import { CurriculumVitae } from "@/models/CurriculumVitae";

interface Props {
  data: CurriculumVitaeResContent[];
}

const CurriculumVitaePage: NextPage<Props> = (data) => {
  const curriculumVitaes = data.data.map((d) => CurriculumVitae.build(d));

  console.log(curriculumVitaes);
  return (
    <div>
      <Head>
        <title>職務経歴書</title>
      </Head>

      <main>
        <h1>職務経歴書</h1>
      </main>
    </div>
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
