import "./Profile.css";
import SideBar from "../SideBar/SideBar";

function Profile() {
  return (
    <div className="profile">
      <SideBar></SideBar>
      <ClothesSection></ClothesSection>
    </div>
  );
}

export default Profile;
