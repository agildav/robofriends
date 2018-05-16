import React from "react";
import "tachyons";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa1">
      <input
        className="bg-lightest-blue ba b--green pa3 mb4"
        type="search"
        placeholder="Search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
