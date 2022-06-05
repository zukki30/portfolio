/**
 * 日付の string から 年月を返す
 * @param value
 * @returns
 */
export const getMonthsAndYears = (value: string) => {
  const target = new Date(value);
  const year = target.getFullYear();
  const month = target.getMonth();

  return `${year}年${month + 1}月`;
};
