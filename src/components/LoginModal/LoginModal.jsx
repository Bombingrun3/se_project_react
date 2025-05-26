import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { login } from "../../utils/auth";

import "./LoginModal.css";

function LoginModal({ activeModal, closeModal, buttonText }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    closeModal();
    login(email, password);
  };

  useEffect(() => {
    if (activeModal === "login") {
      setName("");
      setLink("");
      setEmail("");
    }
  }, [activeModal]);

  return (
    <div className="login-modal">
      <ModalWithForm
        title="Sign In"
        closeModal={closeModal}
        activeModal={activeModal}
        modalType="login"
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
        </div>
      </ModalWithForm>
    </div>
  );
}

export default LoginModal;
