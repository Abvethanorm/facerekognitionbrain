import { useState } from "react";

import "./search.css";
function Search() {
  const [searchInput, setSearchInput] = useState("");
  const handleSearch = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
    console.log(searchInput);
  };
  return (
    <div className="search__container container">
      <h3>Who we trackin?</h3>
      <div className="input__container container">
        <input
          onChange={handleSearch}
          className="search__input"
          type="text"
          placeholder="  run ricky yeah we runnin !"
        />
        <button className="search__btn">Flock em</button>
      </div>
    </div>
  );
}

export default Search;
