import { fetchCategories } from "@/apis/categories";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useCategoriesQuery = () =>
  useSuspenseQuery({ queryKey: ["categories"], queryFn: fetchCategories });
