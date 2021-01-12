import React from "react";
import Head from "next/head";
import { NextPage } from "next";

interface Props {
  description: string;
  image: string;
  url: string;
  title?: string;
}

const PageHead: NextPage<Props> = (data) => {
  const siteName = process.env.SITE_NAME;
  const pageTitle = data.title ? `${data.title} | ${siteName}` : siteName;

  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>{pageTitle}</title>
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={data.description} />
      <meta property="og:type" content="blog" />
      <meta property="og:url" content={data.url} />
      <meta property="og:image" content={"https://placehold.jp/150x150.png"} />
      <meta property="og:site_name" content={pageTitle} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@tcr_jp" />
      <meta name="twitter:url" content={"https://placehold.jp/150x150.png"} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={data.description} />
      <meta name="twitter:image" content={"https://placehold.jp/150x150.png"} />
      <link rel="canonical" href={data.url} />
      <link rel="shortcut icon" href={"https://placehold.jp/150x150.png"} />
      <link rel="apple-touch-icon" href={"https://placehold.jp/150x150.png"} />
    </Head>
  );
};

export default PageHead;
