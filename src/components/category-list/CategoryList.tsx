import { CATEGORY_TYPE, CategoryList, type Category } from "@/models/Category";

const CATEGORY_COMPONENT_MAP = {
  [CATEGORY_TYPE.LA]: ({ label }) => <div>LA {label}</div>,
  [CATEGORY_TYPE.FF]: ({ label }) => <div>FF {label}</div>,
  [CATEGORY_TYPE.QP]: ({ label }) => <div>QP {label}</div>,
};

interface CategoryListProps {
  categories: CategoryList[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <div>
      {categories.map(({ category }) => {
        const Component = CATEGORY_COMPONENT_MAP[category.type];
        return <Component label={category.label} />;
      })}
    </div>
  );
};

export default CategoryList;
