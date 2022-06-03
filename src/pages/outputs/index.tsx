import { useState } from "react";
import gql from "graphql-tag";
import styled from "styled-components";

import type { NextPageWithLayout } from "@/types";
import { urqlClient } from "@/libs/gql-requests";
import { Output } from "@/types";
import { OutputRes } from "@/types/api";

import Layout from "@/components/Layout/Layout";
import PageHead from "@/components/Common/PageHead";
import Modal from "@/components/Elements/Modal";

type OutputProps = {
  outputs: Output[];
};

const Outputs: NextPageWithLayout<OutputProps> = (props) => {
  console.log(props);
  return (
    <div>
      <PageHead title='Outputs' />

      <main>body</main>
    </div>
  );
};

Outputs.useGetLayout = (page) => {
  const open = false;
  const test = () => {};
  const [d, setD] = useState(false);

  return (
    <>
      <Layout>{page}</Layout>

      <Modal open={open} onClose={test}>
        <div>test</div>
      </Modal>
    </>
  );
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

export default Outputs;
