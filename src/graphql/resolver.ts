import axios from "axios";
import { ProfileRes, SkillContentRes, WorkRes, OutputRes } from "@/graphql/api";

const axiosOption = {
  headers: { "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY as string },
};

const getApi = async (url: string) => {
  return await axios.get(`${process.env.MICROCMS_API_URL}/${url}`, axiosOption);
};

const worksApi = "works";
const outputApi = "output";
const profileApi = "profile";

export const resolvers = {
  Query: {
    getProfiles: async () => {
      try {
        const response = await getApi(profileApi);
        const profiles = response.data.contents as ProfileRes[];

        return profiles.map((profile) => {
          return {
            id: profile.id,
            label: profile.label,
            body: profile.body,
            image: profile.image,
          };
        });
      } catch (error) {
        throw error;
      }
    },
    getProfile: async (_: {}, args: { id: string }) => {
      try {
        const response = await getApi(`${profileApi}/${args.id}`);
        const profile = response.data as ProfileRes;

        return {
          id: profile.id,
          label: profile.label,
          body: profile.body,
          image: profile.image,
        };
      } catch (error) {
        throw error;
      }
    },
    getSkill: async () => {
      try {
        const response = await getApi(`${profileApi}/skills`);
        const skill = response.data as SkillContentRes;

        return {
          id: skill.id,
          label: skill.label,
          body: skill.body,
          skills: skill.skills.map((s) => {
            return {
              name: s.name,
              logo: s.logo,
              starting_years: s.starting_years,
              year_of_use: s.year_of_use,
            };
          }),
        };
      } catch (error) {
        throw error;
      }
    },
    getWorks: async () => {
      try {
        const response = await getApi(worksApi);
        const works = response.data.contents as WorkRes[];

        return works.map((work) => {
          return {
            id: work.id,
            type: work.business_type[0],
            name: work.company_name,
            start_date: work.start_date,
            end_date: work.end_date,
            contents: work.contents,
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
        });
      } catch (error) {
        throw error;
      }
    },
    getWork: async (_: {}, args: { id: string }) => {
      try {
        const response = await getApi(`${worksApi}/${args.id}`);
        const work = response.data as WorkRes;

        return {
          id: work.id,
          type: work.business_type[0],
          name: work.company_name,
          start_date: work.start_date,
          end_date: work.end_date,
          contents: work.contents,
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
      } catch (error) {
        throw error;
      }
    },
    getOutputs: async () => {
      try {
        const response = await getApi(outputApi);
        const outputs = response.data.contents as OutputRes[];

        return outputs.map((output) => {
          const { fe_info, be_info } = output;

          return {
            id: output.id,
            title: output.title,
            image: output.image,
            page_url: output.page_url,
            start_date: output.start_date,
            end_date: output.end_date,
            content: output.content,
            front_end_info: {
              repository_url: fe_info.repository_url || "",
              skills: fe_info.skills.map((s) => s.name),
              content: fe_info.content || "",
              before_updates:
                fe_info.before_updates !== null
                  ? fe_info.before_updates.map((u) => {
                      return {
                        title: u.title,
                        content: u.content,
                        skills: u.skills.map((s) => s.name),
                      };
                    })
                  : [],
            },
            back_end_info: {
              repository_url: be_info.repository_url || "",
              skills: be_info.skills.map((s) => s.name),
              content: be_info.content || "",
              before_updates:
                be_info.before_updates !== null
                  ? be_info.before_updates.map((u) => {
                      return {
                        title: u.title,
                        content: u.content,
                        skills: u.skills.map((s) => s.name),
                      };
                    })
                  : [],
            },
          };
        });
      } catch (error) {
        throw error;
      }
    },
    getOutput: async (_: {}, args: { id: string }) => {
      try {
        const response = await getApi(`${outputApi}/${args.id}`);
        const output = response.data as OutputRes;
        const { fe_info, be_info } = output;

        return {
          id: output.id,
          title: output.title,
          image: output.image,
          page_url: output.page_url,
          start_date: output.start_date,
          end_date: output.end_date,
          content: output.content,
          front_end_info: {
            repository_url: fe_info.repository_url || "",
            skills: fe_info.skills.map((s) => s.name),
            content: fe_info.content || "",
            before_updates:
              fe_info.before_updates !== null
                ? fe_info.before_updates.map((u) => {
                    return {
                      title: u.title,
                      content: u.content,
                      skills: u.skills.map((s) => s.name),
                    };
                  })
                : [],
          },
          back_end_info: {
            repository_url: be_info.repository_url || "",
            skills: be_info.skills.map((s) => s.name),
            content: be_info.content || "",
            before_updates:
              be_info.before_updates !== null
                ? be_info.before_updates.map((u) => {
                    return {
                      title: u.title,
                      content: u.content,
                      skills: u.skills.map((s) => s.name),
                    };
                  })
                : [],
          },
        };
      } catch (error) {
        throw error;
      }
    },
  },
};
