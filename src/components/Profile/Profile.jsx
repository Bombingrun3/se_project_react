import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({ handleAddClick, handleCardClick, defaultClothingItems }) {
  return (
    <div className="profile">
      <SideBar className="profile__sidebar"></SideBar>
      <ClothesSection
        className="profile__clothes-section"
        handleAddClick={handleAddClick}
        handleCardClick={handleCardClick}
        defaultClothingItems={defaultClothingItems}
      ></ClothesSection>
    </div>
  );
}

export default Profile;
