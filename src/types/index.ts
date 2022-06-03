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

export interface SkillData {
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
  startDate: string;
  endDate: string;
  contents: string;
  projects: Project[];
}

export interface YearWork {
  year: number;
  works: Work[];
}

export interface OutputUpdate {
  title: string;
  content: string;
  skills: string[];
}

export interface DevEnv {
  repositoryUrl: string;
  skills: string[];
  content: string;
  beforeUpdates: OutputUpdate[];
}

export interface Output {
  id: string;
  title: string;
  image: Image;
  pageUrl: string;
  startDate: string;
  endDate: string;
  content: string;
  frontEndInfo: DevEnv;
  backEndInfo: DevEnv;
}
