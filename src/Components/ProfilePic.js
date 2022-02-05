import React from "react";

function ProfilePic(props) {
  const imageStyle = {
    height: "150px",
    borderRadius: "50%",
    padding: "5px",
    backgroundColor: `${props.color}`
  };

  return (
    <div>
      <img
        style={imageStyle}
        src={props.image}
        alt="profile with their favorite color"
      />
    </div>
  );
}

export default ProfilePic;
