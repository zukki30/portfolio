import React from "react";
import Head from "next/head";
import { NextPage } from "next";

export interface PageHeadProps {
  description: string;
  title?: string;
}

export const PageHead: NextPage<PageHeadProps> = (data) => {
  const siteName = "";
  const pageTitle = data.title ? `${data.title} | ${siteName}` : siteName;

  return (
    <Head>
      <meta name='robots' content='none' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='description' content={data.description} />
      <title>{pageTitle}</title>
    </Head>
  );
};

export default PageHead;
