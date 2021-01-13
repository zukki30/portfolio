import { ProfileRes } from "@/utils/api";

export class Profile {
  constructor(
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly publishedAt: Date,
    public readonly fullName: string,
    public readonly fullKanaName: string,
    public readonly birthday: string,
    public readonly address: string,
    public readonly finalEducation: string,
    public readonly graduationYear: string,
    public readonly occupation: string[],
    public readonly skill: string[],
    public readonly future: string,
    public readonly tool: string[],
    public readonly useTechnology: string[],
    public readonly growth: string,
    public readonly sex: string
  ) {}

  public static build(json: ProfileRes) {
    const fullName = json.last_name + " " + json.first_name;
    const fullKanaName = json.last_kana_name + " " + json.first_kana_name;

    const birthdayDate = new Date(json.birthday);
    const birthdayYear = birthdayDate.getFullYear();
    const birthdayMouth = birthdayDate.getMonth() + 1;
    const birthdayDay = birthdayDate.getDate();
    const birthdayForDisplay = `${birthdayYear}年${birthdayMouth}月${birthdayDay}日`;

    const graduationDate = new Date(json.graduation_year);
    const graduationYear = graduationDate.getFullYear();
    const graduationMouth = graduationDate.getMonth() + 1;
    const graduationForDisplay = `${graduationYear}年${graduationMouth}月`;

    return new Profile(
      new Date(json.createdAt),
      new Date(json.updatedAt),
      new Date(json.publishedAt),
      fullName,
      fullKanaName,
      birthdayForDisplay,
      json.address,
      json.final_education,
      graduationForDisplay,
      json.occupation.split(", "),
      json.skill.split(", "),
      json.future.replace(/\n/g, "<br />"),
      json.tool.split(", "),
      json.use_technology.split(", "),
      json.growth,
      json.sex[0]
    );
  }
}
