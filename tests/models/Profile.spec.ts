import { profileResResult } from "../_helper/test-util";
import { Profile } from "@/models/Profile";

describe("Profile", () => {
  describe("constructor", () => {
    it("Check Profile return", async () => {
      const createdAt = new Date("2020-11-12T00:00:00.699Z");
      const updatedAt = new Date("2020-11-13T00:00:00.699Z");
      const publishedAt = new Date("2020-11-12T00:00:00.699Z");
      const fullName = "フルネーム";
      const fullKanaName = "フルネーム";
      const birthday = "2020年11月6日";
      const address = "東京都";
      const finalEducation = "最終学歴";
      const graduationYear = "2020年11月";
      const occupation = ["職種"];
      const skill = ["スキル"];
      const future = "将来";
      const tool = ["ツール"];
      const useTechnology = ["テクノロジー"];
      const growth = "成長";
      const sex = "性別";

      const result = new Profile(
        createdAt,
        updatedAt,
        publishedAt,
        fullName,
        fullKanaName,
        birthday,
        address,
        finalEducation,
        graduationYear,
        occupation,
        skill,
        future,
        tool,
        useTechnology,
        growth,
        sex
      );

      expect(result.createdAt).toBe(createdAt);
      expect(result.updatedAt).toBe(updatedAt);
      expect(result.publishedAt).toBe(publishedAt);
      expect(result.fullName).toBe(fullName);
      expect(result.fullKanaName).toBe(fullKanaName);
      expect(result.birthday).toBe(birthday);
      expect(result.birthday).toContain("年");
      expect(result.birthday).toContain("月");
      expect(result.birthday).toContain("日");
      expect(result.address).toBe(address);
      expect(result.finalEducation).toBe(finalEducation);
      expect(result.graduationYear).toBe(graduationYear);
      expect(result.graduationYear).toContain("年");
      expect(result.graduationYear).toContain("月");
      expect(result.occupation).toBe(occupation);
      expect(result.skill).toBe(skill);
      expect(result.future).toBe(future);
      expect(result.tool).toBe(tool);
      expect(result.useTechnology).toBe(useTechnology);
      expect(result.growth).toBe(growth);
      expect(result.sex).toBe(sex);
    });
  });

  describe("build", () => {
    it("return Profile to Profile.build", () => {
      const content = profileResResult;
      const result = Profile.build(content);

      const fullName = content.last_name + " " + content.first_name;
      const fullKanaName =
        content.last_kana_name + " " + content.first_kana_name;

      const birthdayDate = new Date(content.birthday);
      const birthdayYear = birthdayDate.getFullYear();
      const birthdayMouth = birthdayDate.getMonth() + 1;
      const birthdayDay = birthdayDate.getDate();
      const birthdayForDisplay = `${birthdayYear}年${birthdayMouth}月${birthdayDay}日`;

      const graduationDate = new Date(content.graduation_year);
      const graduationYear = graduationDate.getFullYear();
      const graduationMouth = graduationDate.getMonth() + 1;
      const graduationForDisplay = `${graduationYear}年${graduationMouth}月`;

      expect(result.createdAt).toEqual(new Date(content.createdAt));
      expect(result.updatedAt).toEqual(new Date(content.updatedAt));
      expect(result.publishedAt).toEqual(new Date(content.publishedAt));
      expect(result.fullName).toBe(fullName);
      expect(result.fullKanaName).toBe(fullKanaName);
      expect(result.birthday).toEqual(birthdayForDisplay);
      expect(result.address).toBe(content.address);
      expect(result.finalEducation).toBe(content.final_education);
      expect(result.graduationYear).toBe(graduationForDisplay);
      expect(result.occupation).toEqual([content.occupation]);
      expect(result.skill).toEqual([content.skill]);
      expect(result.future).toBe(content.future);
      expect(result.tool).toEqual([content.tool]);
      expect(result.useTechnology).toEqual([content.use_technology]);
      expect(result.growth).toBe(content.growth);
      expect(result.sex).toBe(content.sex[0]);
    });
  });
});
