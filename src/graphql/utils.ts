import { WorkRes } from "@/graphql/api";

export const buildWork = (work: WorkRes) => {
  return {
    id: work.id,
    type: work.business_type[0],
    name: work.company_name,
    start_date: work.start_date,
    end_date: work.end_date,
    contents: work.work_contents,
    projects: work.projects.map((p) => {
      return {
        title: p.title,
        site_url: p.site_url,
        start_date: p.start_date,
        end_date: p.end_date,
        experiences: p.experiences,
        type_of_occupation: p.type_of_occupation,
        number_of_teams: p.number_of_teams,
        skills: p.skills.map((s) => s.name),
        content: p.content,
      };
    }),
  };
};
