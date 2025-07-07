function titlecaseWord(word: string) {
  return `${word[0].toUpperCase()}${word.slice(1)}`;
}

function titlecase(value: string, exceptions: Record<string, string>): string {
  const words = `${value}`.trim().split(/[\-]/g);

  if (words.length === 1) {
    return exceptions[`${words[0]}`.toLowerCase()] ?? titlecaseWord(words[0]);
  }

  return words
    .map((word) => exceptions[`${word}`.toLowerCase()] ?? titlecaseWord(word))
    .join(" ");
}

export function titleName(name: string) {
  const exceptionMap = {
    m: "Male",
    f: "Female",
  };

  return titlecase(name, exceptionMap);
}
