import { useContext } from "react";
import { imgUrlContext } from "../../App";
import "./recon.css";

const FaceRecon = () => {
  const [imgUrl] = useContext(imgUrlContext);
  return (
    <div className="recon__container container">
      <img id="inputimage" src={imgUrl} alt="Face Recognition" />
    </div>
  );
};

export default FaceRecon;
