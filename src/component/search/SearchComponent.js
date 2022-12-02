import { Search } from "@mui/icons-material";

import React, { useState } from "react";
import "../topbar/topbar.css";
import SearchModal from "./SearchModal";
function SearchComponent() {
  const [query, setQuery] = useState("");
  const [hidden, setHidden] = useState(true);

  const changeQuery = (e) => {
    setQuery(e.target.value.toLowerCase());
    if (query.length >= 0) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  };

  return (
    <div className="searchbar">
      <Search className="searchIcon" />
      <input
        placeholder="Search for friend, post or video"
        className="searchInput"
        onChange={changeQuery}
        onClick={() => setHidden(!hidden)}
      />
      {!hidden ? (
        <SearchModal query={query} setHidden={setHidden}></SearchModal>
      ) : (
        ""
      )}
    </div>
  );
}

export default SearchComponent;
