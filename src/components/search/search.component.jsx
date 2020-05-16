import React, { useState } from "react";

import "./search.styles.css";

const Search = (props) => {
  const [searchField, setSearchField] = useState("");

  const onChangeHandler = (event) => {
    setSearchField(event.target.value);
    props.handleSearch(event.target.value);
  };

  return (
    <div className="search-container">
      <input
        className="search-bar"
        type="search"
        placeholder="search monsters"
        value={searchField}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default Search;
