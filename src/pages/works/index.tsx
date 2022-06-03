import gql from "graphql-tag";
import styled from "styled-components";

import type { NextPageWithLayout } from "@/types";
import { urqlClient } from "@/libs/gql-requests";
import { YearWork, Project } from "@/types";
import { YearWorkRes } from "@/types/api";

import Layout from "@/components/Layout/Layout";
import PageHead from "@/components/Common/PageHead";

type WorksProps = {
  works: YearWork[];
};

const Works: NextPageWithLayout<WorksProps> = (props) => {
  console.log(props);

  return (
    <div>
      <PageHead title='Works' />

      <main>body</main>
    </div>
  );
};

Works.useGetLayout = (page) => <Layout>{page}</Layout>;

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
