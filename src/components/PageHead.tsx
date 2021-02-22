import React from "react";
import Head from "next/head";
import { NextPage } from "next";
import { SITE_NAME } from "@/const/site";

export interface Props {
  description: string;
  title?: string;
}

export const PageHead: NextPage<Props> = (data) => {
  const siteName = SITE_NAME;
  const pageTitle = data.title ? `${data.title} | ${siteName}` : siteName;

  return (
    <Head>
      <meta name="robots" content="none" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={data.description} />
      <title>{pageTitle}</title>
    </Head>
  );
};

export default PageHead;
