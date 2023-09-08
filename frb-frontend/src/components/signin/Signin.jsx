import "./signin.css";
import { useState } from "react";
import Modal from "./Modal";

const Signin = () => {
  const [showModal, setShowModal] = useState(false);
  const modalToggler = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

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
          <button onClick={modalToggler} className="signin__btn">
            Register
          </button>
        </div>
        <a className="forgot" href="#">
          <p>forgot your password?</p>
        </a>
      </div>
      {showModal && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default Signin;
