import "./modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
function Modal({ closeModal }) {
  return (
    <div className="modal__container">
      <div className="modal__text__container">
        <h1 className="modal__tittle">Email</h1>
        <input className="modal__input" type="text" />
        <h1 className="modal__tittle">password</h1>
        <input className="modal__input" type="text" />
        <h1 className="modal__tittle">confirm password</h1>
        <input className="modal__input" type="text" />
        <button className="modal__btn">Sign Up!</button>
      </div>
      <div onClick={closeModal} className="modal__closebtn">
        <FontAwesomeIcon icon={faTimes} />
      </div>
    </div>
  );
}

export default Modal;
