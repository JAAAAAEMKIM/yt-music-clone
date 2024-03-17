import { Item } from "./Item";

export const CATEGORY_TYPE = {
  LA: "listen-again",
  FF: "forgotten-favorites",
  QP: "quick-picks",
} as const;
export type CATEGORY_TYPE = (typeof CATEGORY_TYPE)[keyof typeof CATEGORY_TYPE];

export type Category = {
  type: CATEGORY_TYPE;
  id: number;
  label: string;
};

export type CategoryList = {
  category: Category;
  items: Item[];
};
