import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Image {
    url: String
    width: Int
    height: Int
  }

  type Profile {
    id: ID!
    label: String
    body: String
    image: Image
  }

  type Skill {
    name: String
    logo: Image
    starting_years: String
    year_of_use: Int
  }

  type SkillContent {
    id: ID
    label: String
    body: String
    skills: [Skill]
  }

  type Project {
    title: String
    site_url: String
    start_date: String
    end_date: String
    experiences: [String]
    type_of_occupation: [String]
    number_of_teams: Int
    skills: [String]
    content: String
  }

  type Work {
    id: ID!
    type: String
    name: String
    start_date: String
    end_date: String
    contents: String
    projects: [Project]
  }

  type YearWork {
    year: Int
    works: [Work]
  }

  type OutputUpdate {
    title: String
    content: String
    skills: [String]
  }

  type DevEnv {
    repository_url: String
    skills: [String]
    content: String
    before_updates: [OutputUpdate]
  }

  type Output {
    id: ID!
    title: String
    image: Image
    page_url: String
    start_date: String
    end_date: String
    content: String
    front_end_info: DevEnv
    back_end_info: DevEnv
  }

  type Query {
    getProfiles: [Profile]
    getProfile(id: ID!): Profile!
    getSkill: SkillContent!
    getWorks: [YearWork]
    getWork(id: ID!): Work!
    getOutputs: [Output]
    getOutput(id: ID!): Output!
  }
`;
