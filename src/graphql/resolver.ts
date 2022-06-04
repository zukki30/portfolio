import axios from "axios";
import { ProfileRes, SkillContentRes, WorkRes, OutputRes } from "@/graphql/api";
import { buildWork } from "@/graphql/utils";

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
        const response = await getApi(`${profileApi}?limit=30&orders=createdAt`);
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
              starting_years: s.skill_starting_years,
              year_of_use: s.years_of_use || 0,
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
        const years = works.map((w) => new Date(w.start_date).getFullYear());
        const updateYears = Array.from(new Set(years));

        return updateYears.map((y) => {
          const filterWorks = works.filter((w) => w.start_date.includes(String(y)));

          return {
            year: y,
            works: filterWorks.map(buildWork),
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

        return buildWork(work);
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
