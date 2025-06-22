import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

function RegisterModal({
  closeModal,
  buttonText,
  onRegister,
  activeModal,
  switchToLogin,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    onRegister({ email, password, name, avatar: imageUrl });
  };

  const modalType = "register";

  useEffect(() => {
    if (activeModal === modalType) {
      setName("");
      setEmail("");
      setPassword("");
      setImageUrl("");
    }
  }, [activeModal]);

  return (
    <div className="register-modal">
      <ModalWithForm
        title="Register"
        closeModal={closeModal}
        activeModal={activeModal}
        modalType="register"
        handleSubmit={handleSubmit}
        buttonText={buttonText}
      >
        <div className="modal__input_type_text">
          <label className="modal__label">
            Email*
            <input
              required
              className="modal__input"
              type="email"
              id="register-email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </label>
          <label className="modal__label">
            Password*
            <input
              required
              className="modal__input"
              type="password"
              id="register-password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </label>
          <label className="modal__label">
            Name *
            <input
              required
              className="modal__input"
              type="text"
              id="register-name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </label>
          <label className="modal__label">
            Avatar URL
            <input
              className="modal__input"
              type="url"
              id="register-avatar"
              placeholder="Avatar URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            ></input>
          </label>
        </div>
        <button
          className="modal__button_alternate"
          type="button"
          onClick={switchToLogin}
        >
          or Log in
        </button>
      </ModalWithForm>
    </div>
  );
}

export default RegisterModal;
