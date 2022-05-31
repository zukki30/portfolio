export interface ImageRes {
  url: string;
  width: number;
  height: number;
}

export interface ProfileRes {
  id: string;
  label: string;
  body: string;
  image: ImageRes | null;
}

export interface SkillRes {
  name: string;
  logo: ImageRes | null;
  starting_years: string | null;
  year_of_use: number;
}

export interface SkillContentRes {
  id: string;
  label: string;
  body: string;
  skills: SkillRes[];
}

interface ProjectRes {
  fieldId: string;
  title: string;
  site_url: string;
  start_date: string | null;
  end_date: string | null;
  experiences: string[];
  type_of_occupation: string[];
  number_of_teams: number;
  skills: string[];
  content: string | null;
}

export interface WorkRes {
  id: string;
  type: string;
  name: string;
  start_date: string | null;
  end_date: string | null;
  contents: string | null;
  projects: ProjectRes[];
}
