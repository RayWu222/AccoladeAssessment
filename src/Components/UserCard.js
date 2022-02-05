import React from "react";
import ProfilePic from "./ProfilePic";
import UserAbout from "./UserAbout";
import employeeData from "../employees.json";
import ProfileButton from "./ProfileButton";

function UserCard() {
  const containerStyle = {
    backgroundColor: "#ffffff",
    width: 450,
    marginTop: 20,
    paddingTop: 25,
    paddingBottom: 25
  };

  const nameStyle = {
    margin: 0,
    paddingTop: 15,
    fontSize: "150%",
    fontWeight: 600
  };
  const jobStyle = {
    margin: 0,
    paddingBottom: 15,
    fontWeight: 400
  };

  return (
    <div>
      <div className="userCard-container">
        {employeeData.map((employees) => {
          return (
            <div style={containerStyle}>
              <ProfilePic
                image={employees.image}
                color={employees.favoriteColor}
              ></ProfilePic>

              <div className="employee-name">
                <p style={nameStyle}>
                  <strong>
                    {employees.firstName + " " + employees.lastName}
                  </strong>
                </p>
                <p style={jobStyle}>{employees.jobTitle}</p>
              </div>
              <UserAbout value={employees.about} />
              <ProfileButton
                color={employees.favoriteColor}
                email={employees.email}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserCard;
