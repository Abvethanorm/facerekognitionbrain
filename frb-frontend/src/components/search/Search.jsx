//import React, { useState, useContext } from "react";
// import { imgUrlContext } from "../../App";
import deepai from "deepai";

import "./search.css";

function Search() {
  // const [inputValue, setInputValue] = useState("");
  // const [imgUrl, setImgUrl] = useContext(imgUrlContext);
  // const handleSearch = (e) => {
  //   const searchInput = e.target.value;
  //   setInputValue(searchInput);
  // };

  // const flockEm = async () => {
  //   deepai.setApiKey("9c12eef8-da61-40c5-ad94-0ce775da558a");

  //   try {
  //     let resp = await deepai.callStandardApi("text2img", {
  //       text: inputValue,
  //     });
  //     setImgUrl(resp.output_url);
  //     console.log(resp);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div className="search__container container">
      <h3 className="search__title">Who we trackin?</h3>
      <div className="input__container container">
        <input
          // onChange={handleSearch}
          className="search__input"
          type="text"
          placeholder="  run ricky yeah we runnin !"
        />
        <button
          // onClick={flockEm}
          className="search__btn"
        >
          Flock em
        </button>
      </div>
    </div>
  );
}

export default Search;
