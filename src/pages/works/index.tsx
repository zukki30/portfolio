import gql from "graphql-tag";
import styled from "styled-components";

import type { NextPageWithLayout } from "@/types";
import { urqlClient } from "@/libs/gql-requests";
import { YearWork, Project } from "@/types";
import { YearWorkRes } from "@/types/api";
import { Router } from "@/consts/router";
import { SlateColors, TealColors, EmeraldColors, WhiteColor } from "@/consts/color";
import { FixedSizes, ContentSizes, VariableSizes } from "@/consts/size";

import Layout from "@/components/Layout/Layout";
import PageHead from "@/components/Common/PageHead";
import Title from "@/components/Elements/Title";
import WorkItem from "@/components/Works/WorkItem";

type WorksProps = {
  works: YearWork[];
};

const WorksContainer = styled.div`
  padding-top: ${FixedSizes[64]};
`;

const WorksBodyBeforeGradient = `linear-gradient(0deg, ${SlateColors[100]} 0%, ${TealColors[500]} 2%, ${TealColors[500]} 99.8%, ${SlateColors[100]} 100%)`;

const WorksBody = styled.div`
  box-sizing: border-box;
  position: relative;
  padding-bottom: ${FixedSizes[64]};
  margin: ${FixedSizes[64]} auto 0;
  max-width: ${ContentSizes.lg};

  &::before {
    position: absolute;
    top: 0;
    left: ${FixedSizes[32]};
    width: ${FixedSizes[6]};
    height: ${VariableSizes.full};
    background: ${WorksBodyBeforeGradient};
    border-radius: ${FixedSizes[8]};
    content: "";
  }
`;

const WorksYearContent = styled.section`
  &:not(:first-child) {
    padding-top: ${FixedSizes[112]};
  }
`;

const WorksYearTitle = styled.h2`
  position: sticky;
  top: ${FixedSizes[56]};
  padding-top: ${FixedSizes[24]};
  z-index: 1;
`;

const WorksYearTitleInner = styled.span`
  padding: 0 ${FixedSizes[64]};
  display: flex;
  align-items: center;
  height: ${FixedSizes[56]};
  background-color: ${TealColors[500]};
  border-radius: ${FixedSizes[14]};
  color: ${WhiteColor};
`;

const WorksContent = styled.div`
  margin-top: ${FixedSizes[64]};
`;

type WorksItemContainerProps = {
  type: string;
};

const WorksItemContainerBar1 = `linear-gradient(90deg, ${TealColors[500]} 0%, ${TealColors[500]} 100%)`;
const WorksItemContainerBar2 = `linear-gradient(90deg, ${TealColors[500]} 0%, ${EmeraldColors[500]} 100%)`;

const WorksItemContainer = styled.div<WorksItemContainerProps>`
  position: relative;
  padding-right: ${FixedSizes[24]};
  padding-left: ${(props) => (props.type === "正社員" ? FixedSizes[160] : FixedSizes[192])};

  &::before {
    position: absolute;
    top: 0;
    left: ${FixedSizes[32]};
    width: ${(props) => (props.type === "正社員" ? FixedSizes[96] : FixedSizes[128])};
    height: ${FixedSizes[6]};
    background: ${(props) => (props.type === "正社員" ? WorksItemContainerBar1 : WorksItemContainerBar2)};
    content: "";
  }

  &:not(:first-child) {
    margin-top: ${FixedSizes[44]};
  }
`;

const Works: NextPageWithLayout<WorksProps> = (props) => {
  const works = props.works;
  const worksRoute = Router.Works;

  return (
    <>
      <PageHead title='Works' />

      <WorksContainer>
        <Title label={worksRoute.id} subLabel={worksRoute.name} color='works' />

        {works.length > 0 && (
          <WorksBody>
            {works.map((data) => (
              <WorksYearContent key={data.year}>
                <WorksYearTitle>
                  <WorksYearTitleInner>{data.year}年</WorksYearTitleInner>
                </WorksYearTitle>

                {data.works.length > 0 && (
                  <WorksContent>
                    {data.works.map((w) => (
                      <WorksItemContainer key={w.id} type={w.type}>
                        <WorkItem work={w} />
                      </WorksItemContainer>
                    ))}
                  </WorksContent>
                )}
              </WorksYearContent>
            ))}
          </WorksBody>
        )}
      </WorksContainer>
    </>
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
              siteUrl: p.site_url || "",
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
