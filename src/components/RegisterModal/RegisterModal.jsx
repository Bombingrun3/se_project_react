import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { register } from "../../utils/auth";
import "./RegisterModal.css";

function RegisterModal({ closeModal, buttonText, onRegister, activeModal }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Registration data being sent:", {
      email,
      password,
      name,
      avatar: imageUrl,
    });
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
          <label htmlFor="name" className="modal__label">
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
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            ></input>
          </label>
        </div>
      </ModalWithForm>
    </div>
  );
}

export default RegisterModal;
