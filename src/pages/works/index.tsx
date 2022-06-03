import type { NextPage } from "next";
import Head from "next/head";
import gql from "graphql-tag";

import { urqlClient } from "@/libs/gql-requests";
import { YearWork, Work, Project } from "@/types";
import { YearWorkRes } from "@/types/api";

type WorksProps = {
  works: YearWork[];
};

const Works: NextPage<WorksProps> = (props) => {
  console.log(props);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
      </Head>

      <main>body</main>
    </div>
  );
};

export const getServerSideProps = async () => {
  try {
    const client = await urqlClient();

    // 変数なしでGraphQL呼び出し
    const postsQuery = gql`
      query {
        getWorks {
          year
          works {
            id
            type
            name
            start_date
            end_date
            contents
            projects {
              title
              site_url
              start_date
              end_date
              experiences
              type_of_occupation
              number_of_teams
              skills
              content
            }
          }
        }
      }
    `;
    const result = await client.query(postsQuery, {}).toPromise();
    const works = result.data.getWorks as YearWorkRes[];
    const fetchWorks = works.map((data) => {
      const { year, works } = data;
      const updateWorks = works.map((w) => {
        const projects = w.projects;

        return {
          id: w.id,
          type: w.type,
          name: w.name,
          startDate: w.start_date || "",
          endDate: w.end_date || "",
          contents: w.contents || "",
          projects: projects.map((p) => {
            return {
              title: p.title,
              siteUrl: p.site_url,
              startDate: p.start_date || "",
              endDate: p.end_date || "",
              experiences: p.experiences,
              typeOfOccupation: p.type_of_occupation,
              numberOfTeams: p.number_of_teams || 1,
              skills: p.skills,
              content: p.content,
            } as Project;
          }),
        };
      });

      return {
        year,
        works: updateWorks,
      };
    });

    return {
      props: {
        works: fetchWorks,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};

export default Works;
