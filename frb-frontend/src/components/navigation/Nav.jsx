import Logo from "../logo/Logo";
import "./nav.css";

function Nav() {
  return (
    <div className="nav__container container ">
      <div className="logo__container">
        <Logo />
      </div>
      <p className="nav__btn">Sign Out</p>
    </div>
  );
}

export default Nav;
