interface ImageRes {
  url: string;
  height: number;
  width: number;
}

export interface ProfileRes {
  id: string;
  label: string;
  body: string;
  image: ImageRes;
}

interface SkillRes {
  name: string;
  logo: ImageRes;
  skill_starting_years: string;
  years_of_use: number;
}

export interface SkillContentRes {
  id: string;
  label: string;
  body: string;
  image: ImageRes;
  skills: SkillRes[];
}

interface SingleSkill {
  filedId: string;
  name: string;
}

interface ProjectRes {
  fieldId: string;
  title: string;
  site_url: string;
  start_date: string;
  end_date: string;
  experiences: string[];
  type_of_occupation: string;
  number_of_teams: number;
  skills: SingleSkill[];
  content: string;
}

export interface WorkRes {
  id: string;
  business_type: string[];
  company_name: string;
  start_date: string;
  end_date: string;
  work_contents: string;
  projects: ProjectRes[];
}

interface OutputUpdateRes {
  title: string;
  content: string;
  skills: SingleSkill[];
}

interface DevEnvRes {
  repository_url: string;
  skills: SingleSkill[];
  content: string;
  before_updates: OutputUpdateRes[];
}

export interface OutputRes {
  id: string;
  title: string;
  image: ImageRes;
  page_url: string;
  start_date: string;
  end_date: string;
  content: string;
  fe_info: DevEnvRes;
  be_info: DevEnvRes;
}
