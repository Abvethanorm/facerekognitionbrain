import "./logo.css";
import Lottie from "lottie-react";
import animationData from "../../assets/logo.json";

function Logo() {
  return (
    <div className="logo__container ">
      <Lottie animationData={animationData} style={{ width: 250 }} />
    </div>
  );
}

export default Logo;
