import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import notLiked from "../../assets/like-button/default-like.svg";
import Liked from "../../assets/like-button/filled-like.svg";
import "./ItemCard.css";

function ItemCard({ item, onCardClick, handleCardLike }) {
  const { currentUser } = useContext(CurrentUserContext);

  const handleCardClick = () => {
    onCardClick(item);
  };
  return (
    <li className="card" onClick={handleCardClick}>
      <div className="card__header-container">
        <h2 className="card__title">{item.name}</h2>
        <button
          className={
            !currentUser ? "card__like-button_hidden" : "card__like-button"
          }
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            handleCardLike({
              id: item._id,
              isLiked: currentUser && item.likes.includes(currentUser._id),
            });
          }}
        >
          <img
            src={
              currentUser && item.likes.includes(currentUser._id)
                ? Liked
                : notLiked
            }
          ></img>
        </button>
      </div>
      <img className="card__image" src={item.imageUrl} alt={item.name}></img>
    </li>
  );
}

export default ItemCard;
