import { NextPage } from "next";
import gql from "graphql-tag";
import styled from "styled-components";
import { RecoilRoot, useRecoilState } from "recoil";

import type { NextPageWithLayout } from "@/types";
import { urqlClient } from "@/libs/gql-requests";
import { Output } from "@/types";
import { OutputRes } from "@/types/api";
import { outputsState, OutputStateType } from "@/store/outputs";
import { FixedSizes, ContentSizes, VariableSizes } from "@/consts/size";
import { Router } from "@/consts/router";

import Layout from "@/components/Layout/Layout";
import PageHead from "@/components/Common/PageHead";
import Modal from "@/components/Elements/Modal";
import Title from "@/components/Elements/Title";
import ScrollReveal from "@/components/Elements/ScrollReveal";
import OutputItem from "@/components/Output/OutputItem";
import OutputDetailItem from "@/components/OutputDetail/OutputDetailItem";

type OutputProps = {
  outputs: Output[];
};

const OutputsContainer = styled.div`
  padding-top: ${FixedSizes[64]};
`;

const OutputsBody = styled.div`
  margin: ${FixedSizes[64]} auto 0;
  max-width: ${ContentSizes.xl};
`;

const OutputsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${FixedSizes[24]};

  > * {
    width: calc(${VariableSizes["1/3"]} - ${FixedSizes[16]});
  }
`;

const defaultDealy = 100;

const Outputs: NextPage<OutputProps> = (props) => {
  const outputs = props.outputs;
  const route = Router.Output;
  const [output, setOutput] = useRecoilState(outputsState);
  const handleClick = (id: string) => {
    const result: OutputStateType = {
      showModal: true,
      currentOutput: outputs.find((o) => o.id === id) || null,
    };

    setOutput(result);
  };

  return (
    <>
      <PageHead title='Outputs' />

      <OutputsContainer>
        <ScrollReveal delay={defaultDealy} move='top'>
          <Title label={route.id} subLabel={route.name} color='output' />
        </ScrollReveal>

        <OutputsBody>
          {outputs.length > 0 && (
            <OutputsContent>
              {outputs.map((o, i) => (
                <div key={o.id}>
                  <ScrollReveal delay={defaultDealy * i} move='bottom'>
                    <OutputItem output={o} onClick={handleClick} />
                  </ScrollReveal>
                </div>
              ))}
            </OutputsContent>
          )}
        </OutputsBody>
      </OutputsContainer>
    </>
  );
};

const OutputsPage: NextPageWithLayout<OutputProps> = (props) => {
  const [output, setOutput] = useRecoilState(outputsState);
  const handleClose = () => {
    const result: OutputStateType = {
      showModal: false,
      currentOutput: null,
    };

    setOutput(result);
  };

  return (
    <>
      <Layout>
        <Outputs {...props} />
      </Layout>

      <Modal open={output.showModal} onClose={handleClose}>
        <OutputDetailItem output={output.currentOutput!} onClose={handleClose} />
      </Modal>
    </>
  );
};

OutputsPage.useGetLayout = (page) => {
  return <RecoilRoot>{page}</RecoilRoot>;
};

export const getServerSideProps = async () => {
  try {
    const client = await urqlClient();

    // 変数なしでGraphQL呼び出し
    const postsQuery = gql`
      query {
        getOutputs {
          id
          title
          image {
            url
            width
            height
          }
          page_url
          start_date
          end_date
          content
          front_end_info {
            repository_url
            skills
            content
            before_updates {
              title
              content
              skills
            }
          }
          back_end_info {
            repository_url
            skills
            content
            before_updates {
              title
              content
              skills
            }
          }
        }
      }
    `;
    const result = await client.query(postsQuery, {}).toPromise();
    const outputs = result.data.getOutputs as OutputRes[];

    const fetchOutputs = outputs.map((o) => {
      const { front_end_info, back_end_info } = o;

      return {
        id: o.id,
        title: o.title,
        image: o.image,
        pageUrl: o.page_url,
        startDate: o.start_date || "",
        endDate: o.end_date || "",
        content: o.content,
        frontEndInfo: {
          repositoryUrl: front_end_info.repository_url,
          skills: front_end_info.skills,
          content: front_end_info.content,
          beforeUpdates: front_end_info.before_updates,
        },
        backEndInfo: {
          repositoryUrl: back_end_info.repository_url,
          skills: back_end_info.skills,
          content: back_end_info.content,
          beforeUpdates: back_end_info.before_updates,
        },
      } as Output;
    });

    return {
      props: {
        outputs: fetchOutputs,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};

export default OutputsPage;
