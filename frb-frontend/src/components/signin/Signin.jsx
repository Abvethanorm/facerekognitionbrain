import "./signin.css";

const Signin = () => {
  return (
    <div className="signin__container container">
      <div className="signin__card">
        <h1 className="signin__title">Email</h1>
        <input
          className="signin__input"
          type="text"
          name=""
          id=""
          placeholder=" Email"
        />
        <h1 className="signin__title">Password</h1>
        <input
          className="signin__input"
          type="text"
          name=""
          id=""
          placeholder=" Password"
        />
        <div className="signin__btn__container">
          <button className="signin__btn">SignIn</button>
          <button className="signin__btn">Register</button>
        </div>
        <a className="forgot" href="#">
          <p>forgot your password?</p>
        </a>
      </div>
    </div>
  );
};

export default Signin;
