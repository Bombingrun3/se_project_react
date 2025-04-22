import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({
  handleAddClick,
  onCardClick,
  defaultClothingItems,
  handleDeleteCard,
}) {
  return (
    <div className="profile">
      <SideBar className="profile__sidebar"></SideBar>
      <ClothesSection
        className="profile__clothes-section"
        handleAddClick={handleAddClick}
        onCardClick={onCardClick}
        defaultClothingItems={defaultClothingItems}
        handleDeleteCard={handleDeleteCard}
      ></ClothesSection>
    </div>
  );
}

export default Profile;
