import React, { useState, useRef } from "react";
import PostFilter from "./PostFilter";
import PostList from "./PostList";

const list = [
  "california",
  "everything",
  "aboveboard",
  "washington",
  "basketball",
  "weathering",
  "characters",
  "literature",
  "contraband",
  "appreciate",
];
const Filter = ({ listItems }) => {
  const [sortedList, setsortedList] = useState(listItems);
  const [checked, setChecked] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const checkboxRef = useRef(null);
  const searchInputRef = useRef(null);

  const sortAndSearch = () => {
    const searchQuery = searchInputRef.current.value.toLowerCase();
    const valueIsChecked = checkboxRef.current.checked;

    let sortedListItems = [...listItems].filter((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setsortedList(
      valueIsChecked
        ? [...sortedListItems].sort((a, b) => a.localeCompare(b))
        : sortedListItems
    );
  };

  const search = () => {
    setSearchInput(searchInputRef.current.value.toLowerCase());
    sortAndSearch();
  };

  const checkboxIsChecked = () => {
    setChecked(checkboxRef.current.checked);
    sortAndSearch();
  };

  const clear = () => {
    setSearchInput("");
    setChecked(false);
    setsortedList(listItems);
  };

  return (
    <div className="filter">
      <h1>Поисковик</h1>
      <PostFilter
        searchInputRef={searchInputRef}
        searchInput={searchInput}
        checkboxRef={checkboxRef}
        checked={checked}
        checkboxIsChecked={checkboxIsChecked}
        search={search}
        clear={clear}
      />
      <PostList sortedList={sortedList} />
    </div>
  );
};

export default Filter;
export { list };
