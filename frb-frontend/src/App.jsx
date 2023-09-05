import "./App.css";
import FaceRecon from "./components/facerecon/FaceRecon";
import Logo from "./components/logo/Logo";
import Nav from "./components/navigation/Nav";
import Search from "./components/search/Search";
import { createContext, useState } from "react";
export const imgUrlContext = createContext();
export const faceBox = createContext();

function App() {
  const [imgUrl, setImgUrl] = useState("");
  const [box, setBox] = useState({});
  return (
    <>
      <imgUrlContext.Provider value={[imgUrl, setImgUrl]}>
        <Nav />
        <Logo />
        <Search />
        <FaceRecon />
      </imgUrlContext.Provider>
    </>
  );
}

export default App;
