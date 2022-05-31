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
