import React from "react";
import Head from "next/head";
import { NextPage } from "next";

export interface PageHeadProps {
  description?: string;
  title?: string;
}

export const PageHead: NextPage<PageHeadProps> = (props) => {
  const siteName = "Zukki portfolio";
  const pageTitle = props.title ? `${props.title} | ${siteName}` : siteName;

  return (
    <Head>
      <meta name='robots' content='none' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='description' content={props.description || ""} />
      <title>{pageTitle}</title>
    </Head>
  );
};

export default PageHead;
