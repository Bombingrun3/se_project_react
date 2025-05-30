import { useContext } from "react";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ClothesSection({
  clothingItems,
  handleAddClick,
  onCardClick,
  handleCardLike,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <section className="clothes-section">
      <div className="clothes-section__header">
        <h2 className="clothes-section__title">Your Items</h2>
        <button
          className="clothes-section__add-button"
          type="button"
          onClick={handleAddClick}
        >
          + Add new
        </button>
      </div>

      <ul className="clothes-section__gallery">
        {clothingItems
          .filter((item) => {
            return currentUser && currentUser._id === item.owner;
          })

          .map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={onCardClick}
                handleCardLike={handleCardLike}
              />
            );
          })}
      </ul>
    </section>
  );
}

export default ClothesSection;
