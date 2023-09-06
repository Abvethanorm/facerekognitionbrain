import "./App.css";
// import FaceRecon from "./components/facerecon/FaceRecon";
import Logo from "./components/logo/Logo";
import Nav from "./components/navigation/Nav";
import Search from "./components/search/Search";
// import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./components/signin/Signin";
import Profile from "./components/profile/Profile";
import Lottie from "lottie-react";
import animationData from "./assets/background.json";

// export const imgUrlContext = createContext();

function App() {
  // const [imgUrl, setImgUrl] = useState("");

  return (
    <>
      <BrowserRouter>
        <div className="background ">
          <Lottie animationData={animationData} />
        </div>
        <div className="navigation container">
          <Nav />
          <Logo />
        </div>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/imagemaker" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// TODO LIST
// COMBINE FACE RECON AND SEARCH FIX ANY STATE ISSUES
// CREATE LOGIN STATE
// BACKGROUND ANIMATION
// FINISH PROFILE PAGE
// CREATE REGISTER PAGE OR MODAL
// CREATE GOOGLE LOGIN
// INTERGRATE STRIPE
// HOOK UP TO BACKEND
// MAKE LOGO
// MAKE RESPONSIVE
