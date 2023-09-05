import "./search.css";
import { useContext, useState } from "react";
import { imgUrlContext } from "../../App";

function Search() {
  const [imgUrl, setImgUrl] = useContext(imgUrlContext);
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (e) => {
    const searchInput = e.target.value;
    setInputValue(searchInput);
  };

  const flockEm = () => {
    const findFace = (response) => {
      response
        .json()
        .then((data) => {
          console.log(data); // Log the entire JSON response
          if (
            data.outputs &&
            data.outputs.length > 0 &&
            data.outputs[0].data.regions
          ) {
            const clarifaiFace =
              data.outputs[0].data.regions[0].region_info.bounding_box;
            const image = document.getElementById("inputimage");
            const width = Number(image.width);
            const height = Number(image.height);
            console.log(width, height);
          } else {
            console.log("No face data found in the response.");
          }
        })
        .catch((error) => console.log("Error parsing JSON response:", error));
    };

    const PAT = "a7a9dd5f386e4fa3a93ee1694c9c2fb5";
    const USER_ID = "epj7ya83au2p";
    const APP_ID = "my-first-application-fboe3e";
    const MODEL_ID = "face-detection";
    const MODEL_VERSION_ID = "6dc7e46bc9124c5c8824be4822abe105";

    // Change the way you define IMAGE_URL
    const IMAGE_URL = imgUrl; // Remove the curly braces

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
        "Content-Type": "application/json", // Change "Accept" to "Content-Type"
        Authorization: "Key " + PAT,
      },
      body: raw,
    };

    // Correct the URL format
    fetch(
      `https://api.clarifai.com/v2/models/${MODEL_ID}/versions/${MODEL_VERSION_ID}/outputs`,
      requestOptions
    )
      .then((response) => findFace(response))
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
