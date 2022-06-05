export function classNames(
  className: string,
  propClassName: string | undefined
): string {
  let result = className;

  if (propClassName !== undefined) {
    result = result + " " + propClassName;
  }

  return result;
}
