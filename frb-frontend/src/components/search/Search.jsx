import { useState } from "react";
import deepai from "deepai";
import "./search.css";
import "./recon.css";
import Lottie from "lottie-react";
import animationData from "../../assets/loading.json";

function Search() {
  const [inputValue, setInputValue] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const handleSearch = (e) => {
    const searchInput = e.target.value;
    setInputValue(searchInput);
  };

  const flockEm = async () => {
    deepai.setApiKey("9c12eef8-da61-40c5-ad94-0ce775da558a");

    try {
      setIsLoading(true);
      let resp = await deepai.callStandardApi("text2img", {
        text: inputValue,
      });
      setImgUrl(resp.output_url);
      console.log(resp);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="search__container container">
      {isLoading ? null : (
        <>
          <h3 className="search__title">Who we trackin?</h3>
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
        </>
      )}
      {isLoading ? (
        <div className="loading__container">
          <Lottie animationData={animationData} style={{ width: 400 }} />
          <div className="loading__message__container">
            <h4 className="loading__message">We cookin</h4>
            <span className="loading__dots">.</span>
            <span className="loading__dots">.</span>
            <span className="loading__dots">.</span>
          </div>
        </div>
      ) : imgUrl ? (
        <div>
          <div className="recon__container container">
            <img id="inputimage" src={imgUrl} alt="Face Recognition" />
          </div>
          <div className="recon__btn__container">
            <button className="recon__btn">Download</button>
            <button className="recon__btn">Save</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Search;
