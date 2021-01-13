import React from "react";
import { NextPage } from "next";
import { API_URLS, API_URL_DATAS } from "@/const/Api";
import { getApiData, ProfileRes } from "@/utils/api";
import { Profile } from "@/models/Profile";

import PageHead from "@/components/PageHead";
import MainHeadline from "@/components/MainHeadline";
import MainContent from "@/components/MainContent";
import BasicList from "@/components/BasicList";

import styles from "@/styles/pages/Profile.module.scss";

interface Props {
  data: ProfileRes;
}

const URL = API_URLS.PROFILE;

const ProfilePage: NextPage<Props> = (data) => {
  const urlData = API_URL_DATAS[URL];
  const profile = Profile.build(data.data);
  console.log(profile);
  return (
    <>
      <PageHead
        description={"説明"}
        image={"画像"}
        url={"URL"}
        title={urlData.name}
      />

      <>
        <MainContent>
          <MainHeadline text={urlData.name} />
        </MainContent>

        <MainContent className={styles.propfile__body}>
          <section className={styles.propfile__item}>
            <h2 className={styles.propfile__title}>名前（フリガナ）</h2>
            <p className={styles.propfile__content}>
              {profile.fullName}（{profile.fullKanaName}）
            </p>
          </section>
          <section className={styles.propfile__item}>
            <h2 className={styles.propfile__title}>生年月日</h2>
            <p className={styles.propfile__content}>{profile.birthday}</p>
          </section>
          <section className={styles.propfile__item}>
            <h2 className={styles.propfile__title}>性別</h2>
            <p className={styles.propfile__content}>{profile.sex}</p>
          </section>
          <section className={styles.propfile__item}>
            <h2 className={styles.propfile__title}>現在住</h2>
            <p className={styles.propfile__content}>{profile.address}</p>
          </section>
          <section className={styles.propfile__item}>
            <h2 className={styles.propfile__title}>最終学歴（卒業年）</h2>
            <p className={styles.propfile__content}>
              {profile.finalEducation}（{profile.graduationYear}）
            </p>
          </section>
          <section className={styles.propfile__item}>
            <h2 className={styles.propfile__title}>職種</h2>
            <div className={styles.propfile__content}>
              <BasicList items={profile.occupation} />
            </div>
          </section>
          <section className={styles.propfile__item}>
            <h2 className={styles.propfile__title}>スキル</h2>
            <div className={styles.propfile__content}>
              <ul className={styles.propfile__skillList}>
                {profile.skill.map((item, index) => (
                  <li key={index} className={styles.propfile__skillListItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section className={styles.propfile__item}>
            <h2 className={styles.propfile__title}>使用経験のあるツール</h2>
            <div className={styles.propfile__content}>
              <BasicList items={profile.tool} />
            </div>
          </section>
          <section className={styles.propfile__item}>
            <h2 className={styles.propfile__title}>やってみたいこと</h2>
            <p
              className={styles.propfile__content}
              dangerouslySetInnerHTML={{ __html: profile.future }}
            />
          </section>
          <section className={styles.propfile__item}>
            <h2 className={styles.propfile__title}>使ってみたい技術</h2>
            <div className={styles.propfile__content}>
              <BasicList items={profile.useTechnology} />
            </div>
          </section>
          <section className={styles.propfile__item}>
            <h2 className={styles.propfile__title}>伸ばしてみたいスキル</h2>
            <p className={styles.propfile__content}>{profile.growth}</p>
          </section>
        </MainContent>
      </>
    </>
  );
};

export const getStaticProps = async () => {
  const data = await getApiData(URL);

  return {
    props: {
      data: data,
    },
  };
};

export default ProfilePage;
