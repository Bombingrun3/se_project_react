import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({
  handleAddClick,
  onCardClick,
  clothingItems,
  handleDeleteCard,
  currentUser,
  handleLogout,
  firstLetter,
}) {
  return (
    <div className="profile">
      <SideBar
        className="profile__sidebar"
        currentUser={currentUser}
        firstLetter={firstLetter}
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
