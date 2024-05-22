export const CATEGORY = {
  TO_DO: "TO_DO",
  DOING: "DOING",
  DONE: "DONE",
} as const;

export type CategoryType = (typeof CATEGORY)[keyof typeof CATEGORY];
