import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(item);
  };
  return (
    <li className="card" onClick={handleCardClick}>
      <h2 className="card__title">{item.name}</h2>
      <img className="card__image" src={item.imageUrl} alt={item.name}></img>
    </li>
  );
}

export default ItemCard;
