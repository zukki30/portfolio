import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Work } from "@/types";
import WorkItem from "@/components/Works/WorkItem";

export default {
  title: "compoents/Works/WorkItem",
  component: WorkItem,
  argTypes: {},
} as ComponentMeta<typeof WorkItem>;

const Template: ComponentStory<typeof WorkItem> = (args) => <WorkItem {...args} />;

const project = {
  title: "プロジェクトタイトル",
  siteUrl: "https://www.google.com/?hl=ja",
  startDate: "2021-07-31T15:00:00.000Z",
  endDate: "2021-09-29T15:00:00.000Z",
  experiences: ["スクラム", "テスト", "リファクタリング", "コードレビュー", "チームリーダー", "実装", "モック開発"],
  typeOfOccupation: ["フロントエンド"],
  numberOfTeams: 5,
  skills: [
    "Vue.js",
    "HTML",
    "CSS",
    "Sass/SCSS",
    "JavaScript",
    "TypeScript",
    "Storybook",
    "Jest",
    "Cypress",
    "Git",
    "Github",
  ],
  content:
    "<p>自社アプリにある検索フォームのUIの変更を行いました。<br>デザイナーさんとともにモックを作成しながら各UIを調整しながら対応を行いました。</p>",
};

export const NotEndDate = Template.bind({});

const work = {
  id: "test1",
  type: "正社員",
  name: "株式会社カイシャメイ",
  startDate: "2018-11-30T15:00:00.000Z",
  endDate: "",
  contents:
    "サンプルテキストサンプルテキスト\nサンプルテキストサンプルテキストサンプルテキストサンプルテキスト\nサンプルテキストサンプルテキスト",
  projects: [project, project],
} as Work;

NotEndDate.args = {
  work,
};

export const ExistEndDate = Template.bind({});

const work2 = {
  id: "test1",
  type: "正社員",
  name: "株式会社カイシャメイ",
  startDate: "2018-11-30T15:00:00.000Z",
  endDate: "2022-11-30T15:00:00.000Z",
  contents:
    "サンプルテキストサンプルテキスト\nサンプルテキストサンプルテキストサンプルテキストサンプルテキスト\nサンプルテキストサンプルテキスト",
  projects: [project, project],
} as Work;

ExistEndDate.args = {
  work: work2,
};

export const SideJobs = Template.bind({});

const work3 = {
  id: "test1",
  type: "副業",
  name: "株式会社カイシャメイ",
  startDate: "2018-11-30T15:00:00.000Z",
  endDate: "2022-11-30T15:00:00.000Z",
  contents:
    "サンプルテキストサンプルテキスト\nサンプルテキストサンプルテキストサンプルテキストサンプルテキスト\nサンプルテキストサンプルテキスト",
  projects: [project, project],
} as Work;

SideJobs.args = {
  work: work3,
};
