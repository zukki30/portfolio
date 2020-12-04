import React from "react";
import Head from "next/head";
import { NextPage } from "next";
import { API_URLS } from "@/const/Api";
import { getApiData, ProfileRes } from "@/utils/api";
import { Profile } from "@/models/Profile";

interface Props {
  data: ProfileRes;
}

const ProfilePage: NextPage<Props> = (data) => {
  const profile = Profile.build(data.data);
  console.log(profile);
  return (
    <div>
      <Head>
        <title>プロフィール</title>
      </Head>

      <main>
        <h1>プロフィール</h1>
      </main>
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await getApiData(API_URLS.PROFILE);

  return {
    props: {
      data: data,
    },
  };
};

export default ProfilePage;
