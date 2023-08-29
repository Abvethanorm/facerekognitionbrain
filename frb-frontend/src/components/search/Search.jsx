import { useState } from "react";

import "./search.css";

function Search({ setImgUrl }) {
  const [searchImgUrl, setsearchImgUrl] = useState("");
  const handleSearch = (e) => {
    const inputValue = e.target.value;
    setImgUrl(inputValue);
  };

  const flockEm = () => {
    const PAT = "a7a9dd5f386e4fa3a93ee1694c9c2fb5";
    const USER_ID = "epj7ya83au2p";
    const APP_ID = "my-first-application-fboe3e";
    const MODEL_ID = "face-detection";

    const MODEL_VERSION_ID = "6dc7e46bc9124c5c8824be4822abe105";

    const IMAGE_URL = "https://samples.clarifai.com/metro-north.jpg";
    const raw = JSON.stringify({
      user_app_id: {
        user_id: USER_ID,

        app_id: APP_ID,
      },

      inputs: [
        {
          data: {
            image: {
              url: IMAGE_URL,
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: "POST",

      headers: {
        Accept: "application/json",

        Authorization: "Key " + PAT,
      },

      body: raw,
    };

    fetch(
      { IMAGE_URL } + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs",
      requestOptions
    )
      .then((response) => response.text())

      .then((result) => console.log(result))

      .catch((error) => console.log("error", error));

    setImgUrl(inputValue);
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
        <button onClick={flockEm} className="search__btn">
          Flock em
        </button>
      </div>
    </div>
  );
}

export default Search;
