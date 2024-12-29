import React, { useState } from "react";
import Navbar from "../../component/Navbar/Navbar";
import Navibar from "../../component/Navibar/Navibar";
import "./UpdateProfile.css";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const navigate = useNavigate();

  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    try {
      const updatedProfile = {
        fullname,
        username,
        phoneNumber,
        location,
        profilePicture,
      };

      const userData = JSON.parse(sessionStorage.getItem("userData"));
      const getUserToken = () => {
        console.log(userData);
        return userData ? userData.token : "";
      };

      const formData = new FormData();
      formData.append("fullname", fullname);
      formData.append("username", username);
      formData.append("phoneNumber", phoneNumber);
      formData.append("location", location);
      formData.append("profilePicture", profilePicture);

      const response = await fetch(
        `http://localhost:5000/user/profile/${userData.result.id}/update`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${getUserToken()}`,
          },
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        navigate("/profile/" + data.username);
      } else {
        console.error("Error:", response.statusText);
        // Handle the error as needed
      }
    } catch (error) {
      console.error(error);
      // Handle the error as needed
    }
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  return (
    <div className="UpdateProfileBody">
      <Navbar />
      <Navibar />
      <div className="UpdateProfileForm">
        <h2>Update Profile</h2>
        <form onSubmit={handleUpdateProfile}>
          <div className="profile-picture-container">
            {previewImage ? (
              <img
                src={previewImage}
                alt="Profile Picture"
                className="profile-picture-preview"
              />
            ) : (
              <div className="profile-picture-placeholder"></div>
            )}
          </div>{" "}
          <br /> <br />
          <input
            type="file"
            id="profilePicture"
            accept="image/*"
            onChange={handleProfilePictureChange}
            className="profile-picture-input"
          />
          <br /> <br />
          <input
            type="text"
            placeholder="Full Name"
            id="fullname"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />{" "}
          <br /> <br />
          <input
            type="text"
            placeholder="Username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br /> <br />
          <input
            type="text"
            placeholder="Phone Number"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <br /> <br />
          <input
            type="text"
            placeholder="Location"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />{" "}
          <br /> <br />
          <button id="updateButton" type="submit">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
