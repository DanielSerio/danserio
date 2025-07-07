export type NestedArray<T> = Array<T | NestedArray<T>>;

/**
 * Returns a `className` string.
 * @param classNames - The `classNames` parameter is an array that can contain nested arrays of
 * strings, null, false, or undefined values
 * @returns If there are valid string values in the nested array of classNames, the function will
 * return a single string with these valid class names joined by a space
 */
export function getClassName(...classNames: NestedArray<string | null | false | undefined>) {
  const strings = classNames.flat().filter((value) => typeof value === 'string' && value.trim().length > 0);

  if (strings.length > 0) {
    return strings.join(' ');
  }

  return undefined;
}