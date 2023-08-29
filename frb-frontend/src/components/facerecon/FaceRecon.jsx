import React from "react";
import "./recon.css";

const FaceRecon = ({ imgUrl }) => {
  return (
    <div className="recon__container container">
      <img src={imgUrl} alt="Face Recognition" />
    </div>
  );
};

export default FaceRecon;
