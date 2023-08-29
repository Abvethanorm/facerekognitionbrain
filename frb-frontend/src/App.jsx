import "./App.css";
import Logo from "./components/logo/Logo";
import Nav from "./components/navigation/Nav";
// import ParticlesBackground from "./components/particles/ParticlesBackground";
import Search from "./components/search/Search";

function App() {
  return (
    <>
      {/* <ParticlesBackground /> */}
      <Nav />
      <Logo />
      <Search />
    </>
  );
}

export default App;
