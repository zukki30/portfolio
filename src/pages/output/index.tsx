import React from "react";
import Head from "next/head";
import { NextPage } from "next";
import { API_URLS } from "@/const/Api";
import { getApiData, OutputRes, OutputResContent } from "@/utils/api";
import { Output } from "@/models/Output";

interface Props {
  data: OutputResContent[];
}

const OutputPage: NextPage<Props> = (data) => {
  const outputs = data.data.map((d) => Output.build(d));

  console.log(outputs);
  return (
    <div>
      <Head>
        <title>アウトプット</title>
      </Head>

      <main>
        <h1>アウトプット</h1>
      </main>
    </div>
  );
};

export const getStaticProps = async () => {
  const data = (await getApiData(API_URLS.OUTPUT)) as OutputRes;

  return {
    props: {
      data: data.contents,
    },
  };
};

export default OutputPage;
