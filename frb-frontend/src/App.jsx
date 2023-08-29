import React, { useState } from "react";
import "./App.css";
import FaceRecon from "./components/facerecon/FaceRecon";
import Logo from "./components/logo/Logo";
import Nav from "./components/navigation/Nav";
import Search from "./components/search/Search";

function App() {
  const [imgUrl, setImgUrl] = useState(""); // Manage imgUrl state

  return (
    <>
      <Nav />
      <Logo />
      <Search setImgUrl={setImgUrl} /> {/* Pass setImgUrl as a prop */}
      {imgUrl && <FaceRecon imgUrl={imgUrl} />} {/* Pass imgUrl as a prop */}
    </>
  );
}

export default App;
