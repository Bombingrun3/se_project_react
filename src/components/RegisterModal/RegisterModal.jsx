import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

function RegisterModal({ closeModal, buttonText, onRegister, isOpen }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onRegister = ({ email, password, name, avatar: link }) => {};
  };

  useEffect(() => {
    if (isOpen) {
      setName("");
      setEmail("");
      setPassword("");
      setLink("");
    }
  }, [isOpen]);

  return (
    <div className="register-modal">
      <ModalWithForm
        title="Register"
        closeModal={closeModal}
        modalType="register"
        handleSubmit={handleSubmit}
        buttonText={buttonText}
      >
        <div className="modal__input_type_text">
          <label htmlFor="email" className="modal__label">
            Email*{" "}
            <input
              required
              className="modal__input"
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </label>
          <label htmlFor="password" className="modal__label">
            Password*{" "}
            <input
              required
              className="modal__input"
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </label>
          <label htmlFor="Name" className="modal__label">
            Name *{" "}
            <input
              required
              className="modal__input"
              type="text"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </label>
          <label htmlFor="avatar" className="modal__label">
            Avatar URL{" "}
            <input
              className="modal__input"
              type="URL"
              id="avatar"
              placeholder="Avatar URL"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            ></input>
          </label>
        </div>
      </ModalWithForm>
    </div>
  );
}

export default RegisterModal;
