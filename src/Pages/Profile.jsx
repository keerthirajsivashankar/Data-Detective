import React from "react";
import Profile from "./profile.jpg";
const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="profile1">
        <h2>User Profile</h2>
        <img className="profilephoto" src={Profile} alt="" />
        <h2>Name : Keerthi Raj S</h2>
        <h2>Gender : Male</h2>
        <h2>D.O.B : 14/4/2004</h2>
      </div>
    </div>
  );
};

export default ProfilePage;
