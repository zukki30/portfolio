import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Project } from "@/types";
import ProjectItem from "@/components/Works/ProjectItem";

export default {
  title: "compoents/Works/ProjectItem",
  component: ProjectItem,
  argTypes: {},
} as ComponentMeta<typeof ProjectItem>;

const Template: ComponentStory<typeof ProjectItem> = (args) => <ProjectItem {...args} />;

export const Default = Template.bind({});

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
} as Project;

Default.args = {
  project,
  type: "正社員",
};

export const SideJobs = Template.bind({});

SideJobs.args = {
  project,
  type: "副業",
};
