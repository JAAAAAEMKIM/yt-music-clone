import { ChangeEventHandler } from "react";
import SearchIcon from "@/assets/search.svg";
import clsx from "clsx";

interface Props {
  value: string;
  placeholder?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
const SearchInput = ({ onChange, placeholder, value }: Props) => {
  return (
    <div
      className={clsx(
        "flex items-center",
        "h-10 w-480px",
        "border border-solid border-white-transparent-15 rounded-lg",
        "bg-white-transparent-15",
        "text-white-transparent-50",
        "cursor-pointer",
      )}
    >
      <span className="px-4 py-2 ">
        <SearchIcon className="w-6 h-6" />
      </span>
      <input
        className="bg-transparent h-10 w-full pr-14"
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default SearchInput;
