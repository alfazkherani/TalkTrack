import { strings, StringKey } from "@/constants/i18n/en";

export const getString = (path: StringKey): string => {
  const value = path
    .split(".")
    .reduce<unknown>(
      (obj, key) =>
        typeof obj === "object" && obj !== null
          ? (obj as Record<string, unknown>)[key]
          : undefined,
      strings
    );

  if (typeof value !== "string") {
    throw new Error(`Invalid path: ${path}`);
  }
  return value;
};
