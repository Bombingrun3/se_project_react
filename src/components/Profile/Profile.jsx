import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({
  handleAddClick,
  onCardClick,
  clothingItems,
  handleDeleteCard,
  handleEditProfile,
}) {
  return (
    <div className="profile">
      <SideBar
        className="profile__sidebar"
        handleEditProfile={handleEditProfile}
      ></SideBar>
      <ClothesSection
        className="profile__clothes-section"
        handleAddClick={handleAddClick}
        onCardClick={onCardClick}
        clothingItems={clothingItems}
        handleDeleteCard={handleDeleteCard}
      ></ClothesSection>
    </div>
  );
}

export default Profile;
