import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({
  handleAddClick,
  onCardClick,
  clothingItems,
  handleDeleteCard,
  handleEditProfileClick,
  handleCardLike,
}) {
  return (
    <div className="profile">
      <SideBar
        className="profile__sidebar"
        handleEditProfileClick={handleEditProfileClick}
      ></SideBar>
      <ClothesSection
        className="profile__clothes-section"
        handleAddClick={handleAddClick}
        onCardClick={onCardClick}
        clothingItems={clothingItems}
        handleDeleteCard={handleDeleteCard}
        handleCardLike={handleCardLike}
      ></ClothesSection>
    </div>
  );
}

export default Profile;
