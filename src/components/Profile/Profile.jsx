import React from "react";
import c from "./Profile.module.css";
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = props => {
  return (
    <div>
      <ProfileInfo />
      <Posts />
    </div>
  );
};

export default Profile;
