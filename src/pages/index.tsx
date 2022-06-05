import gql from "graphql-tag";
import styled from "styled-components";

import type { NextPageWithLayout } from "@/types";
import { urqlClient } from "@/libs/gql-requests";
import { Profile, Skill, SkillData } from "@/types";
import { ProfileRes, SkillContentRes } from "@/types/api";

import { FixedSizes, ContentSizes, VariableSizes } from "@/consts/size";

import Layout from "@/components/Layout/Layout";
import PageHead from "@/components/Common/PageHead";
import ScrollReveal from "@/components/Elements/ScrollReveal";
import ProfileHeader from "@/components/Profile/ProfileHeader";
import ProfileItem from "@/components/Profile/ProfileItem";
import SkillContent from "@/components/Profile/SkillContent";

type IndexProps = {
  profiles: Profile[];
  skill: SkillData;
};

const HomeContainer = styled.div`
  padding-top: ${FixedSizes[112]};
`;

const HomeProfiles = styled.div`
  margin: ${FixedSizes[128]} auto 0;
  max-width: ${ContentSizes.lg};
  display: flex;
  flex-wrap: wrap;
  gap: ${FixedSizes[24]};

  > * {
    width: calc(${VariableSizes["1/3"]} - ${FixedSizes[16]});
  }
`;

const HomeSkillContent = styled.div`
  margin: ${FixedSizes[144]} auto 0;
  max-width: ${ContentSizes.lg};
`;

const defaultDelay = 100;

const Home: NextPageWithLayout<IndexProps> = (props) => {
  const { profiles, skill } = props;

  return (
    <>
      <PageHead />

      <HomeContainer>
        <ScrollReveal delay={defaultDelay} move='top'>
          <ProfileHeader />
        </ScrollReveal>

        {profiles.length > 0 && (
          <HomeProfiles>
            {profiles.map((p, i) => (
              <div key={p.id}>
                <ScrollReveal delay={defaultDelay * i} move='bottom'>
                  <ProfileItem profile={p} />
                </ScrollReveal>
              </div>
            ))}
          </HomeProfiles>
        )}

        {skill.id.length > 0 && (
          <HomeSkillContent>
            <ScrollReveal delay={defaultDelay} move='bottom'>
              <SkillContent data={skill} />
            </ScrollReveal>
          </HomeSkillContent>
        )}
      </HomeContainer>
    </>
  );
};

Home.useGetLayout = (page) => <Layout>{page}</Layout>;

export const getServerSideProps = async () => {
  try {
    const client = await urqlClient();

    // 変数なしでGraphQL呼び出し
    const postsQuery = gql`
      query {
        getProfiles {
          id
          label
          body
          image {
            url
            width
            height
          }
        }
        getSkill {
          id
          label
          body
          skills {
            name
            logo {
              url
              width
              height
            }
            starting_years
            year_of_use
          }
        }
      }
    `;
    const result = await client.query(postsQuery, {}).toPromise();

    const profiles = result.data.getProfiles as ProfileRes[];
    const notSkiillContentProfiles = profiles.filter((p) => p.id !== "skills");
    const fetchProfiles = notSkiillContentProfiles.map((p) => {
      const image = p.image;

      return {
        id: p.id,
        label: p.label,
        body: p.body,
        image:
          image !== null
            ? {
                url: image.url,
                width: image.width,
                height: image.height,
              }
            : null,
      } as Profile;
    });

    const skillContent = result.data.getSkill as SkillContentRes;
    const fetchSkillContent = {
      id: skillContent.id,
      label: skillContent.label,
      body: skillContent.body,
      skills: skillContent.skills.map((s) => {
        const { name, logo, starting_years, year_of_use } = s;

        return {
          name: name,
          logo:
            logo !== null
              ? {
                  url: logo.url,
                  width: logo.width,
                  height: logo.height,
                }
              : null,
          startingYears: starting_years || "",
          yearsOfUse: year_of_use,
        } as Skill;
      }),
    } as SkillData;

    return {
      props: {
        title: "Hello, GraphQL!",
        profiles: fetchProfiles,
        skill: fetchSkillContent,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};

export default Home;
