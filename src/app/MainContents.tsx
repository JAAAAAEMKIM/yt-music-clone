import CategoryList from "@/components/category-list/CategoryList";
import { useCategoriesQuery } from "@/queries/useCategoriesQuery";

const MainContents = () => {
  const { data: categories } = useCategoriesQuery();

  return <CategoryList categories={categories} />;
};

export default MainContents;
