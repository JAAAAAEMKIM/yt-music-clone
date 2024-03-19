"use client";

import SearchInput from "@/components/search-input/SearchInput";
import { ChangeEventHandler, useState } from "react";

const MainSearchInput = () => {
  const [value, setValue] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.currentTarget.value);
  };
  return (
    <SearchInput
      placeholder="Search songs, albums, artists, podcasts"
      value={value}
      onChange={handleChange}
    />
  );
};

export default MainSearchInput;
