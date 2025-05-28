import { useState, useContext, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import "./EditProfileModal.css";

function EditProfileModal({ closeModal, activeModal, buttonText }) {
  const { currentUser, updateUser } = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (activeModal === "edit") {
      setName(currentUser.name);
      setImageUrl(currentUser.avatar);
    }
  }, [activeModal, currentUser]);

  const handleSubmit = (event) => {
    event.preventDefault();
    return updateUser({ name, avatar: imageUrl })
      .then(() => {
        closeModal();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="edit-profile-modal">
      <ModalWithForm
        title="Change profile data"
        closeModal={closeModal}
        activeModal={activeModal}
        modalType="edit"
        handleSubmit={handleSubmit}
        buttonText={buttonText}
      >
        <div className="modal__input_type_text">
          <label htmlFor="name" className="modal__label">
            Name *
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
            Avatar *
            <input
              required
              className="modal__input"
              type="Url"
              id="avatar"
              placeholder="Image Url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            ></input>
          </label>
        </div>
      </ModalWithForm>
    </div>
  );
}

export default EditProfileModal;
