interface Image {
  url: string;
  width: number;
  height: number;
}

export interface Profile {
  id: string;
  label: string;
  body: string;
  image: Image | null;
}

export interface Skill {
  name: string;
  logo: Image | null;
  startingYears: string;
  yearsOfUse: number;
}

export interface SkillContent {
  id: string;
  label: string;
  body: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  siteUrl: string;
  startDate: string;
  endDate: string;
  experiences: string[];
  typeOfOccupation: string[];
  numberOfTeams: number;
  skills: string[];
  content: string;
}

export interface Work {
  id: string;
  type: string;
  name: string;
  startDte: string;
  endDate: string;
  contents: string;
  projects: Project[];
}

export interface OutputUpdate {
  title: string;
  content: string;
  skills: string[];
}

export interface DevEnv {
  repository_url: string;
  skills: string[];
  content: string;
  before_updates: OutputUpdate[];
}

export interface Output {
  id: string;
  title: string;
  image: Image;
  page_url: string;
  start_date: Date;
  end_date: Date;
  content: string;
  front_end_info: DevEnv;
  back_end_info: DevEnv;
}
