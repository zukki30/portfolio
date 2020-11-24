import { ProfileRes } from "@/utils/api";

export class Profile {
  constructor(
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly publishedAt: Date,
    public readonly fullName: string,
    public readonly fullKanaName: string,
    public readonly birthday: Date,
    public readonly finalEducation: string,
    public readonly graduationYear: string,
    public readonly occupation: string,
    public readonly skill: string,
    public readonly future: string,
    public readonly tool: string,
    public readonly useTechnology: string,
    public readonly growth: string,
    public readonly sex: string
  ) {}

  public static build(json: ProfileRes) {
    const fullName = json.last_name + " " + json.first_name;
    const fullKanaName = json.last_kana_name + " " + json.first_kana_name;

    const graduationDate = new Date(json.graduation_year);
    const year = graduationDate.getFullYear();
    const mouth = graduationDate.getMonth() + 1;
    const graduationYear = year + "年" + mouth + "月";

    return new Profile(
      new Date(json.createdAt),
      new Date(json.updatedAt),
      new Date(json.publishedAt),
      fullName,
      fullKanaName,
      new Date(json.birthday),
      json.final_education,
      graduationYear,
      json.occupation,
      json.skill,
      json.future,
      json.tool,
      json.use_technology,
      json.growth,
      json.sex[0]
    );
  }
}
