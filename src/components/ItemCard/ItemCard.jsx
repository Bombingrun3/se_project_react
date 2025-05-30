import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
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
            item.likes.includes(currentUser.id)
              ? "card__like-button_liked"
              : "card__like-button"
          }
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            handleCardLike({
              id: item._id,
              isLiked: item.likes.includes(currentUser.id),
            });
          }}
        ></button>
      </div>
      <img className="card__image" src={item.imageUrl} alt={item.name}></img>
    </li>
  );
}

export default ItemCard;
